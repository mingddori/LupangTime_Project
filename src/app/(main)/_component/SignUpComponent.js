"use client";

import { FormControl, Grid2 as Grid, Typography, TextField, Button, Link } from "@mui/material";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import { handleSignUp } from "./authAction";

export default function LoginComponent() {

    const { register, watch, formState: { errors }, handleSubmit } = useForm();

    const password = useRef();
    password.current = watch("password");

    const [loading, setLoading] = useState(false);
    const [errorFromSubmit, setErrorFromSubmit] = useState("");
    
    const router = useRouter();

    const onSubmit = async (data) => {

        setLoading(true);

        const result = await handleSignUp(data);

        if (!result.success) {
            setErrorFromSubmit(result.message);
            setLoading(false);
            setTimeout(() => {
                setErrorFromSubmit("");
            }, 5000);
        }
        else{
            setLoading(false);
            router.replace("/");
        }
    }

    return (
        <Grid container direction={"column"} size={12} sx={{ height: "100%", background: "#468243" }}>
            <Grid sx={{ height: "100px", backgroundColor: "darkred", alignContent: "center", justifyItems: "center" }}>
                <Typography variant="h2" sx={{ color: "white" }}>
                    회원가입
                </Typography>
            </Grid>
            <Grid sx={{ flex: 1, backgroundColor: "white" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl>
                        <TextField
                            label="Email"
                            variant="outlined"
                            type="email"
                            error={errors.email ? true : undefined}
                            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        />

                        {errors.email && <p>This email field is required</p>}

                        <TextField
                            label="비밀번호"
                            variant="outlined"
                            type="password"
                            helperText="비밀번호는 최소 6자 이상이어야 합니다."
                            error={errors.password ? true : undefined}
                            {...register("password", { required: true, minLength: 6 })}
                        />

                        {errors.password && errors.password.type === "required" && <p>This password field is required</p>}
                        {errors.password && errors.password.type === "minLength" && <p>Password must have at least 6 characters</p>}

                        <TextField
                            label="비밀번호 확인"
                            variant="outlined"
                            type="password"
                            error={errors.password_confirm ? true : undefined}
                            {...register("password_confirm", { required: true, validate : (value) => value === password.current})}
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