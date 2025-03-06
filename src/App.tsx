import { HashRouter } from 'react-router-dom'
import AppRoutes from '@/router'
import MainLayout from '@/layouts/MainLayout'
import ScrollToTop from '@/components/utils/ScrollToTop'

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </HashRouter>
  )
}

export default App