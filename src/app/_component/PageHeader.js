import { Grid2 as Grid, Link } from "@mui/material";

export default function PageHeader() {
    return (
        <Grid container direction={"row"} sx={{height : "100%", display : "flex", justifyContent : "space-between", alignItems : "center", margin : "0 50px 0 50px"}}>
            <Grid className={"text-white text-3xl text-bold"} size={2} sx={{minWidth : "130px", }}>
                <Link href="/home" className={["text_link_color", "link_no_underline"].join(" ")}>
                    <h1>루팡타임</h1>
                </Link>
            </Grid>
            <Grid className={"text-white text-3xl text-bold"} size={2} sx={{ minWidth : "130px",}}
            >
                <Link href="/login" className={["text_link_color", "link_no_underline"].join(" ")}>
                    <h1>로그인</h1>
                </Link>
            </Grid>
        </Grid>
    );
}