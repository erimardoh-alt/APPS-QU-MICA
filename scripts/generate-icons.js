import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

// Minimal compliant PNG generator using built-in Node.js zlib
function crc32(buf) {
  let table = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) c = 0xedb88320 ^ (c >>> 1);
      else c = c >>> 1;
    }
    table[n] = c;
  }
  let crc = 0 ^ -1;
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ -1) >>> 0;
}

function makeChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const crcInput = Buffer.concat([typeBuf, data]);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(crcInput), 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function createPwaPng(width, height, isMaskable = false) {
  // Construct RGBA raster buffer with filter byte per scanline
  const stride = 1 + width * 4;
  const rawData = Buffer.alloc(height * stride);

  const cx = width / 2;
  const cy = height / 2;
  const maxR = Math.min(width, height) / 2;

  for (let y = 0; y < height; y++) {
    const rowOffset = y * stride;
    rawData[rowOffset] = 0; // Filter type None

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      const dx = (x - cx) / maxR;
      const dy = (y - cy) / maxR;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Background color: slate-950 / deep teal gradient
      let r = 15;
      let g = 23;
      let b = 42;
      let a = 255;

      // Gradient towards teal at bottom right
      const grad = (x / width + y / height) * 0.5;
      r = Math.round(9 + grad * 10);
      g = Math.round(20 + grad * 40);
      b = Math.round(35 + grad * 30);

      // Outer ring / border
      if (!isMaskable && dist > 0.88 && dist < 0.94) {
        r = 45; g = 212; b = 191; a = 200; // Teal ring
      }

      // Hexagonal molecular boundary
      const hexScale = isMaskable ? 0.65 : 0.75;
      const angle = Math.atan2(dy, dx);
      const hexDist = dist * Math.cos((Math.abs(angle) % (Math.PI / 3)) - Math.PI / 6);
      if (hexDist > hexScale - 0.02 && hexDist < hexScale + 0.02) {
        r = 20; g = 184; b = 166; a = 180;
      }

      // Chemistry flask interior in center
      // Neck: -0.1 < dx < 0.1 and -0.45 < dy < -0.2
      // Body: triangle widening down to dy < 0.35, width < 0.45
      const inNeck = Math.abs(dx) < 0.08 && dy >= -0.45 && dy <= -0.2;
      const inLip = Math.abs(dx) < 0.12 && dy >= -0.48 && dy <= -0.45;
      const flaskSlope = (dy - (-0.2)) * 0.7;
      const inBody = dy > -0.2 && dy < 0.35 && Math.abs(dx) < (0.08 + flaskSlope);

      if (inLip) {
        r = 20; g = 184; b = 166; a = 255;
      } else if (inNeck || inBody) {
        // Liquid glow inside flask
        const liquidLevel = 0.0;
        if (dy > liquidLevel) {
          r = 45; g = 212; b = 191; a = 240; // Bright teal liquid
        } else {
          r = 13; g = 148; b = 136; a = 140; // Glass wall
        }
      }

      // Flask outline glow
      const onFlaskBorder = 
        (inBody && Math.abs(Math.abs(dx) - (0.08 + flaskSlope)) < 0.025) ||
        (inNeck && Math.abs(Math.abs(dx) - 0.08) < 0.02) ||
        (Math.abs(dy - 0.35) < 0.025 && Math.abs(dx) < (0.08 + flaskSlope));

      if (onFlaskBorder) {
        r = 94; g = 234; b = 212; a = 255;
      }

      // Effervescent bubbles inside
      const bubble1 = Math.hypot(dx - 0.0, dy - 0.22) < 0.05;
      const bubble2 = Math.hypot(dx - (-0.12), dy - 0.15) < 0.035;
      const bubble3 = Math.hypot(dx - 0.12, dy - 0.1) < 0.04;
      const bubble4 = Math.hypot(dx - 0.02, dy - (-0.05)) < 0.03;
      if (bubble1 || bubble2 || bubble3 || bubble4) {
        r = 255; g = 255; b = 255; a = 240;
      }

      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = a;
    }
  }

  // PNG Signature
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // Bit depth: 8
  ihdr[9] = 6; // Color type: 6 (RGBA)
  ihdr[10] = 0; // Compression
  ihdr[11] = 0; // Filter
  ihdr[12] = 0; // Interlace

  const ihdrChunk = makeChunk('IHDR', ihdr);

  // IDAT (Deflated rawData)
  const compressed = zlib.deflateSync(rawData, { level: 9 });
  const idatChunk = makeChunk('IDAT', compressed);

  // IEND
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const outDir = path.resolve('public');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. 192x192 PNG
const png192 = createPwaPng(192, 192, false);
fs.writeFileSync(path.join(outDir, 'pwa-192x192.png'), png192);

// 2. 512x512 PNG
const png512 = createPwaPng(512, 512, false);
fs.writeFileSync(path.join(outDir, 'pwa-512x512.png'), png512);

// 3. Maskable 512x512 PNG (safe margin padded)
const pngMaskable = createPwaPng(512, 512, true);
fs.writeFileSync(path.join(outDir, 'pwa-maskable-512x512.png'), pngMaskable);

// 4. Apple Touch Icon 180x180 PNG
const appleIcon = createPwaPng(180, 180, false);
fs.writeFileSync(path.join(outDir, 'apple-touch-icon.png'), appleIcon);

// 5. Favicon (PNG based)
const favicon = createPwaPng(48, 48, false);
fs.writeFileSync(path.join(outDir, 'favicon.ico'), favicon);

console.log('Successfully generated all PWA icons in /public: 192x192, 512x512, maskable, apple-touch-icon, favicon.ico');
