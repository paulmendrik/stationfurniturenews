<script>
import { onMount } from 'svelte';
import PrismicDOM from 'prismic-dom';
import { Client, linkResolver } from '../../prismic-config.js';

export let posts;

    onMount(() => {
        const item = document.getElementsByClassName("uk-link");
        const element = document.getElementsByClassName("uk-main");

        for ( let i = 0; i < item.length; i++) {
            item[i].onclick = function() {
                element.item(0).classList.toggle('active');
            }
        }
    });

    export function formatDate(date) {
        return new Date(date).toLocaleDateString()
    }


</script>



<section class="uk-section">
<div class="uk-container uk-container-small"  uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true">
<ul class="uk-list post-list uk-flex uk-flex-column">

{#each posts as post}
<li>
<div class="uk-card uk-card-default uk-grid-collapse uk-margin" uk-grid>

<div class="uk-flex-last@s uk-card-media-right uk-width-1-3@s uk-cover-container">
<img src="{post.data.image.url}" alt="" uk-cover>
<canvas width="100" height="100"></canvas>
</div>

<div class="uk-card-body uk-width-2-3@s">
<a class="uk-link" href={linkResolver(post)}><h3 class="uk-card-title">{PrismicDOM.RichText.asText(post.data.title)}</h3></a>
<p>{PrismicDOM.RichText.asText(post.data.intro)}</p>
<div class="uk-card-footer">
<p class="date">{formatDate(post.data.date)}</p>
</div>
</div>


</div>

</li>
{/each}

</ul>
</div>
</section>

<style>

ul.post-list li {
    padding-bottom: 2rem !important;
    margin-top: 1.75rem!important;
    border-bottom: 1px solid #e5e5e5 !important;
}

.uk-card {
padding: 0 !important;
border: none !important;
box-shadow: none !important;
}




.uk-card-body {
padding: 0 !important;
margin: 0 !important;
overflow: hidden;
}


h3.uk-card-title {
    padding: 0 !important;
    margin: 0 !important;
    margin-bottom: 1rem !important;
    font-family: mostra-nuova, sans-serif;
    font-weight: 400 !important;
    font-size: 2rem !important;
    line-height: 1.2;
    text-transform: uppercase;
    color: black !important;
}

.uk-card-body p {
    position: relative;
    padding: 0;
    padding-right: 1rem !important;
    margin: 0;
    font-family: adobe-caslon-pro, serif;
    font-weight: 400 !important;
    font-size: 1.25rem !important;
    line-height: 1.1;
    max-width: 100%;
    max-height: 4.125rem;
    overflow: hidden;
    text-overflow: ellipsis;
}

.uk-card-footer {
    padding: 1rem 0;
    border: none;
}

p.date {
    display: block;
    padding: 0 !important;
    font-family: neue-haas-unica, sans-serif;
    font-weight: 600 !important;
    font-size: 0.75rem !important;
    letter-spacing: 0.025rem !important;
    line-height: 1.15 !important;
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
    h3.uk-card-title { margin: 0.5rem 0 !important; font-size: 1rem !important; }
    p.date { font-weight: 500 !important; font-size: 0.6875rem !important;}
    .uk-card-body p { font-size: 1rem;}

}

@media (max-width: 375px) {
    h3.uk-card-title { margin: 0.5rem 0 !important; font-size: 1rem !important; }
    p.date { font-weight: 500 !important; font-size: 0.6875rem !important;}
    .uk-card-body p { font-size: 1rem;}
}

@media (max-width: 320px) {
    h3.uk-card-title { margin: 0.5rem  0 !important; font-size: 1rem !important; }
    p.date { font-weight: 500 !important; font-size: 0.6875rem !important;}
    .uk-card-body p { font-size: 1rem;}
}
</style>

