<script lang="ts">
    import '../app.css';

    let {children} = $props();

    const pages = [["", "home"], ["about", "about"]];
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

    @keyframes gradient_scroll {
        0% {
            background-position: -33% 50%
        }
        100% {
            background-position: 100% 50%
        }
    }
</style>

<div class="-z-10 content-none fixed w-screen h-screen"
     style="background-image: linear-gradient(75deg in hsl longer hue, var(--color-start), var(--color-end))"></div>
<div class="-z-10 content-none fixed w-[5000px] h-[5000px] origin-center overflow-clip" id="grid"></div>
<div class="-z-10 content-none fixed w-screen h-screen backdrop-blur-sm"></div>

<nav class="fixed flex items-center top-0 left-0 right-0 z-50 px-12 bg-[var(--ctp-mocha-mantle-hex)] h-14">
    <!--    <a href="/" style="text-decoration: none !important;">-->
    <!--        <img alt="Izumi the slime hat" class="w-auto max-h-10 mr-1 py-2" src="{izumi}">-->
    <!--    </a>-->
    <!--    <a href="/" style="text-decoration: none !important;">-->
    <!--        <h1 class="m-0 mr-2 font-light text-xl">pinhead's site</h1>-->
    <!--    </a>-->
    {#each pages as page }
        <a class="text-[var(--ctp-mocha-subtext0-hex)] hover:text-[var(--ctp-mocha-blue-hex)] transition-colors relative text-xl mx-1.5 h-full flex items-center"
           href="/{page[0]}" style="text-decoration: none !important;">{page[1]}</a>
    {/each}
</nav>

{@render children()}
