import { Activity as ActivityIcon } from "lucide-react";
import { ProjectCard } from "@/lib/components/site/project-card";
import { SectionHeader } from "@/lib/components/site/section-header";

const BookmarkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="size-6 fill-foreground"
  >
    <g>
      <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z" />
    </g>
  </svg>
);

export function RecentActivitySection() {
  return (
    <section className="w-full py-10 md:py-14">
      <SectionHeader
        title="Recent Activity"
        icon={<ActivityIcon className="w-5 h-5 md:w-6 md:h-6 text-accent" />}
      />
      <div className="mt-5 md:mt-6">
        <ProjectCard
          href="/work/x-bookmarks"
          icon={<BookmarkIcon />}
          title="X Bookmarks - Navigation"
          description="clone for X bookmarks, with more navigations tools"
        />
      </div>
    </section>
  );
}
