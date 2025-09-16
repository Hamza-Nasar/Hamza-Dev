import { NextResponse } from 'next/server'
import prisma from '../../../lib/prisma' // route.js is at app/api/contact/route.js

export async function POST(req) {
    try {
        const body = await req.json()
        // basic validation
        if (!body.name || !body.email || !body.content) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
        }
        const saved = await prisma.message.create({
            data: {
                name: body.name,
                email: body.email,
                content: body.content,
            }
        })
        return NextResponse.json({ ok: true, id: saved.id })
    } catch (err) {
        console.error(err)
        return NextResponse.json({ error: 'Server error' }, { status: 500 })
    }
}
