import React from 'react';
import { Container } from "react-bootstrap";
import Menu from './Menu';
import  {useEffect, useState, useRef } from "react";
import { read, utils,  } from 'xlsx';

const Chance = () => {
//const [data, setData] = useState([]);
const [pres, setPres] = useState([]);
const [__html, setHtml] = useState("");
const tbl = useRef(null);





useEffect(() => { (async() => {
  const f = await (await fetch("http://localhost:8080/import/importExcelChance/data.xlsx", {mode:'no-cors'})
 ).arrayBuffer();
  const wb = read(f); // parse the array buffer
  const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
  const data = utils.sheet_to_json(ws); // generate objects
  setHtml(data); // update state
  console.log(ws)
})(); }, []);





  return (
    
     
        <Container>
        <Menu />
        <>
  
    <div ref={tbl} dangerouslySetInnerHTML={{ __html }} />
  </>
     
      </Container>
  )

}
export default Chance;
