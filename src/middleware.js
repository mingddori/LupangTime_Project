import { NextResponse } from "next/server";

export function middleware(req) {
    const { pathname } = new URL(req.url);
    console.log(pathname);
}