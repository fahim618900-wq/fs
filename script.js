<script>
    // ১. মোবাইল মেনু টগল ফাংশন
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // মেনু খোলা থাকলে 'X' দেখাবে, বন্ধ থাকলে '☰'
        menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    // ২. মেনু লিংক ক্লিক করলে অটো মেনু বন্ধ হওয়া (মোবাইলের জন্য)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.textContent = '☰';
        });
    });

    // ৩. স্ক্রল করলে হেডার ব্যাকগ্রাউন্ড পরিবর্তন (Glassmorphism Effect)
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
</script>
