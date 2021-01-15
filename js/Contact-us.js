$(document).ready(function(){
    $('.btn-down').click(function(){
            $('html,body').animate({scrollTop: $('.section-forum').offset().top}, 10); 
        });
    

});