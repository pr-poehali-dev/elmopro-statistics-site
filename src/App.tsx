
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AgencyHome from "./pages/AgencyHome";
import Elmopro from "./pages/Elmopro";
import ElmoproIyun from "./pages/ElmoproIyun";
import Alyumika from "./pages/Alyumika";
import AlyumikaAvgust from "./pages/AlyumikaAvgust";
import Ximservis from "./pages/Ximservis";
import XimservisAvgust from "./pages/XimservisAvgust";
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
          <Route path="/elmopro/2026/iyun" element={<PasswordGate project="elmopro"><ElmoproIyun /></PasswordGate>} />
          <Route path="/alyumika" element={<Alyumika />} />
          <Route path="/alyumika/:year" element={<Navigate to="/alyumika" replace />} />
          <Route path="/alyumika/2026/avgust" element={<PasswordGate project="alyumika"><AlyumikaAvgust /></PasswordGate>} />
          <Route path="/ximservis" element={<Ximservis />} />
          <Route path="/ximservis/:year" element={<Navigate to="/ximservis" replace />} />
          <Route path="/ximservis/2026/avgust" element={<PasswordGate project="ximservis"><XimservisAvgust /></PasswordGate>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;