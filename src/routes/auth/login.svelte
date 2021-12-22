<script lang="ts">
import { goto } from '$app/navigation';

    import { post } from '../../lib/utils'
    let email:string
    let password:string
    $: errorMessage = '<span class="hidden" />'
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            email,
            password
        }
        
        const { user, error } = await post('/user/login', data)
        
        if (user) {
            goto('/')
        }
        errorMessage = error.message
    }
</script>

<form on:submit={handleSubmit} class="flex flex-col">
<h1>Login</h1>
{@html errorMessage}
<input type="emal" name="email" bind:value={email} placeholder="Email" />
<input type="password" name="password" bind:value={password} placeholder="password" />
<button type="submit" class="w-fit p-3 border bg-gray-300">Submit</button>
</form>
