import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drawi.ai — The Thesis",
  description:
    "An AI-powered canvas platform. A collaborative whiteboard built for live teaching, and an AI drawing studio built for artists and creators. The Thesis of Drawi.ai.",
};

const problemItems = (
  items: string[]
) => (
  <ol className="list-none p-0 m-0">
    {items.map((item, i) => (
      <li
        key={i}
        className="text-[0.92rem] text-neutral-700 py-3 pl-8 relative border-b border-neutral-200 last:border-b-0"
      >
        <span className="absolute left-0 font-semibold text-neutral-500 text-[0.85rem]">
          {i + 1}.
        </span>
        {item}
      </li>
    ))}
  </ol>
);

const featureItems = (items: string[]) => (
  <ul className="list-none p-0 m-0 space-y-1">
    {items.map((item, i) => (
      <li
        key={i}
        className="text-[0.92rem] text-neutral-700 relative pl-4 before:content-['–'] before:absolute before:left-0 before:text-neutral-400"
      >
        {item}
      </li>
    ))}
  </ul>
);

export default function ThesisPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 leading-[1.75] py-20 px-6 antialiased print:py-10">
      <div className="max-w-[680px] mx-auto">
        {/* Header */}
        <header className="mb-12 pb-8 border-b-2 border-neutral-900">
          <h1 className="font-eunjin text-2xl font-semibold text-neutral-900 tracking-[-0.3px] mb-2.5">
            Drawi.ai
          </h1>
          <p className="text-[0.95rem] text-neutral-600 leading-relaxed mb-0">
            An AI-powered canvas platform. A collaborative whiteboard built for
            live teaching, and an AI drawing studio built for artists and
            creators.
          </p>
        </header>

        {/* 01 — Problem */}
        <section className="mb-12 print:break-before-auto">
          <div className="text-[0.7rem] font-semibold uppercase tracking-[2px] text-neutral-500 mb-1.5">
            01 — Problem
          </div>
          <h2 className="font-eunjin text-[1.3rem] font-semibold text-neutral-900 tracking-[-0.2px] mb-[18px]">
            Teaching &amp; Collaboration is Broken
          </h2>
          {problemItems([
            "Teachers use Zoom for video, Excalidraw or Miro for drawing, Google Docs for notes, and Slido for polls. These tools don't talk to each other. Switching between them during a live session breaks the flow.",
            "Excalidraw and most whiteboards give you one infinite canvas with no pages, no folders, and no way to organize content across sessions. After a class ends, everything sits in one flat, unsorted space.",
            "There is no whiteboard with a broadcasting model. There is no way where multiple teachers can draw while students watch and interact without full edit permissions.",
            "Live sessions produce no automatic output. Teachers manually write notes or record screens. There is no tool that generates structured notes from what was drawn and discussed on a whiteboard.",
            "No single product combines a sketch-style whiteboard with live video, chat, polls, and controlled access in one interface. Educators currently need a minimum of three separate apps to run a visual class.",
          ])}
        </section>

        {/* 02 — Problem */}
        <section className="mb-12">
          <div className="text-[0.7rem] font-semibold uppercase tracking-[2px] text-neutral-500 mb-1.5">
            02 — Problem
          </div>
          <h2 className="font-eunjin text-[1.3rem] font-semibold text-neutral-900 tracking-[-0.2px] mb-[18px]">
            Artists Have No AI Drawing Tool
          </h2>
          {problemItems([
            "Midjourney, DALL-E, and Stable Diffusion generate photorealistic images and digital renders. None of them output hand-drawn sketches, cartoon-style art, or pencil illustrations.",
            "Every AI image tool is a prompt-in, file-out system. You type a prompt, get a PNG. There is no AI tool that works inside a canvas where you are actively drawing and building a composition.",
            "Sketch and cartoon artists have no AI assistance for their workflow. A comic artist drawing panels, a meme creator making illustrations, or a designer sketching concepts. none of them have an AI tool built for how they work.",
            "AI features in existing whiteboard tools like Miro and FigJam are limited to auto-layouts, sticky note clustering, and mindmap generation. These rearrange text, they do not draw anything.",
            "There is no product where you can type a prompt and get a sketch-style drawing rendered directly onto your canvas that you can then edit, refine, and build on with your own strokes.",
          ])}
        </section>

        <hr className="border-0 border-t-2 border-neutral-900 my-12" />

        {/* 03 — Solution */}
        <section className="mb-12">
          <div className="text-[0.7rem] font-semibold uppercase tracking-[2px] text-neutral-500 mb-1.5">
            03 — Solution
          </div>
          <h2 className="font-eunjin text-[1.3rem] font-semibold text-neutral-900 tracking-[-0.2px] pb-0 mb-0">
            Drawi.ai
          </h2>
          <p className="text-[0.92rem] text-neutral-700 mb-3.5 mt-4">
            Built on Excalidraw&apos;s sketch-style engine, extended in two
            directions.
          </p>

          <h3 className="text-[0.92rem] font-semibold text-neutral-900 mt-6 mb-2">
            For Educators and Teams
          </h3>
          {featureItems([
            " Broadcasting mode. Teacher draws live, students watch with audio and video.",
            " Live collaboration for approved users. View-only for everyone else.",
            " Built-in chat room and polls alongside the canvas.",
            " AI-generated notes from sessions.",
            " Screen sharing within the app.",
            " Unique invite links. One-time-use or restricted to specific emails.",
            " Import any PDF, image, or local file and draw over it.",
          ])}

          <h3 className="text-[0.92rem] font-semibold text-neutral-900 mt-6 mb-2">
            For Artists and Creators
          </h3>
          {featureItems([
            "Text-to-sketch. Generate hand-drawn sketches from prompts.",
            "Cartoons, memes, illustrations from text — directly on the canvas.",
            "AI draws on your canvas, not in a separate window. You prompt, it draws, you refine.",
          ])}

          <h3 className="text-[0.92rem] font-semibold text-neutral-900 mt-6 mb-2">
            Shared Foundation
          </h3>
          {featureItems([
            "Folder, project, canvas, pages hierarchy. One folder per project, multiple canvases inside, unlimited pages per canvas, paginate by size.",
            "In-house animation engine.",
            "Export as PDF, image, .drawi file or video with full draw-sequence animation.",
            "Cloud and local save.",
            "All in one store for icons, illustrations, diagrams, and more by community.",
          ])}
        </section>

        <hr className="border-0 border-t border-neutral-200 my-12" />

        {/* 04 — Target Markets */}
        <section className="mb-12">
          <div className="text-[0.7rem] font-semibold uppercase tracking-[2px] text-neutral-500 mb-1.5">
            04 — Target Markets
          </div>
          <h2 className="font-eunjin text-[1.3rem] font-semibold text-neutral-900 tracking-[-0.2px] mb-[18px]">
            Who This Is For
          </h2>
          <p className="text-[0.92rem] text-neutral-700 mb-3.5">
            <span className="font-semibold text-neutral-900">Education:</span>{" "}
            Online educators, course creators, corporate trainers. These people
            teach visually and live. No tool gives them whiteboard plus
            broadcasting plus chat plus polls plus AI notes in one place.
          </p>
          <p className="text-[0.92rem] text-neutral-700 mb-3.5">
            <span className="font-semibold text-neutral-900">Creative:</span>{" "}
            Cartoon and comic artists, meme creators, designers, illustrators,
            content creators. No AI tool draws in sketch style on a canvas.
          </p>
          <p className="text-[0.92rem] text-neutral-700 mb-3.5">
            <span className="font-semibold text-neutral-900">Builders</span>{" "}
            Design and Build architectures, diagrams, and more. Collaborate with
            your team in real time.
          </p>
          <p className="text-[0.92rem] text-neutral-700 mb-3.5">
            <span className="font-semibold text-neutral-900">Business:</span>{" "}
            Business owners, entrepreneurs, and small teams.
          </p>
        </section>
      </div>
    </div>
  );
}
