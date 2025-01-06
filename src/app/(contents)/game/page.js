import API_URL from "@/API_URL";

import { Grid2 as Grid, Stack } from "@mui/material";

export default async function GamePage() {

    const res = await fetch(API_URL + "/api/game/game_list", {
        method: "GET",
        headers: {
            "Pragma": "no-cache",
            "Cache-Control": "no-cache"
        },
        cache: "no-cache"
    })

    const gameListData = await res.json();
    const gameList = gameListData.message;


    return (
        <Grid container sx={{ height: "100%", display: "flex", flexDirection: "column", background : "brown" }}>
            <Grid size={12} sx={{ height: "100%", display: "flex"}}>
                <Stack direction={"row"} spacing={{xs : 5, md : 20, xl : 40}} sx={{ height: "100%", backgroundColor: "green", justifyContent: "center", alignItems: "center" }}>

                </Stack>
            </Grid>
        </Grid>
    )
}