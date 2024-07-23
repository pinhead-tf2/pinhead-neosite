const self_proclaimed_titles = ["local bi person", "resident tf2 player", "dragon lover", "passionate about python",
    "praise the code", "breakcore enjoyer", "pastel is love", "flood escapist", "avid creo enjoyer", "#1 glacier fan",
    "central mass array victor", "john pressure", "i use catppuccin btw", "made with inter", "be silly do tomfoolery",
    "proud unusual owner", "crazy bread is just normal bread to me"];
const profile_pictures = ["/.assets/images/mizu-coniecal-bg.png",
    "/.assets/images/mizu-merritz-chibi-noname-square.png", "/.assets/images/mizu-angle-whitebg-square.png",
    "/.assets/images/mizu-noble-blush-purple-squared.png"];
const birthday_string = "September 13, 2004, 12:00:00";
const title_header = document.getElementById("username_subtitle");
const time_subtext = document.getElementById("time_subtext")
let title_clicks = 0;

/**
 * main function handling page load
 *
 * @returns {Promise<void>}
 */
async function on_page_load() {
    // inserting random titles in the sidebar
    random_pfp();
    random_title();

    // calculating current age
    const age = new Date(Date.now() - new Date(birthday_string)).getFullYear() - 1970;
    const birthday_subtext = document.getElementById("birthday_subtext")
    birthday_subtext.innerHTML = `${age} years old`;

    const birthdate_text = document.getElementById('birthday_date')
    const days_until_birthday = daysUntilNext(9, 13)


    // extra birthday sillies
    if (days_until_birthday === 0) {
        console.log("birthday!!")
        birthdate_text.classList.add('rainbow_birthday')
        birthdate_text.title = "It's my birthday!!"
    } else {
        birthdate_text.title = `${days_until_birthday} days until my birthday | September 13th 2004`
    }

    // localtime
    await set_clock()
    setInterval(set_clock, 1000)
}

function random_pfp() {
    const random = Math.floor(Math.random() * profile_pictures.length);
    const pfp_element = document.getElementById('profile_picture')
    pfp_element.src = profile_pictures[random];
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

/**
 * Inserts a title at random from the self_proclaimed_titles array, into the sidebar subtitle
 *
 * @returns {*}
 */
function random_title() {
    ``
    const random = Math.floor(Math.random() * self_proclaimed_titles.length);
    // prevents duplicates
    if (title_header.innerHTML === self_proclaimed_titles[random]) {
        return random_title();
    }
    title_header.innerHTML = self_proclaimed_titles[random];
    title_header.title = `a randomly cycled title (click to change) | clicks: ${title_clicks}`;

    const secret_random = Math.random();
    if (secret_random >= 0.99) {
        title_header.innerHTML = "surprise!";
        title_header.title = `you rolled the 1/100 chance for it to say this, congration | clicks: ${title_clicks}`;
    }
}

/**
 * Function found from https://stackoverflow.com/a/21093106/16589377
 * Returns the days until a selected date
 *
 * @param month
 * @param day
 * @returns {number}
 */
function daysUntilNext(month, day) {
    const tday = new Date(), y = tday.getFullYear(), next = new Date(y, month - 1, day);
    tday.setHours(0, 0, 0, 0);
    if (tday > next) next.setFullYear(y + 1);
    return Math.round((next - tday) / 8.64e7);
}

const page_load_promise = on_page_load();
title_header.addEventListener("click", () => {
    title_clicks++;
    random_title();
});
