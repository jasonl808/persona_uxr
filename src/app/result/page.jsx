'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef, forwardRef } from 'react'
import agentFlows from './agentflows'

// --- IMAGE IMPORTS ---
import root from '@/images/helium/root.png'
import settings from '@/images/helium/settings.png'
import settings_scrolled from '@/images/helium/settings_scrolled.png'
import sim_settings from '@/images/helium/sim_settings.png'
import sim_settings_next from '@/images/helium/sim_settings_next.png'
import fine_print from '@/images/helium/fine_print.png'
import mapping_intro_enabled from '@/images/helium/mapping_intro_enabled.png'
import mapping_intro_disabled from '@/images/helium/mapping_intro_disabled.png'
import mapping_enabled from '@/images/helium/mapping_enabled.png'
import mapping_disabled from '@/images/helium/mapping_disabled.png'

const imageMap = {
  'root.png': root,
  'settings.png': settings,
  'settings_scrolled.png': settings_scrolled,
  'sim_settings.png': sim_settings,
  'fine_print.png': fine_print,
  'sim_settings_next.png': sim_settings_next,
  'mapping_intro_enabled.png': mapping_intro_enabled,
  'mapping_intro_disabled.png': mapping_intro_disabled,
  'mapping_enabled.png': mapping_enabled,
  'mapping_disabled.png': mapping_disabled,
}
const navigation = [
  { id: 1, name: 'Helium Mobile Discovery Mapping', href: '#', current: true },
  { id: 2, name: 'Q2 Onboarding Flow Analysis', href: '#', current: false },
]

// --- HELPER & UI COMPONENTS ---
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function SidebarLogo(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 135 40" {...props}>
      {' '}
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
      </g>{' '}
      <text
        x="48"
        y="28"
        fontFamily="Arial, sans-serif"
        fontSize="22"
        fontWeight="bold"
        fill="#FFFFFF"
      >
        Auri
      </text>{' '}
    </svg>
  )
}
const Arrow = () => (
  <svg
    width="60"
    height="24"
    viewBox="0 0 60 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-400"
  >
    {' '}
    <path
      d="M5 12H55"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />{' '}
    <path
      d="M48 5L55 12L48 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />{' '}
  </svg>
)
const CheckCircleIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.06-1.06L10.5 12.94l-1.72-1.72a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l4.5-4.5z"
      clipRule="evenodd"
    />
  </svg>
)
const ExclamationTriangleIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
      clipRule="evenodd"
    />
  </svg>
)
const XCircleIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
      clipRule="evenodd"
    />
  </svg>
)

function ThoughtBubble({ text }) {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      className="w-48 cursor-pointer rounded-lg border bg-gray-50 p-3 shadow-sm transition-all duration-300 hover:bg-gray-100"
    >
      <p
        className={classNames(
          'font-mono text-xs text-gray-700',
          !isExpanded && 'line-clamp-3',
        )}
      >
        {text}
      </p>
    </div>
  )
}
function FinalState({ state, reason }) {
  const config = {
    success: {
      title: 'Success',
      Icon: CheckCircleIcon,
      bg: 'bg-green-50',
      border: 'border-green-300',
      text: 'text-green-800',
      iconText: 'text-green-500',
    },
    'semi-success': {
      title: 'Semi-Success',
      Icon: ExclamationTriangleIcon,
      bg: 'bg-amber-50',
      border: 'border-amber-300',
      text: 'text-amber-800',
      iconText: 'text-amber-500',
    },
    failed: {
      title: 'Failed',
      Icon: XCircleIcon,
      bg: 'bg-red-50',
      border: 'border-red-300',
      text: 'text-red-800',
      iconText: 'text-red-500',
    },
  }[state]
  return (
    <div
      className={classNames(
        'flex h-full w-48 flex-shrink-0 flex-col items-center justify-center rounded-lg border-2 p-4 text-center',
        config.bg,
        config.border,
      )}
    >
      {' '}
      <config.Icon className={classNames('h-10 w-10', config.iconText)} />{' '}
      <h3 className={classNames('mt-2 text-lg font-bold', config.text)}>
        {config.title}
      </h3>{' '}
      <p className={classNames('mt-1 text-xs', config.text)}>{reason}</p>{' '}
    </div>
  )
}
function StateTag({ state }) {
  const config = {
    success: { title: 'Success', bg: 'bg-green-100', text: 'text-green-700' },
    'semi-success': {
      title: 'Semi-Success',
      bg: 'bg-amber-100',
      text: 'text-amber-700',
    },
    failed: { title: 'Failed', bg: 'bg-red-100', text: 'text-red-700' },
  }[state]
  if (!config) return null
  return (
    <span
      className={classNames(
        'inline-flex items-center rounded-md px-2 py-1 text-sm font-medium',
        config.bg,
        config.text,
      )}
    >
      {' '}
      {config.title}{' '}
    </span>
  )
}

