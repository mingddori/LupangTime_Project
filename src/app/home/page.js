import { Button, Grid2 as Grid, Paper, Stack, Typography } from "@mui/material";

export default function HomePage() {
    return (
        <Grid container sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <Stack direction={"row"} spacing={{xs : 5, md : 20, xl : 40}} sx={{ height: "100%", backgroundColor: "green", justifyContent: "center", alignItems: "center" }} >
                <Stack sx={{ height: "300px", width: "300px", backgroundColor: "darkred", justifyContent: "center", alignItems: "center" }}>
                    <Button variant={"contained"} sx={{ flex: 1, width: "100%" }} href="/game">
                        <Typography variant={"h4"}>쉬는 시간</Typography>
                    </Button>
                </Stack>
                <Stack sx={{ height: "300px", width: "300px", backgroundColor: "darkred", justifyContent: "center", alignItems: "center" }}>
                    <Button variant={"contained"} sx={{ flex: 1, width: "100%" }} href="/game">
                        <Typography variant={"h4"}>행운 시험</Typography>
                    </Button>
                </Stack>
            </Stack>
        </Grid>
    )
}