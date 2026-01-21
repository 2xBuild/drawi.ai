import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <main className="flex w-full max-w-5xl flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center gap-10 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <Image
            src="/drawi-logo.png"
            alt="Drawi logo"
            width={220}
            height={220}
            priority
            className="h-[160px] w-[160px] md:h-[220px] md:w-[220px]"
          />
          <div className="flex flex-col items-center gap-6 md:items-start">
            <span className="rounded-full bg-foreground/10 px-4 py-1 text-xs font-eunjin uppercase tracking-wide text-foreground">
              Coming soon
            </span>
            <h1 className="text-2xl font-eunjin text-foreground md:text-5xl">
              a next-gen ai-powered whiteboard with everything you need.
            </h1>
            <div className="flex flex-wrap gap-3 sm:flex-row">
              <a
                href="https://github.com/2xBuild/drawi.ai"
                className="cursor-pointer rounded-full bg-foreground px-6 py-3 text-base font-eunjin text-background transition hover:opacity-90"
              >
                GitHub
              </a>
              <a
                href="https://x.com/iBuild"
                className="cursor-pointer rounded-full border border-foreground px-6 py-3 text-base font-eunjin text-foreground transition hover:bg-foreground/10"
              >
                Twitter/X
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
