import API_URL from "@/API_URL";

import { Button, Grid2 as Grid, Stack, Typography } from "@mui/material";

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

    const GameItemBox = ({game}) => {
        return (
            <Stack sx={{ height: "300px", width: "300px", backgroundColor: "darkred", justifyContent: "center", alignItems: "center" }}>
                    <Button variant={"contained"} sx={{ flex: 1, width: "100%" }} href={`game/${game.game_name_eng}`}>
                        <Typography variant={"h4"}>{game.game_name_kor}</Typography>
                    </Button>
            </Stack>
        )
    }

    return (
        <Grid container size={12} sx={{ height: "100%", display: "flex", flexDirection: "column", background : "black" }}>
            <Grid size={12} sx={{ height: "100%", display: "flex"}}>
                <Grid container size={12} direction={"row"} spacing={{xs : 5, md : 10, xl : 10}} sx={{
                        height: "100%", backgroundColor: "green", justifyContent: "center", alignItems: "center", overflow : "auto", padding : "100px"
                    }} 
                >
                    {
                        gameList.map((game, index) => {
                            return (
                                <GameItemBox game={game} key={index} />
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}