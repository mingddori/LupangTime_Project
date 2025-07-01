"use client";
import { Grid2 as Grid, Button, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,} from "@mui/material";

export default function NBGamePlay( props ) {
    
    const { roomInfo } = props;
    
    return (
        <Grid container gap={"10px"} direction={"column"}
            sx={{ height: "100%", backgroundColor: "darkgreen",
                padding: {
                    xs :"20px",
                    xl :"20px 100px 20px 100px"
                }
            }}
        >
            
            {/* 방 정보 부분 */}
            <Grid size={12} sx={{ height: "50px", backgroundColor: "pink", justifyContent: "center", alignItems: "center" }}>
                <Grid container direction={"row"} sx={{ height: "100%", justifyContent: "space-between", alignItems: "center" }}>
                    {/* 방 번호 */}
                    <Grid container size={2} sx={{ backgroundColor: "lightblue", justifyContent: "center", alignItems: "center" }}>
                        <Typography variant="h6" sx={{ color: "black" }}>
                            방 번호 : {roomInfo}
                        </Typography>
                    </Grid>

                    {/* 준비 버튼 */}
                    <Grid size={2} sx={{ backgroundColor: "lightblue", justifyContent: "center", alignItems: "center" }}>
                        <Button variant="contained" color="primary" sx={{ height: "100%", width: "100%" }}>
                            준비
                        </Button>
                    </Grid>

                    {/* 나가기 버튼 */}
                    <Grid size={2} sx={{ backgroundColor: "lightblue", justifyContent: "center", alignItems: "center" }}>
                        <Button variant="contained" color="primary" sx={{ height: "100%", width: "100%" }} href={`/game/num_baseball/players/rooms`}>
                            나가기
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

            {/* 게임 부분 */}
            <Grid container size={12} gap={"10px"} direction={"column"} alignItems={"center"} justifyContent={"center"} sx={{ flex:"1", backgroundColor: "pink"}}>
                {/* 상대편 영역*/}
                <Grid container size={12} sx={{height: "30%", backgroundColor: "lightblue"}}>
                    <Grid>
                        dd
                    </Grid>
                </Grid>

                {/* 내 영역 */}
                <Grid container size={12} direction={"column"} sx={{height: "65%", backgroundColor: "lightblue"}}>
                    
                    {/* 게임 help */}
                    <Grid container direction={"row"} size={12} justifyContent={"flex-end"} sx={{height: "30px", background:"skyblue", alignItems: "center"}}>
                        <Grid size={1} sx={{backgroundColor: "lightcoral", justifyContent: "center", alignItems: "center"}}>
                            물음표 영역
                        </Grid>
                    </Grid>
                    
                    {/* 게임 결과 영역 */}
                    <Grid container size={12} sx={{flex : "1", background:"plum", justifyContent: "center", alignItems: "flex-start"}}>
                        <TableContainer component={Paper} sx={{flex: "1", width: "100%", maxHeight: "100%"}}>
                            <Table>
                                <TableHead>
                                    <TableRow sx={{ height: "10px" }}>
                                        <TableCell colSpan={5} sx={{p:0}}>시도</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>시도</TableCell>
                                        <TableCell>공격 숫자</TableCell>
                                        <TableCell colSpan={3} sx={{textAlign:"center"}}>결과</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {/* 여기에 게임 결과 데이터를 매핑하여 표시 */}
                                    {/* 예시 데이터 */}
                                    {[1, 2, 3, 4, 5, 6, 7].map((attempt) => (
                                        <TableRow key={attempt}>
                                            <TableCell>{attempt}</TableCell>
                                            <TableCell>1234</TableCell>
                                            <TableCell>1B</TableCell>
                                            <TableCell>2S</TableCell>
                                            <TableCell>Out</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        
                    </Grid>
                    
                    {/* 채팅 영역 */}
                    <Grid container size={12} direction={"row"} sx={{height : "50px",  background:"khaki", justifyContent: "center", alignItems: "center"}}>
                        {/* 입력 영역 */}
                        <Grid>
                            입력란
                        </Grid>
                        {/* 공격 버튼 */}
                        <Grid>
                            공격
                        </Grid>
                    </Grid>
                </Grid>
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