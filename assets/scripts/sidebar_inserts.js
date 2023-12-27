async function main() {
    // inserting random titles in the sidebar
    const random_titles = ["local gayass", "resident tf2 player", "dragon lover", "passionate about python", "average comp networking student"]
    const title_header = document.getElementById("username__subtitle");
    title_header.innerHTML = random_titles[random_titles.length * Math.random() | 0];

    // calculating current age
    const current_time = Date.now()
    const age = new Date(current_time - new Date("September 13, 2004, 12:00:00")).getFullYear() - 1970;
    const birthday_subtext = document.getElementById("birthday__subtext")
    birthday_subtext.innerHTML = `${age} years old`;

    // get time of cst
    const get_local_time = async () => {
        const response = await fetch("https://worldtimeapi.org/api/timezone/America/Chicago");
        const json_data = await response.json()
        return json_data["datetime"]
    }
    const minnesota_time = new Date(await get_local_time()).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZone: "America/Chicago"
    })
    const time_subtext = document.getElementById("time__subtext")
    time_subtext.innerHTML = minnesota_time;
}

const promise = main();
