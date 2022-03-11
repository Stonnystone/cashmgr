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
//   "name": "Current",
//   "active": true,
//   "last_modified": "2022-03-09T14:51:01.531664Z"
// },

const CategoryTitle = ({ record }) => {
  return <span>Category {record ? `"${record.name}"` : ''}</span>;
};

export const CategoryList = (props) => {

  return (
    <List {...props}>
        <Datagrid>
            <TextField source ='id'/>
            <TextField source ='name'/>
            <SelectField source ='active' choices={YesNoChoices}/>
            <DateField source ='last_modified'/>           
            <EditButton basePath='/categories'/>
            <DeleteButton basePath='/categories'/>
        </Datagrid>
    </List>
  )
}


export function CategoryCreate(props) {
    
  return (
    <Create title='Create Category' {...props}>
         <SimpleForm>
            <TextInput source ='name'/>
            <SelectInput source ='active' choices={YesNoChoices}/>
            <DateInput source ='last_modified'/>   
        </SimpleForm>        
    </Create>
  )
}

export function CategoryEdit(props) {
     
  return (
    <Edit  title={<CategoryTitle/> } {...props}>
         <SimpleForm>
            <TextInput disabled source ='id'/>
            <TextInput source ='name'/>
            <SelectInput source ='active' choices={YesNoChoices}/>
            <DateInput source ='last_modified'/>   
        </SimpleForm>        
    </Edit>
  )
}


