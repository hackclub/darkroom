<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { slide, } from "svelte/transition";

	let show = $state(false);

	onMount(() => {
		requestAnimationFrame(() => {
			show = true;
		});
	});

	let items = [
		["https://cdn.hackclub.com/019cf3a4-5c6d-7085-ae8c-b6e7267c1257/instax_crop.png",
			"Instax", "An Instax instant camera*"],
		["https://cdn.hackclub.com/019cf3a4-5e21-7fcf-a9e9-cd2ad4f39e76/memory_cards_crop.png", 
			"Memory cards", "Memory cards to store your photos*"],
		["https://cdn.hackclub.com/019cf658-bc26-752a-8278-4eabf833026d/accessories_crop.png",
			"Accessories", "A bunch of accessories*"],
		["https://user-cdn.hackclub-assets.com/019cf3ab-4853-70fe-b981-c9e504397c82/kodak_chamera_crop.png",
			"Kodak Charmera", "Kodak Charmera - A keychain camera*"],
		["https://cdn.hackclub.com/019cf63c-c237-7edf-bedb-aa6554c0fdd9/sticker_sheet_placeholder_crop.png",
			"Sticker sheet", "A cool sticker sheet!"],
		["https://cdn.hackclub.com/019cf63c-be51-7b67-aa1b-aa18b0012a12/film_crop.png",
			"Film grant", "Restock your film*"],
		["https://cdn.hackclub.com/019cf63c-c06e-77ce-90d8-ad3a0f4e9750/digicam_crop.png",
			"Camera grant", "A retro digicam*"],
		["https://cdn.hackclub.com/019cf3a4-6360-7cfe-abcc-f1248cd352a7/printed_photps_crop.png",
			"Printed photos", "A grant to get your photos printed"],
		["https://cdn.hackclub.com/019d0785-f708-7e61-8bdb-3b8f0c96bac4/cleaning_kit_crop.png",
			"Cleaning kit", "A cleaning kit to tidy up your camera*"]
		];

	let faqs = [
		["What is Darkroom?", 
			"Darkroom is a Hack Club You Ship We Ship where you build something photography-related and get prizes."],
		["Who is running this?",
			"Darkroom is part of Hack Club, a 501(c)(3) nonprofit organization. It's being ran by Trulle123!"],
		["Am I eligible to participate?", 
			"If you are between 13 and 18, you are eligible. You will have to verify your identity to \"purchase\" stuff in the shop."],
		["Do I need to be experienced?", 
			"Not at all! You can be new to coding, photography, or both. You can always ask for help in the Slack channel."],
		["What can I make?",
			"Anything related to photography! For example: an image-editing app, a photobook website, your own camera app or whatever else you like."],
		["What counts as shipped?",
			"You must have a public and open-source GitHub repo and a live demo that other people can easily try out."],
		["Can I use AI when making my project?",
			"We encourage you to do it on your own. But yes, you can use some AI (~30% max)."],
		["So, what's the catch?",
			"There is none! Hack Club is a nonprofit whose goal is to help and encourage teens to make projects. In other words, it's free, with no drawbacks."]
	];

	let openIndex: number | null = $state(null);

	function toggle(index: number) {
		if (openIndex === index) {
			openIndex = null;
		} else {
			openIndex = index;
			
		}
	}
</script>

<a href="https://hackclub.com/">
	<img
		src="https://cdn.hackclub.com/019cf26c-c031-7bb9-a8c4-216a5ecd5a28/flag-orpheus-left-color-fix.svg"
		alt="Hack Club"
		id="flag"
	/>
</a>

<div id="faq-button-div" class:visible={show}>
	<a href="#faq" id="faq-button">FAQ</a>
</div>

<div id="main" class:visible={show}>
	<div id="hero">
		<div id="hero-copy">
			<h1 id="title">Darkroom</h1>

			<p id="description">
				Build something photography-related,<br>
				Get cameras, gear, film and other cool stuff!<br><br>
				<strong>Running from August 13th to September 7th</strong>
			</p>
		</div>
		
		<div id="buttons">
			<a href="https://forms.hackclub.com/darkroom-submission" target="_blank" class="button">Submit your project</a>
			<a href="https://hackclub.enterprise.slack.com/archives/C0ALM44RBFU" target="_blank" class="button">Join #darkroom</a>
		</div>
	</div>
</div>

<img 
	src="https://cdn.hackclub.com/019cf2b0-6906-7246-8451-490d4e152f0d/wave.svg"
	alt="Wave"
	id="wave"
/>

<div id="dark">
	<div class:visible={show}>
		<h2 id="get">Get stuff like:</h2>
		<i id="det-disclaimer">Marked with * are suggestions for use of the "Camera & supplies grant"</i>

		<div id="polaroid-grid">
			{#each items as [url, alt, desc]}
				<div class="polaroid-wrap" style="transform: rotate(
					{Math.random() < 0.5
						? -(Math.random() * 4 + 2)
						: Math.random() * 4 + 2}deg);">
						
					<img
						src={url}
						alt={alt}
						class="polaroid-img"
					/>
					<img
						src="https://cdn.hackclub.com/019cf277-b514-7a8f-96f5-c33a5dc49504/polaroid.svg"
						alt="Polaroid"
						class="polaroid"
					/>
					<p class="polaroid-text">{desc}</p>
				</div>
			{/each}
		</div>
		
		<h2 id="faq-head">FAQ:</h2>

		<div id="faq">
			{#each faqs as [q, a], i}
				<div class="faq-item">
					<button class="question" onclick={() => toggle(i)}>
					<span>{q}</span>
					<span class:open={openIndex === i} class="arrow">▼</span>
					</button>
					
					{#if openIndex === i}
					<div class="answer"  transition:slide={{ duration: 280 }}>
						{a}
					</div>
					{/if}
				</div>			
  			{/each}
		</div>
		
		<div id="made-by">Made with ❤︎⁠ by 
			<a href="https://hackclub.enterprise.slack.com/team/U07904YUJ6A" target="_blank">Trulle123</a>
			& <a href="https://hackclub.com/" target="_blank">Hack Club</a>
			<br>
			<div id="cred">
				<i>Thanks a lot to <a href="https://github.com/17sdheeraj" target="_blank">Dheeraj</a> for making the UI responsive!</i>
			</div>
		</div>
	</div>
</div>