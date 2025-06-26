import { Grid2 as Grid, } from "@mui/material";
import NBGamePlay from "@/app/(contents)/game/num_baseball/_component/NBGamePlay";

export default function NumBaseballRoomPage( { params } ) {
    return(
        <Grid>
            <NBGamePlay roomInfo={} />
        </Grid>
    );
}