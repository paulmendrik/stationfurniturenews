<script>

function close() {
    UIkit.offcanvas('#offcanvas-nav').toggle();
}


export let segment;
</script>


<div class="head">
<div class="uk-container uk-container-small">
<nav class="uk-navbar-container uk-navbar-transparent" data-uk-navbar="mode: click;">
<div class="uk-navbar-left">
<a rel=prefetch aria-current='{segment === "/" ? "page" : undefined}' class="uk-logo uk-link" href='/' ><h1>Station Furniture News</h1></a>
</div>
<div class="uk-navbar-right uk-position-right">
<a rel=prefetch aria-current='{segment === "about" ? "page" : undefined}' class="uk-link uk-visible@s" href='https://stationfurniture.store'><p><span class="uk-margin-small-right uk-icon"  uk-icon="icon: cart; ratio: 1.25"></span>Online Shop</p></a>
<a rel=prefetch class="uk-navbar-toggle uk-hidden@m" data-uk-toggle data-uk-navbar-toggle-icon href="#offcanvas-nav"><p></p></a>
</div>
</nav>

</div>
</div>

<div id="offcanvas-nav" data-uk-offcanvas="flip: true; overlay: true; bg-close">
<div class="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide">
<button class="uk-offcanvas-close uk-close uk-icon" type="button" data-uk-close></button>
<ul class="uk-nav uk-nav-default">
<li><a rel=prefetch class="uk-link" href="https://stationfurniture.store" on:click={close}>Online Shop</a></li>
</ul>
</div>
</div>


<style>

    .head {
        position: sticky;
        padding: 1% 0;
        top: 0;
        left: 0;
        right: 0;
        background:  rgba(0, 0, 0, 1) !important;
        z-index: 1000;
        color: white !important;
    }


    .uk-navbar a.uk-logo h1 {
        margin: 0;
        font-family: "proxima-nova",sans-serif;
        font-weight: 400;
        font-size: clamp(1.75rem, 3.25vw, 2.25rem);
        line-height: 1;
        text-transform: uppercase;
        color: white;
    }

    .uk-navbar .uk-navbar-right a {
        margin: 0 !important;
        display: flex;
    }

    .uk-navbar .uk-navbar-right p {
        margin: 0;
        font-family: "proxima-nova",sans-serif;
        font-weight: 400;
        font-size: clamp(1.5rem, 2.5vw, 1.5rem);
        line-height: 1.5;
        color: white !important;
        text-align: right;
    }

    span {
        margin-bottom: 0.9rem !important;
    }

    a.uk-navbar-toggle {
        color: white !important;
    }

    button.uk-offcanvas-close {
        color: rgba(255,255,255,1) !important;
    }

    .uk-offcanvas-bar .uk-nav {
        padding: 5rem 2rem;
    }

    .uk-offcanvas-bar ul li  a {
        font-family: "proxima-nova",sans-serif;
        font-size: clamp(1.5rem, 3.25vw, 2rem);
        font-weight: 400;
        line-height: 1;
        color: white !important;
        text-align: center;
    }



    @media (max-width: 800px) {
        a.uk-navbar-toggle { display: none !important; }

    }

    @media (max-width: 414px) {
        .head { padding: 3% 0; }
        .uk-navbar a.uk-logo h1 {font-size: 1.6rem ; }
        a.uk-navbar-toggle { display: flex !important; }
        .uk-offcanvas-bar { width: 100%; }
    }

    @media (max-width: 375px) {
        .head { padding: 3% 0; }
        .uk-navbar a.uk-logo h1 {font-size: 1.5rem ; }
        a.uk-navbar-toggle { display: flex !important; }
        .uk-offcanvas-bar { width: 100%; }
    }

    @media (max-width: 320px) {
        .head { padding: 3% 0; }
        .uk-navbar a.uk-logo h1 {font-size: 1.25rem ; }
        a.uk-navbar-toggle { display: flex !important; }
        .uk-offcanvas-bar { width: 100%; }
    }


</style>





