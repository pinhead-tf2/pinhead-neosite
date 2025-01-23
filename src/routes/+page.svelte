<svelte:head>
    <title>pinhead's svelte test</title>
</svelte:head>

<script lang="ts">
    import WavyText from "$lib/modules/WavyText.svelte";
    import RandomImage from "$lib/modules/RandomImage.svelte";
    import BouncingText from "$lib/modules/BouncingText.svelte";
</script>

<main class="relative flex justify-center">
    <div class="flex flex-col min-h-dvh max-w-4xl w-full bg-[var(--ctp-mocha-base-hex)]"
         style="box-shadow: 0px 0px 2dvw 2dvw var(--ctp-mocha-base-hex)">
        <div class="relative mx-8 top-14">
            <RandomImage alt="A random artwork of one of pinhead's characters"
                         classes="rounded-lg float-right max-w-64 bg-[#D7CEC9] my-6 ml-2"/>
            <h1 class="mb-1">Heya!</h1>
            <p>
                I'm <span class="pinhead-text inline-block"><WavyText string="pinhead"/></span>, also known as <span
                    class="text-[#2196f3]">Max</span>, and this is my personal site!
                I'm a <span class="text-[#9BCBEB]">Minnesotan</span> programmer who is currently studying <span
                    class="text-[var(--ctp-mocha-maroon-hex)]">Computer Networking & Infrastructure Engineering</span>.
            </p>
            <p>
                This site is a passion project of mine which I've been working on over the last year or two, and this
                marks my fourth iteration of it's design. For this one, I'm really trying to push the limits of what I
                can do with random, fun ideas, like all this fancy animated text!
            </p>
            <p>
                If really want to learn about me, I recommend you get in contact with me over <a
                    class="text-[#7289da] inline-block visited:text-[#7289da]"
                    href="https://discord.com/users/246291288775852033">
                <BouncingText classes="underline" string="Discord"/></a>!
            </p>
        </div>
    </div>
</main>
