const default_settings = {
    "background_color": "#1e1e2e",
    "grid_enabled": "1",
    "grid_speed": "2500",
    "grid_color": "hsl(206.6, 89.7%, 54.1%)",
    "grid_transparency": "0.5"
}

async function read_setting_data() {
    let loaded_settings = localStorage.getItem("settings")

    if (loaded_settings === null) {
        localStorage.setItem("settings", JSON.stringify(default_settings))
        loaded_settings = default_settings
        console.log("Generated settings")
    } else {
        loaded_settings = JSON.parse(loaded_settings)
        console.log("Loaded settings")
    }

    return loaded_settings
}

async function on_page_load() {
    const settings = await read_setting_data()

}

const load_promise = on_page_load()
