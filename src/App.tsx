import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage/IndexPage";
import WrapperPage from "./pages/WrapperPage/WrapperPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<WrapperPage/>}>
            <Route index element={<IndexPage/>} />
            <Route path="marketplace" element={<>Aboba</>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
