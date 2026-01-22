"use client";

import Link from "next/link";
import { Github, Twitter, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
         
         <div className="flex items-center justify-evenly w-full">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <Link href="/" className="text-lg font-eunjin text-[#0098B0]">
              Drawi.ai
            </Link>
            <span className="hidden md:block text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <a
                href="https://github.com/2xBuild/drawi.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              
            </div>

            <a
              href="https://app.drawi.ai"
              className="group text-sm font-eunjin font-medium px-4 py-1.5 rounded-full bg-primary hover:bg-[#007a8f] text-white transition-colors flex items-center gap-1.5"
            >
              Launch App
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
</div>
          {/* Copyright - Mobile only */}
          <span className="md:hidden text-xs font-inter text-muted-foreground">
            © {currentYear} All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
