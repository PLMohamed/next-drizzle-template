import { NextRequest, NextResponse } from "next/server";


const AUTH_PAGES = [];
const AUTH_API = [];

const CONN_PAGES = [];
const CONN_API = [];

/**
 * @param {URL} url
 * @returns {boolean}
 */
const isAuthPage = (url) => AUTH_PAGES.some((page) => url.startsWith(page));
const isAuthApi = (url) => AUTH_API.some((api) => url.startsWith(api));
const isConnPage = (url) => CONN_PAGES.some((page) => url.startsWith(page));
const isConnApi = (url) => CONN_API.some((api) => url.startsWith(api));

/**
 * @param {NextRequest} request
 * @returns {NextResponse | Promise<NextResponse> }
 */
export default async function middleware(request) {
    const { url, nextUrl } = request;
    // const connected = await isConnected(request); // Replace with your own function
    const connected = false;

    if (isAuthPage(nextUrl.pathname) && connected === true)
        return NextResponse.redirect(new URL("/", url));

    if (isAuthApi(nextUrl.pathname) && connected === true)
        return new NextResponse(
            JSON.stringify({
                status: 401,
                message: "You are already connected",
            }),
            {
                status: 401,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

    if (isConnPage(nextUrl.pathname) && connected === false)
        return NextResponse.redirect(new URL("/login", url));

    if (isConnApi(nextUrl.pathname) && connected === false)
        return new NextResponse(
            JSON.stringify({
                status: 401,
                message: "You are not connected",
            }),
            {
                status: 401,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

    const response = NextResponse.next();

   

    return response;
}
