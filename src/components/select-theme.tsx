'use client'

import { useTheme } from 'next-themes'

const ThemeList = ['light', 'dark', 'pink']

const SelectTheme = () => {
  const { theme, setTheme } = useTheme()

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

