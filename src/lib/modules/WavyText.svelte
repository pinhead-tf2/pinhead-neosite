<script lang="ts">
    let {classes = "", style="", string = 'dummy', delayMultiplier = 50} = $props();
</script>

<style>
    .wavy_text {
        animation: wave_character 650ms linear infinite;
        transform: translate(calc(var(--wavy-move-distance) * -1), var(--wavy-move-distance));
    }

    @keyframes wave_character {
        0% {
            transform: translate(calc(var(--wavy-move-distance) * -1), var(--wavy-move-distance));
        }
        25% {
            transform: translate(var(--wavy-move-distance), var(--wavy-move-distance));
        }
        50% {
            transform: translate(var(--wavy-move-distance), calc(var(--wavy-move-distance) * -1));
        }
        75% {
            transform: translate(calc(var(--wavy-move-distance) * -1), calc(var(--wavy-move-distance) * -1));
        }

    }


</style>

{#each string as character, i }
    <span class="wavy_text inline-block {classes}" style="animation-delay: {-i*delayMultiplier}ms; {style}">{character}</span>
{/each}