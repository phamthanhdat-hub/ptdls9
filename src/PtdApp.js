
import './App.css';
import{React, useEffect, useState} from 'react';
import axios from "axios"
import PtdstudentList from './components/PtdstudentList';


function PtdApp() {
  //su dung ham UseState cua hook
  const[ptdstudentList, setPtdstudentList]=useState([]);
  //Get data form api
const ptdGetStudent =async () =>{
try{
  const response = await axios.get("https://666a49837013419182cebdc5.mockapi.io/api/Ptdv1/ptdStudent");
  setPtdstudentList(response.data);

} catch (error) {
 console.error("Error fetching data:",error);
}
};
useEffect(() =>{
  ptdGetStudent();
}, []);
  return (
    <div className="container border mt-5 p-3">
      <h1 className='text-conter my-3'> Xu ly chuc nang CRUD - Hook -API</h1>
      <hr/>
      <PtdstudentList renderPtdstudentList ={ptdstudentList} />
    </div>
  );
}

export default PtdApp;
