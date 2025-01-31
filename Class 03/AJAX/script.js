function getData(apiUrl) {
    $.ajax({
        url: apiUrl,
        success: function (response) {
            console.log('tuka')
            //no need for JSONparse its alreadty done by jquary
            const dogimage = document.getElementById("dogimage");
            console.log(response);
            const imageUrl = response.message;
            dogimage.src = imageUrl;
            dogimage.style.display = "block";
        },
        error: function (err) {
            console.log("The request failed");
        }
    });
};
getData("https://dog.ceo/api/breeds/image/random");
const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", function () {
    getData("https://dog.ceo/api/breeds/image/random");
});
