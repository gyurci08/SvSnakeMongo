<script>



</script>


<div class="menu-container">
    <h1 class="logo">SvSnake</h1>

    <ul>
        <li>

            {#if }
                <a class="menu-item" href="/snake">Play</a>
            {/if}
        </li>
        <li>
            <a class="menu-item" href="/score">Scores</a>
        </li>
        <li>
            <a class="menu-item" href="/settings">Settings</a>
        </li>
    </ul>
</div>










<style>
    :global(body){
        background-image: url("/menu/photorealistic-galaxy-background.jpg");
        background-size: 100%;
        caret-color: transparent;
    }



    .menu-container{
        width: 50%;
        margin: auto;
        text-align: center;
        color: white;
        border-radius: 5px;
    }



    .logo{
        font-size: 5rem;
        font-family: "DejaVu Math TeX Gyre";
    }

    ul li{
        margin: 1rem;
        list-style: none;
    }
    .menu-item{
        font-size: 2rem;
        padding: 1px 6px;
        border-top: 1px outset buttonborder;
        border-bottom: 1px outset buttonborder;
        border-radius: 3px;
        color: buttontext;
        text-decoration: none;
    }
</style>
