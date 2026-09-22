import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Moduli from "./pages/Moduli";
import Inverter from "./pages/Inverter";
import Accumulo from "./pages/Accumulo";
import AppPage from "./pages/AppPage";
import Calcolatore from "./pages/Calcolatore";
import Progetti from "./pages/Progetti";
import Contatti from "./pages/Contatti";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/moduli-fotovoltaici"} component={Moduli} />
      <Route path={"/inverter"} component={Inverter} />
      <Route path={"/sistemi-di-accumulo"} component={Accumulo} />
      <Route path={"/app"} component={AppPage} />
      <Route path={"/calcolatore"} component={Calcolatore} />
      <Route path={"/progetti"} component={Progetti} />
      <Route path={"/contatti"} component={Contatti} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
