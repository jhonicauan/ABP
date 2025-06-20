import Homepage from './pages/homePage/homePage'
import Mainheader from './components/main_header/main_header'
import LoginPage from './pages/loginPage/loginPage'
import ListAlunosPage from './pages/listAlunosPage/ListAlunosPage'
import AddAlunosPage from './pages/addAlunosPage/addAlunosPage'
import EditAlunosPage from './pages/editAlunosPage/editAlunosPage'
import ListProfessoresPage from './pages/listProfessoresPage/listProfessoresPage'
import AddProfessoresPage from './pages/addProfessoresPage/addProfessoresPage'
import EditProfessoresPage from './pages/editProfessoresPage/editProfessoresPage'
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
        <Route path='/addalunos' element={<AddAlunosPage></AddAlunosPage>}/>
        <Route path='/listprofessores' element={<ListProfessoresPage></ListProfessoresPage>}/>
        <Route path='/editProfessores/:idProfessor' element={<EditProfessoresPage></EditProfessoresPage>}/>
        <Route path='/addprofessores' element={<AddProfessoresPage></AddProfessoresPage>}/>
        
         8c300e98702b15ab77d264125b685f93a9ac6eef
      </Routes>
    </Router>
   </>
  )
}

export default App
