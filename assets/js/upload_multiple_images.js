const imagesInput = document.getElementById('images');
const previewContainer = document.getElementById('previewContainer');
let uploadedFiles = []; // تخزين الملفات المختارة

imagesInput.addEventListener('change', function () {
    const files = Array.from(imagesInput.files);

    // تحديث قائمة الملفات الحالية بالمجموع الجديد
    uploadedFiles = [...uploadedFiles, ...files];

    // إعادة تعيين قائمة الملفات في input
    const dataTransfer = new DataTransfer();
    uploadedFiles.forEach(file => dataTransfer.items.add(file));
    imagesInput.files = dataTransfer.files;

    // تحديث العرض
    updatePreview();
});

function updatePreview() {
    previewContainer.innerHTML = ''; // تنظيف العرض القديم

    uploadedFiles.forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = function (e) {
            // إنشاء عنصر عرض الصورة
            const div = document.createElement('div');
            const img = document.createElement('img');
            const removeIcon = document.createElement('i');

            img.src = e.target.result;

            // إعداد أيقونة الحذف
            removeIcon.className = 'far fa-times-circle';
            removeIcon.style.position = 'absolute';
            removeIcon.style.top = '-10px';
            removeIcon.style.right = '-10px';
            removeIcon.style.cursor = 'pointer';
            removeIcon.style.fontSize = '20px';
            removeIcon.style.color = 'red';

            removeIcon.onclick = () => {
                div.remove();
                removeImage(index);
            };

            div.style.position = 'relative';
            div.appendChild(img);
            div.appendChild(removeIcon);
            previewContainer.appendChild(div);
        };
        reader.readAsDataURL(file);
    });
}

function removeImage(index) {
    // حذف الصورة من القائمة
    uploadedFiles.splice(index, 1);

    // تحديث قائمة الملفات في input
    const dataTransfer = new DataTransfer();
    uploadedFiles.forEach(file => dataTransfer.items.add(file));
    imagesInput.files = dataTransfer.files;

    // تحديث العرض
    updatePreview();
}
