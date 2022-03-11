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
//   "id": 1,
//   "amount": 1000.0,
//   "date": "2022-03-09",
//   "type": "1",
//   "created_at": "2022-03-09T14:41:46.898134Z"
// },

export const BalanceList = (props) => {

  return (
    <List {...props}>
        <Datagrid>
            <TextField source ='id'/>
            <TextField source ='amount'/>
            <DateField source ='date'/>
            <SelectField source ='type' choices={YesNoChoices}/>
            <DateField source ='created_at'/>           
            <EditButton basePath='/balances'/>
            <DeleteButton basePath='/balances'/>
        </Datagrid>
    </List>
  )
}


export function BalanceCreate(props) {
    
  return (
    <Create title='Create balance' {...props}>
         <SimpleForm>
            <TextInput source ='amount'/>
            <DateInput source ='date'/>
            <SelectInput source ='type' choices={YesNoChoices}/>
            <DateInput source ='created_at'/>   
        </SimpleForm>        
    </Create>
  )
}

export function BalanceEdit(props) {
     
  return (
    <Edit title='Edit balance' {...props}>
         <SimpleForm>
            <TextInput disabled source ='id'/>
            <TextInput source ='amount'/>
            <DateInput source ='date'/>
            <SelectInput source ='type' choices={YesNoChoices}/>
            <DateInput source ='created_at'/>    
        </SimpleForm>        
    </Edit>
  )
}


