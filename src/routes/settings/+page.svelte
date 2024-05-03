<script lang="ts">
    import {useForm, Hint, validators, minLength, required} from "svelte-use-form";

    const form = useForm();
</script>



<div class="container">
    <form use:form method="post" action="/snake">
        <input type="text" name="username" placeholder="    Username" use:validators={[required,minLength(2)]} />

        <button disabled={!$form.valid}>Submit</button> <br />

        <Hint for="username" on="required">The username required!</Hint>
        <Hint for="username" on="minLength" let:value>The username requires at least {value} characters!</Hint>


    </form>
</div>

<style>
    :global(body){
        background-image: url("/menu/photorealistic-galaxy-background.jpg");
        background-size: 100%;
        caret-color: transparent;
    }


    .container{
        width: 30rem;
        height: 8rem;
        margin: auto;
        text-align: center;
        color: white;
        border-radius: 50px;
        backdrop-filter: blur(20px);
    }
    input[type=text]{
        width: 15rem;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }


</style>