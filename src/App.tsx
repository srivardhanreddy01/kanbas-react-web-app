import Kanbas from "./Kanbas";
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Nav from "./Nav";
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/Labs/*"   element={<Labs />}/>
          <Route path="/hello"    element={<HelloWorld />}/>
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
