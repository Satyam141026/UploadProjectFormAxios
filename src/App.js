
import './App.css';
import {useState } from 'react';
import swal from 'sweetalert';
import { token, url } from './Helper';

function App() {

  const [studentname ,setData]=useState("")
  //useEffect(() => {

  //},[]);
  let myfunction=()=>{

console.log(studentname)
var data={
   "data": {
  "name": studentname 
}
}

fetch(
  url
  , { method: 'POST',
  headers:{
    'Authorization':'Bearer '+token,
    'Content-Type': 'application/json', 
  //'Accept: application/json'
  },
  body: JSON.stringify(data)
}) .then(response => response.json())
.then((d)=>
{
  if('error' in d){


    if(d.error.status=== 401){

      // console.log("Error",d.error.message)
       swal(d.error.name,d.error.message,"error")
       }
  }
  else{
    if(Object.keys(d.data).length!== 0){

      swal("good job", "Data has been has created","success")
      
      }

  }
  //console.log(d.error.status)
  //console.log(d.error.message,d.error.name)


}).catch((e)=>{

console.log("errt",e);

}).finally((all)=>{
 
  
});
  }
  return (
    <div className="App">
      {studentname }
  <form>
      <label>Enter your name:
        <input type="text" value={studentname} autoFocus onChange={(e)=>{setData(e.target.value)}} />
      </label>
      <input type="button" name="student" onClick={myfunction} value="save button" />
    </form>
    </div>
  );
}

export default App;