        // Header Scroll Effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const nav = document.getElementById('nav');
        
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuToggle.innerHTML = nav.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Animate Elements on Scroll
        const animateOnScroll = function() {
            const elements = document.querySelectorAll('.service-card, .award-card, .video-card, .blog-card');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };
        
        // Set initial state
        document.querySelectorAll('.service-card, .award-card, .video-card, .blog-card').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.5s ease';
        });
        
        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);
        
        // Video Play Button Hover Effect
        document.querySelectorAll('.video-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.querySelector('.play-icon').style.transform = 'translate(-50%, -50%) scale(1.2)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.querySelector('.play-icon').style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
        
        // Floating Animation for Elements
        function addFloatingAnimation() {
            const elements = document.querySelectorAll('.service-icon, .award-icon');
            elements.forEach((element, index) => {
                element.style.animationDelay = `${index * 0.2}s`;
                element.classList.add('floating');
            });
        }
        
        window.addEventListener('load', addFloatingAnimation);
        
        // Bullshit Meter Animation
        const bullshitMeter = document.querySelector('.bullshit-meter');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const meterFill = document.querySelector('.meter-fill');
                    meterFill.style.width = '10%';
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(bullshitMeter);
