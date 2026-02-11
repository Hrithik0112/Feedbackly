import CopyBtn from "@/components/copy-btn";
import { ArrowLeft, Info } from "lucide-react";
import Link from "next/link";

const Page = async ({ params }: {
  params: Promise<{
    projectId: string
  }>
}) => {
  // Await the entire params object first
  const resolvedParams = await params;
  const projectId = resolvedParams.projectId;
  
  if (!projectId) return (<div>Invalid Project ID</div>);
  if (!process.env.WIDGET_URL) return (<div>Missing WIDGET_URL</div>);

  return (
    <div>

      <Link 
        href="/dashboard" 
        className="inline-flex items-center gap-2 mb-6 text-sm hover:text-primary transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Dashboard
      </Link>
      <h1 className="text-xl font-bold mb-2">Start Collecting Feedback</h1>
      <p className="text-lg text-secondary-foreground mb-6">Choose your integration method</p>

      <div className="space-y-8">
        {/* HTML/JavaScript Integration */}
        <div>
          <h2 className="text-lg font-semibold mb-2">HTML / JavaScript</h2>
          <div className="bg-blue-950 p-6 rounded-md relative">
            <code className="text-white whitespace-pre-wrap">
              {`<my-widget project-id="${projectId}"></my-widget>
<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
            </code>
            <CopyBtn text={`<my-widget project-id="${projectId}"></my-widget>\n<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`} />
          </div>
        </div>

        {/* React/Vite Integration */}
        <div>
          <h2 className="text-lg font-semibold mb-2">React / Vite</h2>
          <div className="bg-blue-950 p-6 rounded-md relative">
            <code className="text-white whitespace-pre-wrap">
              {`// Add this in your index.html or main entry file
<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>

// Use in any component
<my-widget project-id="${projectId}"></my-widget>`}
            </code>
            <CopyBtn text={`// Add this in your index.html or main entry file\n<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>\n\n// Use in any component\n<my-widget project-id="${projectId}"></my-widget>`} />
          </div>
        </div>

        {/* Next.js Integration */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Next.js (App Router)</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2 text-gray-300">
                Step 1: Create Widget Component
              </h3>
              <div className="bg-blue-950 p-6 rounded-md relative">
                <code className="text-white whitespace-pre-wrap text-sm">
                  {`"use client";

import Script from "next/script";

export default function FeedbackWidget({ projectId }: { projectId: string }) {
  return (
    <>
      <Script
        src="${process.env.WIDGET_URL}/widget.umd.js"
        strategy="afterInteractive"
      />
      <my-widget project-id={projectId}></my-widget>
    </>
  );
}`}
                </code>
                <CopyBtn 
                  text={`"use client";\n\nimport Script from "next/script";\n\nexport default function FeedbackWidget({ projectId }: { projectId: string }) {\n  return (\n    <>\n      <Script\n        src="${process.env.WIDGET_URL}/widget.umd.js"\n        strategy="afterInteractive"\n      />\n      <my-widget project-id={projectId}></my-widget>\n    </>\n  );\n}`} 
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2 text-gray-300">
                Step 2: Use in Your Page
              </h3>
              <div className="bg-blue-950 p-6 rounded-md relative">
                <code className="text-white whitespace-pre-wrap text-sm">
                  {`import FeedbackWidget from "@/components/FeedbackWidget";

export default function HomePage() {
  return (
    <div>
      <FeedbackWidget projectId="${projectId}" />
    </div>
  );
}`}
                </code>
                <CopyBtn 
                  text={`import FeedbackWidget from "@/components/FeedbackWidget";\n\nexport default function HomePage() {\n  return (\n    <div>\n      <FeedbackWidget projectId="${projectId}" />\n    </div>\n  );\n}`} 
                />
              </div>
            </div>

            <div className="flex items-start gap-2 p-4 bg-blue-100 rounded-md text-blue-800 shadow-md">
              <Info size={20} className="mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Alternative: Dynamic Import</p>
                <p className="mb-2">For client-only rendering (no SSR), use dynamic import:</p>
                <code className="block bg-blue-50 p-2 rounded text-xs mt-2 whitespace-pre-wrap">
                  {`"use client";

import dynamic from "next/dynamic";

const FeedbackWidget = dynamic(
  () => import("@/components/FeedbackWidget"),
  { ssr: false }
);

export default function HomePage() {
  return <FeedbackWidget projectId="${projectId}" />;
}`}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;