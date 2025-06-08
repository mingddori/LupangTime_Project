import { NextResponse } from "next/server";


export async function middleware(req) {
    const { pathname } = new URL(req.url);
    console.log(pathname);

    // const token = 
    
//     // 허용된 경로 목록
//   const allowedPaths = [
//     "/", // 메인 페이지
//     "/about", // 예: 허용된 다른 페이지
//     "/contact", // 예: 허용된 다른 페이지
//   ];

//     // 요청 경로가 허용된 경로에 포함되지 않은 경우 메인 페이지로 리다이렉트
//   if (!allowedPaths.includes(pathname)) {
//     const url = new URL("/", request.url); // 메인 페이지 URL
//     return NextResponse.redirect(url);
//   }

    // root -> Root Page를 home으로 설정
    if(pathname === '/'){
        return NextResponse.redirect(new URL('/home', req.url));
    }

    // 로그인 되어 있지 않을 때는 로그인 페이지로 리다이렉트
    if(pathname.startsWith('/login')){
        return NextResponse.next();
    }


    return NextResponse.next();
}

export const config = {
    matcher : [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
        "/:path*"
    ]
}