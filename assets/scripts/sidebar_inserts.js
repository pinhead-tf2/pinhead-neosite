const random_titles = ["local gay person", "resident tf2 player", "dragon lover", "passionate about python",
    "praise the code", "breakcore enjoyer", "pastel is love", "flood escapist", "avid creo enjoyer", "#1 glacier fan"];
const birthday_string = "September 13, 2004, 12:00:00";
const title_header = document.getElementById("username__subtitle");
const time_subtext = document.getElementById("time__subtext")
let title_clicks = 0;

async function on_page_load() {
    /**
     * Main function handling all things on page load
     */

    // inserting random titles in the sidebar
    random_title();

    // calculating current age
    const current_time = Date.now()
    const age = new Date(current_time - new Date(birthday_string)).getFullYear() - 1970;
    const birthday_subtext = document.getElementById("birthday__subtext")
    birthday_subtext.innerHTML = `${age} years old`;

    // localtime
    await set_clock()
    setInterval(set_clock, 1000)
}

async function set_clock() {
    // making a new Date object every time seems wrong, but then again, js as a whole is horrible imo
    // REVIEW THIS CODE WHEN DST IS ACTIVE
    // also attempt to see what happens when a non-dst recognizing location opens the site
    time_subtext.innerHTML = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZone: "America/Chicago"
    })
}

function random_title() {
    /**
     * Inserts a title at random from the random_titles array, into the sidebar subtitle
     */
    const random = Math.floor(Math.random() * random_titles.length);
    // prevents duplicates
    if (title_header.innerHTML === random_titles[random]) {
        return random_title();
    }
    title_header.innerHTML = random_titles[random];
    title_header.title = `a randomly cycled title (click to change) | clicks: ${title_clicks}`;

    // the funny 1/100 chance for it to just say faggot
    // why? because i thought it was funny (it is)
    const secret_random = Math.random();
    if (secret_random >= 0.99) {
        title_header.innerHTML = "faggot";
        title_header.title = `you rolled the 1/100 chance for it to say faggot, congration | clicks: ${title_clicks}`;
    }
}

const page_load_promise = on_page_load();
title_header.addEventListener("click", () => {
    title_clicks++;
    random_title();
});
