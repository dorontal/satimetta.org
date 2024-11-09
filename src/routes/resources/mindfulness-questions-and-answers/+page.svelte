<!--script>
	import Accordion from './Accordion.svelte';
</script-->

<svelte:head>
	<title>Mindfulness Questions and Answers</title>
	<meta name="description" content="Mindfulness Questions and Answers" />
</svelte:head>

<details>
	<summary>Feeling body tension during meditation</summary>
	<div>
		It’s common for tension to build in the body during meditation. Here are some brief suggestions
		for managing body tension during meditation:
		<ul>
			<li>
				<b>Intentional Breathing Reset</b>
				<p>
					Temporarily shift to intentional breathing: gently take full, long breaths with a longer
					out-breath than the in-breath, for 3-4 breaths, then return to your meditation method.
					This reset procedure often makes the mind less distractible, even by body tension.
				</p>
			</li>
			<li>
				<b>Posture Adjustment</b>
				<p>A small posture adjustment can sometimes relieve muscle tension.</p>
			</li>
			<li>
				<b>Awareness of Tension with Breath</b>
				<p>
					Focus on the area of tension, noticing its sensations and location while noting each leg
					of the breath. Acknowledge the tension without trying to change it, with kindness,
					patience, and self-compassion.
				</p>
				<p>
					Visualizations can support this. E.g, imagine oxygen nourishing your body, especially
					tense areas, on each in-breath. On the out-breath, envision releasing what your body no
					longer needs, perhaps picturing how the carbon dioxide nourishes plants.
				</p>
			</li>
			<li>
				<b>Whole Body Awareness With Breath</b>
				<p>
					Rather than focusing on the tension, expand your awareness to the entire body as a whole,
					while noting each in-breath and out-breath. Breathing in, feel the entire body; breathing
					out, feel the entire body.
				</p>
			</li>
			<li>
				<b>Try Holding Your Seat</b>
				<p>
					Sometimes, sitting through the tension several times for a long time, with loving
					kindness, is enough to scar you for a long time in a positive sense: Rather than focusing
					on the tension, expand your awareness to the entire body as a whole, while noting each
					in-breath and out-breath. Breathing in, feel the entire body; breathing out, feel the
					entire body.
				</p>
			</li>
		</ul>
	</div>
</details>

<style>
	details {
		background-color: var(--color-bg-0); /* text background */
		/* color: var(--color-text) text color */
		font-size: 1.1rem;
		margin-bottom: 0.5em; /*separation of each question from another */
	}

	summary {
		padding: 0.5em 1.3rem;
		/* color: var(--color-theme-1); */
		font-size: 1.5rem;
		list-style: none;
		display: flex;
		justify-content: space-between;
		transition: height 1s ease;
		cursor: pointer;
	}

	summary::-webkit-details-marker {
		display: none;
	}

	summary:after {
		content: '\002B';
	}

	details[open] summary {
		border-bottom: 1px solid #aaa;
		margin-bottom: 0.5em;
	}

	details[open] summary:after {
		content: '\00D7';
	}

	details[open] div {
		padding: 0.5em 1em;
	}
</style>
