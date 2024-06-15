import "./assets/scss/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPg from "./pages/MainPg";
import IntroPg from "./pages/IntroPg";
import MomDadPg from "./pages/MomDadPg";
import BroPlusPg from "./pages/BroPlusPg";
import MePlusPg from "./pages/MePlusPg";

import HeaderCp from "./components/common/HeaderCp";
import FooterCp from "./components/common/FooterCp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderCp />
        <main>
          <Routes>
            <Route path="/" element={<MainPg />} />
            <Route path="/intro" element={<IntroPg />} />
            <Route path="/momDadPg" element={<MomDadPg />} />
            <Route path="/broPlusPg" element={<BroPlusPg />} />
            <Route path="/mePlusPg" element={<MePlusPg />} />
          </Routes>
        </main>
        <FooterCp />
      </BrowserRouter>
    </div>
  );
}

export default App;
