<script lang="ts">
    function toggleDarkMode() {
        if (localStorage.currentTheme === "dark") {
            localStorage.currentTheme = "light";
            document.documentElement.classList.remove('dark')
        } else {
            localStorage.currentTheme = "dark";
            document.documentElement.classList.add('dark')
        }
    }
</script>

<button aria-label="Dark mode toggle"
        class="dark_mode_toggle bg-no-repeat w-[2.4rem] h-[2.4rem] border-2 rounded-md border-solid border-[var(--ctp-latte-surface2-hex)] dark:border-[var(--ctp-mocha-surface2-hex)] cursor-pointer"
        id="dark_mode_toggle"
        on:click={toggleDarkMode} style="background-size: 1.5rem; background-position: 50%;"></button>