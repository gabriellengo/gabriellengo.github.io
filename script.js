// scroll reveal
window.sr = ScrollReveal();
sr.reveal('.navbar', {delay: 200});
sr.reveal('.container', {delay: 650});

// fancybox
$('[data-fancybox="images"]').fancybox({
  buttons : [
    'slideShow',
    'share',
    'zoom',
    'fullScreen',
    'close'
  ],
  thumbs : {
    autoStart : true
  }
});
