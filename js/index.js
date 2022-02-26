$(".accordion-1").on("click", function(){
    $("#dropDown1").slideToggle();
});

$(".accordion-2").on("click", function(){
    $("#dropDown2").slideToggle();
});

$(".accordion-3").on("click", function(){
    $("#dropDown3").slideToggle();
});

// $(document).on("click", ".toggle", function(){
//     $(this).toggleClass("done");
//     if ($(this).hasClass("done")) {
//         $(this).find("div").removeClass("fa-circle-plus")
//         $(this).find("div").addClass("fa-circle-minus")
//     }
//     else {
//         $(this).find("div").addClass("fa-circle-plus")
//     }
// });
