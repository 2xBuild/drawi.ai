import { Excalidraw } from "@excalidraw/excalidraw"
import "@excalidraw/excalidraw/index.css";


function MyButton() {
  return <button>My Button</button>
}

function MySidebar() {
  return <div>My Sidebar</div>
}

export default function DrawPage() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
    
<Excalidraw
  UIOptions={{
    tools: {
      selection: true,
      rectangle: true,
      diamond: false,
      ellipse: true,
      arrow: false,
      line: true,
      text: true,
      image: false,
      eraser: true,
      hand: true,
      frame: false,
      laser: false,
    },
  }}
/>

    </div>
  )
}