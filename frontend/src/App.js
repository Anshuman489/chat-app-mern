import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Route path="/" component={HomePage} exact/>
      <Route path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;
