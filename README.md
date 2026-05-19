# [VIDA]

An interactive artificial life simulator powered by a custom vanilla JavaScript engine and a React frontend. It explores emergent behaviors, algorithmic ecosystems, and high-performance state management.

## 🧠 Overview

This project is a web-based algorithmic terrarium designed to simulate autonomous entities within a dynamic ecosystem. The core logic is driven by a zero-dependency JavaScript engine that handles spatial awareness, resource consumption, and survival mechanics on a 2D grid. The visualization layer is built with React and Tailwind CSS, focusing on efficient rendering, real-time data flow, and interactive state management.

## ✨ Features (Planned)

- **Custom JavaScript Engine:** A standalone, algorithmic core handling grid logic and entity behavior without relying on external game engines.
- **Autonomous Entities:** "Digital lifeforms" that navigate the grid, consume resources, and interact based on predefined logical rules.
- **Real-Time Visualization:** A React-based interface that efficiently renders the state of the simulation.
- **Interactive Dashboard:** Control panel to pause, resume, and tweak the simulation parameters on the fly.

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Simulation Engine:** Vanilla JavaScript (ES6+)

## 📂 Project Architecture

The codebase is strictly separated into logic and presentation layers:

\`\`\`text
src/
├── assets/ # Static 2D illustrations and sprites
├── components/ # React UI components (ControlPanel, Grid, etc.)
├── engine/ # Pure Vanilla JS simulation logic (ZERO React here)
├── hooks/ # Custom React hooks (e.g., useSimulation)
└── main.jsx # Application entry point
\`\`\`

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/[TU_USUARIO_DE_GITHUB]/[NOMBRE_DEL_REPO].git
   \`\`\`
2. Navigate into the directory:
   \`\`\`bash
   cd [NOMBRE_DEL_REPO]
   \`\`\`
3. Install the dependencies:
   \`\`\`bash
   npm install
   \`\`\`

### Running the Development Server

Start the Vite development server by running:
\`\`\`bash
npm run dev
\`\`\`
Open your browser and navigate to the local address provided in your terminal (usually \`http://localhost:5173\`).

## 🗺️ Roadmap & Workflow

This project is being developed in strict phases to ensure a solid foundation:

- [ ] **Phase 1: The Engine (Console Only).** Developing the 2D grid matrix and survival logic entirely in vanilla JS.
- [ ] **Phase 2: The Visual Shell.** Building the static React components and Tailwind layouts.
- [ ] **Phase 3: The Integration.** Connecting the JavaScript engine to the React frontend using custom hooks for real-time rendering.
- [ ] **Phase 4: Advanced Features.** Integrating external data, global state management, and performance optimization.

## 🤝 Contributing

This is a personal learning project, but feedback and suggestions on code architecture, React performance optimization, and algorithmic efficiency are always welcome. Feel free to open an issue!
