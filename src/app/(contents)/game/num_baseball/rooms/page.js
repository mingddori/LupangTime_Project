import API_URL from "@/API_URL";

import { Grid2 as Grid, } from "@mui/material";
import GameRoomList from "../_component/GameRoomList";

export default async function NumBaseballRoomPage() {

    return (
        <Grid container size={12} spacing={2} direction={"column"} sx={{ height: "100%", backgroundColor: "darkgreen", padding: "20px 100px 20px 100px" }}>

            {/* 입장 밑 생성, 새로고침 */}
            <Grid size={12} sx={{ height: "80px", backgroundColor: "pink", justifyContent: "center", alignItems: "center" }}>

            </Grid>

            {/* 방 목록 */}
            <Grid size={12} sx={{ flex : 1, backgroundColor: "yellow", justifyContent: "center", alignItems: "center", overflow: "auto" }}>
                <GameRoomList />
            </Grid>


        </Grid>
    )
}