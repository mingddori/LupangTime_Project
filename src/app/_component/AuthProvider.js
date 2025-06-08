"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, logout, setLoading } from "@/store/authSlice";
import { createClient } from "@/db/supabaseClient";

export default function AuthProvider({ children }) {
    const supabase = createClient();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchSession = async () => {
            dispatch(setLoading(true));

            // ✅ 현재 세션 가져오기
            const { data: { session }, error } = await supabase.auth.getSession();
            console.log("🔥 로그인 정보 확인:", session);


            if (error) {
                console.error("Error fetching session:", error.message);
            }

            if (session?.user) {
                dispatch(setUser(session.user));
            } else {
                dispatch(logout());
            }

            dispatch(setLoading(false));
        };

        fetchSession();

        // ✅ 로그인 상태 변경 감지
        const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
            console.log("🔄 Auth Change Event:", event, "Session:", session);

            dispatch(setLoading(true));

            if (session?.user) {
                dispatch(setUser(session.user));
            } else {
                dispatch(logout());
            }

            dispatch(setLoading(false));
        });

        return () => {
            authListener?.subscription?.unsubscribe();
        };
    }, [dispatch, supabase.auth]);

    return children;
}
