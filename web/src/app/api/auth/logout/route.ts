import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {


  const redirectURL = new URL('/', request.url) 
  //request.url contains the app URL
  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=; Path=/; max-age=0;`
    }
  })
}