// --- MINIMAP COMPONENT (NOW USES forwardRef) ---
const MinimapScrollbar = forwardRef(function MinimapScrollbar(
  { agentFlows, highlightTop, highlightHeight },
  ref,
) {
  const stateColorMap = {
    success: 'bg-green-500',
    'semi-success': 'bg-amber-500',
    failed: 'bg-red-500',
  }

  return (
    <div className="relative h-full w-full">
      {/* The ref is now attached to this inner container holding the visual elements */}
      <div ref={ref} className="space-y-2">
        {agentFlows.map((agent, agentIndex) => (
          <div key={`minimap-${agent.id}`}>
            <div className="flex flex-wrap items-center gap-0.5">
              {agent.flow.map((step, index) => {
                const isLastStep = index === agent.flow.length - 1
                const finalStateColor = isLastStep
                  ? stateColorMap[step.state]
                  : 'bg-slate-300'
                return (
                  <div
                    key={`minimap-step-${agent.id}-${index}`}
                    className="flex items-center gap-0.5"
                  >
                    <div
                      className={classNames(
                        'h-3 w-2 flex-shrink-0 rounded-sm border border-slate-400',
                        finalStateColor,
                      )}
                    />
                    {!isLastStep && (
                      <div className="h-px w-1 flex-shrink-0 bg-slate-400" />
                    )}
                  </div>
                )
              })}
            </div>
            {agentIndex < agentFlows.length - 1 && (
              <hr className="mt-2 border-slate-300" />
            )}
          </div>
        ))}
      </div>

      {/* Dynamic highlight box, positioned absolutely. Its position is calculated relative to the parent. */}
      <div
        className="pointer-events-none absolute left-0 top-0 w-full rounded-md border-2 border-blue-500 bg-blue-500/20"
        style={{
          transform: `translateY(${highlightTop}px)`,
          height: `${highlightHeight}px`,
          transition: 'transform 50ms ease-out, height 50ms ease-out',
        }}
      />
    </div>
  )
})

// --- MAIN PAGE COMPONENT ---
export default function ResultsPage() {
  const scrollContainerRef = useRef(null)
  const minimapContentRef = useRef(null) // Ref for the minimap's inner content
  const [highlightStyle, setHighlightStyle] = useState({ top: 0, height: 100 })

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    const minimapContent = minimapContentRef.current // Use the ref for the visual elements

    const handleScroll = () => {
      // Guard clause to prevent errors if elements aren't rendered yet
      if (!scrollContainer || !minimapContent) return

      const { scrollTop, scrollHeight, clientHeight } = scrollContainer
      // ***FIX***: The track height is the height of the actual minimap content, not the full column.
      const minimapTrackHeight = minimapContent.offsetHeight

      // Prevent division by zero or incorrect calculations if content isn't scrollable
      if (scrollHeight <= clientHeight) {
        setHighlightStyle({ top: 0, height: minimapTrackHeight })
        return
      }

      const highlightHeight = (clientHeight / scrollHeight) * minimapTrackHeight
      const highlightTop = (scrollTop / scrollHeight) * minimapTrackHeight

      setHighlightStyle({ top: highlightTop, height: highlightHeight })
    }

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, {
        passive: true,
      })
    }

    // ResizeObserver correctly triggers a re-calculation if the container size changes
    const resizeObserver = new ResizeObserver(handleScroll)
    if (scrollContainer) {
      resizeObserver.observe(scrollContainer)
    }

    // Initial calculation on mount
    handleScroll()

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll)
        resizeObserver.unobserve(scrollContainer)
      }
    }
  }, []) // Empty dependency array ensures this runs only on mount and unmount

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="hidden w-72 flex-col bg-gray-900 text-white lg:flex">
        <div className="flex h-16 shrink-0 items-center px-6">
          <Link href="/result" aria-label="Home">
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
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </aside>

      <div className="flex flex-1 overflow-hidden">
        {/* Main Content Area (Scrollable) */}
        <main
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto p-6 sm:p-8 lg:p-12"
        >
          <div className="mx-auto max-w-7xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Results: Helium Mobile Discovery Mapping
            </h1>
            <p className="mt-2 text-base text-gray-600">
              Review the detailed step-by-step user flows and thought processes
              from each AI agent.
            </p>
            <div className="mt-10 space-y-16">
              {agentFlows.map((agent) => {
                const finalState = agent.flow[agent.flow.length - 1]?.state
                return (
                  <div key={agent.id}>
                    <div className="flex items-center gap-x-3">
                      <h2 className="text-xl font-bold text-gray-900">
                        {agent.name}
                      </h2>
                      <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-sm font-medium text-gray-600">
                        {agent.persona}
                      </span>
                      {finalState && <StateTag state={finalState} />}
                    </div>
                    <div className="mt-4 flex items-center space-x-4 overflow-x-auto pb-4">
                      {agent.flow.map((step, index) => (
                        <div
                          key={index}
                          className="flex h-full items-center space-x-4"
                        >
                          {step.state ? (
                            <FinalState
                              state={step.state}
                              reason={step.reason}
                            />
                          ) : (
                            <div className="w-48 flex-shrink-0">
                              <Image
                                src={imageMap[step.screenshot]}
                                alt={`Screenshot of ${step.screenshot}`}
                                width={200}
                                height={400}
                                className="rounded-lg border-2 border-gray-300 object-contain shadow-md"
                                unoptimized
                              />
                            </div>
                          )}
                          {index < agent.flow.length - 1 &&
                            !agent.flow[index + 1].state && (
                              <div className="flex flex-shrink-0 flex-col items-center">
                                <ThoughtBubble text={step.thought} />
                                <Arrow />
                              </div>
                            )}
                          {index < agent.flow.length - 1 &&
                            agent.flow[index + 1].state && <Arrow />}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
              <div className="pt-8 text-center">
                <button
                  type="button"
                  className="inline-flex items-center gap-x-2 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  See More Agent Results
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a.75.75 0 01.75.75v6.638l1.96-2.158a.75.75 0 111.08 1.04l-3.25 3.5a.75.75 0 01-1.08 0l-3.25-3.5a.75.75 0 111.08-1.04l1.96 2.158V5.75A.75.75 0 0110 5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Minimap Scrollbar Area (Fixed) */}
        <div className="relative hidden w-40 flex-shrink-0 p-4 lg:block">
          {/* The new ref is passed to the component here */}
          <MinimapScrollbar
            ref={minimapContentRef}
            agentFlows={agentFlows}
            highlightTop={highlightStyle.top}
            highlightHeight={highlightStyle.height}
          />
        </div>
      </div>
    </div>
  )
}
