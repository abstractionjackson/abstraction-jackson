<script lang="ts">
    import type { SocialMediaItem } from '../../static/types'
    export let item:SocialMediaItem
    const {
        platform,
        account: {
            profile
        },
        icon: {
            fontAwesome
        }
    } = item
</script>

<div class="p-3 mx-auto">
    <a href={profile.toString()} class="text-black text-6xl flex flex-col w-min items-center">
        <span class={fontAwesome} />
        <h1 class="text-lg w-18 break-words text-center text-gray-600 mt-1">{platform.name}</h1>
    </a>
</div>
