# Folder structure

````text
drawi-ai /
│
├── apps/
│   ├── backend/         # Main backend service (API and logic etc)
│   ├── frontend/        # Main app frontend (React + Vite)
│   ├── landing/         # Public landing page (Next.js)
│   └── ws/              # WebSocket server
│
├── packages/
│   ├── ui/              # Shared UI components
│   ├── lib/             # Shared libraries and utilities
│   └── config/          # Shared configuration (eslint, tsconfig, etc)
│
├── .gitignore
├── package.json         # root pkg, scripts for monorepo
├── README.md
└── ...
````
