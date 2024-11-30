// รายชื่อ URL ของรูปภาพพื้นหลังที่ต้องการใช้
const backgroundImages = [
    'https://images6.alphacoders.com/131/1319754.jpeg',
    'https://wallpapercave.com/wp/wp11753572.jpg',
    'https://a-static.besthdwallpaper.com/blue-lock-anime-wallpaper-2048x576-109188_71.jpg'
];

let currentImageIndex = 0;

// ฟังก์ชันสำหรับเปลี่ยนรูปพื้นหลัง
function changeBackgroundImage() {
    // ใช้ `currentImageIndex` เพื่อเลือกภาพจาก array
    document.querySelector('.about-bluelock').style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;

    // อัพเดต `currentImageIndex` เพื่อให้เลื่อนไปยังภาพถัดไป
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length; // ใช้ % เพื่อให้วนไปเริ่มต้นใหม่เมื่อถึงภาพสุดท้าย
}

// ตั้งเวลาให้เปลี่ยนภาพทุก 5 วินาที
setInterval(changeBackgroundImage, 5000);

// เริ่มต้นเปลี่ยนภาพพื้นหลังเมื่อโหลดหน้า
changeBackgroundImage();
