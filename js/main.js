// This is your custom Javascript file

$(document).ready(function() {

    $("#change_text_button").click(function() {
        $("#changing_message").text("I think small joys can make everyday life feel more peaceful and happy.");
    });

    $("#swap_image").mouseover(function() {
        $("#swap_image").attr("src", "dog.jpg");
    });

    $("#swap_image").mouseout(function() {
        $("#swap_image").attr("src", "cat.jpg");
    });

    $("#move_button").click(function() {
        $("#moving_box").animate({
            left: "80px",
            top: "20px"
        });
    });

});