<style>
    .grid {
        background: var(--grid-url);
        transform: translate(-55%, -55%) rotate(45deg)
    }

    .animated {
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
     id="background_colors"
     style="background-image: linear-gradient(75deg in hsl longer hue, var(--background-color-start), var(--background-color-end))"></div>
<div class="-z-10 content-none fixed w-[5000px] h-[5000px] origin-center overflow-clip grid animated"
     id="background_grid"></div>
<div class="-z-10 content-none fixed w-screen h-screen backdrop-blur-xs" id="background_blur"></div>