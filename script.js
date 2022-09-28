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

// tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// baguetteBox
baguetteBox.run('.gallery-1');

// masonry
$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});
