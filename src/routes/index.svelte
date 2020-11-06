
<script context="module">
    import Prismic from 'prismic-javascript';
    import PrismicDOM from 'prismic-dom';
    import { Client } from '../../prismic-config.js';
    import  Updates from '../components/Updates.svelte';

    let intro;
    let updates;


    export async function preload({ params, query }) {
        const intro = await Client.getSingle('home');

        const update = await Client.query(
            Prismic.Predicates.at('document.type', 'update'),
            { orderings: '[my.update.publication_date desc]' }
        )

        updates = update.results


        return {intro,updates};
    }

    export function formatDate(date) {
        return new Date(date).toLocaleDateString()
    }

</script>
<script>
    export let intro;
    export let updates;
</script>

<svelte:head>
<title>Station Furniture News</title>
</svelte:head>

<div class="home uk-background-cover uk-light uk-flex" style="background-image: url('{intro.data.image.url}');" uk-height-viewport="offset-bottom: 20">
<div class="intro uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical" data-uk-scrollspy="target: > .animate; cls: uk-animation-slide-bottom-small uk-invisible; delay: 300">
<h1 class="quote uk-heading-primary animate uk-invisible">{PrismicDOM.RichText.asText(intro.data.quote)}</h1>
</div>
</div>

<Updates updates="{updates}" />

<style>

    .home {
        margin-bottom: 3rem !important;
    }

    h1.quote {
        padding: 3rem 0;
        font-family: plantin, sans-serif;
        font-weight: 500;
        font-size: 3.5rem;
        font-style: italic;
        color: rgba(255,255,255, 0.8);
    }

    @media (max-width: 414px) {
        h1.quote {font-size: 2.5rem;}

    }

    @media (max-width: 375px) {
        h1.quote {font-size: 2rem;}
    }

    @media (max-width: 320px) {
        h1.quote {font-size: 2rem;}
    }
</style>



















