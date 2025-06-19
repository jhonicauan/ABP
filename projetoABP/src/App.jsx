import Homepage from './pages/homePage/homePage'
import Mainheader from './components/main_header/main_header'
import LoginPage from './pages/loginPage/loginPage'
import ListAlunosPage from './pages/listAlunosPage/listAlunosPage'
import EditAlunosPage from './pages/editAlunosPage/editAlunosPage'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
   <>
    <Router>
        <Mainheader></Mainheader>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/home' element={<Homepage></Homepage>}/>
        <Route path='/listalunos' element={<ListAlunosPage></ListAlunosPage>}/>
        <Route path='/editalunos/:idAluno' element={<EditAlunosPage></EditAlunosPage>}/>
      </Routes>
    </Router>
   </>
  )
}

export default App
