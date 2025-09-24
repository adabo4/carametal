# Carametal Frontend - Next.js Application

The frontend portion of the Carametal application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js 14** - The React Framework for Production
- 🔷 **TypeScript** - Type Safety and Better Developer Experience  
- 🎨 **Tailwind CSS** - Utility-First CSS Framework
- 🔍 **ESLint** - Code Linting and Quality Checks
- 💅 **Prettier** - Code Formatting
- 🚀 **Optimized** - Image optimization and performance enhancements

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript compiler check
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Project Structure

```
frontend/
├── src/
│   └── app/
│       ├── globals.css      # Global styles with Tailwind
│       ├── layout.tsx       # Root layout component
│       └── page.tsx         # Home page component
├── package.json             # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── next.config.mjs         # Next.js configuration
├── .eslintrc.json         # ESLint configuration
├── .prettierrc            # Prettier configuration
└── .gitignore             # Git ignore rules
```

## API Integration

This frontend is designed to work with a backend API. When the backend is added:

- API calls will be made from Next.js API routes or client components
- Environment variables will be used for API endpoints
- Authentication and state management will be integrated

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deployment

Deploy easily on [Vercel](https://vercel.com), [Netlify](https://netlify.com), or your preferred platform.

For Vercel deployment:
1. Connect your repository to Vercel
2. Set the root directory to `frontend`
3. Deploy with zero configuration