<script lang="ts">
    import type { PageData } from './$types';


    export let data: PageData;
    
    let username=data.username;
    let score = 10;

    async function doPost () {
        const res = await fetch('http://localhost:5173/api/db/score', {
            method: 'POST',
            body: JSON.stringify({
                "name": username,
                "score": score
            })
        })
    }

</script>

<h1>{data.username}</h1>


<button on:click={doPost}>post</button>