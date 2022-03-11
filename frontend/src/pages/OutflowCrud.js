import React from 'react'
//List
import { List, Datagrid,  TextField, DateField, SelectField, EditButton, DeleteButton } from 'react-admin';

// & Ceate
import {Edit, Create, SimpleForm, TextInput, DateInput, SelectInput} from 'react-admin';

const YesNoChoices=[
    {id:"1", amount:"Yes"},
    {id:"0", amount:"No"}
];

//model 
// {
//   "id": 1,
//   "amount": 200.0,
//   "date": "2022-03-09",
//   "type": 1,
//   "repetitive": false,
//   "repetition_interval": 1,
//   "repetition_time": 2,
//   "created_at": "2022-03-09T14:46:52.425137Z"
// }

export const OutflowList = (props) => {

  return (
    <List {...props}>
        <Datagrid>
            <TextField source ='id'/>
            <TextField source ='amount'/>
            <TextField source ='repetition_time'/>
            <DateField source ='date'/>
            <SelectField source ='type' choices={YesNoChoices}/>
            <TextField source ='repetition_interval'/> 
            <SelectField source ='repetitive' choices={YesNoChoices}/>          
            <DateField source ='created_at'/>            
            <EditButton basePath='/outflows'/>
            <DeleteButton basePath='/outflows'/>
        </Datagrid>
    </List>
  )
}

export function OutflowCreate(props) {
    
  return (
    <Create title='Create Outflow' {...props}>
         <SimpleForm>
            <TextInput source ='amount'/>
            <DateInput source ='date'/>
            <SelectInput source ='type' choices={YesNoChoices}/>
            <SelectInput source ='repetitive' choices={YesNoChoices}/>
            <TextInput source ='repetition_interval'/>  
            <TextInput source ='repetition_time'/>
            <DateInput source ='created_at'/>
        </SimpleForm>        
    </Create>
  )
}

export function OutflowEdit(props) {
     
  return (
    <Edit title='Edit Outflow' {...props}>
         <SimpleForm>
         <TextInput source ='amount'/>
            <DateInput source ='date'/>
            <SelectInput source ='type' choices={YesNoChoices}/>
            <SelectInput source ='repetitive' choices={YesNoChoices}/>
            <TextInput source ='repetition_interval'/>  
            <TextInput source ='repetition_time'/>
            <DateInput source ='created_at'/>
        </SimpleForm>        
    </Edit>
  )
}

