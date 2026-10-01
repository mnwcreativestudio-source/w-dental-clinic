import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { ConceptNoticeBar } from "@/components/site/ConceptNotice";
import { Wordmark } from "@/components/site/Wordmark";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, PRACTICE } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <ConceptNoticeBar />
      <div className="border-b border-border bg-background/92 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Wordmark />

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild variant="ghost" size="default">
              <a href={PRACTICE.phoneHref}>
                <Phone aria-hidden="true" />
                {PRACTICE.phoneDisplay}
              </a>
            </Button>
            <Button asChild variant="ink" size="default">
              <Link to="/contact" hash="request">
                Request an Appointment
              </Link>
            </Button>
          </div>

          <Button
            variant="quiet"
            size="iconLg"
            className="lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Menu aria-hidden="true" />
          </Button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-0 z-50 flex flex-col bg-background lg:hidden"
        >
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-4">
            <Wordmark />
            <Button
              variant="quiet"
              size="iconLg"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X aria-hidden="true" />
            </Button>
          </div>
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    activeOptions={{ exact: link.to === "/" }}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border py-4 font-display text-2xl transition-colors hover:text-accent data-[status=active]:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 pb-8">
              <Button asChild variant="ink" size="xl">
                <Link to="/contact" hash="request" onClick={() => setOpen(false)}>
                  Request an Appointment
                </Link>
              </Button>
              <Button asChild variant="quiet" size="xl">
                <a href={PRACTICE.phoneHref}>
                  <Phone aria-hidden="true" />
                  Call {PRACTICE.phoneDisplay}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
