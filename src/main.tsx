import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom'
import App from './App.tsx'
import ChatbotService from './pages/services/ChatbotService.tsx'
import ContentService from './pages/services/ContentService.tsx'
import RevenueService from './pages/services/RevenueService.tsx'
import InsightsService from './pages/services/InsightsService.tsx'
import ConsultingService from './pages/services/ConsultingService.tsx'
import AutomationService from './pages/services/AutomationService.tsx'
import PositioningService from './pages/services/PositioningService.tsx'
import Blog from './pages/blog/Blog.tsx'
import BlogPost from './pages/blog/BlogPost.tsx'
import RhidonPage from './pages/RhidonPage.tsx'
import BioPage from './pages/BioPage.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/servicos/chatbot",
    element: <ChatbotService />,
  },
  {
    path: "/servicos/conteudo",
    element: <ContentService />,
  },
  {
    path: "/servicos/receita",
    element: <RevenueService />,
  },
  {
    path: "/servicos/insights",
    element: <InsightsService />,
  },
  {
    path: "/servicos/consultoria",
    element: <ConsultingService />,
  },
  {
    path: "/servicos/automacoes",
    element: <AutomationService />,
  },
  {
    path: "/servicos/posicionamento",
    element: <PositioningService />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:slug",
    element: <BlogPost />,
  },
  {
    path: "/protocolo-dominio",
    element: <RhidonPage />,
  },
  {
    path: "/bio",
    element: <BioPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)