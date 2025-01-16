import API_URL from "@/API_URL";

import { Button, Grid2 as Grid, Stack, Typography } from "@mui/material";

export default async function NumBaseballPage() {

    return (
        <Grid container size={12} spacing={{ xs: 5, md: 10, xl: 10 }} sx={{ 
            height: "100%", backgroundColor: "green", justifyContent: "center", alignItems: "center", overflow: "auto", padding: "100px"
        }}>
            <Stack sx={{ height: "300px", width: "300px", backgroundColor: "darkred", justifyContent: "center", alignItems: "center" }}>
                <Button variant={"contained"} sx={{ flex: 1, width: "100%" }} href={`/game/num_baseball/solo`}>
                    <Typography variant={"h4"}>혼자하기</Typography>
                </Button>
            </Stack>
            <Stack sx={{ height: "300px", width: "300px", backgroundColor: "darkred", justifyContent: "center", alignItems: "center" }}>
                <Button variant={"contained"} sx={{ flex: 1, width: "100%" }} href={`/game/num_baseball/rooms`}>
                    <Typography variant={"h4"}>둘이하기</Typography>
                </Button>
            </Stack>
            
        </Grid>
    )
}