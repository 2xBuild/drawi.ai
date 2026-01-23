import { useLocation } from "react-router-dom";

export default function CurrentRouteName() {
    const location = useLocation()
    const routeName = location.pathname.slice(1) || 'draw'
    
   return routeName;
  }