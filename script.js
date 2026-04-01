// الانتظار حتى يتم تحميل محتوى الصفحة بالكامل
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("imageModal");
    const img = document.getElementById("schedule-img");
    const modalImg = document.getElementById("zoomed-img");
    const closeBtn = document.querySelector(".close");

    // التحقق من وجود العناصر في الصفحة لتجنب الأخطاء البرمجية في الصفحات الأخرى
    if (modal && img && modalImg && closeBtn) {
        // عند الضغط على صورة الجدول، يتم عرضها بحجم كبير
        img.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });

        // إغلاق الصورة عند الضغط على زر (X)
        closeBtn.addEventListener("click", function() {
            modal.style.display = "none";
        });

        // إغلاق الصورة عند الضغط في أي مكان خارجها
        window.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});