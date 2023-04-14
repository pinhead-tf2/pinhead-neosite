$(document).ready(function(){
    const label = document.getElementById('slideout-label');
    const slideoutContent = document.getElementById('slideout-content');
    const allPages = ['root', 'about', 'contact', 'specs', 'music', 'source code'];
    let open = false;
    let typing = false;
    let i=0;
    let text = "";

    allPages.forEach(function (item, index) {
        const currentLocation = window.location.pathname.replace('/', '');
        let textToAdd = item;
        let classToAdd;
        if ((currentLocation === "" && item === "root") || currentLocation === textToAdd) {
            classToAdd = ["slideout-switcher", 'noCursor'];
        } else if (index === allPages.length-1 && allPages.includes(currentLocation) === false) {
            classToAdd = ["slideout-switcher", 'noCursor'];
            textToAdd = currentLocation;
        } else {
            classToAdd = "slideout-switcher";
        }
        $(slideoutContent).append($("<p></p>").text(textToAdd).addClass(classToAdd));
    });

    label.addEventListener('click', labelClick);

    function labelClick(){
        if (typing) {
            return;
        }

        if(open){
            slideoutContent.className = 'slideout-content';
        } else{
            slideoutContent.className = 'slideout-content slid';
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
            slideoutContent.className = 'slideout-content slid hide';
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