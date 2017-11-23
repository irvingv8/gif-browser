import React from "react";
import ReactDom from "react-dom";
import GifBrowser from "./components/GifBrowser.jsx";
import styles from "./styles.css";

ReactDom.render(<GifBrowser />, document.getElementById("my-gifs"));
