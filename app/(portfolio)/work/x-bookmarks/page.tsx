import { ExternalLink } from "lucide-react";

export default function XBookmarksPage() {
  return (
    <div className="py-18 md:py-24 px-2 md:px-4">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-3 mb-[calc(3/8*100vh)] md:mb-32">
        <h1 className="font-sans font-bold tracking-tight text-3xl md:text-5xl">
          X Bookmarks - Navigation
        </h1>
        <p className="text-accent text-sm md:text-base">
          Personal Project — January 2026
        </p>
      </div>

      {/* Role / Team / Timeline + Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-1">
              My Role
            </h3>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">
                Design Engineer
              </span>{" "}
              — Interaction Design, Visual Design, User Flows, Rapid Prototyping
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-1">Team</h3>
            <p className="text-sm text-muted-foreground">
              Clay Curry, Design Engineer
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-1">
              Timeline
            </h3>
            <p className="text-sm text-muted-foreground">
              February 2026 — Present
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-1">
              Demo Link
            </h3>
            <a
              href="https://x-bookmarks.claycurry.com/"
              target="_blank"
              rel="noopener noreferrer"
              data-click-id="work:x-bookmarks-demo"
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors"
            >
              x-bookmarks.claycurry.com <ExternalLink className="size-3.5" />
            </a>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-1">
              Overview
            </h3>
            <div className="space-y-3 text-sm text-foreground">
              <p>
                X bookmarks get harder to navigate as they pile up. Finding
                something later often means relying on memory or digging through
                a long, flat list.
              </p>
              <p>
                This project explores better ways to browse, filter, and manage
                saved posts so large bookmark collections stay useful.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="rounded-xl border border-border/60 bg-muted/20 px-5 py-6 md:px-6">
        <h2 className="text-sm font-semibold text-foreground mb-2">
          Work in Progress
        </h2>
        <p className="text-sm text-muted-foreground">
          This project page is still in progress. For the latest experience,
          check out the demo link above.
        </p>
      </section>
    </div>
  );
}
