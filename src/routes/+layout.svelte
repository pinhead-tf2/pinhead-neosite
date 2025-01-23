<script lang="ts">
    import '../app.css';
    import Grid from "$lib/modules/Grid.svelte";
    import Header from "$lib/modules/Header.svelte";

    let {children} = $props();
</script>

<Grid />
<Header />

{@render children()}
