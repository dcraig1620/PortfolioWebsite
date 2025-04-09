let modal = document.getElementById('myModal');
let mainPage = document.getElementsByTagName('main')[0];
let projectDescription = document.querySelector('#project-description');
let video = document.querySelector('.video');
                
// Get the <button> element that closes the modal
let closeButton = document.getElementsByClassName("close")[0];

// Get all images
let imageButtons = document.querySelectorAll('.extraimgbutton');
let modalImg = document.getElementById("img01");
let i;

mainPage.addEventListener('focusin', () => {
  document.querySelector('#myModal button').focus()
  projectDescription.setAttribute('aria-hidden', true);
  video.setAttribute('aria-hidden', true);
});

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
