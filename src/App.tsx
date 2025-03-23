import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavigationProvider } from "@/contexts/NavigationContext";
import { SettingsProvider } from "@/contexts/SettingsContext";

// Layout
import AppLayout from "./layouts/AppLayout";

// Pages
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Leaderboard from "./pages/Leaderboard";
import Order from "./pages/Order";
import Product from "./pages/Product";
import SalesReport from "./pages/sales-report";
import Message from "./pages/Message";
import Settings from "./pages/Settings";
import Favourite from "./pages/Favourite";
import History from "./pages/History";
import Signout from "./pages/Signout";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <NavigationProvider>
      <SettingsProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              
              <Route path="/" element={<AppLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />
                <Route path="leaderboard" element={<Leaderboard />} />
                <Route path="order" element={<Order />} />
                <Route path="product" element={<Product />} />
                <Route path="sales-report" element={<SalesReport />} />
                <Route path="message" element={<Message />} />
                <Route path="settings" element={<Settings />} />
                <Route path="favourite" element={<Favourite />} />
                <Route path="history" element={<History />} />
                <Route path="signout" element={<Signout />} />
              </Route>
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </SettingsProvider>
    </NavigationProvider>
  </QueryClientProvider>
);

export default App;
