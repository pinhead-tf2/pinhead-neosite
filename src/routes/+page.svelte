<svelte:head>
    <title>pinhead's svelte test</title>
</svelte:head>

<script>
    import WaveyText from "$lib/modules/WaveyText.svelte";
</script>

<main class="relative flex justify-center top-14">
    <div class="flex flex-col min-h-dvh max-w-4xl w-full bg-[var(--ctp-mocha-base-hex)]"
         style="box-shadow: 0px 0px 2dvw 2dvw var(--ctp-mocha-base-hex)">
        <div class="mx-8">
            <h1>Heya!</h1>
            <p>I'm <span class="pinhead-text"><WaveyText string="pinhead"/></span>, welcome to my site.</p>
        </div>
    </div>
</main>
