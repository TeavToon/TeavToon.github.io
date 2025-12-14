// รอให้หน้าเว็บโหลดเสร็จก่อนทำงาน
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ใส่ปีปัจจุบันลงใน Footer อัตโนมัติ
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Smooth Scroll (เลื่อนหน้าจอสมูทๆ เวลาคลิกเมนู)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // ป้องกันการกระโดดแบบปกติ

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // ลบ 70px เผื่อความสูง Navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Hamburger Menu สำหรับมือถือ
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 4. Console Log เท่ๆ (Easter Egg สำหรับ Dev ที่เปิด F12 ดู)
    console.log("%c Hello from TeavToon! ", "background: #222; color: #bada55; font-size: 20px; padding: 10px; border-radius: 5px;");
    console.log("Welcome to my portfolio. Feel free to check my code on GitHub!");

});
