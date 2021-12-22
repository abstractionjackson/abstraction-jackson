<script lang="ts">
    import type { PortfolioItem } from '../../static/types'
    import externalLinkIcon from '../../static/icons/external-link.svg'
    export let item:PortfolioItem
</script>

<li class="w-full max-w-md mx-auto grid text-center items-center p-3 border-b-2 border-gray-300">
    <a class="text-xl flex justify-center" href={item.href}>
        <span>{item.name}</span>
        <img src={externalLinkIcon} class="w-3 h-3 mt-1" alt="icon-external-link" />
    </a>
    <div class="flex justify-center p-3">
        <div class="w-64 h-64 mb-3" href={item.image.src}>
            <a href={item.image.src}>
                <img
                    class="object-contain max-h-full"
                    src={item.image.src}
                    height={item.image.height}
                    width={item.image.width}
                    alt={item.image.alt}
                />
            </a>
        </div>
    </div>
    <p class="p-3 italic text-gray-600">{item.image.caption}</p>
</li>