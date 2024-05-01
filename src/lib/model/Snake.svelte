
<script lang="ts">
	import SnakeBody from '../model/SnakeBody.svelte';

	export let snakeBodies: SnakeBody[] =[];
	export let direction: string = "right";
</script>

<style>

</style>

{#each snakeBodies as snakeBody, i}
	<SnakeBody isHead={i===0} bodyX={snakeBody.left} bodyY={snakeBody.top} {direction}/>
{/each}