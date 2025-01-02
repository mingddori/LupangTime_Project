import { Grid2 as Grid } from "@mui/material";

export default function PageHeader() {
    return (
        <Grid container direction={"row"} style={{ height: "80px" }}>
            <Grid className={"text-white text-3xl text-bold"} size={2} sx={{ minWidth : "130px", display : "flex", alignItems : "center", backgroundColor: "blue", marginLeft :"50px" }}>
                <h1>루팡타임</h1>
            </Grid>
        </Grid>
    );
}