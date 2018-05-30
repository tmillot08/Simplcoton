$(document).ready(function(){
    $(".click1").click(function(){
        $(".overlay").fadeIn();
    });

    $(".close").click(function() {
        $(".overlay").fadeOut();

    })
});
