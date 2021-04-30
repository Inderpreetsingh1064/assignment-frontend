import React, { useEffect, useState } from 'react';
import { Col, Container, Row ,Card} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import ChartsPage from '../ChartsPage';
import axiosInstance from '../../helpers/axios';
/**
* @author
* @function Home
**/
const Home = (props) => {
  const[res,setRes]=useState();
  const temp=async()=>{
    var ress=await axiosInstance.get('/college/getCollegeName');
    setRes(ress);
  }
  const getCollegeName=()=>{
    if(!res){
      temp();
    }
    else{
    let myCollegeName=[];
    var i=0;
     for(let obj of res.data.collegename){
       myCollegeName.push(
         <tr key={i}>
           <td>{i}</td>
           <td>{obj.Name} </td>
           <td>  <Button variant="outline-dark">Details</Button> </td>
           <td>{obj._id} </td>
         </tr>
       );
       i++;
     }
    return myCollegeName;}
  }
  return (
    <Container fluid>
      <Row>
        <Col md={3} className="sidebar">
          <ChartsPage></ChartsPage>
        </Col>
        <Col md={9} style={{ marginLeft: "auto" }}>
          <Card>
            <Card.Body>
              <h1>Colleges All Over World!</h1>
              <Table responsive className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th key={0}>College Name</th>
                    <th key={1}>College Details</th>
                    <th key={2}>College Id</th>
                  </tr>
                </thead>
                <tbody>{getCollegeName()}</tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
