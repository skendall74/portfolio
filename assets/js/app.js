// Nav Drop Down
$('.dropdown-trigger').dropdown();

// Side Nav
(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready

})(jQuery); // end of jQuery name space

 $(document).ready(function () {
   $('.fixed-action-btn').floatingActionButton();
 });

 // Materialize Card on Hover
 $(function () {
   $('.card').hover(
     function () {
       $(this).find('> .card-image > img.activator').click();
     },
     function () {
       $(this).find('> .card-reveal > .card-title').click();
     }
   );
 });


