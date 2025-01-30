"use server";

import { createClient } from "@/db/supabaseClient";

export async function handleLogin(data, provider = null) {

    const supabase = createClient();

    try {

        // Ouath 로그인 시도
        if (provider) {
            // 로그인 시도
            const { error } = await supabase.auth.signInWithOAuth({
                provider,
                options: {
                    redirectTo: `${window.location.origin}/auth/callback`
                }
            });

            return nextLoginResult(error);
        }
        // 이메일 로그인 시도
        else {
            // ✅ 이메일/비밀번호 로그인 처리
            const { email, password } = data;
            const { user, error } = await supabase.auth.signInWithPassword({ email, password });

            return nextLoginResult(error);
        }

    }
    catch (error) {
        return error;
    }
}

export async function handleSignUp(data) {

    const supabase = createClient();

    try {
        const { user, error } = await supabase.auth.signUp({
            email: data.email,
            password: data.password
        });

        return nextSignUpResult(error);
    }
    catch (error) {
        return error;
    }
}
