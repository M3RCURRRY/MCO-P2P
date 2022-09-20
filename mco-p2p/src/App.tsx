import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexRoute from "./routes/IndexRoute/IndexRoute";
import RouteWrapper from "./routes/RouteWrapper/RouteWrapper";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<RouteWrapper/>}>
            <Route index element={<IndexRoute/>} />
            <Route path="marketplace" element={<>Aboba</>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
