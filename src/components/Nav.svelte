<script>
    import brandIcon from '../../static/icons/user-circle.svg'
</script>
<nav class="flex p-3 justify-start">
    <a href="/" class='m-3'>
        <img src={brandIcon} alt="brand-icon" class="h-6 w-6 sm:hidden">
        <span class="hidden sm:block text-xl">Abstraction Jackson</span>
    </a>
    <ul class='m-3'>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/follow">Follow</a>
    </ul>
</nav>

<style>
    ul > a {
        margin: 0.75rem;
    }
</style>