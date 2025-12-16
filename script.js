// รอให้หน้าเว็บโหลดเสร็จก่อนทำงาน
document.addEventListener('DOMContentLoaded', () => {
    
    // ตัวแปร Global สำหรับใช้ร่วมกัน
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    // 1. ใส่ปีปัจจุบันลงใน Footer อัตโนมัติ
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Smooth Scroll + Auto Close Menu (สำคัญมาก!)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // เลื่อนหน้าจอ
                window.scrollTo({
                    top: targetElement.offsetTop - 70, 
                    behavior: 'smooth'
                });

                // [ADD] สั่งปิดเมนูมือถือทันทีที่กดลิงก์
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // 3. Hamburger Menu Toggle
    if (hamburger) {
        hamburger.addEventListener('click', (e) => {
            // หยุด event ไม่ให้ bubble ไปถึง document (เพื่อใช้กับข้อ 4)
            e.stopPropagation(); 
            navLinks.classList.toggle('active');
        });
    }

    // 4. [ADD] คลิกที่ว่างๆ แล้วปิดเมนู (Click Outside)
    document.addEventListener('click', (e) => {
        // ถ้าคลิกไม่ได้โดน hamburger และไม่ได้โดนตัวเมนู -> สั่งปิด
        if (hamburger && navLinks && !hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });

    // 5. [ADD] Navbar Scroll Effect (เพิ่มเงาเมื่อเลื่อนลง)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        } else {
            navbar.style.boxShadow = "none";
        }
    });

    // 6. Console Log เท่ๆ
    console.log("%c Hello from TeavToon! ", "background: #222; color: #bada55; font-size: 20px; padding: 10px; border-radius: 5px;");
    console.log("Welcome to my portfolio. Feel free to check my code on GitHub!");

});