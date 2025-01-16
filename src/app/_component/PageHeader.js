import { Grid2 as Grid, Link, Stack, Typography } from "@mui/material";

export default function PageHeader() {
    return (
        <Grid container direction={"row"} sx={{ height: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", margin: "0 50px 0 50px" }}>
            <Grid className={"text-white text-3xl text-bold"} size={2} sx={{ minWidth: "130px", }}>
                <Link href="/home" underline="none">
                    <Typography component={"span"} variant="h4" className="text_link_color" >
                        루팡타임
                    </Typography>
                </Link>
            </Grid>
            <Grid className={"text-white text-3xl text-bold"} size={2} sx={{ minWidth: "130px", display:"flex", justifyContent: "flex-end"}}>
                <Link href="/login" underline="none">
                    <Typography component={"span"} variant="h4" className="text_link_color" >
                        로그인
                    </Typography>
                </Link>
            </Grid>
        </Grid>
    );
}