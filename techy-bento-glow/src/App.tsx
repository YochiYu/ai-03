import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Index from './pages/Index';
import CategoryLayout from './components/CategoryLayout';
import CompanyDetail from './pages/CompanyDetail';
import Taiwan50Plus from './pages/Taiwan50Plus';
import Taiwan50DetailUse from './pages/Taiwan50DetailUse';
import NotFound from './pages/NotFound';
import AIAssistantPage from './pages/AIAssistantPage';
import SearchPage from './pages/SearchPage';
import GenerativeAIPage from './pages/GenerativeAIPage';
import ChatbotPage from './pages/ChatbotPage';
import TranslationPage from './pages/TranslationPage';
import VoicePage from './pages/VoicePage';
import { categories } from './companyData';

const queryClient = new QueryClient();

function App() {
  // Separate the Taiwan 50+ category from the rest
  const regularCategories = categories.filter(cat => cat.slug !== 'taiwan-50plus');
  const taiwan50PlusCategory = categories.find(cat => cat.slug === 'taiwan-50plus');

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/enterprise-ai-assistant" element={<AIAssistantPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/generative-ai" element={<GenerativeAIPage />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
            <Route path="/translation" element={<TranslationPage />} />
            <Route path="/voice" element={<VoicePage />} />

            {/* Other categories still use CategoryLayout for now */}
            {regularCategories.filter(c => c.slug !== 'enterprise-ai-assistant').map(category => (
              <Route key={category.slug} path={`/${category.slug}`} element={<CategoryLayout categorySlug={category.slug} />} />
            ))}

            {/* Company detail pages */}
            <Route path="/:categorySlug/:companyId" element={<CompanyDetail />} />

            {/* Taiwan 50+ routes */}
            {taiwan50PlusCategory && (
              <>
                <Route path={`/${taiwan50PlusCategory.slug}`} element={<Taiwan50Plus />} />
                <Route path={`/${taiwan50PlusCategory.slug}/:companyId`} element={<Taiwan50DetailUse />} />
              </>
            )}
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
