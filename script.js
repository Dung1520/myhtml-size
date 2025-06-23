// Hover vào ảnh nhỏ để hiển thị ảnh lớn và mô tả
function upDate(previewPic) {
    console.log("Hover vào: " + previewPic.alt);

    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.color = "darkcyan";
    imageDiv.style.padding = "20px";
    imageDiv.style.height = "500px";
    imageDiv.style.backgroundSize = "cover";
    imageDiv.style.backgroundPosition = "center";
    imageDiv.style.display = "flex";
    imageDiv.style.alignItems = "center";
    imageDiv.style.justifyContent = "center";
    imageDiv.style.textAlign = "center";
}

// Trả lại trạng thái ban đầu
function undo() {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

// Khi trang tải xong
window.onload = function () {
    addTabFocus();          // Thêm tabindex cho ảnh
    addHoverEffect();       // Thêm hiệu ứng hover
    simulateHoverAllImages(); // Tự động hover từng ảnh
};

// Thêm tabindex cho ảnh để dùng phím Tab
function addTabFocus() {
    console.log("Hàm addTabFocus đã chạy");

    let images = document.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}

// Thêm hiệu ứng hover nhẹ cho ảnh
function addHoverEffect() {
    let images = document.querySelectorAll("img");

    for (let i = 0; i < images.length; i++) {
        images[i].style.transition = "transform 0.3s ease, box-shadow 0.3s ease";

        images[i].addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
            this.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)";
        });

        images[i].addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "none";
        });

        // Hiệu ứng khi focus bằng Tab
        images[i].addEventListener("focus", function () {
            this.style.outline = "3px solid #2196f3";
        });

        images[i].addEventListener("blur", function () {
            this.style.outline = "none";
        });
    }
}

// Tự động mô phỏng hover từng ảnh khi load trang
function simulateHoverAllImages() {
    let images = document.querySelectorAll("img");
    let index = 0;

    function hoverNext() {
        if (images.length === 0) return;

        upDate(images[index]);

        setTimeout(() => {
            undo();

            index = (index + 1) % images.length; // Lặp lại từ đầu sau ảnh cuối
            hoverNext(); // gọi tiếp ảnh sau
        }, 3000); // thời gian giữa các ảnh
    }

    hoverNext(); // bắt đầu
}
