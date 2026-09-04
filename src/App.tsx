
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AgencyHome from "./pages/AgencyHome";
import Elmopro from "./pages/Elmopro";
import ElmoproAvgust from "./pages/ElmoproAvgust";
import Alyumika from "./pages/Alyumika";
import AlyumikaAvgust from "./pages/AlyumikaAvgust";
import Ximservis from "./pages/Ximservis";
import XimservisAvgust from "./pages/XimservisAvgust";
import Zetaprint from "./pages/Zetaprint";
import ZetaprintAvgust from "./pages/ZetaprintAvgust";
import ArtDizo from "./pages/ArtDizo";
import ArtDizoIyul from "./pages/ArtDizoIyul";
import ArtDizoAvgust from "./pages/ArtDizoAvgust";
import PkZapad from "./pages/PkZapad";
import PkZapadAvgust from "./pages/PkZapadAvgust";
import VikupMsk from "./pages/VikupMsk";
import VikupMskAvgust from "./pages/VikupMskAvgust";
import NotFound from "./pages/NotFound";
import PasswordGate from "./components/PasswordGate";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AgencyHome />} />
          <Route path="/elmopro" element={<Elmopro />} />
          <Route path="/elmopro/:year" element={<Navigate to="/elmopro" replace />} />
          <Route path="/elmopro/2026/avgust" element={<PasswordGate project="elmopro"><ElmoproAvgust /></PasswordGate>} />
          <Route path="/alyumika" element={<Alyumika />} />
          <Route path="/alyumika/:year" element={<Navigate to="/alyumika" replace />} />
          <Route path="/alyumika/2026/avgust" element={<PasswordGate project="alyumika"><AlyumikaAvgust /></PasswordGate>} />
          <Route path="/ximservis" element={<Ximservis />} />
          <Route path="/ximservis/:year" element={<Navigate to="/ximservis" replace />} />
          <Route path="/ximservis/2026/avgust" element={<PasswordGate project="ximservis"><XimservisAvgust /></PasswordGate>} />
          <Route path="/zetaprint" element={<Zetaprint />} />
          <Route path="/zetaprint/:year" element={<Navigate to="/zetaprint" replace />} />
          <Route path="/zetaprint/2026/avgust" element={<PasswordGate project="zetaprint"><ZetaprintAvgust /></PasswordGate>} />
          <Route path="/art-dizo" element={<ArtDizo />} />
          <Route path="/art-dizo/:year" element={<Navigate to="/art-dizo" replace />} />
          <Route path="/art-dizo/2026/iyul" element={<PasswordGate project="art-dizo"><ArtDizoIyul /></PasswordGate>} />
          <Route path="/art-dizo/2026/avgust" element={<PasswordGate project="art-dizo"><ArtDizoAvgust /></PasswordGate>} />
          <Route path="/pk_zapad" element={<PkZapad />} />
          <Route path="/pk_zapad/:year" element={<Navigate to="/pk_zapad" replace />} />
          <Route path="/pk_zapad/2026/avgust" element={<PasswordGate project="pk_zapad"><PkZapadAvgust /></PasswordGate>} />
          <Route path="/vikup_msk" element={<VikupMsk />} />
          <Route path="/vikup_msk/:year" element={<Navigate to="/vikup_msk" replace />} />
          <Route path="/vikup_msk/2026/avgust" element={<PasswordGate project="vikup_msk"><VikupMskAvgust /></PasswordGate>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;