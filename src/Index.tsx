import React from "react";
import { createRoot } from 'react-dom/client';
import { App } from "./components/App";

const rootNode = document.getElementById('root');

//Null Check for the root node
if (rootNode) {
	createRoot(rootNode).render(<App/>);
}
