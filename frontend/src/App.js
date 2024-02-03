import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';



import { ToDoAdd } from "./ToDoAdd";
import { NavBar } from "./NavBar";
import { ToDoShow } from "./ToDoShow";
import { ToDoDetail } from "./ToDoDetail";
import { UpdateToDo } from "./UpdateToDo";





function App() {

  

  return (
    <>
    <BrowserRouter>
      <div>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<ToDoAdd />}/>
          <Route path="/todoshow" element={<ToDoShow />}/>
          <Route path="/:id" element={<ToDoDetail />}/>
          <Route path="/:id/update" element={<UpdateToDo />}/>
          
        </Routes>
        </div>
    </BrowserRouter>
    </>  
    
  );
}

export default App;
