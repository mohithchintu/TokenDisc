import { createTweetSchema } from "@/app/schemas/validationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const validation = createTweetSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json(body, { status: 400 });
        }
        const newTweet = await prisma.tweet.create({
            data: {
                tweet: body.tweet,
                authorEmail: body.email,
            }
        });
        return NextResponse.json(newTweet, { status: 201 });
    } catch (error) {
        console.error("Error creating tweet:", error);
        return NextResponse.json({ message: error }, { status: 500 })
    }
}


export async function GET(request: NextRequest) {
    try {
        const tweets = await prisma.tweet.findMany();
        return NextResponse.json(tweets, { status: 200 });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: error }, { status: 500 });
    }
}