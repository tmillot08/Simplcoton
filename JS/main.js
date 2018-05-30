$(document).ready(function(){
    $(".click1").click(function open(){
        $(".overlay").fadeIn();
    });

    $(".close").click(function close() {
        $(".overlay").fadeOut();

    })
});
