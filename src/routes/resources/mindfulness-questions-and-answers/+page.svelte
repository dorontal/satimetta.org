<!--script>
	import Accordion from './Accordion.svelte';
</script-->
<script>
	import { page } from '$app/stores';
	console.log('mindfulness-questions-and-answers page path: ' + $page.url.pathname);
</script>

<svelte:head>
	<title>Mindfulness Questions and Answers</title>
	<meta name="description" content="Mindfulness Questions and Answers" />
</svelte:head>

<details>
	<summary>What Mindfulness is Not</summary>
	<div>
		Some common misconceptions about mindfulness:
		<ul>
			<li>
				<b>Mindfulness is not the same as mindfulness practice</b>
				<p>
					Mindfulness is a faculty of the mind, a "muscle" of the mind that can be strengthened by
					mindfulness practice. Mindfulness practice is meditation - formal practice that leads to
					the strengthening of the midnfulness faculty.
				</p>
			</li>
			<li>
				<b>Mindfulness practice is not the same as relaxation</b>
				<p>
					While mindfulness practice can lead to a sense of calm, its purpose is not to make you
					relax. It’s about paying attention to the present moment, whatever it may hold, with
					curiosity.
				</p>
			</li>
			<li>
				<b>Mindfulness practice is not a quick fix</b>
				<p>
					Mindfulness is a skill that develops gradually, like building strength at the gym. With
					consistent, disciplined practice, mindfulness grows stronger over time. Just as muscles
					can weaken without regular exercise, our ability to stay mindful can fade if we don't keep
					practicing. Only steady, ongoing practice creates lasting benefits.
				</p>
			</li>
			<li>
				<b>Mindfulness is not about getting rid of thoughts or emotions</b>
				<p>
					Instead of trying to stop thinking or avoid feelings, mindfulness involves noticing and
					accepting them as they arise, without attaching too much meaning or reacting to them.
				</p>
			</li>
			<li>
				<b>Mindfulness practice is not a mental escape</b>
				<p>
					In mindfulness practice, we bravely engage with whatever arises in the mind, rather than
					avoiding it. We stay alert and attentive to our thoughts and feelings. This awareness
					distinguishes mindfulness from forms of mental escape, like using substances or getting
					lost in mind-wandering.
				</p>
			</li>
		</ul>
	</div>
</details>
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
				<p>
					Adjusting your posture may help relieve muscle tension. Frequent adjustments, however, can
					distract the mind.
				</p>
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
					Expand your awareness to the entire body as a whole, while noting each in-breath and
					out-breath. Breathing in, feel the entire body; breathing out, feel the entire body.
					Sometimes focusing on the body as a whole can distract the mind away from any specific
					location where there is pain or tension.
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
