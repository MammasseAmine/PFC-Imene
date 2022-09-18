import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./Pages/Accueil/Accueil";
import GenerationCodeBar from "./Pages/GenerationCodeBar/GenerationCodeBar";
import Planning from "./Pages/Planning/Planning";
import CalculEcrat from "./Pages/CalculEcrat/CalculEcrat";
import EtablireBordereaudeReserve from "./Pages/EtablireBordereaudeReserve/EtablireBordereaudeReserve";
import VerificationdeTémoignage from "./Pages/VerificationdeTémoignage/VerificationdeTémoignage";
import Profile from "./Components/Profile/Profile";
import Searchbar from "./Components/Searchbar/Searchbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Profile />
      <Searchbar />
      <p>27/06/2022</p>
    <Routes>
      <Route path="/" element={<Accueil />}/>
        <Route path="/generationCodeBar" element={<GenerationCodeBar />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/calculEcrat" element={<CalculEcrat />} />
        <Route path="/etablireBordereaudeReserve" element={<EtablireBordereaudeReserve />} />
        <Route path="/verificationdeTémoignage" element={<VerificationdeTémoignage />} />
    </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
