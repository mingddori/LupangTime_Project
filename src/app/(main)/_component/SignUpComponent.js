"use client";

import { FormControl, Grid2 as Grid, Typography, TextField, Button, Divider, Link } from "@mui/material";
import { useForm } from "react-hook-form";
import { createClient } from "@/db/supabaseClient";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function LoginComponent() {

    const supabase = createClient();

    const { register, watch, formState: { errors }, handleSubmit } = useForm();

    const password = useRef();
    password.current = watch("password");

    const [loading, setLoading] = useState(false);
    const [errorFromSubmit, setErrorFromSubmit] = useState("");
    
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
                            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        />

                        {errors.email && <p>This email field is required</p>}

                        <TextField
                            label="비밀번호"
                            variant="outlined"
                            type="password"
                            helperText="비밀번호는 최소 6자 이상이어야 합니다."
                            {...register("password", { required: true, minLength: 6 })}
                        />

                        {errors.password && errors.password.type === "required" && <p>This password field is required</p>}
                        {errors.password && errors.password.type === "minLength" && <p>Password must have at least 6 characters</p>}

                        <TextField
                            label="비밀번호 확인"
                            variant="outlined"
                            type="password"
                            {...register("password_confirm", { required: true, validate : (value) => value})}
                        />

                        {errors.password_confirm && errors.password_confirm.type === "required" && (<p>This password field is required</p>)}
                        {errors.password_confirm && errors.password_confirm.type === "validate" && (<p>Password does not match</p>)}

                        {errorFromSubmit && <p>{errorFromSubmit}</p>}

                        <Button variant="contained" disabled={loading} type="submit" loading={loading ? loading : undefined} loadingposition="start">Sign Up with Email</Button>
                    </FormControl>
                </form>
                <Link href="/user/login">이미 아이디가 있다면...</Link>
            </Grid>
        </Grid>
    )
}