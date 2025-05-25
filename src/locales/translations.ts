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
            portfolio: "Portfolio",
        },
        home: {
            hero: {
                title: "We offer digital solutions in any difficulty",
                subtitle:
                    "Trend Solution - Your partner in digital transformation",
                cta1: "Get Started",
                cta2: "Learn More",
            },
        },
        about: {
            title: "About Trend Solution",
            content:
                "We are Trend Solution, a web development company dedicated to providing innovative and high-quality web solutions. Our mission is to help our clients grow their businesses by creating user-friendly, modern, and visually appealing websites. With over 2 years of experience, we have successfully collaborated with clients ranging from small startups to large enterprises. Our top priority is understanding the unique needs of each client and delivering results that exceed their expectations.",
        },
        services: {
            subtitle: "IS THERE A PROBLEM?",
            title: "What solution do you want?",
            items: {
                web: {
                    title: "Web Development",
                    description:
                        "We develop websites with the high quality, from corporate websites to web applications.",
                },
                mobile: {
                    title: "Mobile apps",
                    description:
                        "Development and technical support of mobile applications of any complexity.",
                },
                uiux: {
                    title: "UI&UX",
                    description:
                        "Developing a project MindMap and designing it with the optimal solution based on its architecture.",
                },
                media: {
                    title: "Media production",
                    description:
                        "Professional preparation of 2D / 3D animation, project presentation, advertising, video and other media resources.",
                },
                crm: {
                    title: "CRM Systems",
                    description:
                        "Automation of business and processes, development of electronic management systems that reduce paper-work by 100%.",
                },
                branding: {
                    title: "Branding",
                    description:
                        "Developing a creative and unique logo for your project and create its branding guidelines.",
                },
            },
        },
        portfolio: {
            title: "Our Portfolio",
            description: "Discover our latest projects and innovations",
        },
    },
    uz: {
        nav: {
            home: "Bosh sahifa",
            about: "Biz haqimizda",
            services: "Xizmatlar",
            portfolio: "Portfolio",
        },
        home: {
            hero: {
                title: "Biz har qanday murakkablikdagi raqamli yechimlar taklif qilamiz",
                subtitle:
                    "Trend Solution - Raqamli transformatsiyadagi hamkoringiz",
                cta1: "Boshlash",
                cta2: "Batafsil",
            },
        },
        about: {
            title: "Trend Solution haqida",
            content: `Trend Solution — bu innovatsion va sifatli veb yechimlarni taqdim etishga ixtisoslashgan veb-dasturlash kompaniyasi.
Bizning asosiy vazifamiz — mijozlarimizning biznesini rivojlantirishga yordam berish. Buning uchun biz zamonaviy, qulay va jozibador veb-saytlar yaratamiz. 2 yildan ortiq tajribaga ega bo‘lgan jamoamiz kichik startaplardanoq yirik kompaniyalargacha bo‘lgan mijozlar bilan muvaffaqiyatli hamkorlik qilgan.

Har bir mijozning ehtiyojini chuqur tushunish va ular kutganidan ham yuqori natija taqdim etish bizning ustuvor vazifamiz hisoblanadi.`,
        },
        services: {
            subtitle: "MUAMMO BORMI?",
            title: "Qanday yechim istaysiz?",
            items: {
                web: {
                    title: "Veb dasturlash",
                    description:
                        "Biz yuqori sifatli veb-saytlar ishlab chiqamiz, korporativ veb-saytlardan tortib veb-ilovalargacha.",
                },
                mobile: {
                    title: "Mobil ilovalar",
                    description:
                        "Har qanday murakkablikdagi mobil ilovalarni ishlab chiqish va texnik qo'llab-quvvatlash.",
                },
                uiux: {
                    title: "UI&UX",
                    description:
                        "Loyiha MindMap ishlab chiqish va uning arxitekturasiga asoslanib optimal yechim bilan dizaynlash.",
                },
                media: {
                    title: "Media ishlab chiqarish",
                    description:
                        "2D / 3D animatsiya, loyiha taqdimoti, reklama, video va boshqa media resurslarni professional tayyorlash.",
                },
                crm: {
                    title: "CRM tizimlari",
                    description:
                        "Biznes va jarayonlarni avtomatlashtirish, qog'oz ishlarini 100% qisqartiradigan elektron boshqaruv tizimlarini ishlab chiqish.",
                },
                branding: {
                    title: "Brending",
                    description:
                        "Loyihangiz uchun ijodiy va noyob logo ishlab chiqish va brending ko'rsatmalarini yaratish.",
                },
            },
        },
        portfolio: {
            title: "Bizning Portfolio",
            description:
                "Eng so'nggi loyihalar va innovatsiyalarni kashf eting",
        },
    },
    ru: {
        nav: {
            home: "Главная",
            about: "О нас",
            services: "Услуги",
            portfolio: "Портфолио",
        },
        home: {
            hero: {
                title: "Мы предлагаем цифровые решения любой сложности",
                subtitle:
                    "Trend Solution - Ваш партнер в цифровой трансформации",
                cta1: "Начать",
                cta2: "Подробнее",
            },
        },
        about: {
            title: "О компании Trend Solution",
            content: `Trend Solution — это компания по разработке веб-сайтов, специализирующаяся на инновационных и качественных цифровых решениях.
Наша миссия — помогать клиентам развивать свой бизнес, создавая современные, удобные и визуально привлекательные сайты. С более чем двухлетним опытом мы успешно сотрудничали как с небольшими стартапами, так и с крупными компаниями.

Мы ставим во главу угла индивидуальный подход к каждому проекту и стремимся превзойти ожидания наших клиентов.`,
        },
        services: {
            subtitle: "ЕСТЬ ПРОБЛЕМА?",
            title: "Какое решение вы хотите?",
            items: {
                web: {
                    title: "Веб-разработка",
                    description:
                        "Мы разрабатываем высококачественные веб-сайты, от корпоративных сайтов до веб-приложений.",
                },
                mobile: {
                    title: "Мобильные приложения",
                    description:
                        "Разработка и техническая поддержка мобильных приложений любой сложности.",
                },
                uiux: {
                    title: "UI&UX",
                    description:
                        "Разработка проектной MindMap и проектирование с оптимальным решением на основе его архитектуры.",
                },
                media: {
                    title: "Медиа-производство",
                    description:
                        "Профессиональная подготовка 2D / 3D анимации, презентаций проектов, рекламы, видео и других медиа-ресурсов.",
                },
                crm: {
                    title: "CRM-системы",
                    description:
                        "Автоматизация бизнеса и процессов, разработка электронных систем управления, сокращающих бумажную работу на 100%.",
                },
                branding: {
                    title: "Брендинг",
                    description:
                        "Разработка креативного и уникального логотипа для вашего проекта и создание руководящих принципов брендинга.",
                },
            },
        },
        portfolio: {
            title: "Наше портфолио",
            description: "Откройте для себя наши последние проекты и инновации",
        },
    },
};
