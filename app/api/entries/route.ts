import { NextResponse } from "next/server"
import { entries } from "@/lib/data"

/**
 * @swagger
 * /api/entries:
 *   get:
 *     summary: Get all entries
 *     responses:
 *       200:
 *         description: List of entries
 */
export async function GET() {
  return NextResponse.json(entries)
}

/**
 * @swagger
 * /api/entries:
 *   post:
 *     summary: Create a new entry
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *     responses:
 *       201:
 *         description: Entry created
 */
export async function POST(request: Request) {
  const body = await request.json()

  const newEntry = {
    id: entries.length + 1,
    title: body.title
  }

  entries.push(newEntry)

  return NextResponse.json(newEntry, { status: 201 })
}