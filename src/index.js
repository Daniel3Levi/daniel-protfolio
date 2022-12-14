import { createRoot } from 'react-dom/client';
import React from 'react';
import App from "./App";
import "./index.css";


const container = document.querySelector("#root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
// Render App component
root.render(<App tab="home" />);


