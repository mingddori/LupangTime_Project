import "./globals.css";

export const metadata = {
    title: "루팡타임",
    description: "루팡타임은 직장인들의 휴식 시간을 위한 플랫폼입니다.",
    keywords: "루팡타임, 루팡, 월급루팡, 월급, 직장인, 직장, 내기, 숫자야구, 제비뽑기, 사다리타기, 복불복, 로또, 번호추첨, 쉬는시간",
    authors: [{ name: "리밍또리", email: "mingddory@naver.com" }],
    robots: {
        index: true,
        follow: true
    },
    openGraph: {
        title: "루팡타임",
        description: "루팡타임은 직장인들의 휴식 시간을 위한 플랫폼입니다.",
        // url: "이후 정함",
        type: "website"
    },
    verification: {
        // other: {
        //     // "naver-site-verification": "" 이후 발급,
        // },
        // google: 
        // "-LFLms_1KRhzMp882Uu5cbLQaz7IhRW0_bfbvO3toYo" 이후 발급,
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.ico",
    }
};

import MaterialTailwindThemeProvider from "@/app/_component/MaterialTailwindThemeProvider";
import ReduxProvider from "@/app/_component/ReduxProvider";
import AuthProvider from "@/app/_component/AuthProvider";
import { Grid2 as Grid } from "@mui/material";

import PageHeader from "@/app/_component/PageHeader";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="body" style={{ backgroundColor: "gray" }}>
                <ReduxProvider>
                    <AuthProvider>
                        <MaterialTailwindThemeProvider>
                            <Grid container direction={"column"} sx={{ height: "100vh" }}>
                                <Grid size={12} sx={{ height: "80px" }} >
                                    <PageHeader />
                                </Grid>
                                <Grid size={12} sx={{ backgroundColor: "green", flexGrow: 1, height: "calc(100% - 80px)" }}>
                                    {children}
                                </Grid>
                            </Grid>
                        </MaterialTailwindThemeProvider>
                    </AuthProvider>
                </ReduxProvider>
            </body>
        </html >
    );
}
