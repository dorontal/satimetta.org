<script lang="ts">
	import aob22 from '$lib/audio/mindfulness-of-breathing-22-minutes.mp3';
</script>

<svelte:head>
	<meta name="description" content="Mindfulness Resources" />
</svelte:head>

<div class="text-column">
	<details class="group p-2">
		<summary
			class="grid cursor-pointer list-none grid-cols-[1.25rem_auto] items-center marker:hidden [&::-webkit-details-marker]:hidden"
			id="body-scan-meditation"
		>
			<span class="transform transition-transform duration-200 group-open:rotate-90"> ⯈ </span>
			<span class="ml-2">Body Scan Meditation</span>
		</summary>
		<ul>
			<li>
				<a
					class="anchor"
					href="https://insighttimer.com/marylovegrove/guided-meditations/10-minute-body-scan-8"
					target="_blank"
				>
					10 minutes Body Scan - Mary Lovegrove</a
				>
			</li>
			<li>
				<a
					class="anchor"
					href="https://insighttimer.com/rubyknafo/guided-meditations/body-scan-11-minutes"
					target="_blank"
				>
					11 minutes Body Scan - Ruby Knafo</a
				>
			</li>
			<li>
				<a
					class="anchor"
					href="https://soundcloud.com/ucsdmindfulness/45-minute-body-scan-by-steve-hickman"
					target="_blank"
				>
					45 minutes Body Scan - Steve Hickman</a
				>
			</li>
		</ul>
	</details>
	<hr class="hr" />
	<details class="group p-2">
		<summary
			class="grid cursor-pointer list-none grid-cols-[1.25rem_auto] items-center marker:hidden [&::-webkit-details-marker]:hidden"
			id="mindfulness-of-breathing-meditation"
		>
			<span class="transform transition-transform duration-200 group-open:rotate-90"> ⯈ </span>
			<span class="ml-2">Mindfulness of Breathing Meditation</span>
		</summary>
		<ul>
			<li>
				<a
					class="anchor"
					href="https://docs.google.com/document/d/1iaJOrCQcZ4CqP0syJXpF2b62I9IIYmqh_Knaj9oG0qM"
					target="_blank"
				>
					Basic Mindfulness of Breathing Instructions (Document)</a
				>
			</li>
			<li>
				<a class="anchor" href="https://www.youtube.com/watch?v=YFSc7Ck0Ao0" target="_blank">
					5 minutes Guided Mindfulness of Breathing Meditation - Diana Winston</a
				>
			</li>
			<li>
				<a class="anchor" href="https://www.youtube.com/watch?v=2GjZanuXWWk" target="_blank">
					10 minutes Guided Mindfulness of Breathing Meditation - Jon Kabat Zinn</a
				>
			</li>
			<li>
				<a
					class="anchor"
					href="https://soundcloud.com/ucsdmindfulness/20-min-seated-meditation-by-steve-hickman"
					target="_blank"
				>
					20 minutes Guided Mindfulness of Breathing Meditation - Steve Hickman</a
				>
			</li>
			<li>
				22 minutes Guided Mindfulness of Breathing Meditation - Doron Tal:
				<audio src={aob22} controls>
					<track kind="captions" />
				</audio>
			</li>
		</ul>
	</details>
	<hr class="hr" />
	<details class="group p-2">
		<summary
			class="grid cursor-pointer list-none grid-cols-[1.25rem_auto] items-center marker:hidden [&::-webkit-details-marker]:hidden"
			id="walking-meditation"
		>
			<span class="transform transition-transform duration-200 group-open:rotate-90"> ⯈ </span>
			<span class="ml-2">Walking Meditation</span>
		</summary>
		<ul>
			<li>
				<a
					class="anchor"
					href="https://docs.google.com/document/d/1PaceixaSlw_bdk-OK1d4FindaAoz_yhKURvflqGyobc"
					target="_blank"
				>
					Basic Walking Meditation Instructions (Document)</a
				>
			</li>
			<li>
				<a class="anchor" href="https://www.youtube.com/watch?v=_IFvablc6EI" target="_blank">
					Basic Walking Meditation Instructions (Video) - Yuttadhammo Bhikkhu</a
				>
			</li>
			<li>
				<a
					class="anchor"
					href="https://docs.google.com/document/d/1uIJtDZawpxJMOl4g3G3Ge7fP7uMAHdPmNpmYxK_vRFg"
					target="_blank"
				>
					Walking Meditation Methods - Two Refinements (Document)</a
				>
			</li>
		</ul>
	</details>
	<hr class="hr" />
	<details class="group p-2">
		<summary
			class="grid cursor-pointer list-none grid-cols-[1.25rem_auto] items-center marker:hidden [&::-webkit-details-marker]:hidden"
			id="loving-kindness-meditation"
		>
			<span class="transform transition-transform duration-200 group-open:rotate-90"> ⯈ </span>
			<span class="ml-2">Loving Kindness Meditation</span>
		</summary>
		<ul>
			<li>
				<a class="anchor" href="https://www.youtube.com/watch?v=e-TeW9CI0bc" target="_blank">
					10 minutes Guided Loving Kindness Meditation - Sharon Salzberg</a
				>
			</li>
			<li>
				<a
					class="anchor"
					href="https://insighttimer.com/buddha-haus/guided-meditations/flower-garden-loving-kindness-meditation-metta"
					target="_blank"
				>
					17 minutes Guided Loving Kindness Meditation - Ayya Khema</a
				>
			</li>
			<li>
				<a
					class="anchor"
					href="https://www.youtube.com/playlist?list=PLv4CVwkg1WmJUN85pK3baKsvfMDAWPBtC"
					target="_blank"
				>
					Guided Loving Kindness Meditation Playlist - Ayya Khema</a
				>
			</li>
			<li>
				<a class="anchor" href="https://www.youtube.com/watch?v=5luvQp--B8U" target="_blank">
					18 minutes Guided Loving Kindness Meditation - Thich Nhat Hanh</a
				>
			</li>
		</ul>
	</details>
	<hr class="hr" />
	<details class="group p-2">
		<summary
			class="grid cursor-pointer list-none grid-cols-[1.25rem_auto] items-center marker:hidden [&::-webkit-details-marker]:hidden"
			id="mindful-yoga"
		>
			<span class="transform transition-transform duration-200 group-open:rotate-90"> ⯈ </span>
			<span class="ml-2">Mindful Yoga</span>
		</summary>
		<ul>
			<li>
				<a class="anchor" href="https://www.youtube.com/watch?v=BwQXNGp-X7c" target="_blank">
					Dr. Lynn Rossi - Mindful Yoga 1</a
				>
			</li>
			<li>
				<a class="anchor" href="https://www.youtube.com/watch?v=hyxtVJQmnEk" target="_blank">
					Dr. Lynn Rossi - Mindful Yoga 2</a
				>
			</li>
		</ul>
	</details>
	<hr class="hr" />
	<details class="group p-2">
		<summary
			class="grid cursor-pointer list-none grid-cols-[1.25rem_auto] items-center marker:hidden [&::-webkit-details-marker]:hidden"
			id="miscellaneous-mindfulness-links"
		>
			<span class="transform transition-transform duration-200 group-open:rotate-90"> ⯈ </span>
			<span class="ml-2">Miscellaneous</span>
		</summary>
		<ul>
			<li>
				<a class="anchor" href="https://www.youtube.com/watch?v=w6T02g5hnT4" target="_blank"
					>Why Mindfulness is a Superpower</a
				>
			</li>
			<li>
				<a
					class="anchor"
					href="https://docs.google.com/document/d/1AbaENWFLB3iBQWI5bz0LJOSeWt2_TwZBcuon3xqMHj8"
					target="_blank"
				>
					Mindful Attention Awareness Scale (MAAS)
				</a>
			</li>
			<li>
				<a
					class="anchor"
					href="https://docs.google.com/spreadsheets/d/1prfYuXq3_4Tuu57cO2gS70z-2wnq79uTDV6h4daKgr4"
					target="_blank"
				>
					U.S. Online Meditation Groups
				</a>
			</li>
			<li>
				<a class="anchor" href="https://imta.org" target="_blank">
					International Mindfulness Teachers Association (IMTA)
				</a>
				/
				<a
					class="anchor"
					href="https://cdn.ymaws.com/imta.site-ym.com/resource/resmgr/IMTA_Infographic_final.pdf"
					target="_blank"
				>
					IMTA Mindfulness Infographic
				</a>
			</li>
			<li>
				<a
					class="anchor"
					href="https://insighttimer.com/blog/back-pain-meditation-neck/"
					target="_blank"
				>
					An article on body pain during meditation, with guided meditations
				</a>
			</li>
		</ul>
	</details>
	<hr class="hr" />
	<details class="group p-2">
		<summary
			class="grid cursor-pointer list-none grid-cols-[1.25rem_auto] items-center marker:hidden [&::-webkit-details-marker]:hidden"
			id="mindfulness-research"
		>
			<span class="transform transition-transform duration-200 group-open:rotate-90"> ⯈ </span>
			<span class="ml-2">Mindfulness Research</span>
		</summary>
		<ul>
			<li>
				<a
					class="anchor"
					href="https://www.ted.com/talks/matt_killingsworth_want_to_be_happier_stay_in_the_moment?subtitle=en"
					target="_blank"
				>
					Link Between Mindfulness and Happiness - Matt Killingsworth
				</a>
			</li>
			<li>
				<a class="anchor" href="https://www.youtube.com/watch?v=br8-qebjIgs" target="_blank">
					Polyvagal Theory: The New Science of Safety and Trauma - Seth Porges
				</a>
			</li>
			<li>
				<a class="anchor" href="https://goamra.org/" target="_blank">
					American Mindfulness Research Association
				</a>
			</li>
		</ul>
	</details>
	<hr class="hr" />
	<details class="group p-2">
		<summary
			class="grid cursor-pointer list-none grid-cols-[1.25rem_auto] items-center marker:hidden [&::-webkit-details-marker]:hidden"
			id="poetry-related-to-mindfulness"
		>
			<span class="transform transition-transform duration-200 group-open:rotate-90"> ⯈ </span>
			<span class="ml-2">Poetry Related to Mindfulness</span>
		</summary>
		<ul>
			<li>
				<a
					class="anchor"
					href="https://www.mindfulnessassociation.net/words-of-wonder/grace-alice-walker/"
					target="_blank"
				>
					Grace - Alice Walker</a
				>
			</li>
			<li>
				<a
					class="anchor"
					href="https://allpoetry.com/poem/8534703-The-Guest-House-by-Mewlana-Jalaluddin-Rumi"
					target="_blank"
				>
					The Guest House - Jalaludin Rumi</a
				>
			</li>
			<li>
				<a
					class="anchor"
					href="https://yourmindfultribe.org/poems/2020/08/03/your-history-is-here-inside-your-body-by-martha-e"
					target="_blank"
				>
					Your History is Here Inside Your Body - Martha Elliot</a
				>
			</li>
			<li>
				<a
					class="anchor"
					href="http://www.phys.unm.edu/~tw/fas/yits/archive/oliver_wildgeese.html"
					target="_blank"
				>
					Wild Geese - Mary Oliver</a
				>
			</li>
			<li>
				<a
					class="anchor"
					href="https://www.saltproject.org/progressive-christian-blog/2015/6/29/the-summer-day"
					target="_blank"
				>
					The Summer Day - Mary Oliver</a
				>
			</li>
			<li>
				<a
					class="anchor"
					href="https://www.poetryverse.com/octavio-paz-poems/between-going-staying"
					target="_blank"
				>
					Between Going and Staying - Octavio Paz</a
				>
			</li>
			<li>
				<a
					class="anchor"
					href="https://www.centerforcompassionateleadership.org/admit-something-by-hafiz"
					target="_blank"
				>
					Admit Something - Hafiz</a
				>
			</li>
			<li>
				<a
					class="anchor"
					href="https://www.mindfulnessassociation.net/words-of-wonder/walk-slowly-danna-faulds/"
					target="_blank"
				>
					Walk Slowly - Dana Faulds</a
				>
			</li>
			<li>
				<a
					class="anchor"
					href="https://youarehere.substack.com/p/place-poem-lost-by-david-wagoner"
					target="_blank"
				>
					Lost - David Wagoner</a
				>
			</li>
			<li>
				<a
					class="anchor"
					href="https://www.mindfulnessassociation.net/words-of-wonder/fear-kahlil-gibran/"
					target="_blank"
				>
					Fear - Khalil Gibran</a
				>
			</li>
		</ul>
	</details>
</div>
