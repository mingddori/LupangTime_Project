"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, logout, setLoading } from "@/store/authSlice";
import { createClient } from "@/db/supabaseClient";

export default function AuthProvider({ children }) {
    const supabase = createClient();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUser = async () => {
            dispatch(setLoading(true)); // ✅ 로딩 시작

            // ✅ 현재 로그인된 유저 확인
            const { data: { user }, error } = await supabase.auth.getUser();

            if (error) {
                console.error("Error fetching user:", error.message);
            }

            dispatch(setUser(user)); // ✅ Redux 상태 업데이트
            dispatch(setLoading(false)); // ✅ 로딩 완료
        };

        fetchUser();

        // ✅ 로그인 상태 변경 감지
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            if (session?.user) {
                dispatch(setUser(session.user));
            } else {
                dispatch(logout());
            }
        });

        // ✅ useEffect 클린업 함수 (구독 해제)
        return () => {
            authListener.subscription.unsubscribe();
        };
    }, [dispatch, supabase]);

    return children;
}
