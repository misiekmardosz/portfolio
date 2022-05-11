import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

app.use(express.static(__dirname));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);

reportWebVitals();
