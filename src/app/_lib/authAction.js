"use server";

import { createClient } from "@/db/supabaseServer";

export async function handleLogin(data, provider = null) {

    const supabase = await createClient();

    let error = null;
    try {

        // Ouath 로그인 시도
        if (provider) {

            // 로그인 시도
            const { error: authError } = await supabase.auth.signInWithOAuth({
                provider,
                // options: {
                //     redirectTo: `${window.location.origin}/auth/callback`
                // }
            });

            error = authError
        }
        // 이메일 로그인 시도
        else {
            // ✅ 이메일/비밀번호 로그인 처리
            const { email, password } = data;
            const { error: authError } = await supabase.auth.signInWithPassword({ email, password });

            error = authError;
        }

        return nextLoginResult(error);
    }
    catch (error) {
        return { success: false, message: error.massage };
    }
}

export async function handleSignUp(data) {

    const supabase = await createClient();

    try {
        const { email, password } = data;
        const { error } = await supabase.auth.signUp({ email, password });

        return nextSignUpResult(error);
    }
    catch (error) {
        return { success: false, message: error.message };
    }
}

export async function handleLogOut() {
    const supabase = await createClient();

    try {
        const { error } = await supabase.auth.signOut();

        if (error) {
            return { success: false, message: error.message };
        }

        return { success: true, message: "로그아웃 성공" };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

const nextLoginResult = async (error) => {
    if (error) {
        console.error("OAuth Signin Error", error.message);
        return { success: false, message: error.message };

    } else {
        console.log("로그인 성공");
        return { success: true, message: "로그인 성공" };
    }
}

function nextSignUpResult(error) {
    if (error) {
        return { success: false, message: error.message };
    }
    else {
        return { success: true, message: "회원가입 성공. 이메일 인증을 확인하세요." };
    }
}