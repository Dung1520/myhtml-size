function upDate(previewPic) {
    console.log("Hover vào: " + previewPic.alt);

    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.color = "black";
    imageDiv.style.padding = "20px";
    imageDiv.style.height = "1000px";
    imageDiv.style.backgroundSize = "cover";
}

function undo() {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
