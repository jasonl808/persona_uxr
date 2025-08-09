import Link from 'next/link'
import { Button } from '@/components/Button'
import { TextField, TextareaField } from '@/components/Fields'

export const metadata = {
  title: 'Dashboard - Create Research',
}

// A new logo component specifically for the dark sidebar with white text
function SidebarLogo(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 135 40" {...props}>
      {/* Icon: Magnifying glass with AI neural net inside (from previous step) */}
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
          {' '}
          {/* Changed fill for visibility */}
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
      {/* Logo Text: "Insight" in white */}
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

// Dummy data for past research projects - none are 'current' by default
const pastResearch = [
  { id: 1, name: 'Q2 Onboarding Flow Analysis', href: '#' },
  { id: 2, name: 'New Checkout Experience Test', href: '#' },
  { id: 3, name: 'Settings Page Usability', href: '#' },
]

// Helper to conditionally apply classes
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// Icon for the "Create New App" title
const CreateIcon = () => (
  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gray-200">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-600"
    >
      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z" />
    </svg>
  </div>
)

// Icon for the upload dropzone
const UploadIcon = () => (
  <svg
    className="mx-auto h-12 w-12 text-gray-400"
    stroke="currentColor"
    fill="none"
    viewBox="0 0 48 48"
    aria-hidden="true"
  >
    <path
      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Left Navigation Sidebar */}
      <aside className="hidden w-72 flex-col bg-gray-900 text-white lg:flex">
        <div className="flex h-16 shrink-0 items-center px-6">
          <Link href="/dashboard" aria-label="Home">
            <SidebarLogo className="h-8 w-auto" />
          </Link>
        </div>
        <div className="flex flex-1 flex-col overflow-y-auto">
          <nav className="flex-1 space-y-6 p-4">
            {/* "New App" button, styled as a link */}
            <Link
              href="#"
              className="group flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
              <span>New App</span>
            </Link>

            {/* Past Research List */}
            <div>
              <h3 className="px-3 text-xs font-semibold uppercase text-gray-400">
                Your Research
              </h3>
              <div className="mt-2 space-y-1">
                {pastResearch.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-gray-50 p-6 sm:p-8 lg:p-12">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-x-4">
            <CreateIcon />
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                Test New App
              </h1>
              <p className="mt-1 text-base text-gray-600">
                Define your project and upload your app binary to begin the
                automated user analysis.
              </p>
            </div>
          </div>

          <form action="/progress" method="POST" className="mt-10 space-y-8">
            {/* Project Details Section */}
            <div className="space-y-6 rounded-lg border border-gray-200 bg-white p-6">
              <div>
                <TextField
                  label="Project Name"
                  name="project_name"
                  id="project_name"
                  placeholder="e.g., Q3 Checkout Flow Analysis"
                  required
                />
              </div>
              <div>
                <TextareaField
                  label="Description (Optional)"
                  name="description"
                  id="description"
                  placeholder="Describe the goals of this research, what user flows to focus on, or specific questions you want answered."
                  rows={4}
                />
              </div>
            </div>

            {/* Upload Box Section */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Upload App Binary
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <UploadIcon />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    .IPA or .APK up to 500MB
                  </p>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end gap-x-4">
              <Button href="#" variant="outline">
                Cancel
              </Button>
              <Button type="submit" variant="solid">
                <span href="/progress">Start Research →</span>
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
