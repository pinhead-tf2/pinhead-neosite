$(document).ready(function(){
    const label = document.getElementById('slideout-label');
    // var icon = document.getElementById('slideout-tri');
    const div = document.getElementById('slideout-content');
    const cursor = document.getElementById('slideout-cursor');
    let open = false;
    let typing = false;
    let i=0;
    let text = "";

    label.addEventListener('click', labelClick);

    function labelClick(){
        if (typing) {
            return;
        }

        if(open){
            div.className = 'slideout-content';
            // cursor.className = 'slideout-cursor';
            // icon.className = 'slideout-tri';
        } else{
            div.className = 'slideout-content slid';
            // cursor.className = 'slideout-cursor moveRight';
            // icon.className = 'slideout-tri open';
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
            div.className = 'slideout-content slid hide';
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