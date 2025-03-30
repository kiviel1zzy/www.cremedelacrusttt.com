document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("expandedImg");
    let closeBtn = document.querySelector(".close");

    document.querySelectorAll(".expandable").forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.src; 
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
