async function on_page_load() {
    fetch('../../assets/templates/inserts/page_list.html').then(function (response) {
        if (response.ok) {
            return response.text();
        }
        throw response;
    }).then(function (text) {
        const pages_navigator = document.getElementById('pages_navigator');
        pages_navigator.innerHTML = text;
    });

    fetch('assets/templates/inserts/page_list.html').then(function (response) {
        if (response.ok) {
            return response.text();
        }
        throw response;
    }).then(function (text) {
        const pages_navigator = document.getElementById('pages_navigator');
        pages_navigator.innerHTML = text;
    });

    const current_path = location.pathname
    const parsed_path = current_path.split('/')
    console.log(current_path)
    console.log(parsed_path)
}

const header_page_load_promise = on_page_load();