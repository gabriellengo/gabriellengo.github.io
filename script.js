// scroll reveal
window.sr = ScrollReveal();
sr.reveal('.navbar', {delay: 200});
sr.reveal('.container', {delay: 750});
sr.reveal('.container-fluid', {delay: 750});

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
