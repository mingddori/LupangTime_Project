import { NextResponse } from "next/server";
import { createClient } from "@/db/supabaseServer";

export const dynamic = true;

export async function GET() {

    const supabase = await createClient();

    const {data, error} = await supabase.from('game').select("game_name_kor, game_name_eng, sort_rank").order('sort_rank', {ascending : true});

    if(error){
        console.error("Error Get Game List : ", error);
        return NextResponse.json({message : "Error Get Game List", error : error.message}, {status : 500});
    }

    try {
        return NextResponse.json({message : data}, {status : 200});
    }
    catch(error){
        console.error("Error Get Game List : ", error);
        return NextResponse.json({message : "Error Get Game List", error : error.message}, {status : 500});
    }
}