import React,{useState, useEffect, useCallback} from "react";
import { Table, Row, Col, Card, CardBody, CardFooter  } from "reactstrap";
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../../actions'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Pagination from '../../../../components/Pagination'


const TableAprobados = ({getComponent}) => {
   const dispatch = useDispatch() 
   const [pag, setpag] = useState(15);
   const {data,pagina,paginas}= useSelector(state => state.procesos)
   const usuario = JSON.parse(localStorage.getItem('@userUnity'))

   const makeHttpRequestWithPage = (page, num) =>{
    dispatch(crudActions.GET_DATA('PROCESOS_DATA','procesos',page, num,true,usuario.id))  
   }
  useEffect(() => {
      makeHttpRequestWithPage(1,15)
      return () => {
      /*    cleanup*/
      /*dispatch({type:'PROCESOS_RESET_DATA'})*/
      };
  }, []);

  return(
    <>    
    <Row>
      <Col>
        <Card>
          <CardBody>
            <Table className="table-simple">
          <thead>
              <tr>                    
                  <th width="10%">Nº</th>                  
                  <th width="10%">Tipo</th>
                  <th width="80%">Descripción</th>                                                                     
              </tr>
          </thead>
          {data && (
              <tbody>
                  {data.map((item) => (
                      <tr key={item.id}>                                       
                        <td>{item.numero}</td>                        
                        <td>{item.tipo}</td>
                        <td>{item.glosa}</td>      
                        <td><FontAwesomeIcon icon={faCheck} className="trverde"/></td>                    
                      </tr>  
                      ))}
              </tbody>
          )}
        </Table>
        </CardBody>    
    <CardFooter>
        <Row>                                            
              <Col md={12} >
                  <Pagination
                    makeHttpRequestWithPage={ makeHttpRequestWithPage }              
                    paginas={paginas}
                    current= {pagina} 
                    pagina= {pag}
                  />
              </Col>                                      
        </Row>   
        </CardFooter> 
        </Card>  
      </Col>
    </Row>  
    
</>      
  )

};
export default TableAprobados;
