import React from "react";
import ReactDom from "react-dom";
import App from "./App";

// Appというコンポーネントを画面に反映する, 二つ目の引数にどこに反映するかを決める
ReactDom.render(<App />, document.getElementById("root"));
