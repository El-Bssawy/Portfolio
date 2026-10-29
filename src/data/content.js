// ---------------------------------------------------------------------------
//  ALL WEBSITE TEXT LIVES HERE  ->  edit this file to change any wording.
//  Every string exists twice: once under `en` (English) and once under `ar`.
// ---------------------------------------------------------------------------

export const content = {
  en: {
    dir: "ltr",
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      timeline: "Timeline",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      firstName: "Moaz",
      name: "El-Bssawy",
      roles: ["Web Developer", "React Developer", "UI Engineer"],
      experience: "1.5+ years of experience",
      tagline:
        "I turn ideas into fast, accessible and pixel-perfect web experiences that feel as good as they look.",
      ctaPrimary: "View my work",
      ctaSecondary: "Let's talk",
      scroll: "Scroll to explore",
      badge: "Available for new projects",
    },
    about: {
      title: "About me",
      heading: "Building the web, one clean line at a time",
      bio: "I'm a Web Developer who loves crafting responsive, interactive interfaces with HTML, CSS, JavaScript, TypeScript, React, PHP, Sass and PugJS. I focus on writing clean, maintainable code and turning UI/UX designs into smooth, real-world products — from reusable components and performance tuning to cross-browser polish and API integration.",
      features: [
        {
          icon: "fa-solid fa-bullseye",
          title: "Problem Solving",
          text: "I enjoy breaking complex problems down and turning them into simple, beautiful solutions.",
        },
        {
          icon: "fa-solid fa-code",
          title: "Clean Code",
          text: "Readable, scalable and maintainable code that follows modern best practices.",
        },
        {
          icon: "fa-solid fa-rocket",
          title: "Always Learning",
          text: "Every day I push my skills further with new tools, patterns and ideas.",
        },
      ],
      stats: [
        { value: "1.5+", label: "Years experience" },
        { value: "15+", label: "Projects built" },
        { value: "10+", label: "Technologies" },
        { value: "100%", label: "Passion" },
      ],
      stackTitle: "Tech I work with",
      cv: "View CV",
    },
    skills: {
      title: "My Skills",
      subtitle: "A toolkit refined through real projects.",
    },
    projects: {
      title: "My Projects",
      subtitle: "A selection of things I've designed and built.",
      filters: { all: "All", Template: "Templates", Game: "Games" },
      visit: "Live demo",
      code: "Source code",
      showMore: "Show more",
      showLess: "Show less",
    },
    timeline: {
      title: "My Journey",
      subtitle: "The road so far, and where it's heading.",
      items: [
        {
          year: "2024",
          icon: "fa-solid fa-seedling",
          color: "green",
          title: "The Beginning",
          points: ["Started learning HTML & CSS", "Discovered the world of web development"],
        },
        {
          year: "2024 — 2025",
          icon: "fa-brands fa-js",
          color: "yellow",
          title: "The Development",
          points: [
            "Learned JavaScript deeply",
            "Built projects from the ground up",
            "Understood the DOM, events & APIs",
          ],
        },
        {
          year: "2025",
          icon: "fa-solid fa-rocket",
          color: "purple",
          title: "Going Professional",
          points: [
            "Worked with Sass & PugJS",
            "Shipped fully responsive templates",
            "Added TypeScript & PHP to my stack",
            "Started building this portfolio",
          ],
        },
        {
          year: "2026",
          icon: "fa-brands fa-react",
          color: "orange",
          title: "Current Phase",
          points: [
            "Going deeper into React & modern tooling",
            "Building reusable component systems",
            "Building full web apps with TypeScript & PHP",
            "Taking on freelance work",
          ],
        },
        {
          year: "Next",
          icon: "fa-solid fa-star",
          color: "blue",
          title: "What's Next?",
          points: ["Land a great internship & real experience", "Keep growing and helping others"],
        },
      ],
    },
    contact: {
      title: "Contact",
      heading: "Let's build something",
      headingAccent: "together",
      text: "I'm always open to new opportunities, exciting projects or just a friendly chat. Drop me a message and I'll get back to you as soon as I can.",
      info: [
        { icon: "fa-regular fa-envelope", title: "Email", value: "mzh9392@gmail.com", ltr: true },
        { icon: "fa-solid fa-phone-volume", title: "Phone", value: "+20 104 334 8575", ltr: true },
        { icon: "fa-solid fa-location-dot", title: "Location", value: "Kafr El-Sheikh, Egypt" },
        { icon: "fa-regular fa-clock", title: "Availability", value: "Open to opportunities" },
      ],
      socialTitle: "Find me on",
      form: {
        title: "Send me a message",
        subtitle: "Fill in the form and I'll reply soon.",
        name: "Your name",
        email: "Your email",
        subject: "Subject",
        message: "Your message",
        send: "Send message",
      },
    },
    footer: {
      made: "Designed & built with",
      by: "by Moaz El-Bssawy",
    },
  },

  ar: {
    dir: "rtl",
    nav: {
      home: "الرئيسية",
      about: "نبذة",
      skills: "المهارات",
      projects: "المشاريع",
      timeline: "الرحلة",
      contact: "تواصل",
    },
    hero: {
      greeting: "أهلاً، أنا",
      firstName: "",
      name: "معاذ",
      roles: ["مطوّر ويب", "مطوّر React", "مهندس UI"],
      experience: "سنة ونصف خبرة",
      tagline:
        "أحوّل الأفكار إلى تجارب ويب سريعة وسلسة ومتقنة — تبدو بنفس جمال استخدامها.",
      ctaPrimary: "شاهد أعمالي",
      ctaSecondary: "تواصل معي",
      scroll: "انزل للاستكشاف",
      badge: "متاح لمشاريع جديدة",
    },
    about: {
      title: "نبذة عني",
      heading: "أبني الويب، سطر نظيف وراء سطر",
      bio: "مطوّر ويب، أحب بناء واجهات تفاعلية ومتجاوبة باستخدام HTML و CSS و JavaScript و TypeScript و React و PHP و Sass و PugJS. أركّز على كتابة كود نظيف وسهل الصيانة، وأحوّل تصاميم UI/UX إلى منتجات حقيقية سلسة — من المكوّنات القابلة لإعادة الاستخدام وتحسين الأداء إلى توافق المتصفحات وربط الـ APIs.",
      features: [
        {
          icon: "fa-solid fa-bullseye",
          title: "حل المشكلات",
          text: "أستمتع بتفكيك المشكلات المعقّدة وتحويلها إلى حلول بسيطة وجميلة.",
        },
        {
          icon: "fa-solid fa-code",
          title: "كود نظيف",
          text: "كود مقروء وقابل للتوسّع والصيانة، يتبع أفضل الممارسات الحديثة.",
        },
        {
          icon: "fa-solid fa-rocket",
          title: "تعلّم مستمر",
          text: "كل يوم أطوّر مهاراتي بأدوات وأنماط وأفكار جديدة.",
        },
      ],
      stats: [
        { value: "1.5+", label: "سنوات خبرة" },
        { value: "15+", label: "مشروع منجز" },
        { value: "+10", label: "تقنية" },
        { value: "100%", label: "شغف" },
      ],
      stackTitle: "التقنيات التي أستخدمها",
      cv: "عرض السيرة الذاتية",
    },
    skills: {
      title: "مهاراتي",
      subtitle: "مجموعة أدوات صقلتها من خلال مشاريع حقيقية.",
    },
    projects: {
      title: "مشاريعي",
      subtitle: "مختارات من الأعمال التي صمّمتها وبنيتها.",
      filters: { all: "الكل", Template: "قوالب", Game: "ألعاب" },
      visit: "المعاينة",
      code: "الكود",
      showMore: "إظهار المزيد",
      showLess: "إظهار أقل",
    },
    timeline: {
      title: "رحلتي",
      subtitle: "الطريق حتى الآن، وإلى أين يتجه.",
      items: [
        {
          year: "2024",
          icon: "fa-solid fa-seedling",
          color: "green",
          title: "البداية",
          points: ["بدأت تعلّم HTML و CSS", "اكتشفت عالم تطوير الويب"],
        },
        {
          year: "2024 — 2025",
          icon: "fa-brands fa-js",
          color: "yellow",
          title: "التطوّر",
          points: ["تعلّمت JavaScript بعمق", "بنيت مشاريع من الصفر", "فهمت الـ DOM والأحداث والـ APIs"],
        },
        {
          year: "2025",
          icon: "fa-solid fa-rocket",
          color: "purple",
          title: "الاحتراف",
          points: ["عملت بـ Sass و PugJS", "أطلقت قوالب متجاوبة بالكامل", "أضفت TypeScript و PHP إلى أدواتي", "بدأت بناء هذا البورتفوليو"],
        },
        {
          year: "2026",
          icon: "fa-brands fa-react",
          color: "orange",
          title: "المرحلة الحالية",
          points: ["التعمّق في React والأدوات الحديثة", "بناء أنظمة مكوّنات قابلة لإعادة الاستخدام", "أبني تطبيقات ويب متكاملة بـ TypeScript و PHP", "بدء العمل الحر"],
        },
        {
          year: "القادم",
          icon: "fa-solid fa-star",
          color: "blue",
          title: "ما القادم؟",
          points: ["الحصول على تدريب وخبرة حقيقية", "الاستمرار في النمو ومساعدة الآخرين"],
        },
      ],
    },
    contact: {
      title: "تواصل",
      heading: "لنبنِ شيئاً",
      headingAccent: "معاً",
      text: "أرحّب دائماً بالفرص الجديدة والمشاريع المميّزة أو مجرّد دردشة ودّية. أرسل لي رسالة وسأرد عليك في أقرب وقت.",
      info: [
        { icon: "fa-regular fa-envelope", title: "البريد", value: "mzh9392@gmail.com", ltr: true },
        { icon: "fa-solid fa-phone-volume", title: "الهاتف", value: "+20 104 334 8575", ltr: true },
        { icon: "fa-solid fa-location-dot", title: "الموقع", value: "كفر الشيخ، مصر" },
        { icon: "fa-regular fa-clock", title: "التوفّر", value: "متاح للفرص" },
      ],
      socialTitle: "تجدني على",
      form: {
        title: "أرسل لي رسالة",
        subtitle: "املأ النموذج وسأرد عليك قريباً.",
        name: "اسمك",
        email: "بريدك الإلكتروني",
        subject: "الموضوع",
        message: "رسالتك",
        send: "إرسال الرسالة",
      },
    },
    footer: {
      made: "صُمّم وبُني بـ",
      by: "على يد معاذ",
    },
  },
};

export const ui = {
  langButton: { en: "EN", ar: "ع" },
  themeDark: "Dark",
  themeLight: "Light",
};

export const links = {
  email: "mzh9392@gmail.com",
  phone: "+201043348575",
  formspree: "https://formspree.io/f/mlgzygdl",
  social: [
    { name: "Facebook", icon: "fa-brands fa-facebook", url: "https://www.facebook.com/Moaz.Hamada.01/" },
    { name: "Instagram", icon: "fa-brands fa-instagram", url: "https://www.instagram.com/moaz_hamada.1/" },
    { name: "LinkedIn", icon: "fa-brands fa-linkedin", url: "http://linkedin.com/in/moaz-hamada-b9035738a/" },
    { name: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/El-Bssawy" },
    { name: "CodePen", icon: "fa-brands fa-codepen", url: "https://codepen.io/El-Bssawy" },
  ],
};
