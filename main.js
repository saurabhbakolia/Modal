// Get Modal Element
const modal = document.getElementById("simpleModal");
// Get Open Modal Button
const modalBtn = document.getElementById("modalBtn");
// Get Close Button
const closeBtn = document.getElementById("closeBtn");

// Listen for open click
modalBtn.addEventListener("click", openModal);
// Listen for close click
closeBtn.addEventListener("click", closeModal);
// Listen for outside click
window.addEventListener("click", outsideClick);

// Function to open Modal
function openModal(){
    modal.style.display = 'block';
}

// Function to close Modal
function closeModal(){
    modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}