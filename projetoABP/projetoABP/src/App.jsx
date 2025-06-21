import Homepage from './pages/homePage/homePage'
import Mainheader from './components/main_header/main_header'
import LoginPage from './pages/loginPage/loginPage'
import ListAlunosPage from './pages/listAlunosPage/ListAlunosPage'
import AddAlunosPage from './pages/addAlunosPage/addAlunosPage'
import EditAlunosPage from './pages/editAlunosPage/editAlunosPage'
import ListProfessoresPage from './pages/listProfessoresPage/listProfessoresPage'
import AddProfessoresPage from './pages/addProfessoresPage/addProfessoresPage'
import EditProfessoresPage from './pages/editProfessoresPage/editProfessoresPage'
import AddMateriasPage from './pages/addMateriasPage/addMateriasPage'
import EditMateriasPage from './pages/editMateriasPage/editMateriasPage'
import ListMateriasPage from './pages/listMateriasPage/listMateriasPage'
import ListSalasPage from './pages/listSalasPage/listSalasPage'
import AddSalasPage from './pages/addSalasPage/addSalasPage'
import EditSalasPage from './pages/editSalasPage/editSalasPage'
import AddLecionaPage from './pages/addLecionaPage/addLecionaPage'
import ListLecionaPage from './pages/listLecionaPage/ListLecionaPage'
import EditLecionaPage from './pages/editLecionaPage/editLecionaPage'
import "react-widgets/styles.css";
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
        <Route path='/addmaterias' element={<AddMateriasPage></AddMateriasPage>}/>
        <Route path='/editmaterias/:idMateria' element={<EditMateriasPage></EditMateriasPage>}/>
        <Route path='/listmaterias' element={<ListMateriasPage></ListMateriasPage>}/>
        <Route path='/listsalas' element={<ListSalasPage></ListSalasPage>}/>
        <Route path='/addsalas' element={<AddSalasPage></AddSalasPage>}/>
        <Route path='/editsalas/:idSala' element={<EditSalasPage></EditSalasPage>}/>
        <Route path='/addleciona' element={<AddLecionaPage></AddLecionaPage>}/>
        <Route path='/listleciona' element={<ListLecionaPage></ListLecionaPage>}/>
        <Route path='/editleciona/:idLeciona' element={<EditLecionaPage></EditLecionaPage>}/>
        

        
         8c300e98702b15ab77d264125b685f93a9ac6eef
      </Routes>
    </Router>
   </>
  )
}

export default App
