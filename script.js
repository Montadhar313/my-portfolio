// نظام الترجمة - أكثر دقة وسلاسة
const translations = {
    ar: {
        // Navigation & General
        "pageTitle": "بروتوفوليو | مطور ألعاب ومصمم جرافيك",
        "portfolio": "بروتوفوليو",
        "gameDevGraphicDesigner": "مطور ألعاب ومصمم جرافيك",
        "home": "الرئيسية",
        "skills": "مهاراتي",
        "platforms": "منصاتي",
        "videos": "فيديوهاتي",
        "gallery": "معرض الأعمال",
        "contact": "اتصل بي",
        
        // Hero section
        "heroTitle": "إبداعي في عالم الألعاب والتصميم",
        "heroSubtitle": "مرحباً بكم في بروتوفوليو الخاص بي، حيث أشارككم شغفي وإبداعي في تطوير الألعاب، التصميم الجرافيكي، الرسوم والأنيميشن. استكشفوا عالمي الإبداعي من خلال مشاريعي وأعمالي.",
        "viewWorks": "استعرض الأعمال",
        "contactMe": "تواصل معي",
        
        // Skills section
        "mySkills": "مهاراتي وخبراتي",
        "skillsSubtitle": "مجموعة المهارات والخبرات التي أمتلكها في مجالات تطوير الألعاب والتصميم الجرافيكي",
        "gameDevelopment": "تطوير الألعاب",
        "graphicDesign": "التصميم الجرافيكي",
        "animationOtherSkills": "الأنيميشن والمهارات الأخرى",
        "digitalDrawing2D": "الرسم الرقمي 2D",
        "animation2D": "أنيميشن 2D",
        "englishLanguage": "اللغة الإنجليزية",
        "projectManagement": "إدارة المشاريع",
        "advanced": "متقدم",
        "intermediate": "متوسط",
        
        // Platforms section
        "myPlatforms": "منصاتي الإلكترونية",
        "platformsSubtitle": "يمكنكم متابعتي على مختلف المنصات الإلكترونية لمشاهدة أحدث أعمالي ومشاريعي",
        "behanceDesc": "معرض التصاميم والإبداعات البصرية",
        "youtubeDesc": "فيديوهات تعليمية وعرض مشاريع الألعاب",
        "instagramDesc": "لقطات يومية من عملي وإبداعي",
        "itchDesc": "مشاريعي في تطوير الألعاب",
        "githubDesc": "مشاريعي البرمجية مفتوحة المصدر",
        "telegramDesc": "قناة التواصل المباشر والأخبار",
        "facebookDesc": "صفحة أعمالي ومشاريعي",
        "verse8Desc": "منصة أعمالي الإبداعية",
        
        // Videos section
        "myVideos": "فيديوهات من يوتيوب",
        "videosSubtitle": "أحدث الفيديوهات من قناتي على يوتيوب تعرض مشاريعي وتجاربي في تطوير الألعاب والتصميم",
        "video1Title": "تطوير لعبة منصات باستخدام Unity",
        "video1Duration": "18 دقيقة",
        "video1Time": "3 أسابيع",
        "video1Desc": "رحلة تطوير لعبة منصات ثنائية الأبعاد من الصفر باستخدام محرك Unity وبرمجة C#.",
        "video2Title": "تصميم شخصيات كرتونية باستخدام Illustrator",
        "video2Duration": "25 دقيقة",
        "video2Time": "شهر واحد",
        "video2Desc": "عملية تصميم شخصيات كرتونية احترافية باستخدام أدوبي إليستريتور من التخطيط إلى التنفيذ.",
        "video3Title": "أنيميشن 2D للشخصيات باستخدام Photoshop",
        "video3Duration": "22 دقيقة",
        "video3Time": "أسبوعان",
        "video3Desc": "إنشاء أنيميشن ثنائي الأبعاد للشخصيات باستخدام أدوبي فوتوشوب وتقنيات الإطار بالإطار.",
        "visitYoutube": "زيارة قناتي على يوتيوب",
        
        // Gallery section
        "myGallery": "معرض أعمالي",
        "gallerySubtitle": "مجموعة مختارة من مشاريعي في تطوير الألعاب والتصميم الجرافيكي والرسوم والأنيميشن",
        "gallery1Title": "لعبة منصات 2D",
        "gallery2Title": "شخصيات كرتونية",
        "gallery3Title": "أنيميشن 2D",
        "gallery4Title": "نماذج ثلاثية الأبعاد",
        "gallery5Title": "واجهة لعبة",
        "gallery6Title": "مشهد فني رقمي",
        "animation": "أنيميشن",
        "uiUxDesign": "UI/UX تصميم",
        "digitalDrawing": "الرسم الرقمي",
        
        // Contact section
        "contactSubtitle": "هل لديك مشروع أو فكرة تريد مناقشتها؟ لا تتردد في التواصل معي",
        "email": "البريد الإلكتروني",
        "phone": "الهاتف",
        "whatsapp": "واتساب",
        "clickToEmail": "انقر لإرسال بريد إلكتروني",
        "clickToCall": "انقر للاتصال",
        "clickToWhatsapp": "انقر للدردشة على واتساب",
        "resumes": "السير الذاتية",
        "gameDeveloper": "مطور ألعاب",
        "graphicDesigner": "مصمم جرافيك",
        "fullName": "الاسم الكامل",
        "subject": "الموضوع",
        "message": "الرسالة",
        "messagePlaceholder": "أدخل رسالتك هنا...",
        "sendMessage": "إرسال الرسالة",
        
        // Footer
        "portfolioGameDev": "بروتوفوليو مطور ألعاب",
        "footerDesc": "شغفي هو تطوير الألعاب والتصميم الجرافيكي، وأعمالي هي هويتي. أسعى دائماً لتقديم الأفضل من خلال مهاراتي وخبراتي في هذا المجال.",
        "portfolioGameDevGraphic": "بروتوفوليو مطور ألعاب ومصمم جرافيك",
        "allRightsReserved": "جميع الحقوق محفوظة",
        
        // Form Messages
        "formSuccess": "شكراً لتواصلك! سأرد عليك في أقرب وقت ممكن.",
        "formError": "يرجى ملء جميع الحقول المطلوبة."
    }
};

