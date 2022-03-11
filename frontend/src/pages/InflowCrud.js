import React from 'react'
//List
import { List, Datagrid,  TextField, DateField, SelectField, EditButton, DeleteButton } from 'react-admin';

// & Ceate
import {Edit, Create, SimpleForm, TextInput, DateInput, SelectInput} from 'react-admin';

const YesNoChoices=[
    {id:"1", name:"Yes"},
    {id:"0", name:"No"}
];

//model
// {
//   "amount": 1000.0,
//   "date": "2022-03-24",
//   "type": 1
// },

export const InflowList = (props) => {

  return (
    <List {...props}>
        <Datagrid>           
            <TextField source ='amount'/>
            <DateField source ='date'/>
            <SelectField source ='type' choices={YesNoChoices}/>         
            <EditButton basePath='/inflows'/>
            <DeleteButton basePath='/inflows'/>
        </Datagrid>
    </List>
  )
}


export function InflowCreate(props) {
    
  return (
    <Create title='Create Inflow' {...props}>
         <SimpleForm>
            <TextInput source ='amount'/>
            <DateInput source ='date'/>
            <SelectInput source ='type' choices={YesNoChoices}/> 
        </SimpleForm>        
    </Create>
  )
}

export function InflowEdit(props) {
     
  return (
    <Edit title='Edit Inflow' {...props}>
         <SimpleForm>           
            <TextInput source ='amount'/>
            <DateInput source ='date'/>
            <SelectInput source ='type' choices={YesNoChoices}/> 
        </SimpleForm>        
    </Edit>
  )
}

 
