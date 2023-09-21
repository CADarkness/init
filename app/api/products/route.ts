import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { connect } from "mongoose"

interface RequestContext {

}


export async function GET(request: NextRequest, ctx: RequestContext) {
    await connect('mongodb://localhost:27017')
    return NextResponse.json({ data: "Hello world" })
}