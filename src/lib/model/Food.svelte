<script lang="ts">
	export let foodX: number;
	export let foodY: number;
</script>


<style>
    .dot {
        height: 25px;
        width: 25px;
        position: absolute;
        left: 0px;
        top: 0px;
        background-color: red;
        border: 1px solid black;
        border-radius: 50%;
        z-index: 1;
    }
</style>

<span class="dot" style="left: {foodX}px; top: {foodY}px;"></span>
