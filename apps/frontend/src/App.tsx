import { BrowserRouter } from 'react-router-dom'
import { SwitchBar } from './components/switch_bar'
// import CurrentRouteName from './components/currentRoute'
import RoutesComponent from './routes'



function AppContent() {
  return (
    <div className="w-full h-full ">
      <SwitchBar />

      <RoutesComponent />
    </div>
  )
}

function App() {
  return (
    <>
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
    </>
  )
}


export default App
