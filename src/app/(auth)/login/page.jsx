import Link from 'next/link'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'

export const metadata = {
  title: 'Sign In',
}

// Helper component for feature list items
function Feature({ icon, title, children }) {
  return (
    <li className="flex gap-x-4">
      <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gray-800/60">
        {icon}
      </div>
      <div>
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-gray-300">{children}</p>
      </div>
    </li>
  )
}

// SVG Icons for features
const ScaleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7 text-blue-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
    />
  </svg>
)

const PersonalityIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7 text-blue-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    />
  </svg>
)

const UploadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7 text-blue-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 16.5V9.75m0 0l-3.75 3.75M12 9.75l3.75 3.75M3 17.25V6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v10.5A2.25 2.25 0 0118.75 19.5H5.25A2.25 2.25 0 013 17.25z"
    />
  </svg>
)

export default function Login() {
  return (
    <div className="flex min-h-screen">
      {/* Left side: Feature showcase */}
      <div className="hidden flex-col justify-center bg-gray-900 p-12 text-white lg:flex lg:w-1/2">
        <div className="max-w-md">
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Unlock AI-Powered User Insights.
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Log in to deploy intelligent agents that test your app and deliver
            insights in minutes.
          </p>
          <ul role="list" className="mt-10 space-y-8">
            <Feature icon={<ScaleIcon />} title="Infinitely Scalable Agents">
              Test with 5, 10, or 100+ agents simultaneously to gather data at
              scale.
            </Feature>
            <Feature
              icon={<PersonalityIcon />}
              title="Diverse Backgrounds & Personalities"
            >
              Customize your user personas to uncover inconspicuous feedback.
            </Feature>
            <Feature icon={<UploadIcon />} title="One-Click Research">
              Simply upload your app binary and our AI agents will automatically
              start testing.
            </Feature>
          </ul>
        </div>
      </div>

      {/* Right side: Login form */}
      <div className="flex w-full flex-col justify-center bg-white px-6 py-12 lg:w-1/2 lg:px-8">
        <div className="mx-auto w-full max-w-sm">
          <Link href="/" aria-label="Home" className="inline-block">
            <Logo className="h-10 w-auto" />
          </Link>

          <h2 className="mt-10 text-2xl font-semibold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            Need an account?{' '}
            <Link
              href="mailto:sales@google.com"
              className="font-medium text-blue-600 hover:underline"
            >
              Contact Sales
            </Link>
          </p>

          <form
            action="/dashboard"
            method="POST"
            className="mt-10 grid grid-cols-1 gap-y-6"
          >
            <TextField
              label="Email address"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
            />
            <div>
              <Button type="submit" variant="solid" className="w-full">
                <span href="/dashboard">
                  Sign in <span aria-hidden="true">→</span>
                </span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
