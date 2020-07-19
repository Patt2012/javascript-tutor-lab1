//เพิ่มรูปภาพเช้าไปใน div โดยรับค่าเป็นคำค้นหา และลำดับของภาพเพื่อไม่ให้การแสดงภาพซ้ำ
function appendImageElement(keyword, index) {
    //สร้าง img เพื่อใส่เข้าไปใน div
    const imgElement = document.createElement('img');
    //imgElement.src = 'https://source.unsplash.com/400x255/?' + keyword + '&sig=' + index;
    imgElement.src = `https://source.unsplash.com/400x255/?${keyword}&sig=${index}`;

    const galleryElement = document.querySelector('.gallery');
    galleryElement.appendChild(imgElement);
}

//ทำหน้าที่ล้างภาพทั้งหมดก่อนที่จะแสดงภาพที่ค้นหาใหม่
function removePhotos() {
    const galleryElement = document.querySelector('.gallery');
    galleryElement.innerHTML = '';
}

//เมื่อพิมพ์และกด Enter ให้ทำการค้นหา
function searchPhotos (event) {
    const keyword = event.target.value;

    //ถ้ากดปุ่มเอ็นเตอร์และในช่องค้นหาไม่มีค่าว่าง แล้ว
    if (event.key === 'Enter' && keyword) {
        removePhotos();
        //ให้ดึงภาพที่ตรงคำค้นมาแสดง 9 ภาพ
        for(let i = 1 ; i <= 9 ; i++ ) {
            //เรียก appendImageElement ให้ทำงาน
            appendImageElement(keyword, i);
        }
    }
    //console.log(keyword);
    //console.log(event.target);
}

function run() {
    // appendImageElement('dog', 1);
    // appendImageElement('dog', 2);
    // appendImageElement('dog', 3);
    // for(let i = 1 ; i <= 9 ; i++ ) {
    //     appendImageElement('dog', i);
    // }

    //เลือกอิลิเมนท์ input
    const inputElement = document.querySelector('input');
    //เมื่อเกิดเหตุการณ์กดป่ม เรียก searchPhotos ทำงาน
    inputElement.addEventListener('keydown', searchPhotos);
}

run();