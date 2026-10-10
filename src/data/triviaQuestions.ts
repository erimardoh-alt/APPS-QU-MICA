import { Question } from '../types/trivia';

export const TRIVIA_QUESTIONS: Question[] = [
  // ==========================================
  // NIVEL 1: COTIDIANO Y FUNDAMENTOS (NOVATO)
  // ==========================================
  {
    id: 'n1-q1',
    level: 'novice',
    levelNumber: 1,
    levelTitle: 'Nivel 1: Cotidiano y Fundamentos',
    category: 'Química Culinaria',
    question: '¿Por qué el bicarbonato de sodio hace que los pasteles y panes esponjen durante el horneado?',
    options: [
      'Absorbe el agua de la masa creando micro-vacíos que luego se llenan de aire frío.',
      'Sintetiza levaduras microscópicas vivas que consumen la glucosa y exhalan oxígeno.',
      'Al reaccionar con ingredientes ácidos o calentarse, libera gas dióxido de carbono (CO₂) que forma burbujas en la masa.',
      'Reacciona con el gluten generando vapor de nitrógeno a alta presión molecular.'
    ],
    correctIndex: 2,
    chemicalEquation: 'NaHCO₃ + H⁺ → Na⁺ + H₂O + CO₂↑',
    scientificExplanation: {
      summary: 'El bicarbonato de sodio actúa como agente leudante químico al liberar dióxido de carbono gaseoso atrapado en la matriz viscoelástica de la masa.',
      mechanism: 'El anión bicarbonato (HCO₃⁻) es una base de Brønsted que reacciona con protones (H⁺) provenientes de ácidos culinarios (ácido láctico del yogur, ácido tartárico o cremor tártaro) formando ácido carbónico inestable (H₂CO₃), el cual se descompone rápidamente en agua líquida y CO₂ gaseoso.',
      whyDistractorsFail: 'El NaHCO₃ no absorbe agua para crear vacíos, no contiene organismos vivos como las levaduras biológicas (Saccharomyces cerevisiae), ni genera gas nitrógeno con el gluten.',
      practicalOrLabFact: 'Sin un ácido en la masa, el bicarbonato requiere calor para descomponerse térmicamente, pero si se usa en exceso deja un sabor metálico y amargo debido al carbonato de sodio (Na₂CO₃) residual.'
    },
    difficultyPoints: 100,
    funFact: 'La palabra "polvo de hornear" (baking powder) se diferencia del bicarbonato puro porque ya incluye un ácido seco (como pirofosfato ácido de sodio) y almidón antiaglomerante.'
  },
  {
    id: 'n1-q2',
    level: 'novice',
    levelNumber: 1,
    levelTitle: 'Nivel 1: Cotidiano y Fundamentos',
    category: 'Propiedades Ácido-Base',
    question: '¿Cuál es aproximadamente el pH de una solución acuosa típica de bicarbonato de sodio al 1% a temperatura ambiente (25 °C)?',
    options: [
      'Neutro exacto, exactamente 7.00',
      'Ligeramente alcalino, alrededor de 8.3 - 8.4',
      'Fuertemente ácido, cerca de 2.5',
      'Altamente cáustico y básico, superior a 13.5'
    ],
    correctIndex: 1,
    chemicalEquation: 'pH ≈ ½ (pKₐ₁ + pKₐ₂) = ½ (6.35 + 10.33) ≈ 8.34',
    scientificExplanation: {
      summary: 'El bicarbonato de sodio en agua genera una disolución ligeramente básica (alcalina suave) con un pH de aproximadamente 8.3.',
      mechanism: 'Como sal de un catión fuerte (Na⁺) y un anión anfiprótico (HCO₃⁻), el pH de un anfolito en solución acuosa concentrada es casi independiente de la concentración y viene dado por el promedio de los dos pKa del sistema de ácido carbónico: pH ≈ ½(pKₐ₁ + pKₐ₂) = ½(6.35 + 10.33) = 8.34.',
      whyDistractorsFail: 'Un pH de 7.00 correspondería a una sal de ácido fuerte y base fuerte como el NaCl. Un pH de 2.5 es propio de ácidos fuertes (como el jugo gástrico o vinagre concentrado). Un pH de 13.5 corresponde a bases fuertes como NaOH al 4% (sosa cáustica).',
      practicalOrLabFact: 'Gracias a este pH suave de ~8.3, el bicarbonato no irrita severamente la piel y puede utilizarse con seguridad en pastas dentales para neutralizar los ácidos bacterianos que desmineralizan el esmalte dental.'
    },
    difficultyPoints: 100,
    funFact: 'El bicarbonato en la pasta de dientes tiene un índice de abrasividad relativa de la dentina (RDA) de solo 7, uno de los limpiadores dentales más seguros y suaves del mundo.'
  },
  {
    id: 'n1-q3',
    level: 'novice',
    levelNumber: 1,
    levelTitle: 'Nivel 1: Cotidiano y Fundamentos',
    category: 'Reacciones Caseras',
    question: 'Al mezclar bicarbonato de sodio sólido con vinagre (ácido acético al 5%), además de efervescencia vigorosa, ¿qué cambio de temperatura ocurre en el recipiente?',
    options: [
      'El recipiente se enfría perceptiblemente (reacción endotérmica).',
      'El recipiente hierve y se calienta violentamente hasta 90 °C (reacción exotérmica).',
      'La temperatura permanece estrictamente idéntica a nivel molecular.',
      'Se produce plasma frío y la solución cambia espontáneamente a color verde fosforescente.'
    ],
    correctIndex: 0,
    chemicalEquation: 'NaHCO₃(s) + CH₃COOH(aq) → CH₃COONa(aq) + H₂O(l) + CO₂(g) (ΔH > 0)',
    scientificExplanation: {
      summary: 'La reacción entre el bicarbonato de sodio y el ácido acético es endotérmica: absorbe calor del entorno, provocando que la mezcla se enfríe.',
      mechanism: 'La energía requerida para romper los enlaces de la red cristalina del NaHCO₃ y disociar los reactivos es mayor que la energía liberada al hidratar los iones de acetato de sodio y formar enlaces en el agua y el CO₂. Por tanto, la entalpía de reacción (ΔH) es positiva (+ΔH), absorbiendo calor del sistema.',
      whyDistractorsFail: 'No es una reacción exotérmica; no genera calentamiento. Tampoco se produce emisión de luz ni plasma, y los productos (acetato de sodio, agua y CO₂) son incoloros.',
      practicalOrLabFact: 'Si colocas un termómetro de laboratorio en un vaso con 50 ml de vinagre y añades 2 cucharadas de bicarbonato, verás caer la temperatura entre 3 °C y 6 °C en menos de un minuto.'
    },
    difficultyPoints: 110,
    funFact: 'Esta reacción endotérmica es la base del clásico "volcán de ciencias", donde la efervescencia combinada con una gota de detergente crea una densa espuma de dióxido de carbono.'
  },
  {
    id: 'n1-q4',
    level: 'novice',
    levelNumber: 1,
    levelTitle: 'Nivel 1: Cotidiano y Fundamentos',
    category: 'Seguridad y Extinción de Incendios',
    question: '¿Por qué el bicarbonato de sodio es el componente clave en los extintores de polvo químico seco (Clase B y C)?',
    options: [
      'Reacciona con el oxígeno del aire convirtiéndolo instantáneamente en nitrógeno gaseoso inerte.',
      'Crea una película plástica impenetrable de polietileno inflamable sobre las brasas.',
      'Libera gas cloro a alta presión que inhibe el campo magnético del fuego.',
      'Al contacto con el fuego se descompone liberando CO₂ y vapor de agua que sofocan la llama y enfrían el combustible.'
    ],
    correctIndex: 3,
    chemicalEquation: '2 NaHCO₃(s) + Calor → Na₂CO₃(s) + H₂O(g) + CO₂(g)',
    scientificExplanation: {
      summary: 'Bajo el calor de las llamas (>100 °C), el bicarbonato experimenta termólisis liberando CO₂ y vapor de agua que desplazan el oxígeno (sofocación).',
      mechanism: 'Además de la dilución física del oxígeno por el CO₂ y el enfriamiento por evaporación del agua, los iones Na⁺ en estado gaseoso actúan como desactivadores de radicales libres (capturan radicales H· y OH·), interrumpiendo la reacción en cadena de la combustión química.',
      whyDistractorsFail: 'Ningún compuesto inorgánico convierte oxígeno en nitrógeno; los elementos químicos no transmutan en reacciones químicas ordinarias. No genera cloro (no contiene halógenos) ni plásticos.',
      practicalOrLabFact: 'Por esta razón, si una sartén con aceite caliente se incendia en la cocina, arrojar bicarbonato de sodio seco sofoca las llamas de inmediato, mientras que arrojar agua causaría una explosión de vapor letal.'
    },
    difficultyPoints: 110,
    funFact: 'Nunca debe usarse harina de trigo para apagar fuegos de aceite: la harina suspendida en el aire es un combustible finamente dividido que puede causar una explosión de polvo.'
  },
  {
    id: 'n1-q5',
    level: 'novice',
    levelNumber: 1,
    levelTitle: 'Nivel 1: Cotidiano y Fundamentos',
    category: 'Nomenclatura Química',
    question: '¿Cuál es el nombre químico sistemático recomendado por la IUPAC para el bicarbonato de sodio?',
    options: [
      'Dióxido de carbonato sódico',
      'Hidrogenocarbonato de sodio',
      'Monohidróxido de sodio y carbono',
      'Oxicarbonato sódico hidratado'
    ],
    correctIndex: 1,
    chemicalEquation: 'Fórmula empírica y molecular: NaHCO₃',
    scientificExplanation: {
      summary: 'La IUPAC designa oficialmente al compuesto como "Hidrogenocarbonato de sodio", mientras que "bicarbonato de sodio" es su nombre tradicional consolidado.',
      mechanism: 'El prefijo "hidrogeno-" denota que uno de los dos protones del ácido carbónico (H₂CO₃) ha sido reemplazado por un catión sodio (Na⁺), dejando intacto un átomo de hidrógeno unido a un átomo de oxígeno en el anión [HCO₃]⁻.',
      whyDistractorsFail: 'El término "bicarbonato" surgió en 1814 propuesto por William Hyde Wollaston porque observó que contenía el doble de carbonato por cantidad de sodio en comparación con el carbonato de sodio (Na₂CO₃), pero la IUPAC desaconseja ese prefijo antiguo.',
      practicalOrLabFact: 'En las tablas de reactivos de laboratorio y catálogos de pureza ACS o USP, siempre lo encontrarás clasificado bajo "Sodium hydrogen carbonate" con número CAS 144-55-8.'
    },
    difficultyPoints: 100,
    funFact: 'Su masa molar es de 84.007 g/mol, compuesta por Na (22.99), H (1.008), C (12.011) y 3 oxígenos (47.997 g/mol).'
  },
  {
    id: 'n1-q6',
    level: 'novice',
    levelNumber: 1,
    levelTitle: 'Nivel 1: Cotidiano y Fundamentos',
    category: 'Neutralización de Olores',
    question: '¿Por qué colocar una caja abierta de bicarbonato en el refrigerador elimina los malos olores en lugar de enmascararlos?',
    options: [
      'Emite un perfume cítrico sintético que adormece los receptores olfativos humanos.',
      'Congela las moléculas gaseosas del aire formando una capa de escarcha magnética.',
      'Neutraliza químicamente los compuestos volátiles malolientes (ácidos grasos y aminas básicas) convirtiéndolos en sales no volátiles.',
      'Libera ozono bactericida que desintegra los alimentos descompuestos.'
    ],
    correctIndex: 2,
    chemicalEquation: 'R-COOH (ácido oloroso volátil) + HCO₃⁻ → R-COO⁻ (sal no volátil) + H₂O + CO₂',
    scientificExplanation: {
      summary: 'El bicarbonato actúa como anfótero: reacciona con moléculas orgánicas ácidas y básicas responsables del mal olor, transformándolas en sales iónicas que no pueden evaporarse al aire.',
      mechanism: 'La mayoría de los olores del refrigerador provienen de ácidos grasos volátiles (como el ácido butírico de la mantequilla rancia) o aminas. Al entrar en contacto con la superficie sólida del NaHCO₃, los ácidos ceden protones al anión bicarbonato convirtiéndose en sales carboxilato sódicas inodoras y no volátiles.',
      whyDistractorsFail: 'El bicarbonato puro es completamente inodoro; no tiene fragancia propia, no emite ozono ni altera campos magnéticos.',
      practicalOrLabFact: 'Aumentar el área superficial (esparciendo el polvo en un plato hondo en vez de dejarlo apretado en la caja) incrementa drásticamente la tasa de adsorción y neutralización de gases.'
    },
    difficultyPoints: 100,
    funFact: 'Los astronautas de la NASA en las misiones Apolo y en la Estación Espacial Internacional han utilizado hidróxidos y bicarbonatos para depurar gases del soporte vital.'
  },
  {
    id: 'n1-q7',
    level: 'novice',
    levelNumber: 1,
    levelTitle: 'Nivel 1: Cotidiano y Fundamentos',
    category: 'Solubilidad y Apariencia Física',
    question: 'A temperatura ambiente (20 °C), ¿cuál es el estado físico y la solubilidad en agua del bicarbonato de sodio puro?',
    options: [
      'Sólido cristalino blanco, moderadamente soluble en agua (~96 gramos por litro).',
      'Líquido aceitoso incoloro e inmiscible con el agua.',
      'Polvo amorfo amarillo que reacciona explosivamente con agua destilada.',
      'Gas comprimido que solo condensa a -78 °C.'
    ],
    correctIndex: 0,
    chemicalEquation: 'Solubilidad(20 °C) ≈ 9.6 g / 100 mL H₂O',
    scientificExplanation: {
      summary: 'El NaHCO₃ es un sólido blanco cristalino (sistema monoclínico) con solubilidad moderada de ~96 g/L a 20 °C.',
      mechanism: 'A diferencia de otras sales de sodio que son extremadamente solubles (como el NaCl a ~360 g/L), el bicarbonato de sodio posee una energía de red cristalina reforzada por cadenas infinitas de dímeros de bicarbonato unidos por puentes de hidrógeno, lo que modera su disolución acuosa.',
      whyDistractorsFail: 'No es líquido, no es un gas, no es amarillo ni reacciona violentamente con agua pura; se disuelve formando iones hidratados Na⁺(aq) y HCO₃⁻(aq).',
      practicalOrLabFact: 'A 0 °C solo se disuelven 69 g/L, pero a 60 °C la solubilidad aumenta a 164 g/L. Sin embargo, al calentar el agua por encima de 60 °C, comienza a descomponerse espontáneamente en carbonato de sodio.'
    },
    difficultyPoints: 100,
    funFact: 'La menor solubilidad del NaHCO₃ en comparación con otras sales sódicas es el principio fundamental que hizo viable la invención del proceso industrial Solvay.'
  },
  {
    id: 'n1-q8',
    level: 'novice',
    levelNumber: 1,
    levelTitle: 'Nivel 1: Cotidiano y Fundamentos',
    category: 'Gastroenterología Doméstica',
    question: 'Cuando una persona consume una pizca de bicarbonato disuelto en agua para aliviar la acidez estomacal, ¿cuál es la reacción que ocurre en el estómago?',
    options: [
      'Estimula a las células parietales para que secreten ácido sulfúrico concentrado.',
      'Congela los jugos digestivos formando un gel protector insoluble en el esófago.',
      'Sintetiza pepsina artificial que destruye las proteínas del duodeno.',
      'Neutraliza el ácido clorhídrico (HCl) gástrico produciendo cloruro de sodio (NaCl), agua y gas CO₂.'
    ],
    correctIndex: 3,
    chemicalEquation: 'NaHCO₃ + HCl → NaCl + H₂O + CO₂↑',
    scientificExplanation: {
      summary: 'El bicarbonato reacciona como antiácido clásico con el ácido clorhídrico estomacal, aliviando la pirosis casi al instante.',
      mechanism: 'El anión HCO₃⁻ capta el H⁺ del HCl gástrico. Se genera agua y dióxido de carbono gaseoso. La rápida acumulación de este gas distiende temporalmente las paredes del estómago y suele provocar un eructo liberador de presión.',
      whyDistractorsFail: 'El cuerpo humano nunca secreta ácido sulfúrico. El bicarbonato no congela nada ni sintetiza pepsina (de hecho, al elevar el pH gástrico temporalmente por encima de 4.5, inactiva transitoriamente a la pepsina).',
      practicalOrLabFact: 'El uso crónico o excesivo no se recomienda en pacientes con hipertensión arterial severa o insuficiencia renal debido a la alta carga de sodio (Na⁺) absorbible, y puede causar alcalosis metabólica sistémica.'
    },
    difficultyPoints: 100,
    funFact: 'El célebre remedio efervescente Alka-Seltzer contiene precisamente bicarbonato de sodio, ácido cítrico y aspirina en proporciones estequiométricas para activarse con agua.'
  },
  {
    id: 'n1-q9',
    level: 'novice',
    levelNumber: 1,
    levelTitle: 'Nivel 1: Cotidiano y Fundamentos',
    category: 'Diferenciación Química',
    question: '¿En qué se diferencia el bicarbonato de sodio (NaHCO₃) del carbonato de sodio comercial (Na₂CO₃, conocido como sosa de lavado)?',
    options: [
      'Son exactamente el mismo compuesto químico con dos nombres comerciales diferentes.',
      'El bicarbonato es un ácido fuerte de pH 1.0, mientras que el carbonato es neutro pH 7.0.',
      'El carbonato de sodio no tiene hidrógeno en su fórmula, tiene el doble de sodio por mol y es mucho más alcalino y cáustico (pH ~11.5).',
      'El carbonato de sodio es radioactivo y emite partículas alfa a temperatura ambiente.'
    ],
    correctIndex: 2,
    chemicalEquation: 'NaHCO₃ (pH ~8.3, hidrogenocarbonato) vs Na₂CO₃ (pH ~11.5, carbonato disódico)',
    scientificExplanation: {
      summary: 'El carbonato de sodio (Na₂CO₃) carece de protón, contiene dos iones Na⁺ y genera soluciones significativamente más básicas y corrosivas para la piel que el bicarbonato (NaHCO₃).',
      mechanism: 'El ion carbonato (CO₃²⁻) es una base de Brønsted de segundo orden mucho más fuerte (Kb1 ≈ 2.1 × 10⁻⁴) que el ion bicarbonato (HCO₃⁻, Kb2 ≈ 2.2 × 10⁻⁸). Por eso, el carbonato de sodio en agua hidroliza fuertemente liberando abundantes iones hidróxido (OH⁻), elevando el pH a valores entre 11 y 12.',
      whyDistractorsFail: 'No son el mismo compuesto: uno contiene H y el otro no. Ninguno de los dos es un ácido fuerte ni son elementos radioactivos.',
      practicalOrLabFact: 'Puedes transformar fácilmente bicarbonato de sodio en carbonato de sodio calentándolo en una bandeja en el horno a 200 °C durante 45 minutos.'
    },
    difficultyPoints: 110,
    funFact: 'Los antiguos egipcios utilizaban "natrón", un mineral natural compuesto por una mezcla de carbonato de sodio y bicarbonato de sodio, para deshidratar y momificar los cuerpos de los faraones.'
  },

  // =======================================================
  // NIVEL 2: PROPIEDADES QUÍMICAS Y REACCIONES (INTERMEDIO)
  // =======================================================
  {
    id: 'n2-q1',
    level: 'intermediate',
    levelNumber: 2,
    levelTitle: 'Nivel 2: Propiedades Químicas y Reacciones',
    category: 'Estequiometría y Descomposición Térmica',
    question: 'Si calcinamos por completo 168.0 gramos de bicarbonato de sodio puro (NaHCO₃, masa molar = 84.0 g/mol) a 200 °C, ¿cuántos gramos de dióxido de carbono gaseoso (CO₂, masa molar = 44.0 g/mol) se desprenden teóricamente?',
    options: [
      '88.0 gramos de CO₂',
      '44.0 gramos de CO₂',
      '22.0 gramos de CO₂',
      '168.0 gramos de CO₂'
    ],
    correctIndex: 1,
    chemicalEquation: '2 NaHCO₃(s) → Na₂CO₃(s) + H₂O(g) + CO₂(g)',
    scientificExplanation: {
      summary: 'Según la estequiometría 2:1 de la termólisis del bicarbonato, 2 moles de NaHCO₃ (168 g) producen exactamente 1 mol de CO₂ (44 g).',
      mechanism: 'Cálculo molar paso a paso:\n1. Moles de NaHCO₃ = 168.0 g / 84.0 g/mol = 2.0 moles.\n2. La ecuación balanceada indica: 2 moles NaHCO₃ → 1 mol Na₂CO₃ + 1 mol H₂O + 1 mol CO₂.\n3. Por tanto, se produce 1.0 mol de CO₂.\n4. Masa de CO₂ = 1.0 mol × 44.01 g/mol = 44.0 gramos.',
      whyDistractorsFail: '88.0 g asumiría una relación errónea 1:1 donde 1 mol de NaHCO₃ produjera 1 mol de CO₂. 22.0 g asumiría una relación 4:1. 168.0 g violaría la ley de conservación de la masa al no considerar que también se forman Na₂CO₃ y H₂O.',
      practicalOrLabFact: 'En el crisol quedará un residuo sólido de 106.0 gramos de carbonato de sodio anhidro (Na₂CO₃), lo que permite a los estudiantes de química general verificar la ley de Proust pesando antes y después de calentar.'
    },
    difficultyPoints: 150,
    funFact: 'La pérdida de masa en este experimento (62 g entre agua y CO₂ por cada 168 g iniciales) es una pérdida exacta del 36.9% de masa, utilizada en control de calidad gravimétrico.'
  },
  {
    id: 'n2-q2',
    level: 'intermediate',
    levelNumber: 2,
    levelTitle: 'Nivel 2: Propiedades Químicas y Reacciones',
    category: 'Equilibrio Químico y Naturaleza Anfótera',
    question: 'En química acuosa, el ion bicarbonato (HCO₃⁻) se clasifica formalmente como una especie anfiprótica o anfolito. ¿Qué significa exactamente esta propiedad?',
    options: [
      'Puede disolverse simultáneamente en disolventes apolares como benceno y polares como agua sin disociarse.',
      'Posee dos espines electrónicos desapareados que le confieren fuerte ferromagnetismo en disolución.',
      'Se descompone espontáneamente en helio y sodio metálico si se le irradia con luz ultravioleta.',
      'Puede actuar como donador de protones (ácido de Brønsted) o como aceptor de protones (base de Brønsted) según el reactivo con el que interactúe.'
    ],
    correctIndex: 3,
    chemicalEquation: 'Como base: HCO₃⁻ + H⁺ ⇌ H₂CO₃ | Como ácido: HCO₃⁻ + OH⁻ ⇌ CO₃²⁻ + H₂O',
    scientificExplanation: {
      summary: 'Un anfolito o especie anfiprótica tiene la capacidad molecular dual de actuar como ácido (cediendo H⁺) o como base (aceptando H⁺).',
      mechanism: 'Frente a un ácido más fuerte que él (como el HCl), el ion bicarbonato actúa como base captando un protón para formar ácido carbónico [H₂CO₃]. Frente a una base fuerte (como el NaOH), actúa como ácido donando su protón para formar ion carbonato [CO₃²⁻] y agua.',
      whyDistractorsFail: 'No tiene relación con la solubilidad en benceno (el NaHCO₃ es una sal iónica insoluble en solventes orgánicos apolares). No es ferromagnético (todos sus electrones están apareados en orbitales moleculares) y no produce helio.',
      practicalOrLabFact: 'En los laboratorios de síntesis orgánica, se utiliza bicarbonato de sodio sólido para neutralizar tanto derrames de ácidos fuertes como de bases débiles de manera segura sin riesgo de sobrecalentamiento térmico.'
    },
    difficultyPoints: 150,
    funFact: 'El agua (H₂O), el ion dihidrógeno fosfato (H₂PO₄⁻) y los aminoácidos en su forma zwitteriónica son otros célebres ejemplos de anfolitos en la naturaleza.'
  },
  {
    id: 'n2-q3',
    level: 'intermediate',
    levelNumber: 2,
    levelTitle: 'Nivel 2: Propiedades Químicas y Reacciones',
    category: 'Estructura Cristalina y Enlace Químico',
    question: '¿Qué tipo de arreglo y enlaces secundarios caracterizan a los aniones [HCO₃⁻] en la red cristalina monoclínica del bicarbonato de sodio sólido?',
    options: [
      'Cadenas infinitas planas de aniones unidos por puentes de hidrógeno asimétricos entre el grupo -OH y el átomo de oxígeno carbonílico adyacente.',
      'Redes tridimensionales covalentes reticulares de diamante con carbonos coordinados tetraédricamente.',
      'Anillos aromáticos hexagonales de seis átomos de carbono con enlace pi deslocalizado.',
      'Agrupaciones esféricas de fulereno C₆₀ solvatadas por sodio líquido.'
    ],
    correctIndex: 0,
    chemicalEquation: 'Estructura: [O₂C-O-H···O-CO₂]ₙ (Puentes de hidrógeno O-H···O de ~2.61 Å)',
    scientificExplanation: {
      summary: 'En el cristal monoclínico de NaHCO₃, los iones bicarbonato forman cadenas infinitas mediante puentes de hidrógeno asimétricos O-H···O.',
      mechanism: 'La difracción de rayos X y neutrones revela que cada ion HCO₃⁻ plano se enlaza a sus vecinos a través de un puente de hidrógeno fuerte con una distancia O···O de ~2.61 Å. Los cationes Na⁺ se ubican en octaedros irregulares coordinados por seis átomos de oxígeno, estabilizando las cadenas.',
      whyDistractorsFail: 'No tiene estructura de diamante covalente (es una sal iónica-molecular), no contiene anillos aromáticos ni fulerenos.',
      practicalOrLabFact: 'Esta fuerte red de puentes de hidrógeno en estado sólido explica por qué el bicarbonato de sodio tiene una densidad relativamente alta (2.20 g/cm³) y una solubilidad menor que la del carbonato de potasio o acetato de sodio.'
    },
    difficultyPoints: 160,
    funFact: 'El mineral natural equivalente al bicarbonato de sodio puro en geología se llama "nahcolita", nombrado por su fórmula: Na-H-C-O-lita.'
  },
  {
    id: 'n2-q4',
    level: 'intermediate',
    levelNumber: 2,
    levelTitle: 'Nivel 2: Propiedades Químicas y Reacciones',
    category: 'Reacciones de Precipitación',
    question: 'Si se mezcla una solución acuosa transparente de bicarbonato de sodio con una solución concentrada de cloruro de calcio (CaCl₂), ¿qué ocurre a temperatura ambiente y qué ocurre si luego se hierve la mezcla?',
    options: [
      'Precipita sodio metálico pyrophórico que arde instantáneamente bajo el agua.',
      'Se forma un gas tóxico verde de cloro libre sin ningún cambio de precipitación.',
      'A temperatura ambiente la solución permanece mayormente clara (el Ca(HCO₃)₂ es soluble); al hervir, precipita un sólido blanco de carbonato de calcio (CaCO₃↓).',
      'El calcio se reduce a calcio metálico depositándose como espejo plateado.'
    ],
    correctIndex: 2,
    chemicalEquation: 'Ca²⁺ + 2 HCO₃⁻ ⇌ Ca(HCO₃)₂ (soluble) ⎯⎯Δ→ CaCO₃(s)↓ + H₂O + CO₂↑',
    scientificExplanation: {
      summary: 'El bicarbonato de calcio formado en frío es soluble; al calentar, se descompone térmicamente provocando la precipitación inmediata de carbonato de calcio blanco.',
      mechanism: 'A temperatura ambiente, el producto iónico de [Ca²⁺][CO₃²⁻] se mantiene bajo porque la fracción de carbonato libre a pH 8.3 es pequeña. Sin embargo, al suministrar calor, el equilibrio se desplaza expulsando CO₂ gaseoso hacia la atmósfera: 2 HCO₃⁻ → CO₃²⁻ + H₂O + CO₂↑. La súbita concentración de CO₃²⁻ supera el Kps del CaCO₃ (Kps ≈ 3.3 × 10⁻⁹), precipitando calcita blanca.',
      whyDistractorsFail: 'No se reduce el calcio a metal (su potencial de reducción es extremadamente negativo: E° = -2.87 V), no se oxida el cloruro a cloro libre (haría falta un oxidante formidable como permanganato), ni se libera sodio metálico.',
      practicalOrLabFact: 'Este es el mecanismo químico exacto que genera el sarro (incrustaciones calcáreas de CaCO₃) en las tuberías de agua caliente, calderas industriales y cafeteras.'
    },
    difficultyPoints: 160,
    funFact: 'En las cavernas kársticas, este mismo equilibrio químico a lo largo de miles de años forma las estalactitas y estalagmitas al perder CO₂ lentamente en la atmósfera de la cueva.'
  },
  {
    id: 'n2-q5',
    level: 'intermediate',
    levelNumber: 2,
    levelTitle: 'Nivel 2: Propiedades Químicas y Reacciones',
    category: 'Termodinámica de Reacción',
    question: 'Durante la descomposición térmica del bicarbonato de sodio sólido: 2 NaHCO₃(s) → Na₂CO₃(s) + H₂O(g) + CO₂(g), ¿cuáles son los signos de la variación de entalpía estándar (ΔH°) y de entropía estándar (ΔS°)?',
    options: [
      'ΔH° < 0 (exotérmica) y ΔS° < 0 (disminución del desorden).',
      'ΔH° > 0 (endotérmica) y ΔS° > 0 (aumento de desorden molecular por generación de gases).',
      'ΔH° = 0 y ΔS° = 0 en todo rango de temperatura.',
      'ΔH° < 0 (libera energía espontáneamente a 0 Kelvin) y ΔS° = 0.'
    ],
    correctIndex: 1,
    chemicalEquation: 'ΔH° ≈ +135.6 kJ/mol (endotérmica) | ΔS° ≈ +334 J/(mol·K) (entropía muy positiva)',
    scientificExplanation: {
      summary: 'La descomposición es marcadamente endotérmica (absorbe calor, ΔH° > 0) y va acompañada de un gran incremento de entropía (ΔS° > 0) debido a la formación de 2 moles de gas.',
      mechanism: 'A partir de reactivos en estado puramente sólido (2 moles de NaHCO₃(s)), se produce 1 mol de vapor de agua y 1 mol de dióxido de carbono gaseoso. Los gases tienen una entropía molar estándar mucho mayor que los sólidos, haciendo ΔS° fuertemente positivo (+334 J/mol·K). La energía libre de Gibbs es ΔG = ΔH - TΔS. A bajas temperaturas, el término entálpico positivo domina y la sal es estable (ΔG > 0). Al aumentar la temperatura T, el término -TΔS se hace lo bastante negativo como para que ΔG < 0, volviendo la reacción espontánea.',
      whyDistractorsFail: 'No es exotérmica; requiere calor continuo para progresar. Si se retira la fuente de calor, la descomposición se detiene.',
      practicalOrLabFact: 'La temperatura a la cual la presión parcial total de gases (P_H2O + P_CO2) alcanza 1 atmósfera es de aproximadamente 100 °C, por lo que a ebullición la sal se calcina a gran velocidad.'
    },
    difficultyPoints: 170,
    funFact: 'La termodinámica del bicarbonato ejemplifica a la perfección cómo el desorden entrópico a alta temperatura puede vencer a una barrera entálpica desfavorable.'
  },
  {
    id: 'n2-q6',
    level: 'intermediate',
    levelNumber: 2,
    levelTitle: 'Nivel 2: Propiedades Químicas y Reacciones',
    category: 'Química Analítica Cuantitativa',
    question: 'Al titular con HCl una muestra que contiene una mezcla desconocida de carbonato de sodio (Na₂CO₃) y bicarbonato de sodio (NaHCO₃), ¿qué indicadores clásicos de pH se emplean en la volumetría de doble indicador (método de Warder)?',
    options: [
      'Fenolftaleína para el primer punto de viraje (pH ~8.3) y naranja de metilo para el segundo punto de viraje (pH ~3.8).',
      'Azul de metileno para todo el proceso porque precipita selectivamente el sodio.',
      'Tornasol rojo exclusivamente porque no reacciona con ácidos minerales.',
      'Fluoresceína de absorción combinada con sulfato de cobre pentahidratado.'
    ],
    correctIndex: 0,
    chemicalEquation: 'Paso 1: CO₃²⁻ + H⁺ → HCO₃⁻ (vira fenolftaleína) | Paso 2: HCO₃⁻ + H⁺ → H₂CO₃ (vira naranja metilo)',
    scientificExplanation: {
      summary: 'El método de Warder usa fenolftaleína para cuantificar la conversión de carbonato a bicarbonato, y luego naranja de metilo para titular todo el bicarbonato hasta ácido carbónico.',
      mechanism: '1. En el primer punto de equivalencia (pH ~8.3), todo el CO₃²⁻ se ha transformado en HCO₃⁻. La fenolftaleína vira de rosa intenso a incolora: V₁ volumen gastado.\n2. Al agregar naranja de metilo y seguir agregando HCl hasta pH ~3.8-4.0, todos los iones HCO₃⁻ (los originales de la muestra más los recién formados del carbonato) se convierten en H₂CO₃ (H₂O + CO₂), virando de amarillo a rojo anaranjado: V₂ volumen gastado.\n3. Los moles de Na₂CO₃ equivalen a V₁, y los moles de NaHCO₃ original equivalen a (V₂ - 2·V₁).',
      whyDistractorsFail: 'El azul de metileno es un indicador redox, no de ácido-base. El tornasol tiene una zona de viraje muy ancha (pH 5 a 8) e imprecisa para volumetría analítica cuantitativa.',
      practicalOrLabFact: 'Antes de alcanzar el punto final con naranja de metilo, los analistas suelen hervir suavemente la solución para expulsar el CO₂ disuelto, afilando la nitidez del viraje.'
    },
    difficultyPoints: 170,
    funFact: 'Este método analítico sigue siendo el estándar oficial de farmacopea para certificar la pureza de reactivos comerciales de bicarbonato.'
  },
  {
    id: 'n2-q7',
    level: 'intermediate',
    levelNumber: 2,
    levelTitle: 'Nivel 2: Propiedades Químicas y Reacciones',
    category: 'Efecto del Ion Común',
    question: 'Si a una disolución acuosa saturada de bicarbonato de sodio a 20 °C se le añade sal común sólida (cloruro de sodio, NaCl) en agitación, ¿qué fenómeno físico-químico ocurre?',
    options: [
      'La solución hierve espontáneamente y el pH desciende a cero.',
      'El sodio se dismuta en sodio gaseoso y sodio catiónico hipervalente.',
      'Se disuelve el doble de bicarbonato de sodio debido a la fuerza iónica negativa.',
      'Precipita bicarbonato de sodio sólido debido al efecto del ion común (Na⁺) que sobrepasa el producto de solubilidad.'
    ],
    correctIndex: 3,
    chemicalEquation: 'Kps = [Na⁺][HCO₃⁻]; Al aumentar [Na⁺] por adición de NaCl, [HCO₃⁻] precipita',
    scientificExplanation: {
      summary: 'La alta concentración de iones sodio (Na⁺) aportada por el NaCl satura el equilibrio de solubilidad y fuerza la precipitación del NaHCO₃.',
      mechanism: 'En disolución saturada rige el equilibrio: NaHCO₃(s) ⇌ Na⁺(aq) + HCO₃⁻(aq), con constante Kps = [Na⁺]·[HCO₃⁻]·γ±². Al disolver NaCl, este se disocia al 100% aportando una avalancha de iones Na⁺. Como el producto de las concentraciones supera el Kps de la sal menos soluble (el bicarbonato), el sistema según el principio de Le Chatelier se desplaza hacia la izquierda, formando precipitado cristalino de NaHCO₃.',
      whyDistractorsFail: 'No hay ninguna reacción redox que altere el estado de oxidación del sodio (+1 constante). La solución no hierve ni el pH cae a cero (el NaCl es una sal neutra).',
      practicalOrLabFact: 'Este efecto del ion común es el corazón operativo del proceso Solvay para separar el bicarbonato de sodio de la salmuera industrial.'
    },
    difficultyPoints: 160,
    funFact: 'El mismo principio de "salting-out" (precipitación por salado) se utiliza en bioquímica para purificar proteínas usando sulfato de amonio.'
  },
  {
    id: 'n2-q8',
    level: 'intermediate',
    levelNumber: 2,
    levelTitle: 'Nivel 2: Propiedades Químicas y Reacciones',
    category: 'Cinética y Ensayos de Calidad',
    question: '¿Por qué las soluciones acuosas de bicarbonato de sodio no deben prepararse ni almacenarse en recipientes de vidrio borosilicatado común durante meses para aplicaciones farmacéuticas inyectables?',
    options: [
      'Porque el ion bicarbonato es altamente radioactivo y desestabiliza los enlaces de boro.',
      'Porque el sodio atraviesa el vidrio por efecto túnel mecánico en menos de 48 horas.',
      'Porque a pH ~8.3 disuelve lentamente la sílice del vidrio liberando silicatos y cationes divalentes, y la pérdida lenta de CO₂ aumenta el pH hacia valores cáusticos.',
      'Porque el bicarbonato reacciona con el vidrio generando gas cianuro letal.'
    ],
    correctIndex: 2,
    chemicalEquation: 'SiO₂(s) + 2 OH⁻(aq) → SiO₃²⁻(aq) + H₂O',
    scientificExplanation: {
      summary: 'El pH alcalino corroe lentamente la matriz de silicato del vidrio y el intercambio gaseoso continuo degrada la composición de la sal.',
      mechanism: 'Aunque suave, una solución de pH 8.3-8.5 contiene suficientes iones hidróxido para hidrolizar los enlaces siloxano (Si-O-Si) del vidrio con el tiempo, desprendiendo diminutas escamas de sílice ("glass delamination") que pueden ser fatales si se inyectan por vía intravenosa. Además, en envases permeables, la desgasificación de CO₂ desplaza el equilibrio hacia Na₂CO₃, elevando el pH por encima de 9.5.',
      whyDistractorsFail: 'No hay radioactividad ni efecto túnel macroscópico. El bicarbonato carece de nitrógeno, por lo que es químicamente imposible que sintetice cianuro (CN⁻).',
      practicalOrLabFact: 'Por ello, el bicarbonato de sodio de grado inyectable (USP/EP) se almacena exclusivamente en viales de vidrio Tipo I (neutro altamente resistente) con tapones de elastómero herméticos bajo atmósfera de nitrógeno o CO₂ controlada.'
    },
    difficultyPoints: 170,
    funFact: 'El bicarbonato intravenoso al 8.4% es una solución molar exacta (1 mEq/mL), lo que facilita cálculos médicos ultra-rápidos en emergencias.'
  },
  {
    id: 'n2-q9',
    level: 'intermediate',
    levelNumber: 2,
    levelTitle: 'Nivel 2: Propiedades Químicas y Reacciones',
    category: 'Reacción con Sales de Metales de Transición',
    question: 'Al agregar una solución de bicarbonato de sodio a una solución de sulfato de cobre(II) (CuSO₄), ¿qué compuesto verde-azulado precipita y qué gas burbujea intensamente?',
    options: [
      'Precipita cobre metálico elemental y se libera gas monóxido de carbono (CO).',
      'Precipita carbonato básico de cobre(II) [malaquita sintética, Cu₂CO₃(OH)₂] y se libera gas dióxido de carbono (CO₂↑).',
      'Precipita hidruro de cobre explosivo y se desprende gas ozono (O₃).',
      'No ocurre ninguna reacción observable; los iones permanecen en reposo perpetuo.'
    ],
    correctIndex: 1,
    chemicalEquation: '2 CuSO₄ + 4 NaHCO₃ → Cu₂CO₃(OH)₂(s)↓ + 2 Na₂SO₄ + 3 CO₂↑ + H₂O',
    scientificExplanation: {
      summary: 'El ion Cu²⁺ es un catión fuertemente polarizante en agua; induce acidez por hidrólisis y precipita como carbonato básico de cobre con liberación de CO₂.',
      mechanism: 'El catión [Cu(H₂O)₆]²⁺ es un ácido débil de Brønsted (pKa ~7.5). Al interactuar con el bicarbonato, este extrae protones del agua de hidratación del cobre mientras precipita el carbonato básico insolubilizado conocido mineralógicamente como malaquita: Cu₂CO₃(OH)₂. Durante esta neutralización se desprenden 3 moles de CO₂ gaseoso por cada 2 moles de sulfato de cobre consumidos.',
      whyDistractorsFail: 'El cobre no se reduce a estado metálico (Cu⁰) sin un agente reductor potente como zinc o borohidruro. No se forma hidruro ni gas ozono.',
      practicalOrLabFact: 'Esta reacción es la vía clásica de laboratorio para fabricar pigmentos artísticos de carbonato básico de cobre y fungicidas agrícolas basados en sales cuprosas/cúpricas.'
    },
    difficultyPoints: 160,
    funFact: 'La pátina verde que recubre la Estatua de la Libertad en Nueva York y los techos de cobre antiguos está compuesta principalmente de este mismo carbonato básico de cobre.'
  },

  // ==============================================================
  // NIVEL 3: SÍNTESIS INDUSTRIAL Y PROCESO SOLVAY (AVANZADO)
  // ==============================================================
  {
    id: 'n3-q1',
    level: 'advanced',
    levelNumber: 3,
    levelTitle: 'Nivel 3: Síntesis Industrial y Proceso Solvay',
    category: 'Ingeniería Química e Historia Industrial',
    question: 'En la torre de carbonatación del proceso Solvay (desarrollado por Ernest Solvay en la década de 1860), ¿cuáles son las cuatro materias primas fundamentales que reaccionan para precipitar el bicarbonato de sodio?',
    options: [
      'Salmuera (NaCl concentrado), amoníaco (NH₃), dióxido de carbono (CO₂) y agua (H₂O).',
      'Sulfato de sodio, carbón vegetal, azufre elemental y ácido nítrico.',
      'Sosa cáustica (NaOH), gas flúor, petróleo crudo y caliza fundida.',
      'Nitrato de potasio, sílice purificada, ácido sulfúrico y vapor de mercurio.'
    ],
    correctIndex: 0,
    chemicalEquation: 'NaCl + NH₃ + CO₂ + H₂O → NaHCO₃(s)↓ + NH₄Cl(aq)',
    scientificExplanation: {
      summary: 'El proceso Solvay utiliza salmuera saturada de NaCl, gas amoníaco, dióxido de carbono y agua para precipitar selectivamente cristales de NaHCO₃.',
      mechanism: '1. El amoníaco gaseoso se disuelve primero en la salmuera para formar salmuera amoniacal básica.\n2. Al burbujear CO₂ a contracorriente en la torre, el amoníaco reacciona formando bicarbonato de amonio: NH₃ + CO₂ + H₂O ⇌ NH₄HCO₃.\n3. En presencia de alta concentración de iones Na⁺, se alcanza el producto de solubilidad del NaHCO₃, el cual precipita como pasta cristalina blanca porque es la sal menos soluble de las cuatro presentes (NaCl, NH₄Cl, NH₄HCO₃ y NaHCO₃).\n4. El cloruro de amonio (NH₄Cl) permanece disuelto en las aguas madres.',
      whyDistractorsFail: 'El sulfato de sodio con carbón y caliza corresponde al antiguo y altamente contaminante Proceso Leblanc (1791), el cual fue completamente reemplazado por la elegancia cíclica del Proceso Solvay.',
      practicalOrLabFact: 'El éxito comercial arrollador de Solvay radicó en que el amoníaco no se gasta: se recupera y recicla en más del 99.5% utilizando óxido de calcio (cal viva).'
    },
    difficultyPoints: 200,
    funFact: 'Ernest Solvay utilizó la inmensa fortuna generada por su patente para fundar los célebres Consejos Solvay de Física y Química, donde Einstein, Curie, Bohr y Planck debatieron los cimientos de la mecánica cuántica.'
  },
  {
    id: 'n3-q2',
    level: 'advanced',
    levelNumber: 3,
    levelTitle: 'Nivel 3: Síntesis Industrial y Proceso Solvay',
    category: 'Recuperación de Reactivos y Eficiencia Cíclica',
    question: '¿Cómo recupera la planta química Solvay el costoso amoníaco (NH₃) a partir del subproducto cloruro de amonio (NH₄Cl) presente en las aguas madres?',
    options: [
      'Electrolizando la solución con ánodos de platino para oxidar el nitrógeno a gas N₂.',
      'Sometiendo el líquido a radiación gamma para que el cloro se sublime.',
      'Tratándolo con hidróxido de calcio [Ca(OH)₂, lechada de cal obtenida de calcinar piedra caliza], regenerando NH₃ y generando CaCl₂ como residuo.',
      'Añadiendo ácido sulfúrico concentrado para destilar amoníaco líquido explosivo.'
    ],
    correctIndex: 2,
    chemicalEquation: '2 NH₄Cl(aq) + Ca(OH)₂(s) → CaCl₂(aq) + 2 NH₃(g)↑ + 2 H₂O(l)',
    scientificExplanation: {
      summary: 'El cloruro de amonio se calienta con lechada de cal [Ca(OH)₂], liberando gas amoníaco que se reinyecta a la salmuera fresca, dejando cloruro de calcio como subproducto.',
      mechanism: 'La caliza (CaCO₃) se calcina en un horno para producir el CO₂ necesario en la carbonatación: CaCO₃ → CaO + CO₂↑. La cal viva (CaO) se apaga con agua: CaO + H₂O → Ca(OH)₂. Esta base fuerte desprotona cuantitativamente al ion amonio (NH₄⁺, pKa = 9.25), regenerando amoníaco gaseoso volátil que se destila y recircula en circuito cerrado.',
      whyDistractorsFail: 'No se usa electrólisis ni radiación gamma. Añadir ácido sulfúrico formaría sulfato de amonio y retendría el amonio en lugar de liberarlo como gas volátil.',
      practicalOrLabFact: 'El subproducto cloruro de calcio (CaCl₂) se utiliza ampliamente a nivel mundial para derretir hielo en carreteras invernales y como desecante industrial.'
    },
    difficultyPoints: 200,
    funFact: 'El proceso Solvay fue uno de los primeros ejemplos históricos de economía circular e ingeniería química de balance de masa cerrado en el siglo XIX.'
  },
  {
    id: 'n3-q3',
    level: 'advanced',
    levelNumber: 3,
    levelTitle: 'Nivel 3: Síntesis Industrial y Proceso Solvay',
    category: 'Termodinámica de la Calcinación Industrial',
    question: 'En la etapa final del proceso Solvay para producir "ceniza de sosa" (carbonato de sodio, Na₂CO₃), el bicarbonato de sodio filtrado se calcina en hornos rotatorios. ¿Qué se hace con el gas CO₂ emitido en esta descomposición?',
    options: [
      'Se ventea directamente a la estratosfera porque contiene impurezas de cianógeno que envenenan los catalizadores.',
      'Se condensa en bloques de hielo seco para refrigerar los reactores nucleares de la planta.',
      'Se polimeriza con formaldehído para fabricar envases plásticos de polietileno.',
      'Se aspira, se purifica y se recircula a las torres de carbonatación para convertir más salmuera amoniacal en bicarbonato.'
    ],
    correctIndex: 3,
    chemicalEquation: '2 NaHCO₃(s) ⎯⎯Δ→ Na₂CO₃(s) + H₂O(g) + CO₂(g)↑ (Reciclaje directo de CO₂)',
    scientificExplanation: {
      summary: 'El CO₂ liberado durante la calcinación del bicarbonato aporta aproximadamente el 50% de todo el dióxido de carbono necesario en las torres de carbonatación, reciclándose íntegramente.',
      mechanism: 'La estequiometría demuestra que por cada 2 moles de NaHCO₃ precipitados se requiere 1 mol de CO₂ aportado por los hornos de caliza y 1 mol proviene de la propia calcinación. Al recircular este gas puro, la planta Solvay reduce a la mitad el consumo de combustible fósil y caliza en sus hornos de cal.',
      whyDistractorsFail: 'No se libera al ambiente ni contiene cianógeno; es un flujo de CO₂ de altísima pureza. Tampoco se destina a hielo seco nuclear ni polimerización con formaldehído.',
      practicalOrLabFact: 'El producto final calcinado se denomina "soda ash ligera" o densa (Na₂CO₃), la cual es materia prima insustituible para la fabricación mundial del vidrio (silicato sódico cálcico).'
    },
    difficultyPoints: 210,
    funFact: 'Aproximadamente el 50% de todo el carbonato y bicarbonato de sodio del planeta se consume en la industria vidriera para abaratar el punto de fusión de la arena de sílice.'
  },
  {
    id: 'n3-q4',
    level: 'advanced',
    levelNumber: 3,
    levelTitle: 'Nivel 3: Síntesis Industrial y Proceso Solvay',
    category: 'Comparativa Tecnológica Leblanc vs Solvay',
    question: '¿Por qué el Proceso Leblanc (creado en 1791) fue completamente erradicado por el Proceso Solvay hacia principios del siglo XX?',
    options: [
      'El proceso Leblanc requería uranio enriquecido que fue prohibido por tratados internacionales.',
      'El proceso Leblanc generaba masivos residuos sólidos tóxicos de sulfuro de calcio ("galligu") y nubes ácidas devastadoras de gas HCl, con costos energéticos exorbitantes.',
      'El bicarbonato obtenido por Leblanc tenía sabor dulce debido a la fructosa residual.',
      'El proceso Solvay fue impuesto militarmente por el Imperio Británico en todas sus colonias.'
    ],
    correctIndex: 1,
    chemicalEquation: 'Leblanc: 2 NaCl + H₂SO₄ → Na₂SO₄ + 2 HCl↑ | Na₂SO₄ + 2 C + CaCO₃ → Na₂CO₃ + CaS + 2 CO₂↑',
    scientificExplanation: {
      summary: 'El método Leblanc era sucio, peligroso y destructivo para el medio ambiente: liberaba ácido clorhídrico gaseoso que arrasaba la vegetación y acumulaba montañas malolientes de sulfuro de calcio.',
      mechanism: 'En el proceso Leblanc, por cada tonelada de Na₂CO₃ producida se generaban casi dos toneladas de residuo sólido de CaS que desprendía sulfuro de hidrógeno (H₂S, gas con olor a huevo podrido y altamente tóxico con la lluvia). En contraste, el proceso Solvay trabaja en fase líquida/gas a temperaturas mucho más bajas, no usa ácido sulfúrico ni carbón reductor, y sus residuos son benignos en comparación.',
      whyDistractorsFail: 'No requería uranio (la química nuclear no existía en el siglo XVIII), el bicarbonato inorgánico jamás contiene fructosa ni azúcares, y su declive fue impulsado por la pura competitividad económica de costos y rendimientos.',
      practicalOrLabFact: 'La devastación ambiental del proceso Leblanc dio origen a la primera legislación de protección ambiental del mundo moderno: la "Alkali Act" británica de 1863.'
    },
    difficultyPoints: 210,
    funFact: 'Nicolas Leblanc nunca pudo enriquecerse con su invento: la Revolución Francesa confiscó su fábrica y patentes, cayendo en la ruina y el suicidio en 1806.'
  },
  {
    id: 'n3-q5',
    level: 'advanced',
    levelNumber: 3,
    levelTitle: 'Nivel 3: Síntesis Industrial y Proceso Solvay',
    category: 'Limitación Termodinámica del Método Solvay',
    question: '¿Por qué el proceso Solvay NO puede utilizarse para fabricar bicarbonato de potasio (KHCO₃) sustituyendo simplemente cloruro de sodio (NaCl) por cloruro de potasio (KCl)?',
    options: [
      'Porque el ion potasio reacciona con el amoníaco formando gas potasano radioactivo.',
      'Porque el potasio tiene una masa atómica que anula los orbitales d del carbono.',
      'Porque el bicarbonato de potasio (KHCO₃) es demasiado soluble en agua y no precipita en presencia de cloruro de amonio.',
      'Porque el KCl no se disuelve en agua a ninguna temperatura.'
    ],
    correctIndex: 2,
    chemicalEquation: 'Solubilidad(KHCO₃ a 20 °C) ≈ 333 g/L vs Solubilidad(NaHCO₃ a 20 °C) ≈ 96 g/L',
    scientificExplanation: {
      summary: 'El KHCO₃ tiene una solubilidad tres veces y media superior a la del NaHCO₃; en la salmuera amoniacal precipita primero el cloruro de amonio (NH₄Cl), imposibilitando la separación.',
      mechanism: 'La base física del proceso Solvay es que el NaHCO₃ tiene la menor solubilidad de todas las sales presentes en el equilibrio cuaternario iónico (Na⁺, NH₄⁺, Cl⁻, HCO₃⁻). Sin embargo, con el catión potasio K⁺, el orden se invierte: el KHCO₃ es altamente soluble (~33.3 g en 100 mL a 20 °C), mientras que el NH₄Cl es menos soluble. Al burbujear CO₂, precipita una mezcla impura de cloruro de amonio antes de que el bicarbonato de potasio comience a cristalizar.',
      whyDistractorsFail: 'El KCl es perfectamente soluble en agua. No existe el "gas potasano" ni el potasio interactúa de esa forma con orbitales atómicos del carbono.',
      practicalOrLabFact: 'Para producir bicarbonato de potasio industrialmente se requiere un camino diferente: hacer reaccionar hidróxido de potasio (KOH, obtenido por electrólisis cloro-álcali) directamente con dióxido de carbono gaseoso: KOH + CO₂ → KHCO₃.'
    },
    difficultyPoints: 220,
    funFact: 'Esta notable diferencia de solubilidad entre las sales homólogas de sodio y potasio es una pregunta clásica en los exámenes de oposición y olimpiadas de química.'
  },
  {
    id: 'n3-q6',
    level: 'advanced',
    levelNumber: 3,
    levelTitle: 'Nivel 3: Síntesis Industrial y Proceso Solvay',
    category: 'Yacimientos Geológicos y Minería de Trona',
    question: 'En los Estados Unidos (especialmente en Green River, Wyoming), la mayor parte del bicarbonato y carbonato de sodio no se fabrica por el proceso Solvay sino por minería. ¿Cuál es el mineral natural extraído?',
    options: [
      'Trona [trisodio hidrogenodicarbonato dihidratado, Na₃(CO₃)(HCO₃)·2H₂O].',
      'Bauxita rica en hidróxidos de aluminio.',
      'Cinabrio de sulfuro mercúrico puro.',
      'Pirita de hierro dorada estriada.'
    ],
    correctIndex: 0,
    chemicalEquation: '2 [Na₂CO₃·NaHCO₃·2H₂O](s) ⎯⎯Δ→ 3 Na₂CO₃(s) + 5 H₂O(g) + CO₂(g)↑',
    scientificExplanation: {
      summary: 'El mineral trona es un sesquicarbonato de sodio natural que contiene tanto aniones carbonato como bicarbonato en proporción 1:1, cristalizado con dos moléculas de agua.',
      mechanism: 'La cuenca del río Green en Wyoming alberga el depósito sedimentario evaporítico de trona más colosal del planeta, depositado hace 50 millones de años en el antiguo lago Gosiute durante el Eoceno. Este mineral se extrae mediante minería subterránea convencional o por disolución in situ con agua caliente, requiriendo solo un tercio de la energía de una planta Solvay sintética.',
      whyDistractorsFail: 'La bauxita es la mena principal del aluminio; el cinabrio es el mineral de mercurio (HgS); la pirita es sulfuro de hierro (FeS₂).',
      practicalOrLabFact: 'Debido a la inmensa abundancia y bajo costo de la trona en Wyoming, la última fábrica sintética del proceso Solvay en EE.UU. cerró sus operaciones en 1986.'
    },
    difficultyPoints: 200,
    funFact: 'La trona de Wyoming contiene más de 100 mil millones de toneladas de sal alcalina, suficiente para abastecer la demanda mundial durante los próximos 2,000 años.'
  },
  {
    id: 'n3-q7',
    level: 'advanced',
    levelNumber: 3,
    levelTitle: 'Nivel 3: Síntesis Industrial y Proceso Solvay',
    category: 'Purificación y Grado Alimentario USP',
    question: 'El bicarbonato de sodio precipitado directamente de la torre Solvay contiene trazas inaceptables de amoníaco (NH₄⁺) para consumo humano. ¿Cómo se obtiene el bicarbonato de sodio puro grado farmacéutico/alimentario?',
    options: [
      'Se lava la pasta con queroseno para arrastrar el amoníaco por destilación azeotrópica.',
      'Se somete a un campo electrostático de 50,000 voltios que vaporiza los protones.',
      'Se adiciona cianuro de sodio para quelar selectivamente las sales amónicas.',
      'Se disuelve carbonato de sodio puro y desamonificado en agua caliente y se vuelve a carbonatar burbujeando CO₂ ultrapuro de fermentación.'
    ],
    correctIndex: 3,
    chemicalEquation: 'Na₂CO₃(aq) + CO₂(g) + H₂O(l) → 2 NaHCO₃(s)↓ (Recarbonatación de alta pureza)',
    scientificExplanation: {
      summary: 'El grado alimentario y farmacéutico (USP/FCC) se sintetiza disolviendo carbonato de sodio puro en agua y recarbonatándolo con CO₂ de grado alimentario.',
      mechanism: 'En la planta de grado USP, el carbonato de sodio ya calcinado (que ha expulsado todo el amoníaco residual a altas temperaturas) se redisuelve en agua desmineralizada para formar una solución saturada caliente de Na₂CO₃. Esta solución se filtra y se alimenta a un reactor donde se inyecta CO₂ purificado a presión, haciendo precipitar cristales de NaHCO₃ de pureza superior al 99.7% libres de amoníaco y metales pesados.',
      whyDistractorsFail: 'El queroseno contaminaría el producto con hidrocarburos tóxicos cancerígenos. No se emplean campos electrostáticos para desprotonar sales ni mucho menos cianuro, que es un veneno letal para los alimentos.',
      practicalOrLabFact: 'El bicarbonato de sodio USP debe cumplir estrictos límites de impurezas: menos de 2 ppm de arsénico, menos de 5 ppm de metales pesados y ausencia total de olor amoniacal.'
    },
    difficultyPoints: 210,
    funFact: 'En la cocina profesional, el bicarbonato USP de alta pureza no solo sirve para hornear, sino también para ablandar garbanzos y legumbres al alcalinizar el agua de remojo.'
  },
  {
    id: 'n3-q8',
    level: 'advanced',
    levelNumber: 3,
    levelTitle: 'Nivel 3: Síntesis Industrial y Proceso Solvay',
    category: 'Captura de Carbono y Medio Ambiente Moderno',
    question: 'En las tecnologías modernas de captura, utilización y almacenamiento de carbono (CCUS), ¿cómo interviene el sistema bicarbonato de sodio?',
    options: [
      'El bicarbonato absorbe metano atmosférico convirtiéndolo en diamantes industriales.',
      'Soluciones acuosas de Na₂CO₃ capturan selectivamente el CO₂ de chimeneas industriales convirtiéndose en NaHCO₃ sólido, atrapando el gas de efecto invernadero.',
      'Se inyecta NaHCO₃ en los polos para acelerar el congelamiento de los glaciares marinos.',
      'El bicarbonato reacciona con los rayos cósmicos destruyendo el óxido nitroso en la ionosfera.'
    ],
    correctIndex: 1,
    chemicalEquation: 'Na₂CO₃(aq) + CO₂(g de chimenea) + H₂O → 2 NaHCO₃(s) (Captura mineral de CO₂)',
    scientificExplanation: {
      summary: 'El carbonato y bicarbonato sódico constituyen uno de los métodos más económicos y no tóxicos para la captura directa de CO₂ en fuentes industriales fijas.',
      mechanism: 'Las soluciones alcalinas de carbonato sódico actúan como lavadores químicos ("scrubbers") de gases de combustión. Al hacer pasar los humos industriales por la torre de absorción, el CO₂ reacciona espontáneamente con los iones carbonato e hidróxido para fijarse en forma de bicarbonato de sodio. Este bicarbonato puede comercializarse como reactivo o regenerarse liberando CO₂ concentrado para su confinamiento geológico permanente.',
      whyDistractorsFail: 'El bicarbonato no reacciona con metano ni forma diamantes; no se dispersa en los polos ni interactúa con la ionosfera.',
      practicalOrLabFact: 'A diferencia de las aminas orgánicas como la monoetanolamina (MEA), el carbonato de sodio no se degrada térmicamente con el oxígeno ni genera subproductos cancerígenos como nitrosaminas.'
    },
    difficultyPoints: 210,
    funFact: 'Empresas de captura directa de aire (DAC) como Carbon Engineering utilizan ciclos de carbonato/hidróxido para extraer CO₂ del aire a escala de megatoneladas.'
  },
  {
    id: 'n3-q9',
    level: 'advanced',
    levelNumber: 3,
    levelTitle: 'Nivel 3: Síntesis Industrial y Proceso Solvay',
    category: 'Tratamiento de Gases de Combustión y Desulfuración',
    question: 'En las centrales termoeléctricas e incineradoras de residuos, ¿para qué se inyecta polvo ultrafino de bicarbonato de sodio en los conductos de escape (proceso DSI)?',
    options: [
      'Para incrementar el color negro del humo para camuflaje militar.',
      'Para enriquecer las cenizas con nitrógeno fertilizante inflamable.',
      'Para neutralizar en seco gases ácidos altamente corrosivos y contaminantes como el dióxido de azufre (SO₂) y el ácido clorhídrico (HCl).',
      'Para catalizar la combustión incompleta aumentando el hollín.'
    ],
    correctIndex: 2,
    chemicalEquation: '2 NaHCO₃ + SO₂ + ½ O₂ → Na₂SO₄(s) + 2 CO₂↑ + H₂O | NaHCO₃ + HCl → NaCl(s) + CO₂↑ + H₂O',
    scientificExplanation: {
      summary: 'La inyección seca de sorbente (DSI) con bicarbonato de sodio neutraliza instantáneamente los gases ácidos de combustión con eficiencias superiores al 95%.',
      mechanism: 'Cuando el polvo de NaHCO₃ se inyecta en el flujo de gases calientes (140 °C - 250 °C), sufre una termólisis casi explosiva ("flash calcination") liberando agua y CO₂. Esta desgasificación interna fractura las partículas en una estructura esponjosa de altísima porosidad y área superficial específica de Na₂CO₃ naciente, la cual reacciona en milisegundos con SO₂, SO₃, HCl y HF formando sulfatos y cloruros de sodio sólidos que se retienen en los filtros de mangas.',
      whyDistractorsFail: 'No tiene fines militares de camuflaje, no aporta nitrógeno (el NaHCO₃ no contiene N) y busca erradicar la contaminación, no aumentarla.',
      practicalOrLabFact: 'El bicarbonato sódico activado supera a la cal apagada tradicional en la eliminación de HCl y trióxido de azufre (SO₃), evitando la corrosión de las chimeneas y la formación de lluvia ácida.'
    },
    difficultyPoints: 220,
    funFact: 'La torre Eiffel de París fue sometida a micro-granallado con bicarbonato de sodio en sus restauraciones para retirar capas antiguas de pintura sin erosionar el hierro pudelado original.'
  },

  // =========================================================================
  // NIVEL 4: BIOQUÍMICA, MEDICINA Y SISTEMAS BUFFER (EXPERTO)
  // =========================================================================
  {
    id: 'n4-q1',
    level: 'expert',
    levelNumber: 4,
    levelTitle: 'Nivel 4: Bioquímica, Medicina y Sistemas Buffer',
    category: 'Fisiología Humana y Amortiguadores Sanguíneos',
    question: 'En el plasma sanguíneo humano a temperatura corporal (37 °C) con un pH arterial normal de 7.40, ¿cuál es la relación molar exacta entre la concentración de ion bicarbonato ([HCO₃⁻]) y el dióxido de carbono disuelto ([CO₂]) según la ecuación de Henderson-Hasselbalch (pKₐ = 6.1)?',
    options: [
      'Una relación exacta de 1 a 1 (igual concentración de ácido y base conjugada).',
      'Una relación de 1 a 20 (20 veces más ácido carbónico que bicarbonato).',
      'Una relación de 20 a 1 (20 moléculas de HCO₃⁻ por cada 1 de CO₂ disuelto).',
      'Una relación de 100 a 1 (el CO₂ está prácticamente ausente en arterias).'
    ],
    correctIndex: 2,
    chemicalEquation: 'pH = 6.1 + log₁₀([HCO₃⁻] / 0.0306·PaCO₂) ⇒ 7.40 = 6.1 + log₁₀(20) = 6.1 + 1.30',
    scientificExplanation: {
      summary: 'La relación fisiológica [HCO₃⁻] / [CO₂ disuelto] es de 20:1, lo que permite mantener el pH de la sangre estrictamente en 7.40.',
      mechanism: 'La ecuación de Henderson-Hasselbalch para el sistema amortiguador bicarbonato es:\npH = pKₐ + log₁₀([HCO₃⁻] / [s·PaCO₂]).\nA 37 °C, el pKa del sistema es 6.1. Sustituyendo los valores fisiológicos normales: [HCO₃⁻] = 24 mEq/L y PaCO₂ = 40 mmHg (con coeficiente de solubilidad s = 0.03 mmHg⁻¹·mM, resultando en 1.2 mM de CO₂ disuelto):\npH = 6.1 + log₁₀(24 / 1.2) = 6.1 + log₁₀(20) = 6.1 + 1.301 = 7.40.',
      whyDistractorsFail: 'Una relación 1:1 situaría el pH sanguíneo en 6.1, incompatible con la vida humana (letal por debajo de 6.8 o por encima de 7.8). Una relación 1:20 generaría un pH de 4.8.',
      practicalOrLabFact: 'Tener una relación 20:1 cargada hacia la base conjugada es una ventaja evolutiva colosal: el metabolismo celular genera constantemente ácidos metabólicos (láctico, cetoácidos, sulfúrico), por lo que el organismo necesita un inmenso colchón de reserva alcalina para neutralizarlos.'
    },
    difficultyPoints: 300,
    funFact: 'Aunque el pKa de 6.1 está alejado del pH 7.4 (donde teóricamente un buffer cerrado es menos eficaz), el amortiguador bicarbonato es el más poderoso del cuerpo porque es un "sistema abierto": los pulmones regulan el CO₂ en segundos y los riñones el HCO₃⁻ en horas.'
  },
  {
    id: 'n4-q2',
    level: 'expert',
    levelNumber: 4,
    levelTitle: 'Nivel 4: Bioquímica, Medicina y Sistemas Buffer',
    category: 'Enzimología y Transporte de Gases',
    question: '¿Qué metal de transición esencial se encuentra coordinado en el sitio activo de la enzima anhidrasa carbónica, responsable de acelerar la hidratación del CO₂ en bicarbonato a un millón de reacciones por segundo en los glóbulos rojos?',
    options: [
      'Hierro (Fe²⁺)',
      'Zinc (Zn²⁺)',
      'Cobre (Cu²⁺)',
      'Cobalto (Co³⁺)'
    ],
    correctIndex: 1,
    chemicalEquation: 'CO₂ + H₂O ⇌(Anhidrasa Carbónica - Zn²⁺)⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻',
    scientificExplanation: {
      summary: 'La anhidrasa carbónica utiliza un catión zinc divalente (Zn²⁺) coordinado por tres residuos de histidina para ionizar una molécula de agua y fijar el CO₂.',
      mechanism: 'El catión Zn²⁺ actúa como un potente ácido de Lewis, reduciendo el pKa de la molécula de agua coordinada de 14 a aproximadamente 7. Esto genera un ion hidróxido (Zn-OH⁻) nucleofílico a pH fisiológico neutro. Este hidróxido ataca el carbono electrofílico del CO₂, transformándolo instantáneamente en ion bicarbonato (HCO₃⁻), el cual se libera al medio para repetir el ciclo con una de las constantes cinéticas catalíticas más altas conocidas (kcat ~10⁶ s⁻¹).',
      whyDistractorsFail: 'El hierro está en el grupo hemo de la hemoglobina; el cobre en la citocromo c oxidasa; el cobalto en la cobalamina (vitamina B12). Ninguno de ellos cataliza la hidratación del CO₂ en la anhidrasa.',
      practicalOrLabFact: 'Fármacos como la acetazolamida inhiben la anhidrasa carbónica en el túbulo proximal renal, provocando pérdida de bicarbonato en la orina (bicarbonaturia) para tratar el mal de montaña y el glaucoma.'
    },
    difficultyPoints: 300,
    funFact: 'Sin anhidrasa carbónica, la conversión espontánea de CO₂ en bicarbonato tardaría varios minutos, provocando asfixia celular inmediata en los tejidos periféricos.'
  },
  {
    id: 'n4-q3',
    level: 'expert',
    levelNumber: 4,
    levelTitle: 'Nivel 4: Bioquímica, Medicina y Sistemas Buffer',
    category: 'Fisiología Celular del Eritrocito',
    question: 'En la membrana del eritrocito, el transportador iónico AE1 (Banda 3) expulsa el bicarbonato generado hacia el plasma para transportarlo a los pulmones. ¿Qué ion se intercambia en contrasentido para mantener la electroneutralidad (fenómeno de Hamburger)?',
    options: [
      'Potasio (K⁺), bombeado por transporte pasivo sin canal.',
      'Calcio (Ca²⁺), en intercambio electrogénico con gasto de ATP.',
      'Lactato deshidrogenado acoplado a NAD⁺.',
      'Cloruro (Cl⁻), conocido fisiológicamente como el "desplazamiento de cloruro" (chloride shift).'
    ],
    correctIndex: 3,
    chemicalEquation: 'Intercambiador aniónico AE1: 1 HCO₃⁻(intracelular) ⇌ 1 Cl⁻(extracelular)',
    scientificExplanation: {
      summary: 'El fenómeno de Hamburger o desplazamiento de cloruro intercambia un anión bicarbonato por un anión cloruro a través de la proteína de membrana Banda 3 (SLC4A1).',
      mechanism: 'En los capilares de los tejidos metabólicamente activos, el CO₂ entra al glóbulo rojo y se convierte en HCO₃⁻ y H⁺. El H⁺ es amortiguado por la desoxihemoglobina. Para que la reacción continúe desplazándose hacia la derecha, el bicarbonato debe salir al plasma. La proteína AE1 permite la salida facilitada de un anión HCO₃⁻ a cambio de la entrada de un anión Cl⁻ hacia el interior del hematíe, preservando exactamente el potencial de membrana eléctrico transeritrocitario.',
      whyDistractorsFail: 'El potasio y el calcio son cationes (cargas positivas); intercambiar un anión negativo por un catión positivo desestabilizaría drásticamente el potencial de membrana.',
      practicalOrLabFact: 'En los pulmones, donde la presión parcial de CO₂ es baja, el proceso se invierte exactamente: el bicarbonato plasmático ingresa al eritrocito, el cloruro sale, y el bicarbonato se reconvierte en CO₂ gaseoso que exhalamos.'
    },
    difficultyPoints: 310,
    funFact: 'La proteína Banda 3 constituye hasta el 25% de todas las proteínas de la membrana de un glóbulo rojo, con aproximadamente 1 millón de copias por célula.'
  },
  {
    id: 'n4-q4',
    level: 'expert',
    levelNumber: 4,
    levelTitle: 'Nivel 4: Bioquímica, Medicina y Sistemas Buffer',
    category: 'Nefrología y Fisiología Renal',
    question: 'Cada día los glomérulos renales filtran aproximadamente 4,320 mEq de bicarbonato de sodio. ¿En qué segmento de la nefrona se reabsorbe la gran mayoría (~80-85%) de este bicarbonato para evitar la acidosis letal?',
    options: [
      'Túbulo contorneado proximal (TCP)',
      'Asa de Henle delgada descendente',
      'Túbulo colector cortical con células intercaladas tipo B',
      'Uréter distal papilar'
    ],
    correctIndex: 0,
    chemicalEquation: 'Reabsorción proximal: Na⁺/H⁺ (NHE3) secreta H⁺ → H⁺ + HCO₃⁻ ⇌ H₂CO₃ ⎯(AC IV)→ H₂O + CO₂',
    scientificExplanation: {
      summary: 'El túbulo contorneado proximal (TCP) reabsorbe entre el 80% y el 85% de toda la carga filtrada de bicarbonato mediante secreción de protones y anhidrasa carbónica apical y basolateral.',
      mechanism: 'El anión HCO₃⁻ no puede cruzar directamente la membrana apical del túbulo proximal. Por ello, el intercambiador NHE3 bombea un protón (H⁺) al lumen a cambio de un Na⁺. El H⁺ se une al bicarbonato filtrado formando H₂CO₃, el cual es deshidratado por la anhidrasa carbónica de borde en cepillo (tipo IV) en H₂O y CO₂. Estos cruzan la membrana celular por difusión simple. Dentro de la célula, la anhidrasa carbónica intracelular (tipo II) regenera HCO₃⁻, que sale a la sangre por el cotransportador basolateral NBCe1 (Na⁺/3HCO₃⁻).',
      whyDistractorsFail: 'El asa descendente de Henle es permeable al agua pero no tiene transportadores activos para reabsorber bicarbonato masivo. El túbulo colector maneja solo el 5-10% final mediante acidificación activa por H⁺-ATPasa. El uréter es un conducto muscular excretor sin función de transporte tubular.',
      practicalOrLabFact: 'Las mutaciones genéticas en el transportador basolateral NBCe1 o en la anhidrasa carbónica causan Acidosis Tubular Renal Proximal (Tipo 2), caracterizada por raquitismo, retraso del crecimiento y acidosis metabólica hiperclorémica severa.'
    },
    difficultyPoints: 320,
    funFact: 'Si los riñones fallaran en reabsorber bicarbonato durante solo 4 horas, la reserva alcalina corporal se vaciaría provocando un colapso cardiovascular mortal.'
  },
  {
    id: 'n4-q5',
    level: 'expert',
    levelNumber: 4,
    levelTitle: 'Nivel 4: Bioquímica, Medicina y Sistemas Buffer',
    category: 'Medicina de Urgencias y Toxicología',
    question: 'En la intoxicación aguda potencialmente letal por antidepresivos tricíclicos (como amitriptilina) o por ácido acetilsalicílico (aspirina), ¿cuál es el mecanismo terapéutico clave de la administración intravenosa de bicarbonato de sodio?',
    options: [
      'Descompone el fármaco en monóxido de carbono inofensivo mediante pirólisis biológica.',
      'Sintetiza anticuerpos monoclonales endógenos en cuestión de milisegundos.',
      'Alcaliniza el suero sanguíneo y la orina: desacopla el fármaco de los canales rápidos de sodio cardíacos (alcalinización sérica) y atrapa los salicilatos ionizados en la orina impidiendo su reabsorción renal (atrapamiento iónico).',
      'Bloquea los receptores opioides kappa periféricos en el sistema nervioso autónomo.'
    ],
    correctIndex: 2,
    chemicalEquation: 'Salicilato-H + HCO₃⁻ ⇌ Salicilato⁻ (ionizado e incapaz de cruzar membranas lipídicas)',
    scientificExplanation: {
      summary: 'El bicarbonato IV produce alcalinización sérica (estrecha el QRS cardíaco en intoxicación por tricíclicos) y alcalinización urinaria (promueve la eliminación forzada de ácidos débiles).',
      mechanism: '1. En sobredosis de antidepresivos tricíclicos: bloquean los canales de Na⁺ dependientes de voltaje en el miocardio (QRS ensanchado >100 ms, arritmias ventriculares letales). La infusión de NaHCO₃ eleva el pH sérico a 7.50-7.55 (disminuyendo la afinidad del fármaco por el canal) y aporta una alta carga de Na⁺ extracelular que supera competitivamente el bloqueo del canal.\n2. En intoxicación por aspirina (ácido débil, pKa = 3.5): alcalinizar la orina a pH 7.5-8.0 desplaza el equilibrio hacia la forma ionizada hidrosoluble (Salicilato⁻). Al estar cargado eléctricamente, no puede atravesar las membranas lipídicas de las células tubulares renales por difusión, quedando "atrapado" y expulsándose rápidamente en la diuresis.',
      whyDistractorsFail: 'El bicarbonato no provoca pirólisis en el organismo vivo (requeriría temperaturas superiores a 200 °C), no produce anticuerpos ni es un antagonista de receptores opioides (como la naloxona).',
      practicalOrLabFact: 'En toxicología clínica, mantener el pH urinario por encima de 7.5 con bicarbonato puede multiplicar por más de 10 veces la tasa de depuración renal de salicilatos y fenobarbital.'
    },
    difficultyPoints: 320,
    funFact: 'El bicarbonato de sodio intravenoso también salva vidas en emergencias de hiperpotasemia severa al inducir la entrada rápida de K⁺ al interior de las células mediante el intercambiador H⁺/K⁺.'
  },
  {
    id: 'n4-q6',
    level: 'expert',
    levelNumber: 4,
    levelTitle: 'Nivel 4: Bioquímica, Medicina y Sistemas Buffer',
    category: 'Gases Arteriales y Compensación Fisiológica',
    question: 'En un paciente con acidosis metabólica primaria (por ejemplo, por cetoacidosis diabética no controlada con [HCO₃⁻] disminuido a 10 mEq/L), ¿cuál es la respuesta compensatoria fisiológica inmediata del centro respiratorio y cómo se predice la PaCO₂ esperada (fórmula de Winters)?',
    options: [
      'Hipoventilación severa reteniendo todo el CO₂ para acidificar aún más el medio.',
      'Hiperventilación alveolar rápida y profunda (respiración de Kussmaul) para descender la PaCO₂: PaCO₂ esperada = 1.5 × [HCO₃⁻] + 8 ± 2.',
      'Parada respiratoria refleja mediada por los barorreceptores carotídeos.',
      'Conversión de la respiración pulmonar en fotosíntesis de ATP dérmica.'
    ],
    correctIndex: 1,
    chemicalEquation: 'Fórmula de Winters: PaCO₂ = (1.5 × [HCO₃⁻]) + 8 ± 2 mmHg',
    scientificExplanation: {
      summary: 'El organismo compensa la pérdida de bicarbonato hiperventilando intensamente para expulsar CO₂ ácido, calculándose la PaCO₂ esperada mediante la fórmula de Winters.',
      mechanism: 'Los quimiorreceptores periféricos (en cuerpos carotídeos) y centrales detectan el descenso de pH sanguíneo por el exceso de protones libres no amortiguados. Esto estimula el centro respiratorio del bulbo raquídeo aumentando el volumen corriente y la frecuencia ventilatoria (patrón de Kussmaul). Al expulsar CO₂ volátil, disminuye el denominador en la ecuación de Henderson-Hasselbalch, acercando la relación [HCO₃⁻]/[CO₂] de nuevo a 20:1 y evitando que el pH caiga a rangos de paro cardíaco.',
      whyDistractorsFail: 'El cuerpo jamás hipoventilaría ante una acidosis metabólica primaria, ya que retener CO₂ sumaría una acidosis respiratoria letal al cuadro.',
      practicalOrLabFact: 'Si en un paciente con [HCO₃⁻] = 10 mEq/L la PaCO₂ medida en la gasometría es mayor de 25 mmHg (según Winters: 1.5×10 + 8 = 23 ± 2 mmHg), indica que el paciente tiene además un fallo respiratorio concomitante (trastorno ácido-base mixto).'
    },
    difficultyPoints: 310,
    funFact: 'La respiración de Kussmaul fue descrita por primera vez en 1874 por el médico alemán Adolf Kussmaul en pacientes moribundos con cetoacidosis diabética grave.'
  },
  {
    id: 'n4-q7',
    level: 'expert',
    levelNumber: 4,
    levelTitle: 'Nivel 4: Bioquímica, Medicina y Sistemas Buffer',
    category: 'Fisiología del Deporte y Rendimiento Anaeróbico',
    question: 'En atletas de élite en pruebas de alta intensidad de 1 a 4 minutos (como 400m u 800m lisos, remo o natación de 200m), ¿en qué consiste la técnica ergogénica conocida como "soda loading" o sobrecarga de bicarbonato?',
    options: [
      'Inyectar bicarbonato intratesticular para triplicar la producción de testosterona.',
      'Inhalar polvo de bicarbonato para quemar el epitelio alveolar y forzar hipoxemia.',
      'Sustituir el agua corporal por solución isotónica de carbonato de calcio anhidro.',
      'Ingerir ~0.3 g/kg de peso corporal de NaHCO₃ 60-90 minutos antes de la prueba para elevar el bicarbonato extracelular y el pH sanguíneo, acelerando la salida de H⁺ del músculo fatigado.'
    ],
    correctIndex: 3,
    chemicalEquation: 'H⁺(intracelular miocito) + HCO₃⁻(extracelular) ⇌ H₂CO₃ → H₂O + CO₂ (retardo de acidosis muscular)',
    scientificExplanation: {
      summary: 'El consumo agudo de ~0.3 g/kg de NaHCO₃ aumenta la capacidad amortiguadora del espacio extracelular, retrasando la fatiga muscular inducida por acumulación de protones (H⁺).',
      mechanism: 'Durante el ejercicio anaeróbico glucolítico supramáximo, la hidrólisis acelerada de ATP y la glucólisis anaeróbica generan una acumulación masiva de iones H⁺, descendiendo el pH intramuscular de 7.0 a cerca de 6.4. Esto inhibe a la enzima fosfofructocinasa (PFK-1) y desensibiliza a la troponina C frente al calcio, provocando agotamiento contráctil. Al elevar el pH extracelular y el gradiente de protones mediante el cotransportador monocarboxilato (MCT4, cotransporte lactato⁻/H⁺), los protones son expulsados más rápido fuera de la fibra muscular.',
      whyDistractorsFail: 'No tiene nada que ver con inyecciones de testosterona, inhalaciones peligrosas ni sustitución del agua corporal.',
      practicalOrLabFact: 'El Comité Olímpico Internacional (COI) y la Agencia Mundial Antidopaje (WADA) clasifican al bicarbonato de sodio como una ayuda ergogénica de Nivel A (evidencia científica robusta y permitida), aunque su efecto secundario más común es el malestar gastrointestinal y la diarrea osmótica aguda si no se ingiere con suficiente agua y carbohidratos.'
    },
    difficultyPoints: 310,
    funFact: 'Un corredor de 70 kg consume unos 21 gramos de bicarbonato disueltos en un litro de agua para lograr un incremento del rendimiento medible de entre 1.5% y 2.5%, lo que en atletismo de élite significa subir al podio olímpico.'
  },
  {
    id: 'n4-q8',
    level: 'expert',
    levelNumber: 4,
    levelTitle: 'Nivel 4: Bioquímica, Medicina y Sistemas Buffer',
    category: 'Nefrología y Hemodiálisis',
    question: 'En los pacientes con insuficiencia renal crónica terminal sometidos a hemodiálisis, ¿por qué el líquido de diálisis moderno utiliza bicarbonato en lugar de lactato como agente amortiguador alcalinizante?',
    options: [
      'Porque el bicarbonato repone directamente la reserva alcalina sin requerir biotransformación hepática previa, evitando la hiperlactatemia y la inestabilidad hemodinámica.',
      'Porque el lactato explota espontáneamente al entrar en contacto con el dializador.',
      'Porque el bicarbonato contiene hierro que estimula la síntesis de eritropoyetina.',
      'Porque el bicarbonato impide que la sangre se coagule al degradar la fibrina en éter.'
    ],
    correctIndex: 0,
    chemicalEquation: 'HCO₃⁻(líquido de diálisis ~35 mEq/L) ⎯difusión pasiva transmembrana→ Plasma paciente (~18 mEq/L)',
    scientificExplanation: {
      summary: 'El bicarbonato en el líquido dializador corrige directamente la acidosis urémica crónica por difusión pasiva sin depender de la función hepática del paciente.',
      mechanism: 'Históricamente se usaba acetato o lactato porque el bicarbonato en soluciones concentradas precipitaba como carbonato de calcio o magnesio en los tanques de preparación. Sin embargo, el lactato y el acetato requieren oxidación hepática metabólica para producir bicarbonato (consumiendo oxígeno y deprimiendo el miocardio en pacientes ancianos o cardiópatas). Los monitores de diálisis modernos superaron esto mediante sistemas de mezcla de doble concentrado en tiempo real (separando el bicarbonato en polvo del concentrado ácido de calcio), infundiendo bicarbonato fisiológico directo.',
      whyDistractorsFail: 'El lactato no explota en los dializadores, el bicarbonato no contiene hierro ni degrada la fibrina en éter (para la anticoagulación del circuito extracorpóreo se utiliza heparina).',
      practicalOrLabFact: 'El baño de diálisis suele configurarse con una concentración de bicarbonato de 32 a 38 mEq/L, superior a la fisiológica, para corregir el déficit acumulado durante los días interdialíticos.'
    },
    difficultyPoints: 310,
    funFact: 'Más de 3 millones de personas con fallo renal terminal en todo el mundo sobreviven diariamente gracias al equilibrio de difusión transmembrana de este humilde compuesto inorgánico.'
  },
  {
    id: 'n4-q9',
    level: 'expert',
    levelNumber: 4,
    levelTitle: 'Nivel 4: Bioquímica, Medicina y Sistemas Buffer',
    category: 'Gastroenterología Molecular y Secreción Pancreática',
    question: 'El jugo pancreático exocrino vertido al duodeno es el líquido biológico más alcalino del cuerpo humano (pH ~8.0-8.3), conteniendo hasta 140 mEq/L de bicarbonato. ¿Qué transportador apical de canal de cloruro, mutado en la fibrosis quística, es esencial para esta secreción?',
    options: [
      'Acuaporina-1 de poro estricto de agua',
      'CFTR (Cystic Fibrosis Transmembrane Conductance Regulator)',
      'Canal de sodio epitelial ENaC bloqueado por amilorida',
      'Bomba de protones H⁺/K⁺-ATPasa de las células parietales'
    ],
    correctIndex: 1,
    chemicalEquation: 'Célula ductal pancreática: CFTR recicla Cl⁻ al lumen ⇌ SLC26A6 (Intercambiador Cl⁻/HCO₃⁻ secreta HCO₃⁻)',
    scientificExplanation: {
      summary: 'El canal CFTR provee el cloruro luminal necesario para que el intercambiador aniónico SLC26A6 vierta masivas cantidades de bicarbonato al duodeno.',
      mechanism: 'Las células de los conductos pancreáticos secretan bicarbonato estimuladas por la hormona secretina. El canal CFTR se abre dependiente de AMPc y bombea Cl⁻ hacia la luz del conducto. Ese Cl⁻ es inmediatamente utilizado por el intercambiador Cl⁻/HCO₃⁻ apical para introducir Cl⁻ y expulsar HCO₃⁻ al jugo pancreático en concentraciones hasta 5 veces superiores a las del plasma. Esto neutraliza el quimo ácido que sale del estómago a pH 1.5-2.0, protegiendo la mucosa duodenal y estableciendo el pH óptimo (~7.5-8.0) para que actúen las enzimas digestivas (tripsina, amilasa, lipasa).',
      whyDistractorsFail: 'En la fibrosis quística por mutación en CFTR (comúnmente ΔF508), la secreción de bicarbonato y agua colapsa, resultando en un moco pancreático espeso que ocluye los conductos, provocando insuficiencia pancreática exocrina y desnutrición severa.',
      practicalOrLabFact: 'La acuaporina transporta solo agua; el ENaC reabsorbe sodio en el colon y riñón; la H⁺/K⁺-ATPasa secreta ácido en el estómago en lugar de alcalinizar.'
    },
    difficultyPoints: 330,
    funFact: 'El páncreas humano de un adulto secreta entre 1 y 2 litros de líquido rico en bicarbonato cada día, una auténtica fábrica química alcalinizante interna.'
  }
];
