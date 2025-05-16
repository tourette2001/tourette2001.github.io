function toggleMenu() {
    const links = document.querySelector('.navbar .links');
    links.classList.toggle('active');
}


document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image-grid img");
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const caption = document.getElementById("caption");

    images.forEach((image) => {
        image.addEventListener("click", () => {
            modal.style.display = "block";
            modalImage.src = image.src;
            caption.textContent = image.alt; // Use the alt text as the caption
        });
    });

    // Close the modal when the close button is clicked
    document.querySelector(".close").addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside the image
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});