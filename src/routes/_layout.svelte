<script>
import { onMount } from 'svelte';
import Nav from '../components/Nav.svelte';
import Footer from '../components/Footer.svelte';

onMount(() => {
    const item = document.getElementsByClassName("uk-link");
    const element = document.getElementsByClassName("uk-main");

    for ( let i = 0; i < item.length; i++) {
        item[i].onclick = function() {
           element.item(0).classList.toggle('active');
        }
    }
});

</script>

<Nav/>
<main class="uk-main">
<slot></slot>
</main>
<Footer/>


