import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';



import { ToDoAdd } from "./ToDoAdd";
import { NavBar } from "./NavBar";
import { UpdateToDo } from "./UpdateToDo";
import { ToDoShow_02 } from "./ToDoShow_02";
import { ToDoDetail_02 } from "./ToDoDetail_02";





function App() {

  

  return (
    <>
    <BrowserRouter>
      <div>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<ToDoAdd />}/>
          {/* <Route path="/todoshow" element={<ToDoShow />}/> */}
          <Route path="/todoshow" element={<ToDoShow_02 />}/>
          {/* <Route path="/todoshow/:id" element={<ToDoDetail />}/> */}
          <Route path="/todoshow/:id" element={<ToDoDetail_02 />}/>
          <Route path="/todoshow/:id/update" element={<UpdateToDo />}/>
          
        </Routes>
        </div>
    </BrowserRouter>
    </>  
    
  );
}

export default App;
