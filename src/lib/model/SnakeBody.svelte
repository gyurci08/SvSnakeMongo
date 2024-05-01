<script lang="ts">
	export let bodyX: number;
	export let bodyY: number;

	export let isHead: boolean = false;
	export let direction: string = "right";


</script>


<style>
	.snake-body{
			position: absolute;
			width: 50px;
			height: 50px;
			top: 0;
			left:0;
      background-color: green;
      z-index: 1;
	}

  .snake-body.right{
			transform: rotate(0deg);
	}
  .snake-body.left{
      transform: rotate(180deg);
  }
  .snake-body.up{
      transform: rotate(270deg);
  }
  .snake-body.down{
      transform: rotate(90deg);
  }

	.eyes{
      position: absolute;
      width: 10px;
      height: 10px;
			background-color: yellow;
			border-radius: 50%;
      z-index: 2;
	}

	#left-eye{
			left: 70%;
      top: 10%;
	}

	#right-eye{
      left: 70%;
      bottom: 10%;
	}






</style>

<div style="left: {bodyX}px; top: {bodyY}px;" class="snake-body {direction}">
	{#if isHead}
		<div id="left-eye" class="eyes"></div>
		<div id="right-eye" class="eyes"></div>
	{/if}
</div>