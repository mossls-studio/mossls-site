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
      shots: ["assets/shots/mos-suite-1.webp", "assets/shots/mos-suite-2.webp"],
      name: "MOS Suite",
      names: {
        zh: "MOS 套件",
        en: "MOS Suite",
        es: "MOS Suite",
        ru: "MOS Suite",
        fr: "MOS Suite",
        ar: "MOS Suite"
      },
      initial: "M",
      repo: "mos-suite",
      org: "mossls-studio",
      category: "plugins",
      version: "v1.5.0",
      platform: "EffectCraft",
      license: "AGPL-3.0",
      tags: ["EffectCraft", "MAD", "WASM", "Rust"],
      c1: "#1E9BF0",
      c2: "#7FF0D4",
      year: 2026,
      tagline: {
        zh: "为 MAD 而生的 11 款 EffectCraft 视效套件，五大分组一站配齐。",
        en: "11 EffectCraft effects born for MAD — five panel groups in one suite.",
        es: "11 efectos de EffectCraft nacidos para MAD: cinco grupos en una suite.",
        ru: "11 эффектов EffectCraft, созданных для MAD — пять групп в одном наборе.",
        fr: "11 effets EffectCraft nés pour le MAD — cinq groupes dans une seule suite.",
        ar: "11 تأثيرًا لـ EffectCraft صُنعت لأجل MAD — خمس مجموعات في حزمة واحدة."
      },
      desc: {
        zh: "整个套件为 MAD / AMV 剪辑而生：涵盖形变（抖动、变形·白点）、液态（涟漪、雨滴、透镜）、视效（阴影、灯光混合、打光）、效果（扫光、消散）与模糊五大分组共 11 款原生插件。附 Material Design 3 Expressive 分步安装器与手动安装包，支持效果名与参数语言独立切换，AGPL-3.0 开源。",
        en: "Built from the ground up for MAD & AMV editing: 11 native EffectCraft plugins across five groups — Deform (Shake, Warp), Liquid (Ripple, Rain, Lens), VFX (Shadow, Light Mix, Rim Light), Effects (Light Sweep, Dissolve) and Blur. Ships with a Material Design 3 Expressive step-by-step installer, manual package, and independent bilingual naming/parameters. AGPL-3.0 open source.",
        es: "Creada desde cero para edición MAD / AMV: 11 complementos nativos de EffectCraft en cinco grupos (Deformar, Líquido, VFX, Efectos y Desenfoque) con instalador Material Design 3 Expressive y soporte bilingüe. Código abierto AGPL-3.0.",
        ru: "Создано с нуля для MAD / AMV-монтажа: 11 нативных плагинов EffectCraft в пяти группах (деформация, жидкость, VFX, эффекты, размытие), пошаговый установщик Material Design 3 Expressive и независимая двуязычная локализация. Открытый код AGPL-3.0.",
        fr: "Conçue de zéro pour le montage MAD / AMV : 11 plugins natifs EffectCraft en cinq groupes (Déformation, Liquide, VFX, Effets, Flou) avec installateur Material Design 3 Expressive et bilinguisme indépendant. Open source AGPL-3.0.",
        ar: "حزمة مصممة بالكامل لمونتاج MAD وAMV: 11 إضافة أصلية لـ EffectCraft عبر خمس مجموعات مع مثبّت Material Design 3 Expressive ودعم ثنائي اللغة، مفتوحة المصدر تحت AGPL-3.0."
      },
      suiteGroups: [
        { id: "deform", zh: "MOS 形变", en: "MOS Deform", accent: "#FF5DA2" },
        { id: "liquid", zh: "MOS 液态", en: "MOS Liquid", accent: "#1E9BF0" },
        { id: "vfx", zh: "MOS 视效", en: "MOS VFX", accent: "#9B6BFF" },
        { id: "effects", zh: "MOS 效果", en: "MOS Effects", accent: "#FF8A3D" },
        { id: "blur", zh: "MOS 模糊", en: "MOS Blur", accent: "#00B894" }
      ],
      suitePlugins: [
        {
          id: "mos.shake",
          group: "deform",
          name: { zh: "抖动 Shake", en: "Shake" },
          version: "v1.2.0",
          runtime: "WASM",
          shot: "assets/shots/mos/shake.webp",
          repo: "https://github.com/mossls-studio/mos-shake",
          highlights: {
            zh: ["三轴手持震动", "8 采样运动模糊", "边缘拼贴防穿帮"],
            en: ["3-axis camera shake", "8-sample motion blur", "Edge tiling"]
          },
          desc: {
            zh: "MAD 卡点与节奏转场主力：噪声驱动的 X/Y/Z 三轴位移与旋转，频率与平滑度独立可调，内置运动模糊和边缘拼贴，不污染图层变换属性。",
            en: "Essential for MAD beat-sync hits and transitions: noise-driven 3-axis displacement & rotation with independent rate/smoothness, 8-sample motion blur, and edge tiling without touching layer transforms."
          }
        },
        {
          id: "mos.ae.warp",
          group: "deform",
          name: { zh: "变形·白点 Warp", en: "Warp" },
          version: "v1.3.0",
          runtime: "WASM",
          shot: "assets/shots/mos/warp.webp",
          repo: "https://github.com/mossls-studio/mos-shrink",
          highlights: {
            zh: ["四角钉住鱼眼形变", "可拖锚点中心", "三档抗锯齿画质"],
            en: ["Pinned-corner fisheye", "Draggable anchor", "3 quality modes"]
          },
          desc: {
            zh: "复刻经典白点鱼眼张力感：纯多项式缩放让四条边与四角纹丝不动，适合 MAD 节奏吸放、冲击波膨胀和转场弹性形变，体积仅约 3 KB。",
            en: "Classic pinned-corner fisheye punch for MAD beat swells and elastic transitions: pure polynomial scaling keeps all four edges locked with zero border gaps."
          }
        },
        {
          id: "mos.ripple",
          group: "liquid",
          name: { zh: "涟漪 Ripple", en: "Ripple" },
          version: "v1.1.0",
          runtime: "WASM",
          shot: "assets/shots/mos/ripple.webp",
          repo: "https://github.com/mossls-studio/mos-ripple",
          highlights: {
            zh: ["同心波纹折射", "波峰侧面高光", "羽化与边缘淡出"],
            en: ["Concentric refraction", "Crest highlights", "Soft edge fade"]
          },
          desc: {
            zh: "水面同心波纹冲击效果：中心平静自然、波峰带柔和侧面高光与折射，告别硬边锯齿，轻松做出 MAD 鼓点扩散与水波转场。",
            en: "Concentric water ripples with calm centers, soft crest side-lighting, and smooth refraction — ideal for MAD beat-drop shockwaves and dreamlike transitions."
          }
        },
        {
          id: "mos.rain",
          group: "liquid",
          name: { zh: "雨滴 Rain", en: "Rain" },
          version: "v5.0.0",
          runtime: "Rust Helper",
          shot: "assets/shots/mos/rain.webp",
          repo: "https://github.com/mossls-studio/mos-rain",
          highlights: {
            zh: ["重力滑落水滴", "折射色散雾气", "自定义贴图图层"],
            en: ["Gravity raindrops", "Dispersion & fog", "Custom map layer"]
          },
          desc: {
            zh: "情绪向 MAD 氛围神器：支持程序生成大/小/长条重力水滴与色散雾气，也可直接读取自定义图层亮度或 Alpha 提取液态折射边缘。",
            en: "Atmospheric rain-on-glass shader for emotional MADs: procedural gravity droplets with dispersion and fog, plus custom layer input by luma or alpha."
          }
        },
        {
          id: "mos.lens",
          group: "liquid",
          name: { zh: "透镜 Lens", en: "Lens" },
          version: "v2.0.0",
          runtime: "Rust Helper",
          shot: "assets/shots/mos/lens.webp",
          repo: "https://github.com/mossls-studio/mos-lens",
          highlights: {
            zh: ["6 种液态玻璃形状", "中心放大镜折射", "镜内过渡羽化"],
            en: ["6 glass shapes", "Center magnification", "Inner feathering"]
          },
          desc: {
            zh: "多形态液态玻璃透镜：内置圆、椭圆、多边形、星形、心形及自定义图层 6 种形态，支持中心放大、镜内柔和过渡与高光折射，平面排版和镜头强调都出彩。",
            en: "Multi-shape liquid glass lens supporting circle, ellipse, polygon, star, heart, and custom layers — with center magnification, soft inner feathering, and specular refraction."
          }
        },
        {
          id: "mos.shadow",
          group: "vfx",
          name: { zh: "阴影 Shadow", en: "Shadow" },
          version: "v0.6.2",
          runtime: "WASM",
          shot: "assets/shots/mos/shadow.webp",
          repo: "https://github.com/mossls-studio/mos-shadow",
          highlights: {
            zh: ["长投影与弯曲变形", "柔和淡出模糊", "继承图层原色"],
            en: ["Long & curved shadow", "Smooth fade & blur", "Layer color inherit"]
          },
          desc: {
            zh: "文字与立绘立体感利器：支持长阴影延展、平滑弯曲、距离模糊衰减与原图层色彩混合，让静止画 MAD 和标题排版瞬间跳出画面。",
            en: "Stylized depth for typography and character cutouts: long shadows with smooth bending, distance blur falloff, and layer-color tinting."
          }
        },
        {
          id: "mos.lightwrap",
          group: "vfx",
          name: { zh: "灯光混合 Light Mix", en: "Light Mix" },
          version: "v1.5.0",
          runtime: "Rust Helper",
          shot: "assets/shots/mos/lightmix.webp",
          repo: "https://github.com/mossls-studio/mos-lightmix",
          highlights: {
            zh: ["真实背景溢光包裹", "多种混合模式", "人物融图专用"],
            en: ["Background light wrap", "Blend modes", "Seamless compositing"]
          },
          desc: {
            zh: "抠图融进高光背景的秘密武器：提取背景光源并柔化包裹到前景边缘，消除生硬白边，让 MAD 人物立绘与光效背景浑然一体。",
            en: "Blend character cutouts seamlessly into bright backdrops: samples background illumination and wraps soft rim spillover around foreground edges."
          }
        },
        {
          id: "mos.rimlight",
          group: "vfx",
          name: { zh: "打光 Rim Light", en: "Rim Light" },
          version: "v1.0.0",
          runtime: "Rust Helper",
          shot: "assets/shots/mos/rimlight.webp",
          repo: "https://github.com/mossls-studio/mos-suite",
          highlights: {
            zh: ["2D 偏移边缘打光", "四色渐变叠加", "独立轮廓发光"],
            en: ["2D offset rim light", "4-color gradient", "Independent glow"]
          },
          desc: {
            zh: "动漫人物轮廓高光专属插件：基于 Alpha 边缘偏移生成锐利逆光轮廓，支持四色渐变映射、拼贴与独立发光，一键拉满高燃画面质感。",
            en: "Anime-style backlit rim lighting: 2D alpha-offset edge light with 4-color gradient overlay, tiling, and independent bloom for dramatic character highlights."
          }
        },
        {
          id: "mos.lightsweep",
          group: "effects",
          name: { zh: "扫光 Light Sweep", en: "Light Sweep" },
          version: "v1.2.0",
          runtime: "Rust Helper",
          shot: "assets/shots/mos/lightsweep.webp",
          repo: "https://github.com/mossls-studio/mos-suite",
          highlights: {
            zh: ["直线 / 径向扫光", "独立轮廓高光", "双色高速辉光"],
            en: ["Linear & radial sweep", "Edge highlight", "Dual-color fast glow"]
          },
          desc: {
            zh: "标题与 Logo 闪耀标配：支持直线与径向循环扫光、双色偏移渐变与独立轮廓边缘提亮，配合高速发光让片头和转场卡片闪耀夺目。",
            en: "Signature metallic sheen for titles and logos: linear or radial light sweeps with dual-color offset gradients, independent edge catchlights, and high-speed bloom."
          }
        },
        {
          id: "mos.dissolve",
          group: "effects",
          name: { zh: "消散 Dissolve", en: "Dissolve" },
          version: "v1.0.0",
          runtime: "Rust Helper",
          shot: "assets/shots/mos/dissolve.webp",
          repo: "https://github.com/mossls-studio/mos-suite",
          highlights: {
            zh: ["粒子生成 / 像素分离", "线性 / 杂色 / 自定义遮罩", "旋度风场与尾端变色"],
            en: ["Particles & pixel split", "Linear/noise/custom mask", "Curl wind & color fade"]
          },
          desc: {
            zh: "高潮收尾与情绪退场大招：支持粒子飞散与像素块剥离双模式，内置旋度湍流风场、重力爆散与尾端发光变色，未消散区域保持 100% 锐利。",
            en: "Cinematic disintegration for MAD climaxes and outros: dual particle-emission and pixel-separation modes with curl-noise wind, gravity burst, and glowing color-shifted trails."
          }
        },
        {
          id: "mos.blur",
          group: "blur",
          name: { zh: "模糊 Blur", en: "Blur" },
          version: "v0.1.0",
          runtime: "WASM",
          shot: "assets/shots/mos/blur.webp",
          repo: "https://github.com/mossls-studio/mos-suite",
          highlights: {
            zh: ["矢量蒙版距离场", "真正内容边缘模糊", "保留原不透明度"],
            en: ["Vector mask SDF", "True edge resampling", "Keep original alpha"]
          },
          desc: {
            zh: "按图层蒙版做「真·边缘模糊」：直接读取矢量蒙版计算距离场，让画面内容顺着边界真实重采样晕开而非简单降透明，景深与局部柔焦干净无重影。",
            en: "True mask-driven edge blur: computes a signed distance field directly from vector masks so edge pixels genuinely resample and soften instead of merely fading alpha."
          }
        }
      ]
    },
    {
      id: "fustimage",
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
      shots: ["assets/shots/muxvideo-1.webp", "assets/shots/muxvideo-2.webp", "assets/shots/muxvideo-3.webp"],
      name: "MuxVideo",
      initial: "M",
      repo: "MuxVideo",
      category: "software",
      version: "v0.1.47",
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
      roleKey: "team.role2",
      avatar: "https://avatars.githubusercontent.com/u/281612827?v=4&s=240",
      github: "https://github.com/bingkunwang01-cmd"
    }
  ]
};

