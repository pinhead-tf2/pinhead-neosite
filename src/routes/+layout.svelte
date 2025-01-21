<script lang="ts">
    import '../app.css';
    import {page} from '$app/state';
    import izumi from '$lib/images/izumi.png';

    let {children} = $props();

    const pages = [
        {
            name: "home",
            path: "/"
        },
        {
            name: "about",
            path: "/about"
        }
    ]
</script>

<style>
    #grid {
        background: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"%3E%3Cpath d="M 4 4 L 46 4 L 46 46 L 4 46" fill="hsl(240, 23%, 9%)"/%3E%3C/svg%3E');
        animation: grid_scroll 20000ms linear infinite;
    }

    @keyframes grid_scroll {
        from {
            transform: translate(-55%, -55%) rotate(45deg)
        }
        to {
            transform: translate(-65%, -45%) rotate(45deg)
        }
    }

    .normal_page {
        color: var(--ctp-mocha-subtext0-hex);
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

<div class="-z-10 content-none fixed w-screen h-screen"
     style="background-image: linear-gradient(75deg in hsl longer hue, var(--background-color-start), var(--background-color-end))"></div>
<div class="-z-10 content-none fixed w-[5000px] h-[5000px] origin-center overflow-clip" id="grid"></div>
<div class="-z-10 content-none fixed w-screen h-screen backdrop-blur-sm"></div>

<header class="fixed flex items-center justify-between top-0 left-0 right-0 z-50 px-6 bg-[var(--ctp-mocha-mantle-hex)] h-14">
    <!--    <a href="/" style="text-decoration: none !important;">-->
    <!--        <img alt="Izumi the slime hat" class="w-auto max-h-10 mr-1 py-2" src="{izumi}">-->
    <!--    </a>-->

    <div class="flex-1">
        <div class="flex items-center h-full gap-1">
            <a href="/" style="text-decoration: none !important;">
                <img alt="Izumi the slime hat" class="w-auto max-h-8 mr-1 py-2" src="{izumi}">
            </a>
            <a href="/" style="text-decoration: none !important;">
                <h3 class="m-0 mr-2 font-normal italic">pinhead's site</h3>
            </a>
        </div>
    </div>
    <div class="flex-1">
        <nav class="md:flex justify-center items-center gap-4">
            {#each pages as item }
                <a class="relative items-center text-xl px-2 py-1.5 gap-1 rounded-lg no-underline transition ease-in-out hover:duration-200 {page.url.pathname === item.path ? 'current_page' : 'normal_page'}"
                   href="{item.path}">{item.name}
                </a>
            {/each}
        </nav>
    </div>
    <div class="flex-1 text-end">
        <h4>extra stuff</h4>
    </div>

</header>

{@render children()}
