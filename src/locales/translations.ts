export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta1: string;
      cta2: string;
    };
  };
  about: {
    title: string;
    content: string;
  };
  services: {
    subtitle: string;
    title: string;
    items: {
      web: {
        title: string;
        description: string;
      };
      mobile: {
        title: string;
        description: string;
      };
      uiux: {
        title: string;
        description: string;
      };
      media: {
        title: string;
        description: string;
      };
      crm: {
        title: string;
        description: string;
      };
      branding: {
        title: string;
        description: string;
      };
      games: {
        title: string;
        description: string;
      };
      ai: {
        title: string;
        description: string;
      };
      cybersecurity: {
        title: string;
        description: string;
      };
    };
  };
  portfolio: {
    title: string;
    description: string;
  };
}

export const translations: Record<string, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio"
    },
    home: {
      hero: {
        title: "We offer digital solutions in any difficulty",
        subtitle: "United IT Company - Your partner in digital transformation",
        cta1: "Get Started",
        cta2: "Learn More"
      }
    },
    about: {
      title: "About United IT Company",
      content: `"United IT Company" was founded on October 8, 2020. According to the director of the company Murodkhuja Muratov, the philosophy of the company is to create a team that meets international standards in the IT field of Uzbekistan, to open up the opportunity for young programmers to work on themselves and at the same time be officially employed, to bring the company to a prominent place in the world arena IT.

At the time the company was founded, the team consisted of only 10 people, and now the team has +100 specialists. These people believed in the philosophy of the company and sought to contribute to the development of the project. To this day, these people remain loyal to the company and develop their teams within the company in different directions (Backend, Frontend, QA, Mobile, Analytics, Marketing Team, etc.).`
    },
    services: {
      subtitle: "IS THERE A PROBLEM?",
      title: "What solution do you want?",
      items: {
        web: {
          title: "Web Development",
          description: "We develop websites with the high quality, from corporate websites to web applications."
        },
        mobile: {
          title: "Mobile apps",
          description: "Development and technical support of mobile applications of any complexity."
        },
        uiux: {
          title: "UI&UX",
          description: "Developing a project MindMap and designing it with the optimal solution based on its architecture."
        },
        media: {
          title: "Media production",
          description: "Professional preparation of 2D / 3D animation, project presentation, advertising, video and other media resources."
        },
        crm: {
          title: "CRM Systems",
          description: "Automation of business and processes, development of electronic management systems that reduce paper-work by 100%."
        },
        branding: {
          title: "Branding",
          description: "Developing a creative and unique logo for your project and create its branding guidelines."
        },
        games: {
          title: "Production of games",
          description: "Development of games of any subject and complexity, corresponding to the international level."
        },
        ai: {
          title: "Artificial intelligence",
          description: "Development of intelligent computer systems with the capabilities of human intelligence."
        },
        cybersecurity: {
          title: "Cybersecurity",
          description: "Find and fix vulnerabilities in networks, devices, code, and data."
        }
      }
    },
    portfolio: {
      title: "Our Portfolio",
      description: "Discover our latest projects and innovations"
    }
  },
  uz: {
    nav: {
      home: "Bosh sahifa",
      about: "Biz haqimizda",
      services: "Xizmatlar",
      portfolio: "Portfolio"
    },
    home: {
      hero: {
        title: "Biz har qanday murakkablikdagi raqamli yechimlar taklif qilamiz",
        subtitle: "United IT Company - Raqamli transformatsiyadagi hamkoringiz",
        cta1: "Boshlash",
        cta2: "Batafsil"
      }
    },
    about: {
      title: "United IT Company haqida",
      content: `"United IT Company" 2020 yil 8 oktyabrda tashkil etilgan. Kompaniya direktori Murodxo'ja Muratovning ta'kidlashicha, kompaniyaning falsafasi O'zbekiston IT sohasida xalqaro standartlarga javob beradigan jamoa yaratish, yosh dasturchilar uchun o'z ustida ishlash imkoniyatini ochish va ayni paytda rasmiy ish bilan ta'minlash, kompaniyani dunyo arenasida IT sohasida ko'zga ko'rinadigan o'ringa olib chiqishdir.

Kompaniya tashkil etilgan paytda jamoa atigi 10 kishidan iborat edi, hozir esa jamoada +100 mutaxassis bor. Bu odamlar kompaniya falsafasiga ishondilar va loyihani rivojlantirishga hissa qo'shishga intildilar. Bugungi kungacha bu odamlar kompaniyaga sodiq qolmoqdalar va kompaniya ichida turli yo'nalishlarda (Backend, Frontend, QA, Mobile, Analytics, Marketing Team va boshqalar) o'z jamoalarini rivojlantirmoqdalar.`
    },
    services: {
      subtitle: "MUAMMO BORMI?",
      title: "Qanday yechim istaysiz?",
      items: {
        web: {
          title: "Veb dasturlash",
          description: "Biz yuqori sifatli veb-saytlar ishlab chiqamiz, korporativ veb-saytlardan tortib veb-ilovalargacha."
        },
        mobile: {
          title: "Mobil ilovalar",
          description: "Har qanday murakkablikdagi mobil ilovalarni ishlab chiqish va texnik qo'llab-quvvatlash."
        },
        uiux: {
          title: "UI&UX",
          description: "Loyiha MindMap ishlab chiqish va uning arxitekturasiga asoslanib optimal yechim bilan dizaynlash."
        },
        media: {
          title: "Media ishlab chiqarish",
          description: "2D / 3D animatsiya, loyiha taqdimoti, reklama, video va boshqa media resurslarni professional tayyorlash."
        },
        crm: {
          title: "CRM tizimlari",
          description: "Biznes va jarayonlarni avtomatlashtirish, qog'oz ishlarini 100% qisqartiradigan elektron boshqaruv tizimlarini ishlab chiqish."
        },
        branding: {
          title: "Brending",
          description: "Loyihangiz uchun ijodiy va noyob logo ishlab chiqish va brending ko'rsatmalarini yaratish."
        },
        games: {
          title: "O'yinlar ishlab chiqarish",
          description: "Xalqaro darajaga mos keladigan har qanday mavzu va murakkablikdagi o'yinlarni ishlab chiqish."
        },
        ai: {
          title: "Sun'iy intellekt",
          description: "Inson intellekti imkoniyatlariga ega bo'lgan aqlli kompyuter tizimlarini ishlab chiqish."
        },
        cybersecurity: {
          title: "Kiberxavfsizlik",
          description: "Tarmoqlar, qurilmalar, kod va ma'lumotlardagi zaifliklarni topish va tuzatish."
        }
      }
    },
    portfolio: {
      title: "Bizning Portfolio",
      description: "Eng so'nggi loyihalar va innovatsiyalarni kashf eting"
    }
  },
  ru: {
    nav: {
      home: "Главная",
      about: "О нас",
      services: "Услуги",
      portfolio: "Портфолио"
    },
    home: {
      hero: {
        title: "Мы предлагаем цифровые решения любой сложности",
        subtitle: "United IT Company - Ваш партнер в цифровой трансформации",
        cta1: "Начать",
        cta2: "Подробнее"
      }
    },
    about: {
      title: "О компании United IT",
      content: `"United IT Company" была основана 8 октября 2020 года. По словам директора компании Муродходжи Муратова, философия компании заключается в создании команды, соответствующей международным стандартам в IT-сфере Узбекистана, открытии возможностей для молодых программистов работать над собой и одновременно быть официально трудоустроенными, выведении компании на видное место на мировой IT-арене.

На момент основания компании команда состояла всего из 10 человек, а сейчас в команде более 100 специалистов. Эти люди поверили в философию компании и стремились внести вклад в развитие проекта. По сей день эти люди остаются преданными компании и развивают свои команды внутри компании в разных направлениях (Backend, Frontend, QA, Mobile, Analytics, Marketing Team и др.).`
    },
    services: {
      subtitle: "ЕСТЬ ПРОБЛЕМА?",
      title: "Какое решение вы хотите?",
      items: {
        web: {
          title: "Веб-разработка",
          description: "Мы разрабатываем высококачественные веб-сайты, от корпоративных сайтов до веб-приложений."
        },
        mobile: {
          title: "Мобильные приложения",
          description: "Разработка и техническая поддержка мобильных приложений любой сложности."
        },
        uiux: {
          title: "UI&UX",
          description: "Разработка проектной MindMap и проектирование с оптимальным решением на основе его архитектуры."
        },
        media: {
          title: "Медиа-производство",
          description: "Профессиональная подготовка 2D / 3D анимации, презентаций проектов, рекламы, видео и других медиа-ресурсов."
        },
        crm: {
          title: "CRM-системы",
          description: "Автоматизация бизнеса и процессов, разработка электронных систем управления, сокращающих бумажную работу на 100%."
        },
        branding: {
          title: "Брендинг",
          description: "Разработка креативного и уникального логотипа для вашего проекта и создание руководящих принципов брендинга."
        },
        games: {
          title: "Производство игр",
          description: "Разработка игр любой тематики и сложности, соответствующих международному уровню."
        },
        ai: {
          title: "Искусственный интеллект",
          description: "Разработка интеллектуальных компьютерных систем с возможностями человеческого интеллекта."
        },
        cybersecurity: {
          title: "Кибербезопасность",
          description: "Поиск и устранение уязвимостей в сетях, устройствах, коде и данных."
        }
      }
    },
    portfolio: {
      title: "Наше портфолио",
      description: "Откройте для себя наши последние проекты и инновации"
    }
  }
};
