<script lang="ts">
    let {classes = "", styles="", content = 'pinhead', delayMultiplier = 50} = $props();
</script>

<style>
    .wavy_text {
        animation: wave_character 650ms linear infinite;
        transform: translate(calc(var(--wavy-move-distance) * -1), var(--wavy-move-distance)) translateZ(0) perspective(1px);
        backface-visibility: hidden;
    }

    @keyframes wave_character {
        0% {
            transform: translate(calc(var(--wavy-move-distance) * -1), var(--wavy-move-distance)) translateZ(0) perspective(1px);
        }
        25% {
            transform: translate(var(--wavy-move-distance), var(--wavy-move-distance)) translateZ(0) perspective(1px);
        }
        50% {
            transform: translate(var(--wavy-move-distance), calc(var(--wavy-move-distance) * -1)) translateZ(0) perspective(1px);
        }
        75% {
            transform: translate(calc(var(--wavy-move-distance) * -1), calc(var(--wavy-move-distance) * -1)) translateZ(0) perspective(1px);
        }

    }


</style>

{#each content as character, i }
    <span class="wavy_text inline-block {classes}" style="animation-delay: {-i*delayMultiplier}ms; {styles}">{character}</span>
{/each}