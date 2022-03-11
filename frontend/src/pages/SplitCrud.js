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
//   "id": 2,
//   "title": "Second split",
//   "amount": "3000.00",
//   "date": "2022-03-24",
//   "last_modified": "2022-03-09T14:53:26.233730Z",
//   "account": 6,
//   "opposing_account": 3,
//   "category": 5,
//   "transaction": null
// },

// const SplitTitle = ({ record }) => {
//   return <span>Split {record ? `"${record.title}"` : ''}</span>;
// };

export const SplitList = (props) => {

  return (
    <List {...props}>
        <Datagrid>
            <TextField source ='id'/>
            <TextField source ='title'/>
            <TextField source ='amount'/>
            <DateField source ='date'/>
            <DateField source ='last_modified'/>
            <SelectField source ='account' choices={YesNoChoices}/>
            <SelectField source ='opposing_account' choices={YesNoChoices}/>
            <SelectField source ='category' choices={YesNoChoices}/>
            <TextField source ='transaction'/>             
            <EditButton basePath='/splits'/>
            <DeleteButton basePath='/splits'/>
        </Datagrid>
    </List>
  )
}


export function SplitCreate(props) {
    
  return (
    <Create title='Create Split' {...props}>
         <SimpleForm>
            <TextInput source ='title'/>
            <TextInput source ='amount'/>
            <DateInput source ='date'/>
            <DateInput source ='last_modified'/>
            <SelectInput source ='account' choices={YesNoChoices}/>
            <SelectInput source ='opposing_account' choices={YesNoChoices}/>
            <SelectInput source ='category' choices={YesNoChoices}/>
            <TextInput source ='transaction'/>   
        </SimpleForm>        
    </Create>
  )
}

export function SplitEdit(props) {
     
  return (
    <Edit  title='Edit Split' {...props}>
         <SimpleForm>
            <TextInput disabled source ='id'/>
            <TextInput source ='title'/>
            <TextInput source ='amount'/>
            <DateInput source ='date'/>
            <DateInput source ='last_modified'/>
            <SelectInput source ='account' choices={YesNoChoices}/>
            <SelectInput source ='opposing_account' choices={YesNoChoices}/>
            <SelectInput source ='category' choices={YesNoChoices}/>
            <TextInput source ='transaction'/>  
        </SimpleForm>        
    </Edit>
  )
}
