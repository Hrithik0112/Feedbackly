import CopyBtn from "@/components/copy-btn";
import { ArrowLeft, Info } from "lucide-react";
import Link from "next/link";

const Page = ({ params }: {
  params: {
    projectId: string
  }
}) => {
  if (!params.projectId) return (<div>Invalid Project ID</div>);
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
            <code className="text-white">
              {`<my-widget project-id="${params.projectId}"></my-widget>`}
              <br />
              {`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
            </code>
            <CopyBtn text={`<my-widget project-id="${params.projectId}"></my-widget>\n<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`} />
          </div>
        </div>

        {/* React/Vite Integration */}
        <div>
          <h2 className="text-lg font-semibold mb-2">React / Vite</h2>
          <div className="bg-blue-950 p-6 rounded-md relative">
            <code className="text-white">
              {`// Add this in your index.html or main entry file`}
              <br />
              {`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
              <br />
              {`<my-widget project-id="${params.projectId}"></my-widget>`}
            </code>
            <CopyBtn text={`// Add this in your index.html or main entry file\n<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>\n\n// Use in any component\n<my-widget project-id="${params.projectId}"></my-widget>`} />
          </div>
        </div>

        {/* Next.js Notice */}
        <div className="flex items-center gap-2 p-4 bg-blue-100 rounded-md text-blue-800 shadow-md">
          <Info size={20} />
          <p className="text-sm">Next.js integration coming soon! Stay tuned for updates.</p>
        </div>
      </div>
    </div>
  )
}

export default Page;