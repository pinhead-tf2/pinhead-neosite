<script lang="ts">
    let {string = 'dummy'} = $props();
</script>

<style>
    .wavey_text {
        display: inline-block;
        animation: wave 650ms linear infinite;
        transform: translate(var(--wavey-move-distance-negative), var(--wavey-move-distance));
    }

    @keyframes wave {
        0% {
            transform: translate(var(--wavey-move-distance-negative), var(--wavey-move-distance));
        }
        25% {
            transform: translate(var(--wavey-move-distance), var(--wavey-move-distance));
        }
        50% {
            transform: translate(var(--wavey-move-distance), var(--wavey-move-distance-negative));
        }
        75% {
            transform: translate(var(--wavey-move-distance-negative), var(--wavey-move-distance-negative));
        }

    }


</style>

{#each string as character, i }
    <span class="wavey_text" style="animation-delay: {-i*50}ms">{character}</span>
{/each}