/**
 * Another page load handler
 *
 * @returns {Promise<void>}
 */
async function on_page_load() {
    const current_path = location.pathname
    let parsed_path = current_path.split('/').filter(function (el) {
        return el !== "";
    })

    if (parsed_path[parsed_path.length - 1] === "index.html") {
        parsed_path.pop()
    }

    fetch('/assets/templates/inserts/page_list.html').then(function (response) {
        if (response.ok) {
            return response.text();
        }
        throw response;
    }).then(function (text) {
        const pages_navigator = document.getElementById('pages_navigator');
        pages_navigator.innerHTML = text;
        const pages = pages_navigator.getElementsByTagName('li')
        for (let i = 0; i < pages.length; i++) {
            if (!pages[i].innerHTML.includes("\n") && pages[i].innerHTML.includes(parsed_path[parsed_path.length - 1])) {
                console.log(pages[i].innerHTML, "|", parsed_path[parsed_path.length - 1])

                const regex = new RegExp("$|\\b" + parsed_path[parsed_path.length - 1] + "\\b", "i");
                if (regex.test(pages[i].innerHTML)) {
                    console.log("matched")
                    pages[i].classList.add('selected')
                    return
                }
            }
        }
    });
}

const header_page_load_promise = on_page_load();