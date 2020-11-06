<script>
    import PrismicDOM from 'prismic-dom';

    export let intro
</script>

<div class="uk-height-viewport uk-background-cover uk-light uk-flex" style="background-image: url('{intro.data.image.url}');">
<div class="intro uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical" data-uk-scrollspy="target: > .animate; cls: uk-animation-slide-bottom-small uk-invisible; delay: 300">
<h1 class="quote uk-heading-primary animate uk-invisible">{PrismicDOM.RichText.asText(intro.data.quote)}</h1>
<p class="uk-button uk-button-secondary"><a  href="{PrismicDOM.RichText.asText(intro.data.link)}">Access our shop</a></p>
</div>
</div>

<style>

h1.quote {
    font-family: plantin, sans-serif;
    font-weight: 300;
    font-size: clamp(2rem, 3.25vw, 4rem);
    font-style: italic;
    color: white;
}

p.uk-button a {
    font-family: proxima-nova, sans-serif;
    font-weight: 600;
    font-size: clamp(1.5rem, 3.25vw, 2.75rem);
    color: white;
}

</style>