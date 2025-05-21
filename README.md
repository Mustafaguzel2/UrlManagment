# URL Management App

This project is a modern React + TypeScript application, bootstrapped with Vite, demonstrating state management and UI theming using URL state and context providers. It is configured with robust linting and leverages React Router, React Query, and a collection of reusable UI components.

## Features

- **URL State Management**: Utilizes browser URLs to manage and persist application state (e.g., filters, pagination).
- **Theming**: Light, dark, and system theme support with persistent user preference (stored in local storage).
- **Product Filtering**: Example product list with category, price, and tag filters, supporting server-like pagination.
- **Modern React Stack**:
  - React 18 with functional components and hooks
  - TypeScript for static typing and safer code
  - Vite for lightning-fast development
  - React Router for SPA navigation
  - TanStack Query for efficient server state management
  - Tailwind CSS for utility-first styling and custom themes
- **Reusable UI Components**: Dropdown menus, buttons, theming toggles, and more.
- **Mock Data**: Demonstrates filtering and pagination logic using a local mock product dataset.
- **Strong Linting & Formatting**: ESLint with TypeScript, React hooks, and Prettier integration.

## Directory Structure

```
UrlManagment/
│
├── public/               # Static assets
├── src/
│   ├── components/
│   │   ├── themeProvider.tsx      # Context and logic for app theming
│   │   ├── themeToggle.tsx        # Theme toggle dropdown component
│   │   └── ui/
│   │       └── dropdown-menu.tsx  # Custom dropdown menu primitives
│   ├── lib/
│   │   ├── fetchProducts.ts       # Filtering and paginating mock products
│   │   └── utils.ts               # Utility functions (e.g., className merging)
│   ├── mock/
│   │   └── products.ts            # Array of mock product data
│   ├── main.tsx                   # App entry point, context & router setup
│   └── vite-env.d.ts              # Vite type declarations
├── index.html
├── vite.config.ts                 # Vite and plugin configuration
├── eslint.config.js               # ESLint configuration (TypeScript & React)
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm (v9+) or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mustafaguzel2/UrlManagment.git
   cd UrlManagment
   ```
2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **View in browser:**  
   Open [http://localhost:5173](http://localhost:5173)

## Usage

- Navigate through the app to see product listings and filtering in action.
- Use the theme toggle (top-right) to switch between light, dark, and system modes. The preference is saved locally.
- URL parameters reflect filter/sort states for easy sharing or bookmarking.

## Configuration

- **Vite** is configured in `vite.config.ts` for React, Tailwind CSS, and path aliases (`@` to `/src`).
- **Linting**: ESLint is set up for TypeScript and React best practices.
- **Mock Data**: `src/mock/products.ts` can be extended or replaced with actual API calls.
- **Theming**: Customize themes via Tailwind or the `themeProvider.tsx`.

## Extending

- Add real API integration by replacing the logic in `src/lib/fetchProducts.ts`.
- Expand the UI with more components in `src/components/ui/`.
- Configure stricter or custom linting rules in `eslint.config.js`.

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run lint` – Run ESLint

## License

[MIT](LICENSE) (update if different)

---

**Made with ❤️ using React, TypeScript, and Vite.**
