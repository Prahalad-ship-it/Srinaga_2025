---
layout: base
title: RPG
permalink: /rpg/
---

<canvas id='gameCanvas'></canvas>

<script type="module">
    import GameControl from '{{site.baseurl}}/assets/js/rpg/GameControl.js';

    // Background data
    const image_src = "{{site.baseurl}}/images/rpg/water.png";
    const image_data = {
        pixels: { height: 2940, width: 1960 }
    };
    const image = { src: image_src, data: image_data };

    // Sprite data for owl
    const sprite_src_owl = "{{site.baseurl}}/images/rpg/owl.png";
    const sprite_data_owl = {
        SCALE_FACTOR: 10,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        pixels: { height: 537, width: 546 },
        orientation: { rows: 4, columns: 3 },
        down: { row: 0, start: 0, columns: 3 },
        left: { row: 1, start: 0, columns: 3 },
        right: { row: 2, start: 0, columns: 3 },
        up: { row: 3, start: 0, columns: 3 },
    };
    const owl = { src: sprite_src_owl, data: sprite_data_owl };

    // Sprite data for fish
    const sprite_src_fish = "{{site.baseurl}}/images/rpg/fishies.png";
    const sprite_data_fish = {
        SCALE_FACTOR: 16,
        STEP_FACTOR: 400,
        ANIMATION_RATE: 50,
        pixels: { height: 256, width: 384 },
        orientation: { rows: 8, columns: 12 },
        down: { row: 0, start: 0, columns: 3 },
        left: { row: 1, start: 0, columns: 3 },
        right: { row: 2, start: 0, columns: 3 },
        up: { row: 3, start: 0, columns: 3 },
    };
    const fish = { src: sprite_src_fish, data: sprite_data_fish };

    // Assets for game
    const assets = { image: image, owl: owl, fish: owl };

    // Start game engine
    GameControl.start(assets);
</script>
