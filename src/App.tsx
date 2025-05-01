
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Stocks from "./pages/Stocks";
import Tools from "./pages/Tools";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";

// Your Clerk publishable key
const CLERK_PUBLISHABLE_KEY = "pk_test_c3VubnktY3Jvdy0yOS5jbGVyay5hY2NvdW50cy5kZXYk";

// Initialize the queryClient
const queryClient = new QueryClient();

// Create app structure with Clerk Provider
const App = () => (
  <QueryClientProvider client={queryClient}>
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/stocks" element={<Stocks />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/sign-in/*" element={<SignIn />} />
              <Route path="/sign-up/*" element={<SignUp />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MainLayout>
        </BrowserRouter>
      </TooltipProvider>
    </ClerkProvider>
  </QueryClientProvider>
);

export default App;
