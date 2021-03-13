let count = 1;
$("#catCount span").html(count);

// updating count on click event
$("#catImg").on("click", async () => {
    count += 1;
    $("#catCount span").html(count);

    // changing image when count is divisible by ten
    if (count % 10 === 0) {
        // fetch new cat image
        url = await fetchCat();
        $("#catImg").attr("src", url);
    }
});

// fetch from Cat API a random cat image
const fetchCat = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();

    return data[0].url;
};
