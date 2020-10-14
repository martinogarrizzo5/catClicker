// setting cats count and image count
let count = 1;
const maxImage = 4;
let actualImage = 1;

$("#catCount span").html(count);

// updating count on click event
$("#catImg").on("click", () => {
    count += 1;
    $("#catCount span").html(count);

    // changing image when count is divisible by ten
    if (count % 10 === 0) {
        // cycling between images
        if (actualImage < maxImage) {
            actualImage += 1;
        } else {
            actualImage = 1;
        }
        $("#catImg").attr("src", "./img/cat" + actualImage + ".jpg");
    }
});
