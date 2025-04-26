# FreeSip - Marketing that Quenches

A stunning, responsive website for FreeSip, an innovative B2B event-based marketing startup that uses branded bottled water as a physical advertising medium.

## Features

- Modern, clean design using React and Vite
- Responsive layout for both mobile and desktop
- Smooth animations using Framer Motion
- Fully accessible navigation with smooth scrolling
- Interactive UI components and form handling

## Website Sections

1. **Landing Page** - Featuring the main tagline "Marketing that quenches" with call-to-action buttons
2. **About FreeSip** - Company description and key pillars
3. **How It Works** - Three-step visual process explanation
4. **Benefits for Brands** - Key advantages of choosing FreeSip for marketing
5. **Gallery/Use Cases** - Filterable gallery showing various implementation contexts
6. **Call to Action / Contact** - Form for potential clients to reach out
7. **Social Media** - Links to FreeSip's social media platforms
8. **Footer** - Navigation, contact info, and legal links

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/freesip.git
   cd freesip
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Building for Production

To create a production build:

```
npm run build
```

The build files will be located in the `dist` folder.

## Tech Stack

- React.js
- Vite
- Framer Motion (animations)
- react-scroll (smooth scrolling)
- react-intersection-observer (scroll animations)
- react-icons (icon library)

## Project Structure

```
freesip/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── react.svg
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Benefits.jsx
│   │   ├── Gallery.jsx
│   │   ├── CallToAction.jsx
│   │   ├── SocialMedia.jsx
│   │   └── Footer.jsx
│   ├── utils/
│   │   └── imageUtils.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Customization

### Adding Real Images

For a production site, replace the placeholder images with real ones:

1. Add your images to the `src/assets/images/` directory
2. Update the image imports in the components

### Changing Colors

The color scheme is defined using CSS variables in `App.css`. Update the root variables to customize the site's look and feel.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Design and concept inspired by modern marketing websites
- Icons provided by react-icons
- Animations powered by Framer Motion
