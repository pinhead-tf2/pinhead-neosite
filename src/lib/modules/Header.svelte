<script>
    import izumi from "$lib/images/izumi.png";
    import {page} from "$app/state";
    import DarkModeToggle from "$lib/modules/DarkModeToggle.svelte";
    import GridToggle from "$lib/modules/GridToggle.svelte";
    import {Github} from "lucide-svelte";

    let {
        pages = [
            {
                name: "home",
                path: "/"
            },
            {
                name: "about",
                path: "/about"
            }
        ]
    } = $props();
</script>

<style>
    .normal_page {
        color: var(--header-normal-color);
    }

    .normal_page:hover {
        color: var(--header-highlight-color);
        background-color: var(--header-highlight-background);
    }

    .current_page {
        color: var(--header-current-color);
        background-color: var(--header-current-background);
    }
</style>

<header class="fixed flex items-center justify-between top-0 left-0 right-0 z-50 px-32 bg-[var(--ctp-latte-mantle-hex)] dark:bg-[var(--ctp-mocha-mantle-hex)] h-14">
    <div class="flex-1">
        <div class="flex items-center h-full gap-1">
            <a class="no-underline" href="/">
                <img alt="Izumi the slime hat" class="w-auto max-h-12 mr-1 py-2" src="{izumi}">
            </a>
            <a class="no-underline" href="/">
                <h3 class="m-0 mr-2 font-normal italic">pinhead's site</h3>
            </a>
        </div>
    </div>
    <div class="flex-1">
        <nav class="md:flex justify-center items-center gap-4">
            {#each pages as item }
                <a class="relative items-center text-xl px-2 py-1.5 gap-1 rounded-lg no-underline transition ease-in-out duration-200 {page.url.pathname === item.path ? 'current_page' : 'normal_page'}"
                   href="{item.path}">{item.name}
                </a>
            {/each}
        </nav>
    </div>
    <div class="flex-1 text-end flex-row items-center">
<!--        <a href="https://github.com/pinheadtf2/pinhead-website/tree/version-4" class="self-center inline-block w-[3.4rem] h-[1.5rem] bg-no-repeat" id="header_discord"></a>-->
        <GridToggle/>
        <DarkModeToggle/>
    </div>
</header>