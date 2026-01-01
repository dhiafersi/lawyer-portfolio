// ============================================
// MOBILE NAVIGATION
// ============================================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const mobileNav = document.getElementById('mobileNav');

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Hide/show navbar on scroll (mobile only)
let lastScroll = 0;
const navHeight = mobileNav.offsetHeight;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (window.innerWidth < 768) {
        if (currentScroll > lastScroll && currentScroll > navHeight) {
            // Scrolling down
            mobileNav.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            mobileNav.style.transform = 'translateY(0)';
        }
    }
    
    lastScroll = currentScroll;
});

// ============================================
// STICKY CTA BUTTON
// ============================================
const stickyCta = document.getElementById('stickyCta');
const heroSection = document.getElementById('home');

const observerOptions = {
    threshold: 0,
    rootMargin: '0px 0px -100px 0px'
};

const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            stickyCta.classList.add('visible');
        } else {
            stickyCta.classList.remove('visible');
        }
    });
}, observerOptions);

heroObserver.observe(heroSection);

// ============================================
// EXPERIENCE SLIDER
// ============================================
const experienceTrack = document.getElementById('experienceTrack');
const sliderDotsContainer = document.getElementById('sliderDots');
const experienceItems = document.querySelectorAll('.experience-item');

// Create dots
experienceItems.forEach((item, index) => {
    const dot = document.createElement('div');
    dot.classList.add('slider-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        const scrollPosition = item.offsetLeft - (experienceTrack.offsetWidth / 2) + (item.offsetWidth / 2);
        experienceTrack.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    });
    sliderDotsContainer.appendChild(dot);
});

// Update active dot on scroll
let scrollTimeout;
experienceTrack.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        const trackCenter = experienceTrack.scrollLeft + (experienceTrack.offsetWidth / 2);
        let closestIndex = 0;
        let closestDistance = Infinity;
        
        experienceItems.forEach((item, index) => {
            const itemCenter = item.offsetLeft + (item.offsetWidth / 2);
            const distance = Math.abs(trackCenter - itemCenter);
            
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });
        
        document.querySelectorAll('.slider-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === closestIndex);
        });
    }, 100);
});

// ============================================
// SMOOTH SCROLL WITH OFFSET
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - navHeight;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// FORM HANDLING
// ============================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // In a real application, you would send this to a backend
    console.log('Form submitted:', data);
    
    // Show success message (you can replace this with a more elegant modal)
    alert('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.');
    
    // Reset form
    contactForm.reset();
    
    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================
const observeElements = document.querySelectorAll('.service-card, .about-card, .collaboration-card');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            scrollObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

observeElements.forEach(el => {
    scrollObserver.observe(el);
});

// ============================================
// TOUCH GESTURES FOR MOBILE
// ============================================
let touchStartX = 0;
let touchEndX = 0;

experienceTrack.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

experienceTrack.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        // Swipe detected, let the browser handle it naturally
        // The scroll-snap will take care of positioning
    }
}

// ============================================
// ACTIVE NAVIGATION LINK
// ============================================
const sections = document.querySelectorAll('section[id]');

function updateActiveNavLink() {
    const scrollPosition = window.pageYOffset + navHeight + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
// Lazy load images when implemented
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================
// Add keyboard navigation for slider
document.addEventListener('keydown', (e) => {
    if (document.activeElement.classList.contains('slider-dot')) {
        const dots = Array.from(document.querySelectorAll('.slider-dot'));
        const currentIndex = dots.indexOf(document.activeElement);
        
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            const nextIndex = currentIndex > 0 ? currentIndex - 1 : dots.length - 1;
            dots[nextIndex].click();
            dots[nextIndex].focus();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            const nextIndex = currentIndex < dots.length - 1 ? currentIndex + 1 : 0;
            dots[nextIndex].click();
            dots[nextIndex].focus();
        }
    }
});

// ============================================
// INITIALIZE ON LOAD
// ============================================
window.addEventListener('load', () => {
    // Add smooth reveal for hero content
    document.querySelector('.hero-content').style.opacity = '1';
    
    // Update active nav link on page load
    updateActiveNavLink();
    
    // Add fade-in class to elements already in viewport
    const elementsInView = Array.from(observeElements).filter(el => {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight;
    });
    
    elementsInView.forEach(el => {
        el.classList.add('fade-in');
    });
});

// ============================================
// CONSOLE BRANDING
// ============================================
console.log('%cالأستاذة هدى الطريفي', 'font-size: 24px; font-weight: bold; color: #d4af37;');
console.log('%cمحامية لدى محاكم التعقيب', 'font-size: 14px; color: #1a2b4a;');
console.log('%cWebsite developed with ❤️', 'font-size: 12px; color: #64748b;');
