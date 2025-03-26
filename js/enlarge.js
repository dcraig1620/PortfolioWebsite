// Get the modal
let modal = document.getElementById('myModal');
                
// Get the <button> element that closes the modal
let closeButton = document.getElementsByClassName("close")[0];

// Get all images
let images = document.getElementsByTagName('img');
let modalImg = document.getElementById("img01");
let i;

// When the user clicks on <button> (x), close the modal
closeButton.onclick = function() { 
  modal.style.display = "none";
}

// Insert the clicked image inside the modal
for (i = 0; i < images.length; i++) {
  images[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
  }
}
