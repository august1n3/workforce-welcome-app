import { NextResponse, type NextRequest } from 'next/server';
import { checkAuthentication, getUserID } from './services/Authentication/fireAuth';


export function middleware(request: NextRequest, respone: NextResponse) {

 
    if (request.nextUrl.pathname.startsWith('/registernewemployer')) {
       
        return NextResponse.rewrite(new URL('/', request.url))
    }
    
    else if(false){
        return NextResponse.redirect("https://workforce-workfrce.vercel.app")
    }
    
}

