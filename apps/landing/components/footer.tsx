"use client";

import Link from "next/link";
import { Github, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand & Copyright */}
          <div className="flex items-center gap-4">
            <Link href="/" className="text-lg font-bold bg-gradient-to-r from-[#0098B0] to-[#00C9E6] bg-clip-text text-transparent">
              Drawi.ai
            </Link>
            <span className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </span>
          </div>

          {/* Links & Social */}
          <div className="flex items-center gap-6">
            <Link 
              href="#privacy" 
              className="text-sm text-muted-foreground hover:text-[#0098B0] transition-colors"
            >
              Privacy
            </Link>
            <Link 
              href="#terms" 
              className="text-sm text-muted-foreground hover:text-[#0098B0] transition-colors"
            >
              Terms
            </Link>
            
            <div className="flex items-center gap-3 ml-2">
              <motion.a
                href="https://github.com/2xBuild/drawi.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-muted/50 text-muted-foreground hover:bg-[#0098B0]/10 hover:text-[#0098B0] transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#twitter"
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-muted/50 text-muted-foreground hover:bg-[#0098B0]/10 hover:text-[#0098B0] transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </motion.a>
            </div>

            <motion.a
              href="https://app.drawi.ai"
              className="text-sm font-medium px-4 py-1.5 rounded-full bg-[#0098B0] text-white hover:bg-[#0098B0]/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Launch App
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
