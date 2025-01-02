import { NextResponse } from "next/server";

export async function middleware(req) {
    const { pathname } = new URL(req.url);
    console.log(pathname);

    // root -> Root Page를 home으로 설정
    if(pathname === '/'){
        return NextResponse.redirect(new URL('/home', req.url));
    }
}