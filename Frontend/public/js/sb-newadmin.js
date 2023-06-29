$(document).ready(function(){
    $('#fleetAdminal li' ).click(function(){
      $('#fleetAdminal li ').removeClass("active");
      $(this).addClass("active");
    });
});

