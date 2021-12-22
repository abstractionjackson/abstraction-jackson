<script context="module" lang="ts">
    export const load = async ({ fetch, session }) => {
        //if session spotify code
        //fetch nowplaying
        return {
            props: {
                data: {
                spotify: {
                    isAuthorized: false
                }
            }
            }
        }
    }
</script>

<script lang="ts">
import { goto } from '$app/navigation';

import { post } from '$lib/utils';
import Hero from '../../components/Hero.svelte';

    import { SOCIAL } from '../../../static/constants'
    import SocialMediaItem from '../../components/SocialMediaItem.svelte';
    //request Spotify Authorization
    export let data: {
        spotify: {
            isAuthorized: boolean,
            name: string
        }
    }
    const authorizeSpotify = async () => {
        //post to the follow/spotify endpoint
        const res = await post('/follow/spotify', null)
        goto(res.redirect)
    }
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/brands.min.css">
</svelte:head>

<main>
    <header>
        <Hero headingText="Follow" subHeadingText="Connect to Jackson via social media!" />
    </header>
    <section class="invisible">
        <div>
            {#if data.spotify.isAuthorized}
                <h1>Hello {data.spotify.name}!</h1>
            {:else}
                <button on:click={authorizeSpotify} class="border text-white bg-gray-400 p-1">Authorize Spotify</button>
            {/if}
        </div>
    </section>
    <section class="grid grid-cols-2 sm:grid-cols-6">
        {#each SOCIAL as item}
            <SocialMediaItem item={item} />
        {/each}
    </section>
</main>