import React,{useEffect, useCallback} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../../actions'
import { custom } from '../../../../helpers/customStyles'
import { Label, FormGroup } from "reactstrap"
import Select from "react-select";
const defaultVal = (options, valor) =>{
    return options.filter(item =>
        item.value === valor
      )
  
  }

const SelectDepartamento = () => {
    const dispatch = useDispatch()    
    const { data } = useSelector(state => state.departamentos)
    const { item } = useSelector(state => state.cargos)

    const makeHttpRequestWithPage = useCallback(() =>{
        dispatch(crudActions.GET_LIST('DEPARTAMENTOS_LISTA','departamentos','nombre','asc'))          
      },[])
    
    const changeHandler = event => {    
        let io = event ? event.value: 0    
        dispatch(crudActions.SET_CHANGE('CARGOS_CHANGE','departamentoId',io))        
    }     
    
    useEffect(() => {
       makeHttpRequestWithPage()
        return () => {
            
        };
    }, []);

    return (              
        <FormGroup> 
        <Label for="departamentos">Departamentos</Label>
        <Select
            defaultValue={data[0]}
            name="departamentoId"    
            id="departamentoId"                    
            options={data} 
            styles={custom}
            onChange={ (e) => changeHandler(e) }                         
            value={defaultVal(data,parseInt(item.departamentoId))} 
        />    
        </FormGroup>                                             
    );
};
export default SelectDepartamento;
