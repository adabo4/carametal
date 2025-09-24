# Carametal - Full Stack Application

A modern full-stack application with separate frontend and backend services.

## Project Structure

```
carametal/
├── frontend/           # Next.js React application
│   ├── src/app/       # Next.js app router
│   ├── package.json   # Frontend dependencies
│   └── ...           # Frontend config files
└── backend/           # Backend API (to be added)
    └── ...           # Backend files
```

## Getting Started

### Frontend (Next.js)

Navigate to the frontend directory and follow the instructions in `frontend/README.md`:

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at [http://localhost:3000](http://localhost:3000)

### Backend (Coming Soon)

The backend API will be added later to complement the frontend application.

## Development Workflow

1. **Frontend Development**: Work in the `frontend/` directory
2. **Backend Development**: Work in the `backend/` directory (when added)
3. **Full Stack**: Both services can run simultaneously on different ports

## Tech Stack

### Frontend

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- ESLint & Prettier

### Backend (Planned)

- To be determined based on requirements
- Could be Node.js/Express, Python/FastAPI, etc.

## Learn More

Check the README files in each directory for specific setup instructions:

- `frontend/README.md` - Frontend setup and development
- `backend/README.md` - Backend setup and development (when added)

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deployment

Deploy easily on [Vercel](https://vercel.com), [Netlify](https://netlify.com), or your preferred platform.

For Vercel deployment:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration
