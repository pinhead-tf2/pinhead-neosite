<script lang="ts">
    let grid

    function findGrid() {
        grid = document.getElementById('background_grid')
    }

    function toggleAnimatedGrid() {
        if (!grid) {
            findGrid()
        }

        if (localStorage.gridMode === "animated") {
            localStorage.gridMode = "static"
            grid.classList.remove("animated")
        } else {
            localStorage.gridMode = "animated"
            grid.classList.add("animated")
        }

        console.log(localStorage.gridMode)
    }
</script>

<button aria-label="Grid toggle"
        class="grid_toggle bg-no-repeat w-[2.4rem] h-[2.4rem] border-2 rounded-md border-solid border-[var(--ctp-latte-surface2-hex)] dark:border-[var(--ctp-mocha-surface2-hex)] cursor-pointer"
        id="grid_toggle"
        on:click={toggleAnimatedGrid} style="background-size: 1.5rem; background-position: 50%;"></button>