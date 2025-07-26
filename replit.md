# NOT OUR HOME - Theater Website

## Overview

This is a modern React theater website for the play "NOT OUR HOME" by Ned Du. The application has been converted to a static React app optimized for free deployment on GitHub Pages, featuring a single-page layout with smooth scrolling sections and a theater-themed design aesthetic.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom theater-themed color variables
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple
- **Development**: Hot reload with tsx

### Build System
- **Frontend Build**: Vite with React plugin
- **Backend Build**: ESBuild for server bundling
- **TypeScript**: Shared configuration across client/server/shared modules
- **Development Tools**: Replit-specific plugins for enhanced development experience

## Key Components

### Frontend Components
- **Layout**: Single-page scroll layout with fixed navigation
- **Sections**: Home/Hero, Donate, About the Play, Cast & Crew
- **UI Library**: Complete Shadcn/ui component set including buttons, cards, forms, modals, etc.
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Backend Components
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Registration**: Modular route system with Express
- **Development Server**: Vite integration for SSR-like development experience
- **Error Handling**: Centralized error handling middleware

### Shared Components
- **Database Schema**: User table with Drizzle ORM definitions
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Validation**: Zod schemas for runtime type checking

## Data Flow

### Database Schema
- **Users Table**: ID (UUID), username (unique), password fields
- **Migration System**: Drizzle Kit for database migrations
- **Connection**: PostgreSQL via Neon Database with connection pooling

### API Architecture
- **RESTful Design**: Express routes prefixed with `/api`
- **Request/Response**: JSON-based communication
- **Authentication**: Session-based with PostgreSQL storage
- **Error Handling**: Structured error responses with proper HTTP status codes

### State Management
- **Client State**: React component state and TanStack Query cache
- **Server State**: PostgreSQL database with Drizzle ORM
- **Session State**: Server-side sessions stored in PostgreSQL

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL client
- **drizzle-orm**: Type-safe ORM with PostgreSQL support
- **@tanstack/react-query**: Server state management
- **@radix-ui/**: Headless UI component primitives
- **tailwindcss**: Utility-first CSS framework

### Development Dependencies
- **vite**: Build tool and development server
- **tsx**: TypeScript execution engine
- **@replit/vite-plugin-**: Replit-specific development tools

### Theater-Specific Features
- **Design System**: Custom CSS variables for theater color palette (red, beige, maroon)
- **Typography**: System fonts (Arial, Helvetica) as specified
- **Layout**: Single-scroll design optimized for theatrical content presentation

## Deployment Strategy

### Static Site Deployment (Updated 2025-01-26)
- **Architecture**: Converted from full-stack to static React app for GitHub Pages compatibility
- **Build Output**: Vite builds to `dist/public` directory containing all static assets
- **Asset Handling**: Poster image and other assets are bundled and optimized during build
- **No Backend**: Removed server dependencies - pure client-side React application

### Free Hosting Options
- **GitHub Pages**: Deploy directly from repository using `dist/public` folder
- **Vercel/Netlify**: Connect GitHub repository for automatic deployments
- **Other**: Surge.sh, Firebase Hosting, and other static hosting services

### Development Environment
- **Local Development**: Vite dev server on port 5000
- **Hot Reload**: Automatic reloading for frontend changes
- **Asset Imports**: Static assets imported via `@assets/` alias

### Build Process
- **Command**: `npm run build` creates production-ready static files
- **Output**: All files optimized and ready for static hosting
- **Assets**: Images and other assets are processed and versioned

### Theater Content Management
The application is designed to showcase theatrical content with sections for show information, donation appeals, cast/crew details, and performance schedules. The design emphasizes visual hierarchy appropriate for theater marketing materials.