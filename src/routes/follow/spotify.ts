import dotenv from 'dotenv'
export async function post() {
    dotenv.config()
    var scope = 'user-read-private user-read-email';
    console.log("ENV", process.env.SPOTIFY_CLIENT_ID)
    const redirect = new URL('https://accounts.spotify.com/authorize?')
    redirect.searchParams.append('response_type', 'code')
    redirect.searchParams.append('client_id', process.env.SPOTIFY_CLIENT_ID)
    redirect.searchParams.append('scope', scope)
    redirect.searchParams.append('redirect_uri', process.env.SPOTIFY_REDIRECT_URI)

    return {
        body: JSON.stringify({
            redirect
        })
    }
}

export async function get({ query }) {
    const code = query.get('code');
    //if code, user auth'd
    //store cred to session, and redir to /follow
    console.log('get')
    console.log(code)   
    if (code) {
        //get the token
        const url = new URL('https://accounts.spotify.com/api/token')
        url.searchParams.set('grant_type')
        const res = await fetch(url.toString(), {
            method: "POST",
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded'
            },
            body: {
                grant_type: "authorization_code",
            }
        })
        return {
            status: 301,
            headers: {
                "Location": '/follow'
            }
        }
    }
    return {
        status: 302,
        redirect:'/follow'
    }

}