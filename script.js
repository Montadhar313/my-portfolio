// Translation system - أكثر دقة وسلاسة
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
    },
    en: {
        // Navigation & General
        "pageTitle": "Portfolio | Game Developer & Graphic Designer",
        "portfolio": "Portfolio",
        "gameDevGraphicDesigner": "Game Developer & Graphic Designer",
        "home": "Home",
        "skills": "Skills",
        "platforms": "Platforms",
        "videos": "Videos",
        "gallery": "Portfolio",
        "contact": "Contact",
        
        // Hero section
        "heroTitle": "My Creativity in Games & Design",
        "heroSubtitle": "Welcome to my portfolio, where I share my passion and creativity in game development, graphic design, 2D art and animation. Explore my creative world through my projects and works.",
        "viewWorks": "View Works",
        "contactMe": "Contact Me",
        
        // Skills section
        "mySkills": "My Skills & Experience",
        "skillsSubtitle": "The set of skills and experiences I have in game development and graphic design fields",
        "gameDevelopment": "Game Development",
        "graphicDesign": "Graphic Design",
        "animationOtherSkills": "Animation & Other Skills",
        "digitalDrawing2D": "Digital Drawing 2D",
        "animation2D": "2D Animation",
        "englishLanguage": "English Language",
        "projectManagement": "Project Management",
        "advanced": "Advanced",
        "intermediate": "Intermediate",
        
        // Platforms section
        "myPlatforms": "My Online Platforms",
        "platformsSubtitle": "You can follow me on various online platforms to see my latest works and projects",
        "behanceDesc": "Design portfolio and visual creations",
        "youtubeDesc": "Educational videos and game projects showcase",
        "instagramDesc": "Daily snippets of my work and creativity",
        "itchDesc": "My projects in game development",
        "githubDesc": "My open source programming projects",
        "telegramDesc": "Direct communication channel and news",
        "facebookDesc": "My work and projects page",
        "verse8Desc": "My creative works platform",
        
        // Videos section
        "myVideos": "YouTube Videos",
        "videosSubtitle": "Latest videos from my YouTube channel showcasing my projects and experiences in game development and design",
        "video1Title": "Developing a Platform Game Using Unity",
        "video1Duration": "18 minutes",
        "video1Time": "3 weeks",
        "video1Desc": "Journey of developing a 2D platform game from scratch using Unity engine and C# programming.",
        "video2Title": "Designing Cartoon Characters Using Illustrator",
        "video2Duration": "25 minutes",
        "video2Time": "1 month",
        "video2Desc": "Process of designing professional cartoon characters using Adobe Illustrator from planning to execution.",
        "video3Title": "2D Character Animation Using Photoshop",
        "video3Duration": "22 minutes",
        "video3Time": "2 weeks",
        "video3Desc": "Creating 2D character animation using Adobe Photoshop and frame-by-frame techniques.",
        "visitYoutube": "Visit My YouTube Channel",
        
        // Gallery section
        "myGallery": "My Works Gallery",
        "gallerySubtitle": "A selected collection of my projects in game development, graphic design, art and animation",
        "gallery1Title": "2D Platform Game",
        "gallery2Title": "Cartoon Characters",
        "gallery3Title": "2D Animation",
        "gallery4Title": "3D Models",
        "gallery5Title": "Game Interface",
        "gallery6Title": "Digital Art Scene",
        "animation": "Animation",
        "uiUxDesign": "UI/UX Design",
        "digitalDrawing": "Digital Drawing",
        
        // Contact section
        "contactSubtitle": "Do you have a project or idea you want to discuss? Feel free to contact me",
        "email": "Email",
        "phone": "Phone",
        "whatsapp": "WhatsApp",
        "clickToEmail": "Click to send email",
        "clickToCall": "Click to call",
        "clickToWhatsapp": "Click to chat on WhatsApp",
        "resumes": "Resumes",
        "gameDeveloper": "Game Developer",
        "graphicDesigner": "Graphic Designer",
        "fullName": "Full Name",
        "subject": "Subject",
        "message": "Message",
        "messagePlaceholder": "Enter your message here...",
        "sendMessage": "Send Message",
        
        // Footer
        "portfolioGameDev": "Game Developer Portfolio",
        "footerDesc": "My passion is game development and graphic design, and my works are my identity. I always strive to deliver the best through my skills and experiences in this field.",
        "portfolioGameDevGraphic": "Game Developer & Graphic Designer Portfolio",
        "allRightsReserved": "All rights reserved",
        
        // Form Messages
        "formSuccess": "Thank you for your message! I will get back to you as soon as possible.",
        "formError": "Please fill in all required fields."
    }
};

// Current language state
let currentLanguage = 'ar';

// Language switching functionality
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update HTML direction and language
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Update page title
    document.title = translations[lang].pageTitle;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Check if it's a placeholder
            if (element.hasAttribute('data-i18n-placeholder')) {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');
    
    // Save language preference
    localStorage.setItem('preferred-language', lang);
    
    // Trigger a custom event for any additional language-specific logic
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

// Initialize language
function initLanguage() {
    // Check for saved language preference or use browser language
    const savedLang = localStorage.getItem('preferred-language');
    const browserLang = navigator.language.startsWith('ar') ? 'ar' : 'en';
    const initialLang = savedLang || browserLang;
    
    switchLanguage(initialLang);
}

// Contact section interactive elements
function initContactInteractions() {
    // Add click effects for contact items
    const contactItems = document.querySelectorAll('.contact-info a.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Add a visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
        
        // Add keyboard accessibility
        item.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (!nav.contains(event.target) && !mobileMenu.contains(event.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
});

// Back to Top Button
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

// Smooth Scrolling for Navigation Links
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
            
            // Close mobile menu after clicking a link
            document.querySelector('nav').classList.remove('active');
        }
    });
});

// Form Submission with language support
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !subject || !message) {
        alert(translations[currentLanguage].formError);
        return;
    }
    
    // Simulate form submission with language-specific message
    alert(translations[currentLanguage].formSuccess);
    this.reset();
});

// Add loading animation to cards on scroll
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

// Observe all cards for animation
document.querySelectorAll('.platform-card, .video-card, .gallery-item, .skill-category, .contact-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Handle image loading errors
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.src = 'https://via.placeholder.com/400x300/333333/FFFFFF?text=صورة+غير+متوفرة';
        this.alt = 'صورة غير متوفرة';
    });
});

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initLanguage();
    initContactInteractions();
    
    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
});
