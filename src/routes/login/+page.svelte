<script lang="ts">
    import {useForm, Hint, validators, minLength, required} from "svelte-use-form";

    const form = useForm();



</script>

<form use:form method="post" action="/snake">
    <input name="username" use:validators={[required,minLength(2)]} />
    <Hint for="username" on="required">The username required!</Hint>
    <Hint for="username" on="minLength" let:value>The username requires at least {value} characters!</Hint>

    <button disabled={!$form.valid}>Submit</button> <br />
</form>
