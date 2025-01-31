<script lang="ts">
    import WavyText from "$lib/modules/WavyText.svelte";
    import BouncingText from "$lib/modules/BouncingText.svelte";
    import Footer from "$lib/modules/Footer.svelte";
    import {Link} from 'lucide-svelte'

    import mizuTarrNoble from "$lib/images/mizu-tarr-noble.png"
</script>

<main class="relative flex justify-center">
    <div class="flex flex-col min-h-dvh max-w-4xl w-full bg-[var(--ctp-latte-base-hex)] dark:bg-[var(--ctp-mocha-base-hex)] shadow-[0px_0px_2dvw_2dvw_var(--ctp-latte-base-hex)] dark:shadow-[0px_0px_2dvw_2dvw_var(--ctp-mocha-base-hex)]">
        <div class="relative mx-8 top-14">
            <div>
                <img alt="pinhead's character Mizu sitting on the lap of Tarr from Fortnite"
                     class="rounded-lg float-right max-w-64 my-2 ml-2 bg-[var(--ctp-latte-surface0-hex)] dark:bg-[var(--ctp-mocha-surface0-hex)]"
                     src="{mizuTarrNoble}">
                <h1 class="mb-1 my-2">Heya!</h1>
                <p>
                    I'm <span class="pinhead-text"><WavyText content="pinhead"/></span>, also known as
                    <span class="text-[#2196f3]">Max</span>, and this is my personal site! I'm a
                    <span class="text-[#003865] dark:text-[#9BCBEB]">Minnesotan</span> programmer who is currently
                    studying <span class="text-[var(--ctp-latte-maroon-hex)] dark:text-[var(--ctp-mocha-maroon-hex)]">Computer Networking & Infrastructure Engineering</span>.
                </p>
                <p>
                    This site is a passion project of mine which I've been working on over the last year or two, and
                    this marks my <span class="text-[var(--ctp-latte-teal-hex)] dark:text-[var(--ctp-mocha-teal-hex)]">fourth iteration</span>
                    of it's design. For this one, I'm really trying to push the limits of
                    what I can do with random, fun ideas, like all this fancy animated text!
                </p>
                <p>
                    If really want to learn about me, I recommend you get in contact with me over
                    <a class="inline-block text-[#7289da] visited:text-[#7289da]"
                       href="https://discord.com/users/246291288775852033">
                        <BouncingText string="Discord"/>
                        <Link class="inline-block -translate-y-1/8 pl-[2px]" color="var(--link-icon-color)"
                              size="0.9rem"/>
                    </a>!
                </p>
                <p class="text-[var(--ctp-mocha-red-hex)]">
                    Notice: This site does not support any media formats that isn't 16:9 1080p yet!!!
                </p>
            </div>
            <Footer/>
        </div>
    </div>
</main>
