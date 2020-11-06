<script context="module">
	import { onMount } from 'svelte';
	import PrismicHTML from '../../components/PrismicHTML.svelte';
	import PrismicDOM from 'prismic-dom';
	import { Client, linkResolver } from '../../../prismic-config.js';

let post = null;


export async function preload({ params, query }) {
	const uid = params.uid;
	post = await Client.getByUID('post', uid);


	if (post) {
		return {
			post
		};
	} else {
		this.error(res.status, data.message);
	}
}
function formatDate(date) {
	return new Date(date).toLocaleDateString()
}
</script>

<script>
export let post;
</script>

<svelte:head>
<title>{PrismicDOM.RichText.asText(post.data.title)}</title>
</svelte:head>

<section class="uk-section uk-section-small uk-padding-remove-bottom">
<div class="uk-container">
<div class="uk-height-large uk-cover-container">
<img src="{post.data.image.url}" alt="{PrismicDOM.RichText.asText(post.data.title)}" data-uk-cover>
</div>
</div>
</section>

<section class="uk-section-small uk-article">
<div class="uk-container uk-container-small">
<h2 class="uk-heading-medium title">{PrismicDOM.RichText.asText(post.data.title)}</h2>
<p class="uk-article-meta">Written on {formatDate(post.data.date)}</p>
<p class="uk-text-lead">{PrismicDOM.RichText.asText(post.data.intro)}</p>
	<PrismicHTML elements={post.data.main} />
</div>
</section>

<style>

	h2.title {
		font-family: mostra-nuova, sans-serif;
		font-weight: 400;
		font-size: clamp(1.5rem, 3.25vw, 2.5rem);
		text-transform: uppercase;
		color: black;
	}

	.uk-article-meta {
		font-family: neue-haas-unica, sans-serif;
		font-weight: 600 !important;
		font-size: 0.75rem !important;
		letter-spacing: 0.025rem !important;
		color: #444444 !important;
	}

	.uk-article p.uk-text-lead {
		font-family: adobe-caslon-pro, serif;
		font-size: 1.25rem !important;
		font-weight: 400 !important;
		color: black !important;
	}

	.uk-article p {
		font-family: adobe-caslon-pro, serif;
		font-weight: 400 !important;
		font-size: 1.125rem !important;
		line-height: 1.25;
		color: black !important;
	}

</style>




