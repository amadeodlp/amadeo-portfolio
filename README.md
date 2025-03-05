# Amadeo Portfolio

A modern portfolio website for Amadeo de la Peña, built with React, TypeScript, and TailwindCSS.

## Features

- Responsive design that works across all devices
- Smooth animations and transitions with Framer Motion
- Dynamic background image transitions
- Project showcase with filtering capability
- Contact form with validation
- Skills visualization with progress bars
- Dark-themed design inspired by Image Campus website

## Technologies Used

- React
- TypeScript
- TailwindCSS
- Framer Motion
- React Router
- Vite

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/amadeodlp/amadeo-portfolio.git
   cd amadeo-portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
├── public/             # Static assets
│   └── images/         # Images used in the site
├── src/
│   ├── assets/         # Additional assets 
│   ├── components/     # Reusable UI components
│   │   ├── atoms/      # Base components
│   │   ├── molecules/  # Composite components
│   │   └── organisms/  # Complex components
│   ├── config/         # Application configuration
│   ├── hooks/          # Custom React hooks
│   ├── layouts/        # Page layout components
│   ├── router/         # Routing configuration
│   ├── styles/         # Global styles
│   ├── utils/          # Utility functions
│   ├── views/          # Page components
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Application entry point
└── ...config files
```

## Adding Background Images

The portfolio uses background images for various sections. To add or change the background images:

1. Add your image files to the `public/images` directory
2. Update the image paths in the component files:
   - `Home.tsx` - For the hero section images
   - `HeroSection.tsx` - For other page headers

## Deploy

This site can be deployed on any static site hosting service like Vercel, Netlify, or GitHub Pages.

## License

This project is licensed under the MIT License.
