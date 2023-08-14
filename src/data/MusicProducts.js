const listProducts = [
    {
      id: 1001,
      name: "Afinador Digital Cromático Pinza Korg Griptune",
      brand: "Korg",
      category: "Afinadores",
      description: "El clip que sujeta el afinador al clavijero de la guitarra utiliza un mecanismo de pinza que puede ser colocado fácilmente. Esto te permite afinar de manera natural sin molestarte al interpretar. Puesto que el clip puede abrirse en un rango de 14-22 mm (0.55”– 0,87”), se puede fijar a una amplia variedad de instrumentos, desde guitarras eléctricas hasta guitarras clásicas.",
      image:
        "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928515/StringsAndKeys/1001_rx2ca0.jpg",
      product_status: true,
      quantity: 2000,
      price: 11159,
    },
    {
        id: 1002,
        name: "Afinador Digital Cromático Pinza Korg PitchCrow-G",
        brand: "Korg",
        category: "Afinadores",
        description: "El PitchCrow-G es el más compacto de todos los afinadores con clip y está completamente equipado. Su diseño extraplano incluye todo lo necesario para afinar con precisión y rapidez, y es aproximadamente un 20% más pequeño y más ligero que los modelos anteriores de KORG.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928515/StringsAndKeys/1002_dxucqv.jpg",
        product_status: true,
        quantity: 2000,
        price: 10070,
      },
      {
        id: 1003,
        name: "Afinador Digital Cromático Pinza Korg PitchCrow-G",
        brand: "Korg",
        category: "Afinadores",
        description: "Escala: 12 notas de igual temperamento",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928515/StringsAndKeys/1003_nuajz0.jpg",
        product_status: true,
        quantity: 2000,
        price: 7368,
      },
      {
        id: 1004,
        name: "Afinador Digital Cromático Pinza Korg PitchCrow-G",
        brand: "Korg",
        category: "Afinadores",
        description: "El Rimpitch-C2 es un afinador que se coloca en el interior de la boca de la guitarra. El diseño extremadamente delgado y compacto del sintonizador permite que se instale de manera discreta, y dado que el medidor de afinación se encuentra dentro de su campo de visión natural, puede mirar casualmente el medidor de afinación mientras toca. Es una opción ideal para cualquier guitarrista acústico que no quiera distraerse de su interpretación con un afinador de clip.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928515/StringsAndKeys/1004_fcyzko.jpg",
        product_status: true,
        quantity: 2000,
        price: 13429,
      },
      {
        id: 1005,
        name: "Correa Cinta Negra Tipo Di Marzio Tijuana Dm21",
        brand: "Tijuana",
        category: "Correas",
        description: "Correa Tipo DIMARZIO con traba de seguridad",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928515/StringsAndKeys/1005_piq59k.jpg",
        product_status: true,
        quantity: 2000,
        price: 3080,
      },
      {
        id: 1006,
        name: "Correa Acordeón Ecocuero Simil Carpincho Tijuana Ac 350-3",
        brand: "Tijuana",
        category: "Correas",
        description: "Correa para Acordeón (Fina)",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928515/StringsAndKeys/1006_xya8u4.jpg",
        product_status: true,
        quantity: 2000,
        price: 9132,
      },
      {
        id: 1007,
        name: "Correa para guitarra o bajo Negra puntera de cuero DON CORREA CPCN",
        brand: "Don Correa",
        category: "Correas",
        description: "Correa para Guitarra con puntera de Cuero",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928515/StringsAndKeys/1007_hwqzlk.jpg",
        product_status: true,
        quantity: 2000,
        price: 1490,
      },
      {
        id: 1008,
        name: "Funda Guitarra Criolla Clásica Tela De Avión Linea Amarilla Tiver 010CR",
        brand: "Tiver",
        category: "Fundas",
        description: "Funda Para Guitarra Criolla/Clásica",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928515/StringsAndKeys/1008_s9o035.jpg",
        product_status: true,
        quantity: 2000,
        price: 5455,
      },
      {
        id: 1009,
        name: "Cobertor Para Piano Teclado 7/8 Octavas 88 Teclas Kemuel",
        brand: "Kemuel",
        category: "Fundas",
        description: "Cobertor Para Piano 7 Octavas 88 Teclas",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928515/StringsAndKeys/1009_ngg832.jpg",
        product_status: true,
        quantity: 2000,
        price: 11641,
      },
      {
        id: 1010,
        name: "Funda Bandoneón Mochila Super Acolchada Kemuel FBANDW",
        brand: "Kemuel",
        category: "Fundas",
        description: "Funda de Bandoneon Tipo Warwick",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928515/StringsAndKeys/1010_vjyr3u.jpg",
        product_status: true,
        quantity: 2000,
        price: 24833,
      },
      {
        id: 1011,
        name: "Funda Guitarra Eléctrica Acolchada Linea Roja Tiver 012ETA",
        brand: "Tiver",
        category: "Fundas",
        description: "Funda Para Guitarra Eléctrica.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928515/StringsAndKeys/1011_hynib2.jpg",
        product_status: true,
        quantity: 2000,
        price: 5455,
      },
      {
        id: 1012,
        name: "Porta Púa Jim Dunlop 5000 BK",
        brand: "Jim Dunlop",
        category: "Púas",
        description: "Con cinta doble faz para correcta adhesión sin dañar tu instrumento",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928515/StringsAndKeys/1012_mh3m6o.jpg",
        product_status: true,
        quantity: 2000,
        price: 2381,
      },
      {
        id: 1013,
        name: "Púas Jim Dunlop John Petrucci Firmada Jazz III Ultex 1.5 427PJP15",
        brand: "Jim Dunlop",
        category: "Púas",
        description: "Diseñado según las propias especificaciones de la leyenda del rock progresivo, el John Petrucci Jazz III de 1.5 mm está hecho de Ultex y presenta un agarre con el logotipo JP elevado y una punta pulida pulida.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928516/StringsAndKeys/1013_w6vdpp.jpg",
        product_status: true,
        quantity: 2000,
        price: 8576,
      },
      {
        id: 1014,
        name: "Púas Triangulares 0.73 DAndrea RD355 .73MD Pack X 3 Unidades",
        brand: "DAndrea",
        category: "Púas",
        description: "Pack de Púas Triangulares",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928516/StringsAndKeys/1014_hluvrt.jpg",
        product_status: true,
        quantity: 2000,
        price: 793,
      },
      {
        id: 1015,
        name: "Puas set Jazz III 6 unidades Kirk Hammett JIM DUNLOP 47PKH3N",
        brand: "Kirk Hammett",
        category: "Púas",
        description: "Este modelo signature de Jazz III presenta el recorte en forma de V personalizado de Kirk para un mejor manejo.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928516/StringsAndKeys/1015_hvc9nc.jpg",
        product_status: true,
        quantity: 2000,
        price: 8882,
      },
      {
        id: 1016,
        name: "Cable Canon Macho A Plug Mono 1.5 Metros Kwc 115 Neon XLR M PL",
        brand: "Neon",
        category: "Cables",
        description: "Bajo nivel de ruido, terminación externa envainada en PVC.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928516/StringsAndKeys/1016_sbqdew.jpg",
        product_status: true,
        quantity: 2000,
        price: 4040,
      },
      {
        id: 1017,
        name: "Cable Interpedal 25Cm Kwc 290 Iron Plug Plug Angular",
        brand: "Kwc",
        category: "Cables",
        description: "Cable de calidad superior en combinación con una longitud exacta para cada requerimiento, es ideal para conectarse a pedale, eefectos, presentaciones en vivo y equipos de procesamiento de señales.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928516/StringsAndKeys/1017_xrmwvy.jpg",
        product_status: true,
        quantity: 2000,
        price: 7539,
      },
      {
        id: 1018,
        name: "Cable Bafle Plug Mono A Plug Mono 6 Metros Kwc 0143z ZIPP",
        brand: "Kwc",
        category: "Cables",
        description: "Construido para el músico exigente, para grabación en estudio y presentaciones en vivo en situaciones de las más demandadas, los cables KWC ofrecen una durabilidad única, transfiriendo con exactitud los detalles sutiles de su señal.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928516/StringsAndKeys/1018_gqzffr.jpg",
        product_status: true,
        quantity: 2000,
        price: 4796,
      },
      {
        id: 1019,
        name: "Cable Plug Mono A Plug Mono 3 Metros Daddario PW-CGT-10 Recto",
        brand: "Daddario",
        category: "Cables",
        description: "El cable DAddario PW-CGT-10 es un cable de instrumento de alta calidad diseñado para brindar una conexión limpia y clara entre tu guitarra o bajo y tu amplificador.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928516/StringsAndKeys/1019_wb6cho.jpg",
        product_status: true,
        quantity: 2000,
        price: 8542,
      },
      {
        id: 1020,
        name: "Cable Canon Hembra A Plug Mono 3 Metros Plug Kwc 700 Super Neon XLR PL",
        brand: "Kwc",
        category: "Cables",
        description: "La línea SUPER Neón de KWC es muy versátil y ofrece a los consumidores una excelente relación Precio-Calidad.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928517/StringsAndKeys/1020_gd4ytu.jpg",
        product_status: true,
        quantity: 2000,
        price: 6087,
      },
      {
        id: 1021,
        name: "Piano Eléctrico 88 Teclas Pesadas Sensitivo Con Bluetooth 7/8 Octavas + Fuente NUX NPK-10",
        brand: "NUX",
        category: "Teclados",
        description: "Para proporcionar la sensación de piano más auténtica, NUX NPK-10 está equipado con funciones de teclado avanzadas: los sensores triples superiores WKJ-03, acción de martillo escalonada, teclas de escape y tacto de marfil, y 5 tipos de sensibilidad táctil para adaptarse a diferentes estilos.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928517/StringsAndKeys/1021_kodwap.jpg",
        product_status: true,
        quantity: 2000,
        price: 347151,
      },
      {
        id: 1022,
        name: "Teclado 61 Teclas 5/8 Octavas Sensitivo 400 Sonidos + Fuente De Regalo CASIO CT-S300",
        brand: "CASIO",
        category: "Teclados",
        description: "Teclado | 61 teclas standard | Sensitivas | 400 sonidos | 77 ritmos | 48 voces de polifonía | USB micro B | APP | Dance Music Mode| Pitch Bend",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928517/StringsAndKeys/1022_whezsu.jpg",
        product_status: true,
        quantity: 2000,
        price: 131191,
      },
      {
        id: 1023,
        name: "Sintetizador Workstation Pads Sampler 61 Teclas 5/8 Octavas Korg Kross 2",
        brand: "Korg",
        category: "Teclados",
        description: "KROSS 2, el esperado sucesor de KROSS, es un Workstation compacto y portátil con una enorme variedad de sonidos.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928517/StringsAndKeys/1023_z7nkgm.jpg",
        product_status: true,
        quantity: 2000,
        price: 346814,
      },
      {
        id: 1024,
        name: "Soporte Mesa Tijera Doble Caño Teclado Órgano Piano Suant",
        brand: "Suant",
        category: "Teclados",
        description: "Recomendado para órganos, sintetizadores, teclados y pianos.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928517/StringsAndKeys/1024_t6unaj.jpg",
        product_status: true,
        quantity: 2000,
        price: 11316,
      },
      {
        id: 1025,
        name: "Controlador Midi USB 61 Teclas 5/8 Acorn Masterkey 61",
        brand: "Acorn",
        category: "Teclados",
        description: "El teclado controlador USB MIDI Masterkey 61 es perfecto para el rendimiento y la producción musical de la computadora.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928517/StringsAndKeys/1025_ojq4gx.jpg",
        product_status: true,
        quantity: 2000,
        price: 96329,
      },
      {
        id: 1026,
        name: "Guitarra Eléctrica Les Paul SX EE3-BK",
        brand: "SX",
        category: "Instrumentos de Cuerda",
        description: "Guitarra Eléctrica SX EE3-BK Tipo LP Doble Humbucker",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928517/StringsAndKeys/1026_wht8zz.jpg",
        product_status: true,
        quantity: 2000,
        price: 225528,
      },
      {
        id: 1027,
        name: "Guitarra Eléctrica Les Paul SX EF3D-CS",
        brand: "SX",
        category: "Instrumentos de Cuerda",
        description: "El más alto nivel de las guitarras SX. Madera tonal tradicional para el mástil y el cuerpo con un atractivo aspecto de los años 70.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928517/StringsAndKeys/1027_v7j9up.jpg",
        product_status: true,
        quantity: 2000,
        price: 278079,
      },
      {
        id: 1028,
        name: "Guitarra Eléctrica Stratocaster Cort G110OPSB",
        brand: "Cort",
        category: "Instrumentos de Cuerda",
        description: "La Serie G representa una evolución lógica del término “vintage”. Es moderno pero conserva las características familiares del diseño clásico de doble cutaway de una manera estéticamente elegante.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928517/StringsAndKeys/1028_gcbsgv.jpg",
        product_status: true,
        quantity: 2000,
        price: 127470,
      },
      {
        id: 1029,
        name: "Guitarra Eléctrica Stratocaster Leonard BK",
        brand: "Leonard",
        category: "Instrumentos de Cuerda",
        description: "La Leonard Stratocaster es una guitarra con una excelente relación calidad-precio, ideal para dar los primeros pasos como guitarrista para llevar a los ensayos, simple pero efectiva al momento de arrancar a tocar, de ensayar.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928517/StringsAndKeys/1029_fqptge.jpg",
        product_status: true,
        quantity: 2000,
        price: 98889,
      },
      {
        id: 1030,
        name: "Guitarra eléctrica estilo SG TEXAS EGPSG1BKTEX NEGRA",
        brand: "TEXAS",
        category: "Instrumentos de Cuerda",
        description: "La SG TEXAS es una guitarra con una excelente relación calidad-precio, ideal para dar los primeros pasos como guitarrista para llevar a los ensayos, simple pero efectiva al momento de arrancar a tocar, de ensayar.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928517/StringsAndKeys/1030_pwswot.jpg",
        product_status: true,
        quantity: 2000,
        price: 120638,
      },
      {
        id: 1031,
        name: "Guitarra Criolla Clásica De Estudio Fonseca 25M Mate",
        brand: "Zagert",
        category: "Instrumentos de Cuerda",
        description: "Guitarra de estudio. La fabrica Zagert utiliza sus mas de 45 años de experiencia para lograr una guitarra accesible de buena calidad.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928518/StringsAndKeys/1031_k5u04i.jpg",
        product_status: true,
        quantity: 2000,
        price: 56919,
      },
      {
        id: 1032,
        name: "Guitarra Criolla 39″ Caramelo Naranja Brillante ORELLANO CRCARAMBRILL",
        brand: "Orellano",
        category: "Instrumentos de Cuerda",
        description: "Guitarra Criolla tamaño 39″",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928518/StringsAndKeys/1032_kjdod5.jpg",
        product_status: true,
        quantity: 2000,
        price: 12072,
      },
      {
        id: 1033,
        name: "Guitarra Electro Acústica Ecualizador Washburn WA45CEN",
        brand: "Washburn",
        category: "Instrumentos de Cuerda",
        description: "Descubre la belleza y calidad de la Guitarra Electro Acústica WA45CEN. Diseñada para ofrecer una experiencia musical excepcional, esta guitarra combina materiales de alta calidad, artesanía experta y un sonido envolvente",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928518/StringsAndKeys/1033_mvd29f.jpg",
        product_status: true,
        quantity: 2000,
        price: 115634,
      },
      {
        id: 1034,
        name: "Guitarra Acústica Dreadnought All Mahogany Fender CD-60S",
        brand: "Fender",
        category: "Instrumentos de Cuerda",
        description: "La Guitarra Acústica Dreadnought All Mahogany Fender 097-0110-022 CD-60S ofrece un sabor distintivamente orgánico al agregar una tapa de caoba maciza a uno de nuestros modelos más populares. ",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928518/StringsAndKeys/1034_fc6d6k.jpg",
        product_status: true,
        quantity: 2000,
        price: 253760,
      },
      {
        id: 1035,
        name: "Guitarra Electro Acústica Ecualizador Con Funda Cort GA-QF-TBB",
        brand: "Cort",
        category: "Instrumentos de Cuerda",
        description: "Guitarra ElectroAcústica Cort GA-QF-TBB Con Funda",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928518/StringsAndKeys/1035_i4oqz3.jpg",
        product_status: true,
        quantity: 2000,
        price: 221003,
      },
      {
        id: 1036,
        name: "Bajo Eléctrico Jazz Bass Alder 4 Cuerdas SX SJB/ALDER/NA",
        brand: "SX",
        category: "Instrumentos de Cuerda",
        description: "Bajo JB construido en madera sólida de Aliso americano de máxima calidad",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928518/StringsAndKeys/1036_igcgek.jpg",
        product_status: true,
        quantity: 2000,
        price: 262095,
      },
      {
        id: 1037,
        name: "Bajo Eléctrico Jazz Bass Vintage Pickguard Blanco 4 Cuerdas SX SJB62+/3TS",
        brand: "SX",
        category: "Instrumentos de Cuerda",
        description: "Bajo eléctrico Vintage Series JB62.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928518/StringsAndKeys/1037_ew2rpm.jpg",
        product_status: true,
        quantity: 2000,
        price: 192684,
      },
      {
        id: 1038,
        name: "Bajo Eléctrico Precision 4 Cuerdas Leonard LB252BK",
        brand: "Leonard",
        category: "Instrumentos de Cuerda",
        description: "Bajo eléctrico 4 cuerdas marca Leonard con micrófono precision, queremos destacar de este artículo que siendo un instrumento económico presenta un muy buen sonido, un mástil cómodo para tocar que además brinda una afinación adecuada y clavijas de excelente calidad que mantienen dicha afinación.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928518/StringsAndKeys/1038_nzhzvu.jpg",
        product_status: true,
        quantity: 2000,
        price: 121028,
      },
      {
        id: 1039,
        name: "Ukelele concierto tapa con dibujo pájaro y flor Ashland UK184C",
        brand: "Ashland",
        category: "Instrumentos de Cuerda",
        description: "Ukelele Concierto 23″",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928518/StringsAndKeys/1039_rhoakn.jpg",
        product_status: true,
        quantity: 2000,
        price: 34240,
      },
      {
        id: 1040,
        name: "Ukelele soprano VERDE ESMERALDA con funda KORNER AU01L-11",
        brand: "Korner",
        category: "Instrumentos de Cuerda",
        description: "Ukelele soprano de 21″",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928518/StringsAndKeys/1040_atjxha.jpg",
        product_status: true,
        quantity: 2000,
        price: 16139,
      },
      {
        id: 1041,
        name: "Violin 4/4 Macizo Tapa de Pino Fondo de Maple Stradella Mv141244",
        brand: "Stradella",
        category: "Instrumentos de Cuerda",
        description: "VIOLIN 4/4 MACIZO",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928519/StringsAndKeys/1041_nus7sa.jpg",
        product_status: true,
        quantity: 2000,
        price: 69432,
      },
      {
        id: 1042,
        name: "Violin Acústico Yirelly CV101 1/8 Brillante DHP",
        brand: "Yirelly",
        category: "Instrumentos de Cuerda",
        description: "Violin Acústico",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928519/StringsAndKeys/1042_mbqluc.jpg",
        product_status: true,
        quantity: 2000,
        price: 51120,
      },
      {
        id: 1043,
        name: "Flauta Dulce Soprano ESCOLAR Color Crema YAMAHA YRS 23",
        brand: "Yamaha",
        category: "Instrumentos de Viento",
        description: "Esta flauta dulce, que probablemente sea el modelo más popular del mundo, es muy fácil de tocar y ofrece un tono claro y suave.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928519/StringsAndKeys/1043_roo9gt.jpg",
        product_status: true,
        quantity: 2000,
        price: 5049,
      },
      {
        id: 1044,
        name: "Flauta Dulce Soprano color Azul transparente YAMAHA YRS20GB",
        brand: "Yamaha",
        category: "Instrumentos de Viento",
        description: "Flauta Dulce Soprano Yamaha ABS YRS20 Con Funda Las flautas dulces Yamaha se han diseñado para ofrecer el comienzo perfecto a la educación musical de cualquier persona.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928519/StringsAndKeys/1044_uirigp.jpg",
        product_status: true,
        quantity: 2000,
        price: 7578,
      },
      {
        id: 1045,
        name: "Melódica tipo clarinete de 27 notas KNIGHT JB27A-1",
        brand: "Knight",
        category: "Instrumentos de Viento",
        description: "Flauta melódica clarinete tipo de 27 teclas para soplar",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928519/StringsAndKeys/1045_qljhgw.jpg",
        product_status: true,
        quantity: 2000,
        price: 6216,
      },
      {
        id: 1046,
        name: "Melódica Flauta Piano 32 Notas Con Funda Lincoln ME32S",
        brand: "Lincoln",
        category: "Instrumentos de Viento",
        description: "¡Descubre la versatilidad y la comodidad de la Flauta Melódica tipo piano de 32 notas de la reconocida marca Lincoln! Esta flauta te ofrece una experiencia musical única y conveniente, ideal para principiantes y músicos en movimiento.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928519/StringsAndKeys/1046_wvfm6q.jpg",
        product_status: true,
        quantity: 2000,
        price: 11629,
      },
      {
        id: 1047,
        name: "Amplificador Para Acústica 2 Canales Con Bluetooth Efectos NUX AC-25 con BATERIA",
        brand: "Nux",
        category: "Amplificadores",
        description: "Es un amplificador acústico compacto con batería recargable incorporada que puede funcionar durante 4 horas para tocar en la calle.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928519/StringsAndKeys/1047_ooiksv.jpg",
        product_status: true,
        quantity: 2000,
        price: 189356,
      },
      {
        id: 1048,
        name: "Caja Potenciada Amplificador 1 x 12″ + Driver 1,4″- 2.000 Watts Respuesta Plana Headrush FRFR112",
        brand: "Headrush",
        category: "Amplificadores",
        description: "Una caja de respuesta plana especialmente diseñada para amplificar la ultima generación de modeladores digitales.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928519/StringsAndKeys/1048_zqunkv.jpg",
        product_status: true,
        quantity: 2000,
        price: 318199,
      },
      {
        id: 1049,
        name: "Amplificador Para Guitarra Eléctrica 10 W Fender Frontman 10G 231-1005-900",
        brand: "Fender",
        category: "Amplificadores",
        description: "El Frontman 10G proporciona el tono clásico de Fender en un paquete pequeño. La tela de rejilla plateada, las perillas de los amplificadores con faldón y el logo del amplificador Fender brindan al Frontman 10G toda la estética clásica de los amplificadores “Blackface” clásicos.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928520/StringsAndKeys/1049_qfmpgg.jpg",
        product_status: true,
        quantity: 2000,
        price: 97840,
      },
      {
        id: 1050,
        name: "Amplificador Para Guitarra 10 Watts 1 X 5 Laney Lx10",
        brand: "Laney",
        category: "Amplificadores",
        description: "DISEÑO DE GABINETE CONVENCIONAL",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928520/StringsAndKeys/1050_pwevct.jpg",
        product_status: true,
        quantity: 2000,
        price: 55359,
      },
      {
        id: 1051,
        name: "Amplificador Para Bajo Eléctrico 50 W HARTKE HD50",
        brand: "Hartke",
        category: "Amplificadores",
        description: "La serie HD de Hartke le ofrece la tecnología de altavoces más avanzada junto con una potente amplificación, todo ello con un diseño extremadamente compacto y a un precio inigualable.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928520/StringsAndKeys/1051_a8xc73.jpg",
        product_status: true,
        quantity: 2000,
        price: 229891,
      },
      {
        id: 1052,
        name: "Batería Electrónica 4 Cuerpos 8 Pads Con Mesh Thunder THD130",
        brand: "Thunder",
        category: "Baterías y Percusión",
        description: "¡Descubre la emoción y la versatilidad de la Batería Electrónica! Esta batería electrónica está diseñada para brindarte una experiencia de batería realista y de alta calidad en un formato compacto y conveniente.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928520/StringsAndKeys/1052_dvhx0o.jpg",
        product_status: true,
        quantity: 2000,
        price: 349655,
      },
      {
        id: 1053,
        name: "Batería Electrónica 5 Cuerpos 7 Pads Thunder THD120",
        brand: "Thunder",
        category: "Baterías y Percusión",
        description: "Bateria electronica plegable. Estable y de rapido ensamblaje. Permite configurarse para shows o fiestas. Los nuevos Pad proveen una performance natural. El trigger puede ser instalado con el martillo para proporcional un efecto real. El hihat ofrece una voz natural. Es compatible con sistemas de Software de enseñnanza. Su cerebro possee abundantes voces.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928520/StringsAndKeys/1053_sus1he.jpg",
        product_status: true,
        quantity: 2000,
        price: 284576,
      },
      {
        id: 1054,
        name: "Parche Arenado Capa Doble 14″ Con Perforaciones Antiarmónicas Evans B14HDDB",
        brand: "Evans",
        category: "Baterías y Percusión",
        description: "Parche de tambor blanco de 14″ fabricado con dos capas de película. Una capa exterior de 5 mil y una capa interior de 7.5 mil.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928520/StringsAndKeys/1054_gtvgcu.jpg",
        product_status: true,
        quantity: 2000,
        price: 16051,
      },
      {
        id: 1055,
        name: "Parche Ambassador Coated Arenado 14″ Remo Usa Ba0-114-00",
        brand: "Remo",
        category: "Baterías y Percusión",
        description: "El Ambassador® Coated es el parche más popular del mundo, con la combinación perfecta de tonos cálidos y abiertos con ataque brillante y sostenido controlado. Construidos con una película recubierta de 1 capa y 10 mil, los parches recubiertos Ambassador® son el estándar de la industria para todas las aplicaciones.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928520/StringsAndKeys/1055_wjfitu.jpg",
        product_status: true,
        quantity: 2000,
        price: 13568,
      },
      {
        id: 1056,
        name: "Platillo 14 Medium Hi Hat Par Meinl Mcs14mh",
        brand: "Meinl",
        category: "Baterías y Percusión",
        description: "Platillo de peso medio con un amplio espectro dinámico y una respuesta de barra limpia. Cálido, brillante sonido hihat abierto y una chica clara.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928520/StringsAndKeys/1056_u92r3s.jpg",
        product_status: true,
        quantity: 2000,
        price: 20952,
      },
      {
        id: 1057,
        name: "Platillo 14 Sh Regular Hi-hat Medium Stagg Shhm14r",
        brand: "Stagg",
        category: "Baterías y Percusión",
        description: "STAGG SH HI HAT MEDIUM 14 PULGADAS SHHM14R",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928520/StringsAndKeys/1057_ktxmko.jpg",
        product_status: true,
        quantity: 2000,
        price: 18131,
      },
      {
        id: 1058,
        name: "Palillos 2b Punta de Madera Hickory La Special By Promark La2bw",
        brand: "La Special",
        category: "Baterías y Percusión",
        description: "PALILLO LA SPECIAL 2B PUNTA MADERA",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928520/StringsAndKeys/1058_l9bfkp.jpg",
        product_status: true,
        quantity: 2000,
        price: 5630,
      },
      {
        id: 1059,
        name: "Palillos Baquetas American Classic Punta Nylon Vic Firth 7An",
        brand: "Vic Firth",
        category: "Baterías y Percusión",
        description: "El palo N° 1 en el mundo, ideal para todos los estilos de música.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928521/StringsAndKeys/1059_fdjowv.jpg",
        product_status: true,
        quantity: 2000,
        price: 14758,
      },
      {
        id: 1060,
        name: "Bongo De Madera 6 3/4 + 8 Hadliner Series Meinl HB100wrb",
        brand: "Meinl",
        category: "Baterías y Percusión",
        description: "Los Bongos de la serie Headliner® de MEINL son perfectos para el estudiante o aficionado que está buscando un instrumento de alta calidad desde el principio.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928520/StringsAndKeys/1060_ghfqx5.jpg",
        product_status: true,
        quantity: 2000,
        price: 22165,
      },
      {
        id: 1061,
        name: "Bongoe De Madera 7″+ 8″ Natural STAGG BW-70N",
        brand: "Stagg",
        category: "Baterías y Percusión",
        description: "STAGG BW70N.",
        image:
          "https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928520/StringsAndKeys/1061_ztfp1y.jpg",
        product_status: true,
        quantity: 2000,
        price: 36733,
      },
  ];
  
  
  module.exports = listProducts;
  