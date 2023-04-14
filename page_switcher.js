$(document).ready(function(){
    const label = document.getElementById('slideout-label');
    const div = document.getElementById('slideout-content');
    const allPages = ['home', 'about', 'specs', 'contact', 'source code'];
    let open = false;
    let typing = false;
    let i=0;
    let text = "";

    allPages.forEach(function (item) {
        $(div).append($("<p></p>").text(item).addClass('slideout-switcher'));
        console.log(window.location.pathname)
    });

    label.addEventListener('click', labelClick);

    function labelClick(){
        if (typing) {
            return;
        }

        if(open){
            div.removeClass('slid')
        } else{
            div.addClass('slid')
        }

        open = !open;
    }

    document.querySelectorAll('.slideout-switcher').forEach(item => {
        item.addEventListener('click', event => {
            startWriter(item);
        })
    })

    function startWriter(item) {
        if (item.classList.contains("noCursor")) {
            return;
        }

        if (typing === false) {
            typing = true;
            text=item.innerHTML;
            div.addClass('hide')
            typeWriter();
        }
    }

    function typeWriter() {
        if (i < text.length) {
            label.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 40);

            if (i >= text.length) {
                setTimeout(waitBeforeChange, 500);
            }
        }
    }

    function waitBeforeChange() {
        if (text === "home") {
            window.location = "/";
        } else if(text === "source code") {
            window.location = "https://github.com/pinhead-tf2/pinhead-neosite";
        } else {
            window.location = "/" + text + "/";
        }
    }
});