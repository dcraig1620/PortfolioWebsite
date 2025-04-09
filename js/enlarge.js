// Get the modal
let modal = document.getElementById('myModal');
                
// Get the <button> element that closes the modal
let closeButton = document.getElementsByClassName("close")[0];

// Get all images
let imageButtons = document.querySelectorAll('.extraimgbutton');
let modalImg = document.getElementById("img01");
let i;

// When the user clicks on <button> (x), close the modal
closeButton.onclick = function() { 
  modal.style.display = "none";
}

imageButtons.forEach((button) => {
  button.addEventListener('click', function() {
    modal.style.display = "block";
    const img = button.querySelector('img');
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});
