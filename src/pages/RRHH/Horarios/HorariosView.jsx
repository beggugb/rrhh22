import React from "react";
import { Row, Col  } from "reactstrap";

import TableHorarios from "./components/TableHorarios";
import EditHorario from "./components/EditHorario"
import SubMenu from '../../../components/subRRHH.jsx';
import { RecursosRouter } from '../../../routes'
const HorariosView = () => {      


  return(
    <>    
    <div className="content">     
      <div className="main-contenido">        
      <SubMenu items={RecursosRouter} prop='Horarios'/>
         <div className="card-contenidos"> 
         <Row>
            <Col md={3} className="marco">
            <EditHorario/>
            </Col>
            <Col md={9} className="marco">
            <TableHorarios/>
            </Col>            
         </Row>
         </div>
      </div>
    </div>    
    </>
  )

};
export default HorariosView;
