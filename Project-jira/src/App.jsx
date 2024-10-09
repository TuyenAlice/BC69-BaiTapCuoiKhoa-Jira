import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import RouterConfig from "./routes"; // Đảm bảo đường dẫn

const App = () => {
  return (
    <Router>
      <RouterConfig /> {/* Sử dụng RouterConfig để định nghĩa các tuyến */}
    </Router>
  );
};

// Xuất App dưới dạng mặc định
export default App;
