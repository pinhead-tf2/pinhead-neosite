<style>
    #grid {
        background: var(--grid-url);
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
</style>

<div class="-z-10 content-none fixed w-screen h-screen "
     style="background-image: linear-gradient(75deg in hsl longer hue, var(--background-color-start), var(--background-color-end))"></div>
<div class="-z-10 content-none fixed w-[5000px] h-[5000px] origin-center overflow-clip" id="grid"></div>
<div class="-z-10 content-none fixed w-screen h-screen backdrop-blur-xs"></div>