// setting cat count
let count = 1;
$("#catCount span").html(count);

// updating count on click event
$("#catImg").on("click", () => {
    count += 1;
    $("#catCount span").html(count);
    if (count >= 10) {
        $("#catImg").attr("src", "./img/cat2.jpg");
    }
    if (count >= 20) {
        $("#catImg").attr("src", "./img/cat3.jpg");
    }
});
