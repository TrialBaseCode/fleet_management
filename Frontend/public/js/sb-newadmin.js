$(document).ready(function(){
    $('#fleetAdminal li' ).click(function(){
      $('#fleetAdminal li ').removeClass("active");
      $(this).addClass("active");
    });
});

$(document).ready(function() {
    // Get saved data from sessionStorage
    let selectedCollapse = sessionStorage.getItem('selectedCollapse');
    if(selectedCollapse != null) {
      $('.accordion .collapse').removeClass('show');
      $(selectedCollapse).addClass('show');
    }
    // //To set, which one will be opened
    // $('.accordion .btn-link').on('click', function(){ 
    //   let target = $(this).data('target');
    //   //Save data to sessionStorage
    //   sessionStorage.setItem('selectedCollapse', target);
    // });
    $('#accordionSidebar' ).click(function(){
        let target = $(this).data('target');
        sessionStorage.setItem('selectedCollapse', target);
    });
  });