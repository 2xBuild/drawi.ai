import { useLocation, useNavigate } from 'react-router-dom'

interface NavItem {
  label: string
  path: string
}

const navItems: NavItem[] = [
  { label: 'Draw', path: '/draw' },
  { label: 'Chat', path: '/chat' },
  { label: 'Stream', path: '/stream' },
  { label: 'AI', path: '/ai' },
  { label: 'Settings', path: '/settings' },
]

export const SwitchBar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = (path: string) => {
    navigate(path)
  }

  return (
    <div className="fixed bottom-3 left-0 right-0 z-50   ">


      <div className="flex justify-center items-center h-14 sm:px-4 ">
        {/* Navigation buttons */}
        <div className="flex gap-2 bg-[#1a1a1a] rounded-lg p-1 px-4 ">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <button
                key={item.path}
                onClick={() => handleClick(item.path)}
                className={`
                  px-3 sm:px-6 py-2 rounded-lg font-medium text-sm
                  transition-all duration-200 ease-out bg-transparent
                  border-0 hover:border-0
                  ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }
                `}
              >
                {item.label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
