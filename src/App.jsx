import { useState } from "react";
import "./App.css";
import Cart, { totalCredit } from "./Components/Cart/Cart";
import Courses from "./Components/Courses/Courses";

function App() {
  const [carts,setCart]=useState([])
  const handleCourseSelection = (course)=>{
    // console.log(course)
    const credits=carts.reduce((p,c)=>p+c.credit,0)
    if(credits+course.credit>totalCredit){
     return alert(`Only ${totalCredit} credits are allowed`)
    }
    const alreadyExist=carts.find(c=>c.id===course.id)
    if(!alreadyExist){
      const newCart=[...carts,course]
    setCart(newCart)

    }
    
  }
  return (
    <div className="w-10/12 mx-auto mt-8">
      <h1 className="text-3xl text-center font-medium ">Course Registration</h1>
      <div className="flex gap-6 py-10">
        <Courses handleCourseSelection={handleCourseSelection}></Courses>
        <Cart carts={carts}></Cart>
      </div>
    </div>
  );
}

export default App;
