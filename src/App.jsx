import './App.css'
import { Routes, Route } from 'react-router-dom'
//Components
import NavBar from './Components / Nav/NavBar'
//Pages
import AboutPage from './Pages/AboutPage'
import HomePage from './Pages/HomePage'
import BudgetPage from './Pages/BudgetPage'
import EventDesign from './Pages/EventDesign'
import NotFoundPage from './Pages/NotFoundPage'
import TaskManager from './Pages/TaskManager'

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/taskedit" element={<TaskManager />} />
        <Route path="/budget" element={<BudgetPage />} />
        <Route path="/design" element={<EventDesign />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
