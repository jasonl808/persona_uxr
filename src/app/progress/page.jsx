'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

// --- DATA & CONFIGURATION ---

// A logo component for the dark sidebar with white text
function SidebarLogo(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 135 40" {...props}>
      <g>
        <circle
          cx="20"
          cy="16"
          r="11"
          stroke="#2563EB"
          strokeWidth="3"
          fill="none"
        />
        <line
          x1="28"
          y1="25"
          x2="36"
          y2="33"
          stroke="#2563EB"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <g fill="#FFFFFF">
          <circle cx="16" cy="16" r="1.5" />
          <circle cx="24" cy="12" r="1.5" />
          <circle cx="24" cy="20" r="1.5" />
          <line
            x1="16.5"
            y1="16"
            x2="23.5"
            y2="12.5"
            stroke="#FFFFFF"
            strokeWidth="0.8"
          />
          <line
            x1="16.5"
            y1="16"
            x2="23.5"
            y2="19.5"
            stroke="#FFFFFF"
            strokeWidth="0.8"
          />
        </g>
      </g>
      <text
        x="48"
        y="28"
        fontFamily="Arial, sans-serif"
        fontSize="22"
        fontWeight="bold"
        fill="#FFFFFF"
      >
        Auri
      </text>
    </svg>
  )
}

// Data for the sidebar navigation, with the current page highlighted
const navigation = [
  { id: 1, name: 'Helium Mobile Discovery Mapping', href: '#', current: true },
  { id: 2, name: 'Q2 Onboarding Flow Analysis', href: '#', current: false },
  { id: 3, name: 'New Checkout Experience Test', href: '#', current: false },
  { id: 4, name: 'Settings Page Usability', href: '#', current: false },
]

// AI agent data with personas and speed multipliers
const agents = [
  { name: 'Agent 1', persona: 'Tech Savvy', speedMultiplier: 1.0 },
  { name: 'Agent 2', persona: 'Casual User', speedMultiplier: 1.15 },
  { name: 'Agent 3', persona: 'Power User', speedMultiplier: 1.2 },
  { name: 'Agent 4', persona: 'New Adopter', speedMultiplier: 0.95 },
  { name: 'Agent 5', persona: 'Skeptical User', speedMultiplier: 1.1 },
]

const TOTAL_DURATION_SECONDS = 60 // 1 hour

// --- HELPER FUNCTIONS ---
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = Math.floor(totalSeconds % 60)
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

// --- MAIN PAGE COMPONENT ---
export default function ResearchProgressPage() {
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedSeconds((prev) => {
        const newTime = prev + 1
        if (newTime >= TOTAL_DURATION_SECONDS) {
          clearInterval(timer)
          router.push('/result')
          return TOTAL_DURATION_SECONDS
        }
        return newTime
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [router])

  const overallProgress = (elapsedSeconds / TOTAL_DURATION_SECONDS) * 100

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Navigation Sidebar (Fixed) */}
      <aside className="hidden w-72 flex-col bg-gray-900 text-white lg:flex">
        <div className="flex h-16 shrink-0 items-center px-6">
          <Link href="/progress" aria-label="Home">
            <SidebarLogo className="h-8 w-auto" />
          </Link>
        </div>
        <div className="flex flex-1 flex-col overflow-y-auto">
          <nav className="flex-1 space-y-6 p-4">
            <Link
              href="/create-research"
              className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
              <span>New Research</span>
            </Link>
            <div>
              <h3 className="px-3 text-xs font-semibold uppercase text-gray-400">
                Your Research
              </h3>
              <div className="mt-2 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'group flex items-center rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.current && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mr-3 h-5 w-5 animate-spin"
                        style={{ animationDuration: '2s' }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M15.312 11.13c.24-1.213-.686-2.33-1.9-2.57a.75.75 0 00-.88.66c-.03.177.013.357.094.515a3.493 3.493 0 01-3.12 3.12c-.158.08-.338.125-.515.095a.75.75 0 00-.66.88c.24 1.214 1.358 2.14 2.57 1.9a4.99 4.99 0 004.42-4.6Z"
                          clipRule="evenodd"
                        />
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM6.983 5.433c.27.104.493.267.69.466A3.485 3.485 0 019.25 8.517.75.75 0 0010 7.75a.75.75 0 00-.75-.75 4.985 4.985 0 00-2.96 1.133.75.75 0 00.692 1.301z" />
                      </svg>
                    )}
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content Area (Scrollable) */}
      <main className="flex-1 overflow-y-auto p-6 sm:p-8 lg:p-12">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Analyzing "Helium Mobile Discovery Mapping"
          </h1>
          <p className="mt-2 text-base text-gray-600">
            AI agents are testing your app to uncover insights. You will be
            redirected automatically upon completion.
          </p>
          <div className="mt-10 space-y-4 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <div className="flex items-baseline justify-between">
              <h2 className="text-lg font-semibold text-gray-800">
                Overall Progress
              </h2>
              <span className="text-sm font-medium text-gray-500">
                Elapsed Time: {formatTime(elapsedSeconds)}
              </span>
            </div>
            <div className="h-4 w-full rounded-full bg-gray-200">
              <div
                className="h-4 rounded-full bg-blue-600 transition-all duration-1000 ease-linear"
                style={{ width: `${overallProgress}%` }}
              ></div>
            </div>
            <p className="text-right text-lg font-semibold text-gray-900">
              {Math.floor(overallProgress)}%
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800">
              Agent Activity
            </h3>
            <ul role="list" className="mt-4 space-y-5">
              {agents.map((agent) => {
                const agentProgress = Math.min(
                  100,
                  ((elapsedSeconds * agent.speedMultiplier) /
                    TOTAL_DURATION_SECONDS) *
                    100,
                )
                return (
                  <li
                    key={agent.name}
                    className="rounded-lg border border-gray-200 bg-white p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-800">
                          {agent.name}
                        </p>
                        <p className="text-sm text-gray-500">{agent.persona}</p>
                      </div>
                      <span className="font-medium text-gray-700">
                        {Math.floor(agentProgress)}%
                      </span>
                    </div>
                    <div className="mt-3 h-2.5 w-full rounded-full bg-gray-200">
                      <div
                        className="h-2.5 rounded-full bg-blue-500 transition-all duration-1000 ease-linear"
                        style={{ width: `${agentProgress}%` }}
                      ></div>
                    </div>
                  </li>
                )
              })}
              <li className="p-4 text-center text-sm text-gray-500">
                ... and 15 more agents are working in the background.
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
