/**
 * Another page load handler
 *
 * @returns {Promise<void>}
 */
async function on_page_load() {
    fetch('/.assets/templates/inserts/page_list.html').then(function (response) {
        if (response.ok) {
            return response.text();
        }
        throw response;
    }).then(function (text) {
        const pages_navigator = document.getElementById('pages_navigator');
        pages_navigator.innerHTML = text;
    });

    const current_path = location.pathname
    let parsed_path = current_path.split('/')

    if (parsed_path.length > 2) {
        parsed_path = parsed_path.splice(0, 2)
    }

    console.log(current_path)
    console.log(parsed_path)
}

const header_page_load_promise = on_page_load();