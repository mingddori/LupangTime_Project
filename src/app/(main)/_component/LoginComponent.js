"use client";
import { Grid2 as Grid } from "@mui/material";

export default function LoginComponent() {
    return (
        <Grid container direction={"column"} size={12} sx={{ height: "100%", background: "#468243" }}>
            <Grid sx={{ height: "100px", backgroundColor: "darkred" }}>
                fff
            </Grid>
            <Grid sx={{ flex : 1, backgroundColor: "darkblue" }}>
                123
            </Grid>
        </Grid>
    )
}