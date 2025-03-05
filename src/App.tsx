import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from '@/router'
import MainLayout from '@/layouts/MainLayout'

function App() {
  return (
    <Router>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </Router>
  )
}

export default App