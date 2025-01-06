import { Grid2 as Grid } from "@mui/material"
import MenuBar from "./_component/MenuBar"

export default function ContentsLayout({ children }) {
    return (
        <Grid container direction={"column"} sx={{height : "100%", backgroundColor : "cyan"}}>
            <Grid xs={12} sx={{height : "50px", backgroundColor : "white"}}>
                <MenuBar />
            </Grid>
            <Grid xs={12} sx={{flexGrow : 1, backgroundColor : "pink"}}>
                {children}
            </Grid>
        </Grid>
    )
}