// حالة اللغة الحالية
let currentLanguage = 'ar';

// وظيفة تبديل اللغة
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // تحديد اتجاه HTML واللغة
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
    
    // تحديد عنوان الصفحة
    document.title = translations[lang].pageTitle;
    
    // تحديد جميع العناصر ذات السمة data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // التحقق مما إذا كان عنصر نائب
            if (element.hasAttribute('data-i18n-placeholder')) {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // حفظ تفضيل اللغة
    localStorage.setItem('preferred-language', lang);
    
    // تشغيل حدث مخصص لأي منطق إضافي خاص باللغة
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

// تهيئة اللغة
function initLanguage() {
    // التحقق من تفضيل اللغة المحفوظ أو استخدام لغة المتصفح
    const savedLang = localStorage.getItem('preferred-language');
    const initialLang = savedLang || 'ar';
    
    switchLanguage(initialLang);
}

// العناصر التفاعلية لقسم الاتصال
function initContactInteractions() {
    // إضافة تأثيرات النقر لعناصر الاتصال
    const contactItems = document.querySelectorAll('.contact-info a.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // إضافة رد فعل بصري
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
        
        // إضافة إمكانية الوصول عن طريق لوحة المفاتيح
        item.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// تبديل قائمة الجوال
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// إغلاق قائمة الجوال عند النقر خارجها
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (!nav.contains(event.target) && !mobileMenu.contains(event.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
});

// زر العودة إلى الأعلى
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
});

backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// التمرير السلس لروابط التنقل
document.querySelectorAll('nav a, .hero-buttons a, .footer-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // إغلاق قائمة الجوال بعد النقر على الرابط
            document.querySelector('nav').classList.remove('active');
        }
    });
});

// إرسال النموذج مع دعم اللغة
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // التحقق البسيط من النموذج
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !subject || !message) {
        alert(translations[currentLanguage].formError);
        return;
    }
    
    // محاكاة إرسال النموذج مع رسالة خاصة باللغة
    alert(translations[currentLanguage].formSuccess);
    this.reset();
});

// إضافة حركة التحميل للبطاقات عند التمرير
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// مراقبة جميع البطاقات للحركة
document.querySelectorAll('.platform-card, .video-card, .gallery-item, .skill-category, .contact-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// التعامل مع أخطاء تحميل الصور
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.src = 'https://via.placeholder.com/400x300/333333/FFFFFF?text=صورة+غير+متوفرة';
        this.alt = 'صورة غير متوفرة';
    });
});

// تهيئة كل شيء عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    initLanguage();
    initContactInteractions();
});
