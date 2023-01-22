import "./App.css";
import { Navbar } from "./components";
import { Dashboard } from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-container">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
