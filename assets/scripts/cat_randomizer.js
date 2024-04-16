const cat_image = document.getElementById("random_cat");

function random_cat() {
    if (Math.random() < 0.5) {
        cat_image.src = "https://cataas.com/cat/cute" + Date.now()
    } else {
        cat_image.src = "https://cataas.com/cat/gif" + Date.now()
    }
}

title_header.addEventListener("click", () => {
    random_cat();
    console.log("fired");
});