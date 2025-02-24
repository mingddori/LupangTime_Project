"use client";

import { Grid2 as Grid, Link, Typography} from "@mui/material";
import { useSelector } from "react-redux";
import { handleLogOut } from "@/app/_lib/authAction";

export default function LoginInfoComponent() {

    const {user, loading} = useSelector((state) => state.auth);

    const onClickLogOut = async () => {
        const result = await handleLogOut();

        if(result.success){
// 여기부터 작성해야함
        }

    }

    return (
        <Grid container className={"text-white text-3xl text-bold"} >
            {
               loading ? (
                <Typography component={"span"} variant="h4" className="text_link_color" onClick={onClickLogOut}>
                    로딩 중...
                </Typography>
            ) : user ? (
                <Grid>로그아웃</Grid>
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
