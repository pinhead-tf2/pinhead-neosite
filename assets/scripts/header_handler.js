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

    const current_url = document.URL
    console.log(current_url)
}

const header_page_load_promise = on_page_load();