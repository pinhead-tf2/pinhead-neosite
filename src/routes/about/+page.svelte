<svelte:head>
    <title>pinhead's svelte test</title>
</svelte:head>

<script lang="ts">
    import Footer from "$lib/modules/Footer.svelte";
</script>

<main class="relative flex justify-center">
    <div class="flex flex-col min-h-dvh max-w-4xl w-full bg-[var(--ctp-latte-base-hex)] dark:bg-[var(--ctp-mocha-base-hex)] shadow-[0px_0px_2dvw_2dvw_var(--ctp-latte-base-hex)] dark:shadow-[0px_0px_2dvw_2dvw_var(--ctp-mocha-base-hex)]">
        <div class="relative mx-8 top-14">
            <div>
                <h1 class="mb-1 my-2">About</h1>
                <p></p>
            </div>
            <Footer/>
        </div>
    </div>
</main>
