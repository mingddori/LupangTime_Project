"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, setSession, logout } from "@/store/authSlice";
import { createClient } from "@/db/supabaseClient";

export default function AuthProvider({ children }) {

    const supabase = createClient();
    const dispatch = useDispatch();

    useEffect(() =>{
        supabase.auth.getSession().then(({data : {session}}) => {
            if(session){
                dispatch(setSession(session));
                dispatch(setUser(session.user));
            }
        });

        const {data : listener} = supabase.auth.onAuthStateChange((event, session) => {
            if(session){
                dispatch(setSession(session));
                dispatch(setUser(session.user));
            }
            else{
                dispatch(logout());
            }
        }
    );
    }, [dispatch]);

    return children
}