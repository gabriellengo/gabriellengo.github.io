// photo lightbox
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
// scroll reveal
window.sr = ScrollReveal();
sr.reveal('.navbar', {delay: 200});
sr.reveal('.container', {delay: 750});
sr.reveal('.container-fluid', {delay: 750});

// baguetteBox
baguetteBox.run('.gallery-1');
