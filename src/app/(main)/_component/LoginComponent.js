"use client";

import { FormControl, Grid2 as Grid, Typography, TextField, Divider, Link } from "@mui/material";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { handleLogin } from "../../_lib/authAction";

export default function LoginComponent() {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [errorFromSubmit, setErrorFromSubmit] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const onSubmit = async (data, provider = null) => {

        setLoading(true);

        const result = await handleLogin(data, provider);

        if (!result.success) {
            setErrorFromSubmit(result.message);
            setLoading(false);
            setTimeout(() => {
                setErrorFromSubmit("");
            }, 5000);
        }
        else {
            setLoading(false)
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
                <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                    <FormControl>
                        <TextField
                            label="Email"
                            variant="outlined"
                            type="email"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <p>This email field is required</p>}
                        <TextField
                            label="Password"
                            variant="outlined"
                            type="password"
                            autoComplete="current-password"
                            {...register("password", { required: true })}
                        />
                        {errors.password && errors.password.type === "required" && <p>This password field is required</p>}
                        {errors.password && errors.password.type === "minLength" && <p>Password must have at least 6 characters</p>}

                        {errorFromSubmit && <p>{errorFromSubmit}</p>}
                        <Button variant="contained" type="submit" loading={loading ? loading : undefined} loadingposition="start">Login with Email</Button>
                        <Divider >소셜 로그인</Divider>
                        <Button variant="contained" disabled={loading} onClick={() => handleLogin({}, "google")} loading={loading ? loading : undefined} loadingposition="start">Login with Google</Button>
                        <Button variant="contained" disabled={loading} onClick={() => handleLogin({}, "kakao")} loading={loading ? loading : undefined} loadingposition="start">Login with Kakao</Button>
                        <Button variant="contained" disabled={loading} onClick={() => handleLogin({}, "apple")} loading={loading ? loading : undefined} loadingposition="start">Login with Apple</Button>
                    </FormControl>
                </form>
                <Link href="/user/signup">이메일로 회원가입</Link>
            </Grid>
        </Grid>
    )
}