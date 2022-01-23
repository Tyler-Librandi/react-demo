import { Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/Nav/Navbar";
import ToggleDemoComponent from "./components/ToggleDemo/ToggleDemo";
import ListDemoComponent from "./components/ListDemo/ListDemo";
import StylesDemoComponent from "./components/StylesDemo/StylesDemo";
import ChatDemoComponent from "./components/ChatDemo/ChatDemo";
import WelcomeComponent from "./components/Welcome/Welcome";
import ResourceDemoComponent from "./components/ResourceDemo/ResourceDemo";
import "./app.module.css";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/react-demo/" element={<WelcomeComponent />} />
        <Route
          path="/react-demo/element-visibility"
          a
          element={<ToggleDemoComponent />}
        />
        <Route
          path="/react-demo/list-building"
          element={<ListDemoComponent />}
        />
        <Route
          path="/react-demo/style-manipulation"
          element={<StylesDemoComponent />}
        />
        <Route
          path="/react-demo/chat-with-seb"
          element={<ChatDemoComponent />}
        />
        <Route
          path="/react-demo/resource-rally"
          element={<ResourceDemoComponent />}
        />
      </Routes>
    </div>
  );
}

export default App;
