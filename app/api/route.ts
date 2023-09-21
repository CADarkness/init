import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import mongoose from "mongoose"

interface RequestContext {

}

/* eslint-disable no-var */
declare global {
    var country: string;
    function run(): void;
}

global.run = function() {
    console.log(`14, hello world`)
}

global.run()

// mongoose.connect('mongodb://127.0.0.1:27017/test')

