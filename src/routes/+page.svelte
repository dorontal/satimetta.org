<script>
	import { base } from '$app/paths';
	import doronPhotoSrc from '$lib/images/doron.jpg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Doron Tal Mindfulness" />
</svelte:head>

<section>
	<h1>Mindfulness Cultivation</h1>
	<div class="intro-container">
		<div class="intro-container">
			<div class="circle-image">
				<img src={doronPhotoSrc} alt="Doron Tal" />
			</div>
			<p class="intro-text">
				Welcome to a space dedicated to the cultivation of mindfulness. You'll find meditation
				teachings and resources for stress reduction, improved wellbeing and other benefits. These
				methods were developed in ancient times. Their benefits have been confirmed by modern
				science. You can explore my full background <a href="{base}/resources/bio"
					>here</a
				>.
			</p>
		</div>
	</div>
</section>

<style>
	section {
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		max-width: 90%;
		align-items: center;
		flex: 0.6;
	}

	section h1 {
		max-width: 80%;
	}

	.intro-container {
		width: 100%; /* Ensures the container spans the full width */
		overflow: hidden; /* Clears floats */
	}

	.circle-image {
		width: 108px;
		height: 108px;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 15px; /* Space between image and text */
		margin-bottom: 10px; /* Optional: Space between image and text when it wraps below */
		border: 2px solid var(--color-theme-1);
		float: left; /* Makes the image float to the left */
	}

	.circle-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.intro-text {
		line-height: 1.6;
		margin: 0;
		font-size: 1rem;
	}
</style>
