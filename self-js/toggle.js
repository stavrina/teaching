$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
    $(".js-modal-trigger").click(function() {

        $(".modal").addClass("is-active");
    });
    $(".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button").click(function() {
        $(".modal").removeClass("is-active");
    });
    
  });