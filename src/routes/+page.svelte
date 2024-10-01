<script>
	import photoSrc from '$lib/images/doron.jpg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Cultivate Mindfulness</h1>
	<div class="circle-image">
		<img src={photoSrc} alt="Doron Tal" />
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;
		flex: 0.6;
	}
	.circle-image {
		width: 200px; /* Adjust size as needed */
		height: 200px;
		border-radius: 50%;
		overflow: hidden;
		border: 2px solid #000; /* Thin border color and width */
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.circle-image img {
		width: 100%;
		height: 100%;
		object-fit: cover; /* Ensures the face is centered */
	}
</style>
