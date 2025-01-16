import { NextResponse } from "next/server";
import { createClient } from "@/db/supabaseServer";

export const dynamic = true;

export async function GET() {

    const supabase = await createClient();

    const {data, error} = await supabase.from('nb_rooms').select("room_id, room_num, room_name, game_level, participants").order('room_num', {ascending : true});

    if(error){
        console.error("Error Get Num Baseball Game Room List : ", error);
        return NextResponse.json({message : "Error Get Num Baseball Game Room List", error : error.message}, {status : 500});
    }

    try {
        return NextResponse.json({message : data}, {status : 200});
    }
    catch(error){
        console.error("Error Get Num Baseball Game Room List : ", error);
        return NextResponse.json({message : "Error Get Num Baseball Game Room List", error : error.message}, {status : 500});
    }
}