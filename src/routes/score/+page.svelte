<script lang="ts">
    import type {PageData} from "./$types";

    export let data: PageData;





</script>

<style>
    :global(body){
        background-image: url("/menu/photorealistic-galaxy-background.jpg");
        background-size: 100%;
        caret-color: transparent;
    }



    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    table {
        font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
        font-size: 14px;
        border-radius: 10px;
        border-spacing: 0;
        text-align: center;
    }

    caption {
        color: white;
        margin-bottom: 7px;
        font-size: 20px;
    }

    th {
        background: rgba(255, 128, 0, 0.9);
        padding: 10px 20px;
        color: rgba(129, 69, 0, 1);
    }
    th, td {
        border-style: solid;
        border-width: 0 1px 1px 0;
        border-color: rgba(0,0,0,0.1);
    }

    th:first-child {
        border-top-left-radius: 5px;
    }
    th:last-child {
        border-top-right-radius: 5px;
        border-right: none;
    }
    th:first-child, td:first-child {
        padding: 7px 8px;
    }

    td {
        padding: 7px 20px;
        background: rgba(230,230,230,1);
        color: rgba(0, 0, 0, 0.6);
    }


    tr:last-child td:first-child {
        border-radius: 0 0 0 5px;
    }
    tr:last-child td:last-child {
        border-radius: 0 0 5px 0;
    }
    tr td:last-child {
        border-right: none;
    }
</style>



<div class="wrapper">
    <table>
        <caption>High Scores (total 20)</caption>
        <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Score</th>
        </tr>
        {#each data.scores as score, rank}
            <tr>
                <td>{rank+1}</td>
                <td>{score.name}</td>
                <td>{score.score}</td>
            </tr>
        {/each }
    </table>
</div>