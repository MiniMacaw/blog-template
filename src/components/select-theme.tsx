'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeList = ['light', 'dark', 'pink', 'contrast']

const SelectTheme = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <div>
      <label htmlFor="theme-select" className="sr-only mr-2">
        Choose theme:
      </label>
      <select
        name="theme"
        id="theme-select"
        className="bg-white text-gray-800 border-gray-800 border py-1 px-3"
        onChange={(e) => setTheme(e.currentTarget.value)}
        value={theme}
      >
        <option value="system">System</option>
        {ThemeList.map((t) => (
          <option key={t.toLowerCase()} value={t.toLowerCase()}>
            {t}
          </option>
        ))}
      </select>
    </div>
  )
}

export { SelectTheme }

