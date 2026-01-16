# Portfolio 2026

A high-performance, animated portfolio website built with React 19, Vite, and Tailwind CSS. Featuring 3D interactive elements, smooth scroll animations, and a modular architecture.

## 🚀 Key Features

*   **Dynamic Asset Management**: Smart handling of local and remote images via `UnifiedImage` component.
*   **3D Tech Stack**: Interactive 3D logo cloud using conditional rendering for SVGs and PNGs.
*   **Smooth Animations**:
    *   Custom `ScrollRevealer` for scroll-triggered entry animations.
    *   Parallax Hero section with mouse-following interactions.
    *   Fluid page transitions and preloader.
*   **Modular Architecture**: Component-based design with clear separation of concerns (Layout, UI, Sections).
*   **Responsive Design**: Mobile-first approach using Tailwind CSS.

## 🛠️ Tech Stack

*   **Framework**: [React 19](https://react.dev/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Linting**: ESLint + Prettier

## 📂 Project Structure

```
src/
├── assets/             # Static assets (images, fonts)
├── components/
│   ├── layout/         # Core layout (Navbar, Footer, FluidCurtain)
│   ├── logos/          # Tech stack logos (SVGs & PNGs)
│   └── ui/             # Reusable UI elements (Card, UnifiedImage, TechIcon3D)
├── data/               # Configuration data (constants.js)
├── hooks/              # Custom hooks (useScroll, useMouse)
├── sections/           # Landing page sections (Hero, About, Projects)
├── views/              # Main page views
└── App.jsx             # Root component
```

## ⚡ Getting Started

### Prerequisites

*   Node.js v18+ (Recommended v20+)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 🎨 Customization

### Updating Content
Modify `src/data/constants.js` to update:
*   Personal Information (Name, Email, Social Links)
*   Projects & Research Data
*   Tech Stack Configuration

### Adding Logos
1.  Place SVG or PNG files in `src/components/logos/`
2.  If SVG: Export as a React component in `src/components/logos/index.js`
3.  If PNG: Reference directly in `constants.js` or import via `index.js`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
