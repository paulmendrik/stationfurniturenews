<script>
    import PrismicDOM from 'prismic-dom';

    export let updates;

    export function formatDate(date) {
        return new Date(date).toLocaleDateString()
    }

</script>



<div class="uk-container uk-container-small"  uk-scrollspy="cls: uk-animation-fade; target: .uk-article; delay: 500; repeat: true">
<ul class="uk-list updates uk-flex uk-flex-column">

{#each updates as update}
<li>
<article class="uk-article  uk-grid-collapse uk-margin" uk-grid>
<h3 class="uk-article-title">{PrismicDOM.RichText.asText(update.data.title)}</h3>
<p class="uk-article-meta date">{formatDate(update.data.date)}</p>
<p>{PrismicDOM.RichText.asText(update.data.content)}</p>
</article>
</li>
{/each}

</ul>
</div>

<style>

    ul.updates li {
        padding-bottom: 2rem !important;
        margin-top: 1.75rem!important;
        border-bottom: 1px solid #e5e5e5 !important;
    }


    h3.uk-article-title {
        display: block;
        padding: 0 !important;
        margin: 0 !important;
        width: 100%;
        font-family: "proxima-nova",sans-serif;
        font-weight: 400 !important;
        font-size: 2rem !important;
        line-height: 1.2;
        text-transform: uppercase;
        color: black !important;
    }

    p.date {
        display: block;
        padding: 0 !important;
        font-family: "proxima-nova",sans-serif;
        font-weight: 600 !important;
        font-size: 0.75rem !important;
        letter-spacing: 0.025rem !important;
        line-height: 3 !important;
        color: #444444 !important;
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 1112px) {
    }

    @media (max-width: 1024px) {

    }


    @media (max-width: 800px) {

    }

    @media (max-width: 414px) {
        h3.uk-article-title { margin: 0.5rem 0 !important; font-size: 1rem !important; }
        p.date { font-weight: 500 !important; font-size: 0.6875rem !important;}
    }

    @media (max-width: 375px) {
        h3.uk-article-title { margin: 0.5rem 0 !important; font-size: 1rem !important; }
        p.date { font-weight: 500 !important; font-size: 0.6875rem !important;}
    }

    @media (max-width: 320px) {
        h3.uk-article-title { margin: 0.5rem  0 !important; font-size: 1rem !important; }
        p.date { font-weight: 500 !important; font-size: 0.6875rem !important;}
    }
</style>
