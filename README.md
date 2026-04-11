# Interactive 3D React Portfolio

An interactive portfolio built with modern React technologies, featuring immersive 3D visuals, smooth animations, and responsive design. This project showcases skills, projects, and contact capabilities in a visually engaging format.

## 🚀 Features

- **3D Elements**: Integrated with [React Three Fiber](https://github.com/pmndrs/react-three-fiber) and [Maath](https://github.com/pmndrs/maath) for realistic and efficient 3D rendering.
- **Animations**: Smooth, customizable transitions powered by [Framer Motion](https://www.framer.com/motion/).
- **Responsive Design**: Adapts seamlessly to all screen sizes using [React Responsive](https://github.com/contra/react-responsive).
- **Contact Form**: Functional email contact form using [EmailJS](https://www.emailjs.com/), no server needed.
- **Modular Codebase**: Easily maintainable and extensible React component structure.

## 🖼️ Demo

[Live Demo](#) – _Add your deployed URL here once available._

## 🛠️ Technologies Used

- **React**
- **React Three Fiber**
- **Maath**
- **Framer Motion**
- **React Responsive**
- **EmailJS**
- **Tailwind CSS** (optional if used for styling)

## 📂 Folder Structure

src/
├── components/ # Reusable UI components
├── sections/ # Page sections like About, Projects, Contact
├── constants/ # contains description of each section, helper function
├── App.jsx # Main app entry
├── main.jsx # ReactDOM render
└── index.css/ # CSS or Tailwind configuratio


## 📦 Installation

1. **Clone the repo**
git clone https://github.com/your-username/your-portfolio.git
cd your-portfolio

2. **Install dependencies**
   npm install

4. **Run the Development Server**
   npm run dev

6. **Build the production**
   npm run build

Responsive Design
Optimized for:

Mobile

Tablet

Desktop

Using react-responsive media queries and flexible layout utilities.

EmailJS Configuration
Create an account at EmailJS.

Create a new email service and template.

Get your Service ID, Template ID, and User/Public Key.

Add them to your .env file:
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


