"use client";

import { Grid2 as Grid, Stack, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { createClient } from "@/db/supabaseClient";
import getNumBaseballLevel from "@/app/_lib/GetNumBaseballLevel";

const getGameRoomList = async () => {
    const res = await fetch("/api/game/num_baseball/room_list");
    const roomListData = await res.json();
    return roomListData.message;
}

export default function GameRoomList(props) {

    const supabase = createClient();

    const [roomList, setRoomList] = useState([]);

    useEffect(() => {
        fetchGameRoom();
        const channel = listenForRoomListChange();

        return (
            () => { supabase.removeChannel(channel); }
        )
    }, [])

    const fetchGameRoom = async () => {
        try {
            const rooms = await getGameRoomList();
            setRoomList(rooms);
        }
        catch (e) {
            console.error("Fetch Error : ", e);
        }
    }

    const listenForRoomListChange = () => {
        const channel = supabase.channel('nb-rooms-all-channel')
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: 'nb_rooms' },
                (payload) => {
                    fetchGameRoom();
                }
            )
            .subscribe()

        return channel;
    }

    return (
        <Grid container spacing={1} direction={"row"} sx={{ height: "100%", alignContent: "flex-start", backgroundColor: "brown" }}>
            {
                roomList.map((room, index) => {
                    return (
                        <Grid key={index} size={4} sx={{ height: "100px", backgroundColor: "darkred", }}>
                            <Grid container direction={"row"} sx={{ height: "100%" }}>
                                <Grid container size={10}>
                                    <Grid container size={12} direction={"row"} sx={{ height: "50%", backgroundColor: "darkblue", justifyContent: "center", alignItems: "center" }}>
                                        <Grid size={3} sx={{ height: "100%", backgroundColor: "red" }}>
                                            <Typography className="text-bold text-3xl text-center content-center" sx={{ height: "100%" }}>
                                                {room.room_num}
                                            </Typography>
                                        </Grid>
                                        <Grid size={4} sx={{ height: "100%", backgroundColor: "blue", }}>
                                            <Typography className="text-bold text-3xl text-center content-center" sx={{ height: "100%" }}>
                                                {getNumBaseballLevel(room.game_level)}
                                            </Typography>
                                        </Grid>
                                        <Grid size={5} sx={{ height: "100%", backgroundColor: "yellow", }}>
                                            <Typography className="text-bold text-3xl text-center content-center" sx={{ height: "100%" }}>
                                                {room.participants[0].player}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid size={12} sx={{ height: "50%", backgroundColor: "green", justifyContent: "center", alignItems: "center" }}>
                                        <Typography className="text-bold text-3xl text-center content-center" sx={{ height: "100%" }}>
                                            {room.room_name}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid size={2} sx={{ height: "100%", backgroundColor: "darkblue", justifyContent: "center", alignItems: "center" }}>
                                    <Button variant="contained" color="primary" sx={{ height: "100%", width: "100%" }} href={`/game/num_baseball/play/${room.room_num}`}>
                                        입장
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                })
            }
        </Grid>
    )

}