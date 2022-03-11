import React from 'react'
//List
import { List, Datagrid,  TextField, DateField, SelectField, EditButton, DeleteButton } from 'react-admin';

// & Ceate
import {Edit, Create, SimpleForm, TextInput, DateInput, SelectInput} from 'react-admin';

const YesNoChoices=[
    {id:"1", title:"Yes"},
    {id:"0", title:"No"}
];

//model
// {
//   "id": 1,
//   "title": "Cash recovery",
//   "date": "2022-03-10",
//   "notes": "just testing out this might turn out",
//   "transaction_type": 3,
//   "amount": "3000.00",
//   "last_modified": "2022-03-09T14:54:58.723570Z",
//   "src": 7,
//   "dst": 1,
//   "recurrence": null
// },

// const TransactionTitle = ({ record }) => {
//   return <span>Transaction {record ? `"${record.title}"` : ''}</span>;
// };

export const TransactionList = (props) => {

  return (
    <List {...props}>
        <Datagrid>
            <TextField source ='id'/>
            <TextField source ='title'/>
            <DateField source ='date'/>
            <TextField source ='notes'/>   
            <SelectField source ='transaction_type' choices={YesNoChoices}/>            
            <TextField source ='amount'/>
            <DateField source ='last_modified'/>                      
            <SelectField source ='src' choices={YesNoChoices}/>
            <SelectField source ='dst' choices={YesNoChoices}/>
            <EditButton basePath='/transactions'/>
            <DeleteButton basePath='/transactions'/>
        </Datagrid>
    </List>
  )
}


export function TransactionCreate(props) {
    
  return (
    <Create title='Create Transaction' {...props}>
         <SimpleForm>
            <TextInput source ='title'/>
            <DateInput source ='date'/>
            <TextInput source ='notes'/>           
            <SelectInput source ='transaction_type' choices={YesNoChoices}/>
            <TextInput source ='amount'/>  
            <DateInput source ='last_modified'/>
            <SelectInput source ='src' choices={YesNoChoices}/>
            <SelectInput source ='dst' choices={YesNoChoices}/>
            <TextInput source ='recurrence'/>  
        </SimpleForm>        
    </Create>
  )
}

export function TransactionEdit(props) {
     
  return (
    <Edit  title='Edit Transaction' {...props}>
         <SimpleForm>
            <TextInput disabled source ='id'/>
            <TextInput source ='title'/>
            <DateInput source ='date'/>
            <TextInput source ='notes'/>           
            <SelectInput source ='transaction_type' choices={YesNoChoices}/>
            <TextInput source ='amount'/>  
            <DateInput source ='last_modified'/>
            <SelectInput source ='src' choices={YesNoChoices}/>
            <SelectInput source ='dst' choices={YesNoChoices}/>
            <TextInput source ='recurrence'/>   
        </SimpleForm>        
    </Edit>
  )
}


