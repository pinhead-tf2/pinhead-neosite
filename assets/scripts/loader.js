window.onload = () => {
    fetch('/assets/inserts/navigator_content.html')
        .then(data => {
            return data.text()
        })
        .then(data => {
            document.getElementById("nav").innerHTML = data; // inserts to element id="navbar"
        })
}