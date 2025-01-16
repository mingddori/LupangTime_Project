import { Grid2 as Grid, Link } from "@mui/material";

export default function MenuBar() {
    return (
        <Grid container direction={"row"} spacing={"1px"} sx={{ height: "100%" }}>
            <Grid className={"text-white text-xl text-bold"} size={2} sx={{ minWidth: "130px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "blue", marginLeft: "50px" }}>
                <Link href="/game" className={["text-white", "link_no_underline"].join(" ")}>
                    <h1>쉬는 시간</h1>
                </Link>
            </Grid>
            <Grid className={"text-white text-xl text-bold"} size={2} sx={{ minWidth: "130px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "blue", marginLeft: "50px" }}>
                <Link href="/game" className={["text-white", "link_no_underline"].join(" ")}>
                    <h3>행운 시험</h3>
                </Link>
            </Grid>
        </Grid>
    );
}