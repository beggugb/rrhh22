import React,{useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Row,Col,Button, Form, Modal, ModalBody, FormGroup, Input, Label, Card  } from "reactstrap"
import { crudActions, mailActions } from '../../../../actions'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCheck, faReceipt, faEdit, faSearch, faPlus ,faFilePdf, faTimes } from "@fortawesome/free-solid-svg-icons";
import { customs } from '../../../../helpers/customStyles'
import Select from 'react-select'  
import ProspectoResumen from "./ProspectoResumen";
import  { registerLocale } from  "react-datepicker";
import { defaultVal } from "../../../../helpers/funciones";
import es from 'date-fns/locale/es';
registerLocale('es', es)

const page =[{"value":'observaciones',"label":'glosa'},
             {"value":'cliente',"label":'cliente'}
            ];

const SearchVenta = ({getComponent}) => {
    const dispatch = useDispatch()    
    const fecha = new Date()
    const { total, indicador, estado}= useSelector(state => state.prospectos)    
    const [prop, setProp] = useState('observaciones');
    const [value, setValue] = useState("");
    const [view, setview] = useState(false);    
    const [viewz, setviewz] = useState(false);
    const [viewy, setviewy] = useState(false);
    const [nombres, setnombres] = useState("");
    const [email, setemail] = useState("");
    const [observaciones, setobservaciones] = useState("");
    

   const changeSelect = (pky) => {        
      const { value } = pky
      setProp(value)
      setValue('')
    };
        
    const submitHandle = event => {       
      event.preventDefault()  
      let iok = {}               
      iok.value = value
      iok.prop  = prop
      dispatch(crudActions.GET_SEARCH('PROSPECTOS_DATA','prospectos',iok))              
   }  
  
    const createHandle = () => { 
      let eItem = {                            
        fecha: fecha,
        nombre:'s-n',
        tipo:'',
        vencimiento:'',
        nivel:0,
        estado:false,
        observaciones:'',
        resultado:0,
        medidas:0,
        articuloId:8
      }
      dispatch(crudActions.SET_ADD('PROSPECTOS_DATA','prospectos',eItem,'lista'))      
      dispatch({type:'PROSPECTOS_INDICADOR',value:0,estado:'pendiente',indicadorTotal:0})                                           
   }

   const onBorrar = () => {            
    dispatch(crudActions.GET_DELETE('PROSPECTOS_DATA','prospectos',indicador,'lista'))      
    dispatch({type:'PROSPECTOS_INDICADOR',value:0,estado:'pendiente',indicadorTotal:0})
    setview(false)

  };

  const toggleModalView = () => {        
    setview(!view)                  
  };


  const toggleModalViewz = () => {        
    setviewz(!viewz)                   
  };
  const toggleModalViewy = () => {        
    setviewy(!viewy)                   
  };

  const viewArticulo = () => { 
    dispatch(crudActions.GET_ITEM_LOAD('PROSPECTOS_ITEM','prospectos',indicador))
    /*dispatch(crudActions.GET_ITEM_LOAD('PROSPECTOS_ITEM','prospectos',key))*/
    setviewz(!viewz)
  }; 



const enviar = event => {    
  event.preventDefault()             
  let dato ={
    prospectoId: indicador,
    subject: nombres
  }
  dispatch(mailActions.SEND_MAIL('mails/sendprospecto',dato))
  dispatch({type:'PROSPECTOS_INDICADOR',value:0,estado:'pendiente',indicadorTotal:0})
  setnombres('')
  setobservaciones('')
  setemail('')
  setviewy(false)
  
};
    return (                                      
      <>  
      <Card>        
      <Row>        
        <Col md={1} >
          <div className="circule">
          <FontAwesomeIcon icon={faReceipt} className="ml-1 "/>  
          </div>        
        </Col>
        <Col md={4} className="cards">                
            <Button className={indicador !== 0 ? "btl bg-defaults text-white disabled": "btl bg-defaults text-white"}  onClick={()=> createHandle()}><FontAwesomeIcon icon={faPlus}/> </Button>                 
            <Button className={indicador === 0  || estado === 'cerrado'  ? "bts bg-default text-white disabled": "bts bg-default text-white"} onClick={()=> getComponent('edit',indicador)}>
                  <FontAwesomeIcon icon={faEdit} /></Button>            
                                       
            <Button className={indicador === 0 ? "bts bg-default text-white disabled": "bts bg-default text-white"} onClick={()=> viewArticulo()}>
                <FontAwesomeIcon icon={faFilePdf} /> </Button>         
            <Button className={indicador === 0  || estado === 'cerrado' ? "btr bg-default text-white disabled": "btr bg-default text-white"} onClick={()=> toggleModalViewy()} >
               <FontAwesomeIcon icon={faEnvelope} /></Button>     
        </Col>                 
        
        <Col md={1} className="cards text-right">
                 <Select                 
                        styles={customs}                                              
                        defaultValue={page[0]}
                        name="prop"    
                        id="prop"                    
                        options={page}      
                        isClearable={false}                          
                        value={defaultVal(page,prop)}    
                        onChange={ (e) => changeSelect(e)}                                             
                      />
        </Col>                
        
        <Col md={4} className="cards">                
                  <Form onSubmit={ submitHandle}> 
                  <FormGroup row>                                                          
                    <Col sm={10}>                    
                      <Input 
                      type="text" 
                      name="value"                                 
                      id="value"  
                      value={ value || '' }  
                      onChange={ (e) => {setValue(e.target.value)}} />
                      {
                      value ? 
                      <Button className="volatil" onClick={(e) => {setValue('')}}>
                        <FontAwesomeIcon icon={faTimes}   />
                      </Button>
                      : null
                    }         
                    </Col>    
                    <Button  className="btn-primary " sm={1}>
                      <FontAwesomeIcon icon={faSearch} />
                    </Button>
                    </FormGroup>       
                  </Form>               
        </Col>  
        <Col md={2}> 
        <p className="mt-3 ml-3" >{ total || 0 } PROMOCIONES</p>          
        </Col>  
      </Row>
      </Card> 

      <Modal isOpen={view} toggle={toggleModalView} className="deleteBody">  
          <ModalBody className="deleteConte">
          <Row>
              <Col md="12" >
              <p className="deletePe">desea borra el registro ?</p>  
              </Col>              
            </Row>
            <Row className="mt-3">
              <Col md="6" className="text-center">
              <Button className="btn-danger deleteCol"  onClick={() => toggleModalView()} >
                <FontAwesomeIcon icon={faTimes} />
              </Button>
              </Col>
              <Col md="6" className="text-center">
              <Button className="btn-success deleteCol"  onClick={() => onBorrar()} >
          <FontAwesomeIcon icon={faCheck} />
        </Button>
              </Col>
            </Row>
          </ModalBody>
      </Modal>

      <Modal isOpen={viewz} toggle={toggleModalViewz}>  
      <Button className="btn-view btn-danger"  onClick={() => toggleModalViewz()} >
            <FontAwesomeIcon icon={faTimes} />
          </Button>
          <ModalBody>
           <ProspectoResumen/>         
          </ModalBody>
      </Modal>
      <Modal isOpen={viewy} toggle={toggleModalViewy}>  
          <Button className="btn-view btn-danger"  onClick={() => toggleModalViewy()} >
            <FontAwesomeIcon icon={faTimes} />
          </Button>
          <ModalBody>
          <Card>
            <h6>Enviar cotizaci??n</h6>
          <Form onSubmit={ enviar}>   
          <Row>                       
              <Col md={12}>                
                  <FormGroup>
                    <Label for="estado">Subject :</Label>
                    <Input type="text" name="nombres" id="nombres" 
                    value={nombres || ''}                
                    onChange={ (e) => setnombres(e.target.value)} 
                    onInvalid={(e) => e.target.setCustomValidity('El campo es obligatorio !')}
                    onInput={(e) => e.target.setCustomValidity('')}
                    required 
                    />    
                  </FormGroup> 
              </Col>              
          </Row>        
          <Row>                                               
              <Col md={2}>                               
                <FormGroup>
                  <Button
                    type="submit"
                    className="btn-md btn-info mt-4">
                    <FontAwesomeIcon icon={faEnvelope} />  
                    {' '} Enviar
                  </Button>                  
                </FormGroup> 
              </Col>                                      
          </Row> 
          </Form> 
          </Card>  
          </ModalBody>
      </Modal>
    </>                    
    );
};
export default SearchVenta;
