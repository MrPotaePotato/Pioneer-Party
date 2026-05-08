// random-quote.js

// ข้อมูลสมาชิกสภา (ใส่ให้ครบ 40 คนได้เลยครับ)
const councilMembers = [
    {
        name: "พาขวัญ นวลสำลี",
        role: "ประธานนักเรียน",
        image: "images/student_council_group_with_background/Student_Council_President_.png", // แก้ Path รูปให้ตรงกับของคุณ
        quote: "โรงเรียนของเรา เป็นพื้นที่ที่ทุกคนรู้สึกว่าเสียงของตัวเองมีความหมาย และเป็นช่วงเวลาที่สนุกที่สุด"
    },
    {
        name: "กฤษณะกันท์ ไข่แก้ว",
        role: "รองประธานนักเรียน",
        image: "images/student_council_group_with_background/Vice Student Council President 1.png", // แก้ Path รูปให้ตรงกับของคุณ
        quote: "เราพร้อมเป็นตัวแทนในการนำเสนอทุกปัญหา เพื่อคุณภาพชีวิตที่ดีขึ้นของทุกคนในโรงเรียน"
    },
    {
        name: "ธัญญรัตน์ หมื่นรัตน์",
        role: "รองประธานนักเรียน",
        image: "images/student_council_group_with_background/Vice Student Council President 2.png", // แก้ Path รูปให้ตรงกับของคุณ
        quote: "ทุกการเปลี่ยนแปลงเริ่มต้นที่พวกเรา เราจะก้าวไปด้วยกันแบบไม่มีใครถูกทิ้งไว้ข้างหลัง"
    }
    // เพิ่มคนอื่นๆ ...
];

function displayRandomQuote() {
    if (councilMembers.length === 0) return;

    // สุ่ม Index
    const randomIndex = Math.floor(Math.random() * councilMembers.length);
    const selectedMember = councilMembers[randomIndex];

    // ดึง Elements
    const quoteImage = document.getElementById('quote-image');
    const quoteText = document.getElementById('quote-text');
    const quoteName = document.getElementById('quote-name');
    const quoteRole = document.getElementById('quote-role');

    // ตรวจสอบว่ามี Elements อยู่ในหน้าหรือไม่
    if (quoteImage && quoteText && quoteName && quoteRole) {
        
        // ทำให้ค่อยๆ จางหายไปก่อนเปลี่ยนข้อความ (Fade Out)
        quoteImage.style.opacity = '0';
        quoteText.style.opacity = '0';
        quoteName.style.opacity = '0';
        quoteRole.style.opacity = '0';
        
        setTimeout(() => {
            // อัปเดตข้อมูล
            quoteImage.src = selectedMember.image;
            quoteText.innerHTML = `"${selectedMember.quote}"`; // ใส่เครื่องหมายคำพูดครอบไว้
            quoteName.innerText = selectedMember.name;
            quoteRole.innerText = selectedMember.role;
            
            // ตั้งค่า Transition และ Fade In กลับมา
            const transitionStyle = "opacity 0.8s ease-in-out";
            quoteImage.style.transition = transitionStyle;
            quoteText.style.transition = transitionStyle;
            quoteName.style.transition = transitionStyle;
            quoteRole.style.transition = transitionStyle;

            quoteImage.style.opacity = '1';
            quoteText.style.opacity = '1';
            quoteName.style.opacity = '1';
            quoteRole.style.opacity = '1';
        }, 300); // รอ 300ms ให้เฟดหายไปก่อน
    }
}

// เริ่มทำงานเมื่อโหลด DOM เสร็จสมบูรณ์
document.addEventListener('DOMContentLoaded', displayRandomQuote);