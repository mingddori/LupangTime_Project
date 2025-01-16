import { Grid2 as Grid,} from "@mui/material";

import LoginComponent from "@/app/(main)/_component/LoginComponent";

export default function LoginPage() {
    return (
        <Grid container size={12} sx={{ height: "100%", background : "#265485", justifyContent: "center", alignItems: "center"}}>
            <Grid size={6} sx={{height:"90%", backgroundColor: "skyblue"}}>
                    <LoginComponent />
            </Grid>
        </Grid>
    )
}