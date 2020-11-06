<script context="module">

    import PrismicHTML from '../components/PrismicHTML.svelte';
    import Prismic from 'prismic-javascript';
    import { Client } from '../../prismic-config.js';
    import Updates from '../components/Updates.svelte';

    let about;
    let updates;

    export async function preload({ params, query }) {
        about = await Client.getSingle('about');

        const updateResponse = await Client.query(
                Prismic.Predicates.at('document.type', 'update'),
                { orderings: '[my.post.publication_date desc]' }
        )

        updates = updateResponse.results

        if (about && updates) {
            return {about,updates};
        } else {
            this.error(res.status, data.message);
        }
    }
</script>

<script>
    export let about;
    export let updates;
</script>

<svelte:head>
<title>Coronavirus & Updates</title>
</svelte:head>

<section class="uk-section uk-section-small uk-padding-remove-bottom">
<div class="uk-container">
<div class="uk-height-large uk-cover-container">
<img src="{about.data.banner.url}" alt="Coronvirus and Updates" data-uk-cover>
</div>
</div>
</section>

<section class="uk-section-small uk-article">
<div class="uk-container uk-container-small">
<h2 class="uk-heading-medium title">Coronavirus</h2>
<PrismicHTML elements={about.data.content} />
<h2 class="uk-heading-divider title">Coronavirus Updates</h2>
</div>
<Updates updates= {updates} />
</section>





<style>

    h2.title {
        font-family: "proxima-nova",sans-serif;
        font-weight: 400;
        font-size: clamp(2rem, 3.5vw, 2.5rem);
        text-transform: uppercase;
        color: black;
    }


</style>
