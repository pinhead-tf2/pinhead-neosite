<script lang="ts">
    let {
        classes = "",
        style = "",
        string = 'dummy',
        delayMultiplier = 1000,
        loopDuration = 500,
        waitDuration = 1000
    } = $props();

    // this next part has to exist so i can reset the animations for the current set of bouncing text, otherwise i'll reset all bouncing texts
    function generateAlphanumericString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        return result;
    }

    const tracked_animations_class = generateAlphanumericString(6)

    let animation_end_element = $state()

    function onanimationend(event) {
        if (event.target === animation_end_element) {
            setTimeout(function () {
                const all_bouncy_texts = document.querySelectorAll(`.${tracked_animations_class}`);
                all_bouncy_texts.forEach((element) => {
                    element.classList.remove('bouncy_text')
                    void element.offsetWidth;
                    element.classList.add("bouncy_text");
                });
            }, waitDuration);
        }
    }
</script>

<style>
    .bouncy_text {
        animation: bounce_character ease 2 alternate;
    }

    @keyframes bounce_character {
        from {
            transform: translateY(0)
        }
        to {
            transform: translateY(var(--bounce-move-distance))
        }
    }
</style>

{#each string as character, i }
    {#if i === string.length - 1}
        <span bind:this={animation_end_element} {onanimationend}
              class="bouncy_text inline-block {classes} {tracked_animations_class}"
              style="animation-delay: {i*delayMultiplier}ms; animation-duration: {loopDuration}ms; {style}">{character}</span>
    {:else}
        <span class="bouncy_text inline-block {classes} {tracked_animations_class}"
              style="animation-delay: {i*delayMultiplier}ms; animation-duration: {loopDuration}ms; {style}">{character}</span>
    {/if}
{/each}