
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
const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Check if we have a valid Clerk key
const hasValidClerkKey = CLERK_PUBLISHABLE_KEY && 
  CLERK_PUBLISHABLE_KEY !== "pk_test_enter-your-key-here" &&
  !CLERK_PUBLISHABLE_KEY.startsWith("pk_test_");

// Initialize the queryClient
const queryClient = new QueryClient();

// Create conditional app structure based on whether we have a valid Clerk key
const AppContent = () => (
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
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    {hasValidClerkKey ? (
      <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
        <AppContent />
      </ClerkProvider>
    ) : (
      // Render the app without Clerk provider if no valid key is available
      <AppContent />
    )}
  </QueryClientProvider>
);

export default App;
