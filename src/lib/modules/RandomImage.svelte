<script lang="ts">
    let { alt="", classes="", style="", excluded_images=['/izumi.png', '/Tarr-Standing.png', '/Tarr-Laying.png'] } = $props();

    let all_images = []
    for (let key in import.meta.glob("$lib/images/*.{png,jpg,jpeg,webp}")) {
        const isExcluded = excluded_images.some(excluded => key.includes(excluded));
        if (!isExcluded) {
            all_images.push(key);
        }
    }
    // const image = all_images[7]
    const image = all_images[Math.floor(Math.random() * all_images.length)]
</script>

<img alt={alt} src={image} class={classes} style={style}>