# 🚀 Muhammad Adeel - Developer Portfolio

A modern, responsive portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This portfolio showcases my skills as a Mobile Application Developer with 3+ years of experience in Flutter, Native Android, and React Native.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dark Mode**: Built-in dark mode support
- **Performance**: Optimized for speed and SEO
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Animations**: Smooth scroll animations using Framer Motion
- **Contact Form**: Functional contact form with validation

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # UI components
│   │   ├── Button.tsx    # Reusable button component
│   │   └── Card.tsx      # Reusable card component
│   ├── layout/           # Layout components
│   │   ├── Header.tsx    # Navigation header
│   │   └── Footer.tsx    # Footer component
│   └── sections/         # Page sections
│       ├── Hero.tsx      # Hero section
│       ├── About.tsx     # About section
│       ├── Skills.tsx    # Skills section
│       ├── Projects.tsx  # Projects section
│       └── Contact.tsx   # Contact section
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

Update the following files to customize the portfolio:

- `src/components/sections/Hero.tsx` - Update name, title, and description
- `src/components/sections/About.tsx` - Update about content and stats
- `src/components/sections/Skills.tsx` - Update skills and proficiency levels
- `src/components/sections/Projects.tsx` - Add your projects
- `src/components/sections/Contact.tsx` - Update contact information

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors: Update the color scheme in `tailwind.config.js`
- Typography: Modify font families and sizes
- Animations: Adjust Framer Motion animations in components

### Deployment

1. **Vercel (Recommended)**:
   - Connect your GitHub repository to Vercel
   - Vercel will automatically deploy on push to main branch

2. **Other Platforms**:
   - Build the project: `npm run build`
   - Deploy the `out` directory to your hosting platform

## 🎨 Design Principles

- **DRY (Don't Repeat Yourself)**: Reusable components and utilities
- **Component-Based Architecture**: Modular, maintainable code
- **Responsive Design**: Mobile-first approach
- **Performance**: Optimized images, lazy loading, and code splitting
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## 📱 Sections

### Hero Section
- Animated introduction with name and title
- Call-to-action buttons
- Social media links

### About Section
- Personal introduction and experience
- Statistics and achievements
- Skills overview

### Skills Section
- Technical skills with proficiency levels
- Categorized by technology type
- Visual progress bars

### Projects Section
- Showcase of completed projects
- Technology tags for each project
- Links to live demos and source code

### Contact Section
- Contact form with validation
- Contact information
- Social media links

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Component-based architecture

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: adeel@example.com
- **LinkedIn**: [Muhammad Adeel](https://linkedin.com)
- **GitHub**: [@username](https://github.com)

---

Made with ❤️ using Next.js and TypeScript
