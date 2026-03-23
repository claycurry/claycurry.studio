"use client";

import { useEffect, useState } from "react";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/lib/components/icons";
import { profileData } from "@/lib/portfolio-data";

function HeroName() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <h1
      className="font-[var(--font-pp-neue-montreal)] font-bold uppercase text-foreground text-[36px] leading-[1.05] tracking-[-1.2px] md:text-[46px] md:tracking-[-2.24px] lg:text-[50px] lg:tracking-[-1.5px]"
      style={{ fontVariationSettings: "'ital' 100" }}
    >
      <span
        className={`block transition-all duration-500 ease-in-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        style={{ transitionDelay: `200ms` }}
      >
        Clay Curry
      </span>

      <span
        className={`text-[28px] leading-[1.05] tracking-[-1.2px] md:text-[36px] md:tracking-[-2.24px] lg:text-[40px] lg:tracking-[-1.5px] block transition-all duration-500 ease-in-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate"}`}
        style={{ transitionDelay: `400ms` }}
      >
        Design Engineer
      </span>
    </h1>
  );
}

function HeroSubtitle() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <a
      data-section-heading
      href="mailto:me@claycurry.com"
      className={`relative group font-[var(--font-pp-neue-montreal)] font-normal underline text-[14px] leading-[24px] md:text-[16px] text-foreground hover:text-accent transition-all ease-in-out ${visible ? "opacity-100 translate-y-0 duration-0" : "opacity-0 translate-y-4 duration-500"}`}
      style={{
        fontVariationSettings: "'ital' 100",
        transitionDelay: visible ? "0ms" : "600ms",
      }}
    >
      <span
        aria-hidden="true"
        className="absolute left-[-12px] md:left-[-20px] top-1/2 -translate-y-1/2 h-2 w-2 md:h-3 md:w-3 rounded-full bg-accent opacity-0 group-data-[active]:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[0_0_8px_var(--accent)]"
      />
      Available for Hire
    </a>
  );
}

function HeroSocials() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const links = [
    { href: profileData.social.x, label: "X", icon: XIcon, clickId: "hero:x" },
    {
      href: profileData.social.github,
      label: "GitHub",
      icon: GitHubIcon,
      clickId: "hero:github",
    },
    {
      href: profileData.social.linkedin,
      label: "LinkedIn",
      icon: LinkedInIcon,
      clickId: "hero:linkedin",
    },
  ];

  return (
    <div
      className={`py-8 flex items-center gap-5 transition-all ease-in-out ${visible ? "opacity-100 translate-y-0 duration-0" : "opacity-0 translate-y-4 duration-500"}`}
      style={{ transitionDelay: visible ? "0ms" : "800ms" }}
    >
      {links.map(({ href, label, icon: Icon, clickId }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          data-click-id={clickId}
          aria-label={label}
          className="inline-flex items-center justify-center size-8 rounded-xl border border-border/40 text-foreground/80 bg-muted/50 hover:bg-muted transition-colors"
        >
          <Icon className="size-3.5" />
        </a>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <div className="flex flex-col gap-3 md:gap-6 items-center text-center max-w-[361px] md:max-w-[1066px] mx-auto px-4 md:px-6 py-20">
      <HeroName />
      <HeroSubtitle />
      <HeroSocials />
    </div>
  );
}
