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
import ProgrammingPage from './pages/ProgrammingPage';
import RoboticsPage from './pages/RoboticsPage';
import DefensePage from './pages/DefensePage';
import MedicalPage from './pages/MedicalPage';
import CustomerServicePage from './pages/CustomerServicePage';
import CybersecurityPage from './pages/CybersecurityPage';
import CrmSalesPage from './pages/CrmSalesPage';
import LegalPage from './pages/LegalPage';
import DrugDevelopmentPage from './pages/DrugDevelopmentPage';
import SmartManufacturingPage from './pages/SmartManufacturingPage';
import MiningPage from './pages/MiningPage';
import MangaTranslationPage from './pages/MangaTranslationPage';
import AntiFraudPage from './pages/AntiFraudPage';
import AutonomousVehiclesPage from './pages/AutonomousVehiclesPage';
import HrPage from './pages/HrPage';
import FinanceAccountingPage from './pages/FinanceAccountingPage';
import GameDevelopmentPage from './pages/GameDevelopmentPage';
import EnterpriseContentManagementPage from './pages/EnterpriseContentManagementPage';
import InsurancePage from './pages/InsurancePage';
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
            <Route path="/programming" element={<ProgrammingPage />} />
            <Route path="/robotics" element={<RoboticsPage />} />
            <Route path="/defense" element={<DefensePage />} />
            <Route path="/medical" element={<MedicalPage />} />
            <Route path="/customer-service" element={<CustomerServicePage />} />
            <Route path="/cybersecurity" element={<CybersecurityPage />} />
            <Route path="/crm-sales" element={<CrmSalesPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/drug-development" element={<DrugDevelopmentPage />} />
            <Route path="/smart-manufacturing" element={<SmartManufacturingPage />} />
            <Route path="/mining" element={<MiningPage />} />
            <Route path="/manga-translation" element={<MangaTranslationPage />} />
            <Route path="/anti-fraud" element={<AntiFraudPage />} />
            <Route path="/autonomous-vehicles" element={<AutonomousVehiclesPage />} />
            <Route path="/hr" element={<HrPage />} />
            <Route path="/finance-accounting" element={<FinanceAccountingPage />} />
            <Route path="/game-development" element={<GameDevelopmentPage />} />
            <Route path="/enterprise-content-management" element={<EnterpriseContentManagementPage />} />
            <Route path="/insurance" element={<InsurancePage />} />

            {/* Other categories still use CategoryLayout for now */}
            {/* 移除 CategoryLayout fallback，所有 tech 分類皆有專屬分頁 */}
            {regularCategories.filter(c => !['programming','robotics','defense','medical','customer-service','cybersecurity','crm-sales','legal','drug-development','smart-manufacturing','mining','manga-translation','anti-fraud','autonomous-vehicles','hr','finance-accounting','game-development','enterprise-content-management','insurance','enterprise-ai-assistant'].includes(c.slug)).map(category => (
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
