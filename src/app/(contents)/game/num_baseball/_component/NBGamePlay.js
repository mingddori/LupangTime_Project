"use client";
import { Grid2 as Grid, Stack, Button, Typography } from "@mui/material";

export default function NBGamePlay( { params } ) {
    
    
    return (
        <Grid container direction={"column"} sx={{ height: "100%", backgroundColor: "darkgreen", padding: "20px 100px 20px 100px" }}>
            <Grid size={12} sx={{ height: "50px", backgroundColor: "pink", justifyContent: "center", alignItems: "center" }}>
                {/* 나가기 버튼 */}
                <Grid container direction={"row"} sx={{ height: "100%", justifyContent: "space-between", alignItems: "center" }}>
                    {/* 방 번호 */}
                    <Grid size={2} sx={{ backgroundColor: "lightblue", justifyContent: "center", alignItems: "center" }}>
                        <Typography variant="h6" sx={{ color: "black" }}>
                            방 번호 : {params.room_num}
                        </Typography>
                    </Grid>
                    <Grid size={2} sx={{ backgroundColor: "lightblue", justifyContent: "center", alignItems: "center" }}>
                        <Button variant="contained" color="primary" sx={{ height: "100%", width: "100%" }} href={`/game/num_baseball/players/rooms`}>
                            나가기
                        </Button>
                    </Grid>
                </Grid>

            </Grid>

            <Grid size={12} sx={{ backgroundColor: "pink", justifyContent: "center", alignItems: "center" }}>
            </Grid>
        </Grid>
    );
}

// function getResult(answer, guess) {
//     let strike = 0;
//     let ball = 0;

//     for (let i = 0; i < answer.length; i++) {
//         if (answer[i] === guess[i]) {
//             strike++;
//         } else if (guess.includes(answer[i])) {
//             ball++;
//         }
//     }

//     return { strike, ball };
// }