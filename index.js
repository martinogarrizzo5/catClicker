// setting cat count
let count = 1;
$("#catCount span").html(count);

// updating count on click event
$("#catImg").on("click", () => {
    count += 1;
    $("#catCount span").html(count);
});
