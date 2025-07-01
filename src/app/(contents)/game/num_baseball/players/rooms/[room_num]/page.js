import { Grid2 as Grid, } from "@mui/material";
import NBGamePlay from "@/app/(contents)/game/num_baseball/_component/NBGamePlay";

export default function NumBaseballRoomPage( { params } ) {
    return(
        <Grid container direction={"column"} sx={{ height: "100%", backgroundColor: "darkgreen" }}>
            <NBGamePlay roomInfo={params.room_num} />
        </Grid>
    );
}