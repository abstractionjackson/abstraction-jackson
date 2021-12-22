<script>
    import PortfolioItem from '../../components/PortfolioItem.svelte';
    import { PORTFOLIO } from '../../../static/constants'
    import Hero from '../../components/Hero.svelte';
</script>

<main>
    <Hero headingText="Portfolio" subHeadingText="Sample professional devlopment that Jackson performed, or toward which he contributed." />e
    <ul class='p-3'>
        {#each PORTFOLIO.items as item }
            <PortfolioItem item={item} />
        {/each}
    </ul>
</main>