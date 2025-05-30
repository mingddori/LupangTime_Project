"use client";

import { Grid2 as Grid, Link, Typography} from "@mui/material";
import { useSelector } from "react-redux";
import { handleLogOut } from "@/app/_lib/authAction";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "@/store/authSlice";

export default function LoginInfoComponent() {

    const {user, loading} = useSelector((state) => state.auth);

    //  // ✅ useState로 즉시 반영되도록 변경
    //  const [authUser, setAuthUser] = useState(user);
    //  const [authLoading, setAuthLoading] = useState(loading);

    //  useEffect(() => {
    //      setAuthUser(user);
    //      setAuthLoading(loading)
    //      console.log("🔥 로그인 정보 업데이트:", user);
    //  }, [user, loading]); // Redux 상태가 변경될 때 `authUser` 업데이트

    const router = useRouter();
    const dispatch = useDispatch();

    const onClickLogOut = async () => {
        const result = await handleLogOut();

        if (!result.success) {
            console.error("로그아웃 실패:", result.message);
        } else {
            // ✅ 로그아웃 성공 시, 로그인 페이지로 리디렉션
            dispatch(logout());
            router.replace("/user/login");
        }

    }

    return (
        <Grid container className={"text-white text-3xl text-bold"} >
            {
               loading ? (
                <Typography component={"span"} variant="h4" className="text_link_color_only" onClick={onClickLogOut}>
                    로딩 중...
                </Typography>
            ) : user ? (
                <Typography component={"span"} variant="h4" className="text_link_color textLinkHoverCursor" onClick={onClickLogOut}>
                    로그아웃
                </Typography>
            ) : (
                <Link href="/user/login" underline="none">
                    <Typography component={"span"} variant="h4" className="text_link_color">
                        로그인
                    </Typography>
                </Link>
            )
            }
            
        </Grid>
    )
}
