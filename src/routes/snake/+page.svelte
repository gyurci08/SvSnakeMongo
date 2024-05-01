<script lang="ts">
    import type { PageData } from './$types';
    import Game from '$lib/frame/Game.svelte';
    import {goto} from "$app/navigation";

    export let data: PageData;


    let gameStats = {
        username: data.username,
        score: 0,
        lastScore: 0,
        isEnd: false
    }


    function reloadPage() {
        const thisPage = window.location.pathname;

        console.log('goto ' + thisPage);

        goto('/').then(
            () => goto(thisPage)
        );
    }




    async function doPost () {
        const res = await fetch('http://localhost:5173/api/db/score', {
            method: 'POST',
            body: JSON.stringify({
                "name": gameStats['username'],
                "score": gameStats['lastScore']
            })
        })
        console.log("Posted: ",gameStats['username'], gameStats['score'])
    }

    function checkGameState(){
        //console.log("isEnd: ", gameStats['isEnd']);
        if (gameStats['isEnd'])
        {
            doPost();
        }
    }


    $: checkGameState();

</script>





<link href="https://fonts.googleapis.com/css2?family=Codystar:wght@300;400&display=swap" rel="stylesheet">





<div class="">
    <h1 class="tx_center">Snake</h1>
    <h2 class="tx_center">Score: {gameStats['score']}</h2>
    <!--<h2 class="tx_center">isEnd: {gameStats['isEnd']}</h2>-->
    <Game bind:gameStats></Game>

    {#if gameStats['lastScore'] > 0}
        <h2 class="tx_center">Last Score: {gameStats['lastScore']}</h2>
        <h2 class="tx_center">You can save the progress to scoreboard for the user "{gameStats['username']}" ;)</h2>
        <button on:click={doPost}>Save</button>
        <button on:click={reloadPage}>Replay</button>
    {/if}





</div>








<style>

    button {
        margin: 0 auto;
        display: block;
    }

    .tx_center{
        text-align: center;
        font-family: "Codystar";
    }



</style>


