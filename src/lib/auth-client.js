'use client';

import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "http://localhost:3000"
})
export const { signIn, signUp, useSession } = createAuthClient()
// 714627441586-knldti3u978hjp4shhs9mlc9hb7bqhhm.apps.googleusercontent.com