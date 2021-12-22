<script>
    import Avatar from '../../components/Avatar.svelte';
import { SITE_TITLE } from '../../../static/constants'
</script>

<svelte:head>
    <title>{SITE_TITLE}: About</title>
</svelte:head>

<main>
    <header>
        <Avatar />
        <sub class="hidden text-sm text-gray-300">2021-12-22</sub>
    </header>
    <section class="m-1 mt-3 p-3 max-w-md mx-auto px-6 bg-gray-200 border border-gray-300 rounded-lg">
        <p class="indent-3 first-letter:text-2xl text-gray-700">San Francsico Developer, cyclist, engineer 🧱, and black coffee consumer, <a href='https://www.facebook.com/jacksonlgalan' class="font-bold">Jackson Galan</a> builds awesome software.💯</p>
        <p class="indent-3">Head over to the <a href="/portfolio">Portfolio</a> 💼 for a look at his work on distributed agricultural systems, scalable healthcare solutions, and performant chat applications.🌳🏥💬</p>
        <p class="indent-3">Or, <a href="/follow">follow Jackson</a> on social media. (😚 <a href='#'>Spotify</a> tracks are a good place to start)
        </p>
    </section>
</main>

<style>
    p {
        color: rgb(55 65 81)
    }
</style>