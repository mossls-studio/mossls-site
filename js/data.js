/* mossls — site data. Edit products here; the pages render from this file. */
window.MOSSLS = {
  org: "https://github.com/KOGGUA-EDIT",
  orgLabel: "KOGGUA-EDIT",

  categories: [
    {
      id: "scripts",
      accent: "#FF5DA2",
      soft: "#FFE3EF",
      labelKey: "nav.scripts",
      descKey: "sec.scripts.desc"
    },
    {
      id: "plugins",
      accent: "#9B6BFF",
      soft: "#EDE5FF",
      labelKey: "nav.plugins",
      descKey: "sec.plugins.desc"
    },
    {
      id: "software",
      accent: "#2F5BFF",
      soft: "#E3EAFF",
      labelKey: "nav.software",
      descKey: "sec.software.desc"
    }
  ],

  /* Order here is the order on the page, in the nav and in the cover numbering. */
  products: [
    {
      id: "suko",
      cover: "assets/shots/suko-1.webp",
    shots: ["assets/shots/suko-1.webp", "assets/shots/suko-2.webp"],
      name: "suko",
      initial: "S",
      repo: "suko",
      category: "scripts",
      version: "v1.1.0",
      platform: "EffectCraft",
      license: null,
      tags: ["EffectCraft", "ScriptUI"],
      c1: "#D6FF4B",
      c2: "#7FF0D4",
      year: 2026,
      tagline: {
        zh: "EffectCraft 的预设管理器，.ecpreset 一键存取。",
        en: "A preset manager for EffectCraft — save and load .ecpreset files in one click.",
        es: "Un gestor de presets para EffectCraft: guarda y carga archivos .ecpreset en un clic.",
        ru: "Менеджер пресетов для EffectCraft — сохранение и загрузка .ecpreset в один клик.",
        fr: "Un gestionnaire de presets pour EffectCraft : enregistrez et chargez vos .ecpreset en un clic.",
        ar: "مدير إعدادات مسبقة لـ EffectCraft — احفظ وحمّل ملفات .ecpreset بنقرة."
      },
      desc: {
        zh: "把预设放进面板里浏览、搜索、套用，不用再翻文件夹。ScriptUI 写的，界面中英双语。",
        en: "Browse, search and apply presets right in the panel — no more digging through folders. Written in ScriptUI with a bilingual interface.",
        es: "Explora, busca y aplica presets desde el panel, sin rebuscar en carpetas. Escrito en ScriptUI y con interfaz bilingüe.",
        ru: "Просматривайте, ищите и применяйте пресеты прямо в панели — без поиска по папкам. Написано на ScriptUI, интерфейс двуязычный.",
        fr: "Parcourez, recherchez et appliquez vos presets dans le panneau, sans fouiller les dossiers. Écrit en ScriptUI, interface bilingue.",
        ar: "تصفّح الإعدادات المسبقة وابحث عنها وطبّقها من اللوحة، دون التنقيب في المجلدات. مكتوب بـ ScriptUI بواجهة ثنائية اللغة."
      }
    },
    {
      id: "toolbox",
      cover: "assets/shots/toolbox-1.webp",
    shots: ["assets/shots/toolbox-1.webp", "assets/shots/toolbox-2.webp"],
      name: "Toolbox Master",
      names: {
        zh: "工具箱大师",
        en: "Toolbox Master",
        es: "Toolbox Master",
        ru: "Toolbox Master",
        fr: "Toolbox Master",
        ar: "Toolbox Master"
      },
      initial: "T",
      repo: "gongjuxiangdashi",
      category: "scripts",
      version: "v0.1.23",
      platform: "EffectCraft",
      license: null,
      tags: ["EffectCraft", "ScriptUI"],
      c1: "#FF8A3D",
      c2: "#FFD84D",
      year: 2026,
      tagline: {
        zh: "「工具箱大师」的 EffectCraft 移植版，五个常用页都在。",
        en: "The classic Toolbox Master panel, ported to EffectCraft with all five pages.",
        es: "El clásico panel Toolbox Master, portado a EffectCraft con sus cinco páginas.",
        ru: "Классическая панель Toolbox Master, портированная в EffectCraft со всеми пятью страницами.",
        fr: "Le panneau classique Toolbox Master, porté sur EffectCraft avec ses cinq pages.",
        ar: "لوحة Toolbox Master الكلاسيكية، منقولة إلى EffectCraft بكل صفحاتها الخمس."
      },
      desc: {
        zh: "五个常用页：锚点、常用工具、合成工具、重置、脚本信息；还能把常用的 .jsx 挂进侧栏，一键运行。",
        en: "Five pages — anchor, common tools, comp tools, reset, script info — plus a sidebar for your own .jsx one-click scripts.",
        es: "Cinco páginas: ancla, herramientas comunes, herramientas de composición, reinicio e información del script; además, una barra lateral para lanzar tus .jsx con un clic.",
        ru: "Пять страниц: якорь, частые инструменты, инструменты композиции, сброс и сведения о скрипте; плюс боковая панель для запуска ваших .jsx в один клик.",
        fr: "Cinq pages : point d'ancrage, outils courants, outils de composition, réinitialisation et infos du script ; plus une barre latérale pour lancer vos .jsx en un clic.",
        ar: "خمس صفحات: نقطة الارتساء، الأدوات الشائعة، أدوات التركيب، إعادة الضبط، ومعلومات السكربت؛ مع شريط جانبي لتشغيل ملفات .jsx بنقرة."
      }
    },
    {
      id: "kcurve",
      cover: "assets/shots/kcurve-1.webp",
    shots: ["assets/shots/kcurve-1.webp", "assets/shots/kcurve-2.webp"],
      name: "KCurve",
      initial: "K",
      repo: "KCurve",
      category: "scripts",
      version: "v2.0.2",
      platform: "EffectCraft",
      license: "MIT",
      tags: ["EffectCraft", "ScriptUI"],
      c1: "#FF5DA2",
      c2: "#FF8A3D",
      year: 2026,
      tagline: {
        zh: "EffectCraft 的曲线编辑器，把关键帧调成你要的形状。",
        en: "A curve editor for EffectCraft — shape your keyframes the way you want.",
        es: "Un editor de curvas para EffectCraft: da forma a tus keyframes.",
        ru: "Редактор кривых для EffectCraft — придайте кейфреймам нужную форму.",
        fr: "Un éditeur de courbes pour EffectCraft — façonnez vos keyframes.",
        ar: "محرر منحنيات لـ EffectCraft — شكّل إطاراتك المفتاحية كما تريد."
      },
      desc: {
        zh: "在 EffectCraft 里直接编辑速度曲线，支持贝塞尔手柄、预设和批量应用。",
        en: "Edit velocity curves right inside EffectCraft, with Bezier handles, presets and batch apply.",
        es: "Edita curvas de velocidad dentro de EffectCraft, con manejadores Bézier, presets y aplicación por lotes.",
        ru: "Редактируйте кривые скорости прямо в EffectCraft: ручки Безье, пресеты и пакетное применение.",
        fr: "Modifiez les courbes de vitesse directement dans EffectCraft : poignées Bézier, presets et application par lot.",
        ar: "حرّر منحنيات السرعة داخل EffectCraft، مع مقابض بيزييه وإعدادات مسبقة وتطبيق دفعة واحدة."
      }
    },
    {
      id: "egroup",
      cover: "assets/shots/egroup-1.webp",
    shots: ["assets/shots/egroup-1.webp", "assets/shots/egroup-2.webp"],
      name: "Egroup",
      initial: "E",
      repo: "Egroup",
      category: "scripts",
      version: "v1.4.1",
      platform: "EffectCraft",
      license: "MIT",
      tags: ["EffectCraft", "JavaScript"],
      c1: "#7FF0D4",
      c2: "#2F5BFF",
      year: 2026,
      tagline: {
        zh: "把图层当成一个整体管理：建组、联动、同步。",
        en: "Treat a set of layers as one object: group, link, sync.",
        es: "Trata un grupo de capas como un solo objeto: agrupa, vincula y sincroniza.",
        ru: "Управляйте слоями как единым объектом: группы, связи, синхронизация.",
        fr: "Traitez un ensemble de calques comme un objet : groupe, liens, synchronisation.",
        ar: "تعامل مع مجموعة طبقات ككائن واحد: تجميع وربط ومزامنة."
      },
      desc: {
        zh: "组可见性、时间线 shy、效果同步、变换连接都能联动；成员关系记在空对象注释里，不依赖预合成。",
        en: "Group visibility, timeline shy, effect sync and transform linking all stay in step — membership lives in a null's comment, no precomps needed.",
        es: "Visibilidad del grupo, shy en la línea de tiempo, sincronización de efectos y enlace de transformaciones; la pertenencia vive en el comentario de un nulo, sin precomposiciones.",
        ru: "Видимость группы, shy на таймлайне, синхронизация эффектов и связывание трансформаций — состав группы хранится в комментарии нулл-объекта, без прекомпов.",
        fr: "Visibilité du groupe, shy dans la timeline, synchronisation des effets et liaison des transformations — l'appartenance vit dans le commentaire d'un nul, sans précompositions.",
        ar: "ظهور المجموعة وتخفي الأشرطة ومزامنة التأثيرات وربط التحويلات — العضوية محفوظة في تعليق كائن فارغ، دون تراكيب مسبقة."
      }
    },
    {
      id: "sayaka",
      cover: "assets/shots/sayaka-1.webp",
      icon: "assets/sayaka.webp",
      iconFit: "hero",
    shots: ["assets/shots/sayaka-1.webp", "assets/shots/sayaka-2.webp"],
      name: "dsh-pet-sayaka",
      initial: "D",
      repo: "dsh-pet-sayaka",
      category: "plugins",
      version: "v1.1.1",
      platform: "DeepSeek Harness",
      license: "MIT",
      tags: ["DSH", "JavaScript"],
      c1: "#9B6BFF",
      c2: "#2F5BFF",
      year: 2026,
      tagline: {
        zh: "会说话的美树沙耶香，住在 DSH 页面角落。",
        en: "A talking Sayaka Miki who lives in the corner of your DSH page.",
        es: "Una Sayaka Miki parlanchina que vive en la esquina de tu página DSH.",
        ru: "Говорящая Саяка Мики, которая живёт в углу вашей страницы DSH.",
        fr: "Une Sayaka Miki bavarde qui vit dans le coin de votre page DSH.",
        ar: "ساياكا ميكي الناطقة التي تعيش في زاوية صفحة DSH."
      },
      desc: {
        zh: "状态驱动的立绘、即时切换，每个状态都有对应台词。装上之后她就住在页面角落里。",
        en: "State-driven sprites, instant swaps, and a voice line for every state. She moves into the corner of your page.",
        es: "Sprites según el estado, cambio instantáneo y una frase para cada estado. Se muda a la esquina de tu página.",
        ru: "Спрайты по состоянию, мгновенная смена и реплика для каждого состояния. Она переезжает в угол вашей страницы.",
        fr: "Des sprites selon l'état, un changement instantané et une réplique pour chaque état. Elle emménage dans le coin de votre page.",
        ar: "رسوم متحركة حسب الحالة، وتبديل فوري، وجملة لكل حالة. تنتقل للعيش في زاوية صفحتك."
      }
    },
    {
      id: "mos-suite",
      name: "MOS Suite",
      initial: "M",
      repo: "mos-suite",
      org: "mossls-studio",
      category: "plugins",
      version: "v1.1.0",
      platform: "EffectCraft",
      license: "AGPL-3.0",
      tags: ["EffectCraft", "wasm", "Rust"],
      c1: "#1E9BF0",
      c2: "#7FF0D4",
      year: 2026,
      tagline: {
        zh: "四个 EffectCraft 效果合成一个套件：阴影、抖动、收缩、灯光混合。",
        en: "Four EffectCraft effects in one suite — shadow, shake, shrink and light mix.",
        es: "Cuatro efectos de EffectCraft en un solo paquete: sombra, sacudida, contracción y mezcla de luz.",
        ru: "Четыре эффекта EffectCraft в одном наборе: тень, дрожание, сжатие и смешивание света.",
        fr: "Quatre effets EffectCraft en une suite : ombre, secousse, contraction et mélange lumineux.",
        ar: "أربعة تأثيرات EffectCraft في حزمة واحدة: الظل والاهتزاز والانكماش ومزج الضوء."
      },
      desc: {
        zh: "阴影自带渐变放大，加上一个常规抖动、一个白点式收缩、一个灯光混合；分成「MOS 形变」「MOS 视效」两组，中英双语，安装器里能分别选效果名和参数语言。AGPL-3.0 开源。",
        en: "A shadow effect with our own gradual scale-up, a regular shake, a pinch-style shrink and a light wrap; split into MOS Deform and MOS VFX groups, bilingual (Chinese/English), with the installer choosing effect-name and parameter languages separately. Open source under AGPL-3.0.",
        es: "Sombra con agrandamiento progresivo propio, sacudida clásica, contracción tipo pinza y mezcla de luz; repartidos en los grupos MOS Deform y MOS VFX, bilingüe, y el instalador elige por separado el idioma de los nombres y de los parámetros. Código abierto bajo AGPL-3.0.",
        ru: "Тень с собственным постепенным увеличением, обычное дрожание, сжатие в стиле пинч и смешивание света; две группы — MOS Deform и MOS VFX, двуязычно, а установщик отдельно выбирает язык названий и параметров. Открытый код под AGPL-3.0.",
        fr: "Ombre avec agrandissement progressif maison, secousse classique, contraction façon pince et mélange lumineux ; répartis en deux groupes, MOS Deform et MOS VFX, bilingue, l'installateur choisissant séparément la langue des noms et des paramètres. Open source sous AGPL-3.0.",
        ar: "ظل بتكبير تدريجي خاص بنا، واهتزاز معتاد، وانكماش بنمط القرص، ومزج ضوء؛ موزّعة في مجموعتين MOS Deform وMOS VFX، ثنائية اللغة، ويختار المثبّت لغة الأسماء ولغة المعاملات على حدة. مفتوح المصدر بترخيص AGPL-3.0."
      }
    },
    {
      id: "fustimage",
      cover: "assets/shots/fustimage-1.webp",
      icon: "assets/icons/fustimage.png",
    shots: ["assets/shots/fustimage-1.webp", "assets/shots/fustimage-2.webp"],
      name: "Fustimage",
      initial: "F",
      repo: "Fustimage",
      category: "software",
      version: "v2.0.0",
      platform: "Windows",
      license: null,
      tags: ["Windows", "C17", "Direct2D"],
      c1: "#2F5BFF",
      c2: "#7FF0D4",
      year: 2026,
      tagline: {
        zh: "快、小、干净的 Windows 图片编辑器。",
        en: "A fast, small Windows image editor.",
        es: "Un editor de imágenes para Windows rápido y ligero.",
        ru: "Быстрый и лёгкий редактор изображений для Windows.",
        fr: "Un éditeur d'images Windows rapide et léger.",
        ar: "محرر صور سريع وخفيف لويندوز."
      },
      desc: {
        zh: "用 C17 + Win32 + Direct2D 从零写起，不背 Electron。启动快、占用小，界面按 Material 3 重新画过。",
        en: "Written from scratch in C17 + Win32 + Direct2D — no Electron. Fast to launch, light on memory, with a Material 3 interface.",
        es: "Escrito desde cero en C17 + Win32 + Direct2D, sin Electron. Arranca rápido, consume poca memoria y su interfaz está redibujada según Material 3.",
        ru: "Написан с нуля на C17 + Win32 + Direct2D, без Electron. Быстрый запуск, мало памяти, интерфейс перерисован по Material 3.",
        fr: "Écrit de zéro en C17 + Win32 + Direct2D, sans Electron. Démarrage rapide, empreinte légère et interface redessinée selon Material 3.",
        ar: "مكتوب من الصفر بـ C17 + Win32 + Direct2D، دون Electron. يبدأ سريعًا ويستهلك ذاكرة قليلة، وواجهته أعيد رسمها وفق Material 3."
      }
    },
    {
      id: "muxvideo",
      cover: "assets/shots/muxvideo-1.webp",
      icon: "assets/icons/muxvideo.png",
    shots: ["assets/shots/muxvideo-1.webp", "assets/shots/muxvideo-2.webp", "assets/shots/muxvideo-3.webp"],
      name: "MuxVideo",
      initial: "M",
      repo: "MuxVideo",
      category: "software",
      version: "v0.1.45",
      platform: "Windows",
      license: "MIT",
      tags: ["Windows", "Rust", "libmpv"],
      c1: "#9B6BFF",
      c2: "#FF5DA2",
      year: 2026,
      tagline: {
        zh: "双画面视频对比，逐帧对齐。",
        en: "Dual-view video compare, frame-aligned.",
        es: "Comparación de vídeo en doble panel, alineada fotograma a fotograma.",
        ru: "Сравнение видео в двух окнах, с точностью до кадра.",
        fr: "Comparaison vidéo en double vue, alignée image par image.",
        ar: "مقارنة فيديو بشاشتين، بمحاذاة الإطار."
      },
      desc: {
        zh: "进程内嵌 libmpv，两路视频同步播放、逐帧对齐，Material You 界面。对参考、做调色时很省事。",
        en: "libmpv runs in-process; two videos play in sync, frame-aligned, in a Material You interface. Handy for reference and grading.",
        es: "libmpv integrado en el proceso; dos vídeos se reproducen sincronizados, alineados fotograma a fotograma, en una interfaz Material You. Muy útil para referencias y etalonaje.",
        ru: "libmpv работает внутри процесса: два видео идут синхронно, с точностью до кадра, в интерфейсе Material You. Удобно для референсов и цветокоррекции.",
        fr: "libmpv tourne dans le processus ; deux vidéos se lisent en synchronisation, alignées image par image, dans une interface Material You. Pratique pour les références et l'étalonnage.",
        ar: "يعمل libmpv داخل العملية؛ يُشغَّل فيديوهان بالتزامن وبمحاذاة الإطار في واجهة Material You. مفيد للمراجع وتصحيح الألوان."
      }
    },
    {
      id: "colorms",
      cover: "assets/shots/colorms-1.webp",
      icon: "assets/icons/colorms.png",
    shots: ["assets/shots/colorms-1.webp", "assets/shots/colorms-2.webp"],
      name: "Colorms",
      initial: "C",
      repo: "colorms",
      category: "software",
      version: "v0.1.0",
      platform: "Windows",
      license: null,
      tags: ["Windows", "Rust", "egui"],
      c1: "#FFD84D",
      c2: "#FF8A3D",
      year: 2026,
      tagline: {
        zh: "从一张图生成整套 Material You 配色。",
        en: "Build a full Material You palette from any image.",
        es: "Genera una paleta Material You completa desde cualquier imagen.",
        ru: "Соберите полную палитру Material You из любого изображения.",
        fr: "Générez une palette Material You complète à partir d'une image.",
        ar: "أنشئ لوحة ألوان Material You كاملة من أي صورة."
      },
      desc: {
        zh: "丢进一张图，直接算出主色、容器色和明暗层级，复制就能用。Rust + egui 写的，体积很小。",
        en: "Drop in an image and get primary, container and tonal colors ready to copy. Built with Rust + egui, tiny footprint.",
        es: "Suelta una imagen y obtén colores primarios, de contenedor y tonales listos para copiar. Hecho con Rust + egui, muy ligero.",
        ru: "Перетащите изображение и получите основные, контейнерные и тональные цвета — готовые к копированию. На Rust + egui, очень лёгкий.",
        fr: "Déposez une image et obtenez les couleurs primaires, de conteneur et tonales, prêtes à copier. Écrit en Rust + egui, très léger.",
        ar: "ألقِ صورة واحصل على الألوان الأساسية وألوان الحاويات والدرجات، جاهزة للنسخ. مبني بـ Rust + egui وخفيف جدًا."
      }
    }
  ],

  members: [
    {
      name: "koggua",
      roleKey: "team.role",
      avatar: "assets/avatar-koggua.webp",
      github: "https://github.com/KOGGUA-EDIT",
      note: {
        zh: "写代码，也管设计。做工具的时候最在意「点下去的那一下」顺不顺手。",
        en: "Codes, designs, and cares most about how that one click feels."
      }
    },
    {
      name: "Lonelnx_BianJIe",
      roleKey: "team.roleFounder",
      avatar: "assets/avatar-lonelnx.webp",
      github: "https://github.com/bingkunwang01-cmd"
    }
  ]
};



