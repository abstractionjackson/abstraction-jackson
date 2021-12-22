export const post = (request) => {
    const { email, password } = request.body
    //validate
    if (email && password) {
        //g2g
        return {
            status: 200,
            body: {
                user: {
                    email,
                }
            }
        }
    }
    return {
        status: 400,
        body: {
            error: {
                message: `<span class="text-red-600 underline rounded text-lg px-1 border-red-700">Invalid Credentials</span>`
            }
        }
    }
}