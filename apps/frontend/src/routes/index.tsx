import { Routes , Route } from "react-router-dom"
import { Navigate } from "react-router-dom"


import DrawPage from "./Draw"
import ChatPage from "./Chat"
import StreamPage from "./Stream"
import AIPage from "./Ai"
import SettingsPage from "./Settings"



export default function RoutesComponent() {
  
    return (
    <Routes>
      <Route path="/" element={<Navigate to="/draw" replace />} />
      <Route path="/draw" element={<DrawPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/stream" element={<StreamPage />} />
      <Route path="/ai" element={<AIPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  )
  }