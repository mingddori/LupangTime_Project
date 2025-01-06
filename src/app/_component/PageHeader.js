import { Grid2 as Grid, Link } from "@mui/material";

export default function PageHeader() {
    return (
        <Grid container direction={"row"} sx={{height : "100%"}}>
            <Grid className={"text-white text-3xl text-bold"} size={2} sx={{ minWidth : "130px", display : "flex",  justifyContent : "center", alignItems : "center", marginLeft :"50px" }}>
                <Link href="/home" className={["text_link_color", "link_no_underline"].join(" ")}>
                    <h1>루팡타임</h1>
                </Link>
            </Grid>
        </Grid>
    );
}