<script lang="ts">
	import Food from '../model/Food.svelte';
	import Snake from '../model/Snake.svelte';

	let foodX=0;
	let foodY=0;

	let mapWidth = 530;
	let mapHeight = 530;

	let direction: string = "right"



	let snakeBodies_default=[
		{
			left: 100,
			top: 0
		},
		{
			left: 50,
			top: 0
		},
		{
			left: 0,
			top: 0
		}
	]


	let snakeBodies = structuredClone(snakeBodies_default);

	export let gameStats;
	let score = 0;
	$: gameStats['score'] = score = 	snakeBodies.length - 3;


	function isCollide(snake, food){
			return !(
				snake.top	 < food.top  ||
				snake.top  >	food.top ||
				snake.left < food.left ||
				snake.left > food.left
			)
	}

	function moveFood(){
		foodX=Math.floor(Math.random()*10) * 50;
		foodY=Math.floor(Math.random()*10) * 50;


	}




	function onKeyPress(e: KeyboardEvent){
			//console.log(e.key)
			const newDirection = setDirectionFromKey(e.key);
			if(newDirection){
				direction = newDirection;
			}
	}

	function setDirectionFromKey(key: string){
		if (key === "ArrowDown"){
			return "down"
		}
		else
			if (key === "ArrowUp"){
				return "up"
		}
			else
				if (key === "ArrowLeft"){
					return "left"
			}
				else
				if (key === "ArrowRight"){
					return "right"
				}
	}

	function isSnakeCollision(){
		const snakeBodiesNoHead = snakeBodies.slice(1);

		const snakeCollisions = snakeBodiesNoHead.filter(sb => isCollide(sb, snakeBodies[0]))

		if (snakeCollisions.length > 0)
			return true;

		return false;
	}


	function isEndOfMap(){
		const {top, left} = snakeBodies[0];
		if(
			top >= mapHeight ||
			top < 0 				 ||
			left >= mapWidth ||
			left < 0
		){
			return true
		}
		return false
	}

	function isGameOver(){
		if (isSnakeCollision() || isEndOfMap()){
			return true;
		}
		return false;
	}


	function resetGame(){
		moveFood();
		direction="right";
		score = 0;
		snakeBodies = structuredClone(snakeBodies_default);
	}


	let interval = 0;

	interval = setInterval(() => {											// Tick interval set to 200, this is the game execution
			snakeBodies.pop()

			let { left, top } = snakeBodies[0]	// Save the position of the head

			switch (direction)
			{
				case "up": {top -= 50; break;}
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				case "down": {top += 50; break;}
				case "left": {left -= 50; break;}
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				case "right": {left += 50; break;}
			}

			const newHead = { left, top };
			snakeBodies = [newHead, ...snakeBodies]

			if (isCollide(newHead, { left:foodX, top:foodY})){
					//alert("The food eaten.")
					moveFood();
					snakeBodies = [...snakeBodies,snakeBodies[snakeBodies.length-1]]
			}

			if (isGameOver()){
				gameStats['lastScore'] = score;
				gameStats['isEnd'] = true;
				resetGame()
				clearInterval(interval);		// stops the game
				//alert("Game Over!")	;		// Window undefined error;  mount or browser check
			}

	},200)


</script>

<style>
    .center{
        margin: auto;
        border: 3px solid black;
        padding: 10px;
    }

		.frame{
				width: 500px;
        height: 500px;
				position: relative;
				z-index: 0;
        background-color: darkgreen;

    }
</style>


<div style="width: {mapWidth}px; height: {mapHeight}px;" class="center frame">
	<Food {foodX} {foodY}/>
	<Snake {snakeBodies} {direction}/>
</div>

<svelte:window on:keydown={onKeyPress}  on:load={resetGame} />