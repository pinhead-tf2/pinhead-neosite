<script lang="ts">
    import {version} from '$app/environment';
    import {Link} from "lucide-svelte";

    const version_split = version.split(",")
</script>

<div class="grid grid-cols-[1fr_auto_auto_auto_1fr] grid-rows-[max-content_max-content] min-w-full border-[var(&#45;&#45;ctp-latte-text-hex)] dark:border-[var(&#45;&#45;ctp-mocha-text-hex)] border-t font-mono">
    <span></span>
    <a class="px-4 text-[var(--ctp-latte-blue-hex)] dark:text-[var(--ctp-mocha-blue-hex)] underline"
       href="https://timayo.gay/">{"<"}-- timayo</a>
    <span class="px-4">part of the <a
            class="text-[var(--ctp-latte-blue-hex)] dark:text-[var(--ctp-mocha-blue-hex)] underline"
            href="https://discord.gg/RSutBnzNCd">berry webring</a></span>
    <a class="px-4 text-[var(--ctp-latte-blue-hex)] dark:text-[var(--ctp-mocha-blue-hex)] underline"
       href="https://xyzenix.github.io/">11pixels --{">"}</a>
    <span class="text-right">
        <a href="https://github.com/pinheadtf2/pinhead-website/commit/{version_split[1]}">
            {version_split[0]}-<code>{version_split[1]}</code><Link class="inline-block -translate-y-1/8 pl-[2px]"
                                                                    color="var(--link-icon-color)" size="0.9rem"/>
        </a></span>
    <!-- svelte interprets these so i have to escape them like this-->
</div>

<!--<div class="flex items-center flex-row justify-center min-w-full border-[var(&#45;&#45;ctp-latte-text-hex)] dark:border-[var(&#45;&#45;ctp-mocha-text-hex)] border-t font-mono">-->
<!--    <a class="px-4 text-[var(&#45;&#45;ctp-latte-blue-hex)] dark:text-[var(&#45;&#45;ctp-mocha-blue-hex)] underline" href="https://timayo.gay/">{"<"}&#45;&#45; timayo</a>-->
<!--    <span class="px-4">part of the <a class="text-[var(&#45;&#45;ctp-latte-blue-hex)] dark:text-[var(&#45;&#45;ctp-mocha-blue-hex)] underline"-->
<!--                                      href="https://discord.gg/RSutBnzNCd">berry webring</a></span>-->
<!--    <a class="px-4 text-[var(&#45;&#45;ctp-latte-blue-hex)] dark:text-[var(&#45;&#45;ctp-mocha-blue-hex)] underline" href="https://xyzenix.github.io/">11pixels &#45;&#45;{">"}</a>-->
<!--    &lt;!&ndash; svelte interprets these so i have to escape them like this&ndash;&gt;-->
<!--</div>-->