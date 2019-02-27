// https://slidebird.com/scroll-to-id-mit-jquery-und-smooth-srolling-zu-einem-definierten-anchor-scrollen/
// https://github.com/jquery/jquery/issues/2885
$(function() {
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({ scrollTop: target.offset().top }, 500);
        return false;
      }
    }
  });
});

// Rechtsklick deaktivieren
document.addEventListener('contextmenu', event => event.preventDefault());
