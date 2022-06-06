import React,{useEffect, useCallback, useState} from "react";
import { CardBody, CardFooter,  Table, Row, Col, Input, FormGroup, Label, Card  } from "reactstrap";
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../../actions'
import Pagination from '../../../../components/Pagination'
import Select from 'react-select'  
import Moment from 'react-moment'
import { customStyles } from '../../../../helpers/customStyles'
import { defaultVal } from "../../../../helpers/funciones";
import { pages } from "../../../../helpers/dataLoad";

const TableCobros = ({getComponent}) => {
  const dispatch = useDispatch() 
  const [pag, setpag] = useState(15);
  const {data,pagina,paginas,indicador }= useSelector(state => state.cobros)
  const empresa = JSON.parse(localStorage.getItem('@userEmpresa'))
  
  const makeHttpRequestWithPage = (page, num) =>{
   dispatch(crudActions.GET_DATA('COBROS_DATA','notas/cobros',page, num,'fechaPago','desc'))        
  }

 const changeSelect = (pky) => {        
   const {value, label} = pky
   setpag(value)
   makeHttpRequestWithPage(1,value)
 };

 useEffect(() => {
      makeHttpRequestWithPage(1,pag)
     return () => {
      dispatch({type:'COBROS_RESET_DATA'})
     };
 }, []);

 const setIndicador = (pky,est,venta) => {            
   let iok = pky === indicador  ? 0 : pky
   dispatch({type:'COBROS_INDICADOR',value:iok,estado:est,venta:venta}) 
 };

   
return(
  <>    
  <Row>
    <Col>
      <Card>
        <CardBody>
          <Table className="table-simple">
        <thead>
            <tr>  

                <th width="5%"></th>
                <th width="10%">Id</th>                                
                <th width="35%">Glosa</th>
                <th width="10%">Fecha Pago</th>
                <th width="10%">Cuota</th>                  
                <th width="10%">Monto</th>
                <th width="10%">Estado</th>                
                <th width="10%">Nº Venta</th>                
                <th width="10%">Finan</th>               
                
            </tr>
        </thead>
        {data && (
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>                                                                  
                      <td >                       
                      <Input type="checkbox" 
                      onChange={() => { setIndicador(item.id, item.estado, item.ventaId) }} 
                      checked={ item.id === indicador ? true : false}
                      /></td>                      
                      <td>{item.id}</td>
                      <td>{item.glosa}</td>
                      <td><Moment format="DD-MM-YYYY">{item.fechaPago}</Moment></td>                                 
                      <td>{item.cuota }</td>             
                      <td>{new Intl.NumberFormat('es-'+empresa.pais,{style: "currency",currency:empresa.moneda,minimumFractionDigits: 2}).format(item.monto)}</td>                      
                      <td>{item.estado}</td>              
                      <td>{item.ventaId}</td>                                                                                   
                      <td>{item.est ? "pagado":"pendiente"}</td>                                                                                  
                    </tr>  
                    ))}
            </tbody>
        )}
      </Table>
    </CardBody>    
    <CardFooter>     
  <Row>  
  <Col md={6} >
                <Pagination
                  makeHttpRequestWithPage={ makeHttpRequestWithPage }              
                  paginas={paginas}
                  current= {pagina} 
                  pagina= {pag}
                />
            </Col>          
            <Col md={4}>                  
            </Col>
            <Col md={2}>   
              <FormGroup row>
                <Label for="exampleEmail" sm={4}>Mostrar</Label>
                <Col sm={7}>
                    <Select                 
                      styles={customStyles}                                              
                      defaultValue={pages[0]}
                      name="pag"    
                      id="pag"                    
                      options={pages}      
                      isClearable={false}                          
                      value={defaultVal(pages,pag)}    
                      onChange={ (e) => changeSelect(e)}                                             
                    />
                </Col>
                </FormGroup>
            </Col>  
  </Row>  
  </CardFooter> 
      </Card>  
    </Col>
  </Row>    
</>       
      
)

};
export default TableCobros;