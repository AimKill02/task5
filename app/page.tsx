'use client'
import { useEffect, useState } from "react"

interface Entry {
  id: number
  title: string
}

export default function Page() {
  const [entries, setEntries] = useState<Entry[]>([])
  const [title, setTitle] = useState("")

  // get entries
  const fetchEntries = async () => {
    const res = await fetch("/api/entries")
    const data = await res.json()
    setEntries(data)
  }

  useEffect(() => {
    fetchEntries()
  }, [])

  // create entry
  const createEntry = async () => {
    await fetch("/api/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title })
    })

    setTitle("")
    fetchEntries()
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Entry List</h1>

      {/* Create Entry */}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New entry"
      />
      <button onClick={createEntry}>Add</button>

      {/* List Entries */}
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>{entry.title}</li>
        ))}
      </ul>
    </div>
  )
}