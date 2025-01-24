"use client";

import { FormControl, Grid2 as Grid, Typography, TextField, Button, Divider, Link } from "@mui/material";
import { useForm } from "react-hook-form";
import { createClient } from "@/db/supabaseClient";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginComponent() {

    const supabase = createClient();

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [errorFromSubmit, setErrorFromSubmit] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (data, provider = null) => {

        try {
            setLoading(true);

            // Ouath 로그인 시도
            if (provider) {
                // 로그인 시도
                const { error } = await supabase.auth.signInWithOAuth({
                    provider,
                    options: {
                        redirectTo: `${window.location.origin}/auth/callback`
                    }
                });

                nextLoginResult(error);
            }
            // 이메일 로그인 시도
            else {
                // ✅ 이메일/비밀번호 로그인 처리
                const { email, password } = data;
                const { user, error } = await supabase.auth.signInWithPassword({ email, password });

                nextLoginResult(error);
            }

        }
        catch (error) {
            setErrorFromSubmit(error.message);
            setLoading(false);
            setTimeout(() => {
                setErrorFromSubmit("");
            }, 5000);
        }
    }

    const nextLoginResult = async (error) => {
        if (error) {
            setErrorFromSubmit(error.message);
            console.error("OAuth Signin Error", error.message);
            
        } else {
            setLoading(false);
            router.replace("/");
        }
    }

    return (
        <Grid container direction={"column"} size={12} sx={{ height: "100%", background: "#468243" }}>
            <Grid sx={{ height: "100px", backgroundColor: "darkred", alignContent: "center", justifyItems: "center" }}>
                <Typography variant="h2" sx={{ color: "white" }}>
                    로그인
                </Typography>
            </Grid>
            <Grid sx={{ flex: 1, backgroundColor: "white" }}>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <FormControl>
                        <TextField
                            label="Email"
                            variant="outlined"
                            type="email"
                            {...register("email", { required: true })}
                        />
                        <TextField
                            label="Password"
                            variant="outlined"
                            type="password"
                            autoComplete="current-password"
                            {...register("password", { required: true })}
                        />
                        <Button variant="contained" disabled={loading} type="submit" loading={loading ? loading : undefined} loadingposition="start">Login with Email</Button>
                        <Divider >소셜 로그인</Divider>
                        <Button variant="contained" disabled={loading} onClick={() => handleLogin({}, "google")} loading={loading ? loading : undefined} loadingposition="start">Login with Google</Button>
                        <Button variant="contained" disabled={loading} onClick={() => handleLogin({}, "kakao")} loading={loading ? loading : undefined} loadingposition="start">Login with Kakao</Button>
                        <Button variant="contained" disabled={loading} onClick={() => handleLogin({}, "apple")} loading={loading ? loading : undefined} loadingposition="start">Login with Apple</Button>
                    </FormControl>
                </form>
                <Link href="/signup">회원가입</Link>
            </Grid>
        </Grid>
    )
}