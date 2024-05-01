<script lang="ts">
    import type { PageData } from './$types';
    import Game from '$frame/Game.svelte';

    export let data: PageData;


    let gameState = {
        username: data.username,
        score: 0,
        isEnd: false
    }




    async function doPost () {
        const res = await fetch('http://localhost:5173/api/db/score', {
            method: 'POST',
            body: JSON.stringify({
                "name": gameState['username'],
                "score": gameState['score']
            })
        })
    }




</script>

<h1>{gameState['username']}</h1>


<button on:click={doPost}>post</button>






<link href="https://fonts.googleapis.com/css2?family=Codystar:wght@300;400&display=swap" rel="stylesheet">


<style>

    .tx_center{
        text-align: center;
        font-family: "Codystar";
    }
</style>




<div class="">
    <h1 class="tx_center">Snake</h1>
    <h2 class="tx_center">Score: {gameState['score']}</h2>
    <h2 class="tx_center">IsEnd: {gameState['isEnd']}</h2>


</div>









