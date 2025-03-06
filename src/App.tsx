import { HashRouter } from 'react-router-dom'
import AppRoutes from '@/router'
import MainLayout from '@/layouts/MainLayout'

function App() {
  return (
    <HashRouter>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </HashRouter>
  )
}

export default App