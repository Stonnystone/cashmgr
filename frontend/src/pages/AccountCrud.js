// import React from 'react'

import * as React from "react";
import { useMediaQuery } from '@material-ui/core';

//List
import { List, SimpleList, Datagrid,  TextField, DateField, SelectField, EditButton, DeleteButton, ReferenceField, NumberField} from 'react-admin';

// & Ceate
import {Edit, Create, SimpleForm, TextInput, DateInput, SelectInput, ReferenceInput, NumberInput } from 'react-admin';

const YesNoChoices=[
    {id:"1", name:"Yes"},
    {id:"0", name:"No"}
];

//model
// "id": 3,
// "name": "Dominic Ayanna",
// "account_type": 1,
// "active": true,
// "last_modified": "2022-02-22T14:22:18.023715Z",
// "show_on_dashboard": true,
// "iban": "011234654",
// "import_ibans": "[]",
// "import_names": "[]"

const AccountTitle = ({ record }) => {
     return <span>Account {record ? `"${record.name}"` : ''}</span>;
};

const AccountFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="id" label="Category" reference="categories" allowEmpty>
      <SelectInput optionText="Category" />
  </ReferenceInput>,
];

export const AccountList = (props) => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <List filters={AccountFilters} {...props}>
       {isSmall ? (
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.last_modified).toLocaleDateString()}
                />
            ) : (
        <Datagrid>
            <TextField source ='id'/>
            <TextField source ='name'/>
            <ReferenceField label='Account Type' source="id" reference="categories">
                <TextField source="name" />
            </ReferenceField>
            <TextField source ='account_type'/>
            <SelectField source ='active' choices={YesNoChoices}/>
            <DateField source ='last_modified'/>
            <SelectField source ='show_on_dashboard' choices={YesNoChoices}/>
            <NumberField source ='iban'/>             
            <EditButton basePath='/accounts'/>
            <DeleteButton basePath='/accounts'/>
        </Datagrid>
          )}
    </List>
  )
}


export function AccountCreate(props) {
    
  return (
    <Create title='Create Account' {...props}>
         <SimpleForm>
            <TextInput source ='name'/>
            <TextInput label='Account Type' source ='account_type'/>
            <SelectInput source ='active' choices={YesNoChoices}/>
            <DateInput source ='last_modified'/>
            <SelectInput source ='show_on_dashboard' choices={YesNoChoices}/>
            <NumberInput source ='iban'/>  
            <TextInput multiline source ='import_ibans'/>  
            <TextInput multiline source ='import_names'/>  
        </SimpleForm>        
    </Create>
  )
}

export function AccountEdit(props) {
     
  return (
    <Edit  title={<AccountTitle/> } {...props}>
         <SimpleForm>
            <TextInput disabled source ='id'/>
            <TextInput source ='name'/>
            <TextInput label='Account Type' source ='account_type'/>
            <SelectInput source ='active' choices={YesNoChoices}/>
            <DateInput source ='last_modified'/>
            <SelectInput source ='show_on_dashboard' choices={YesNoChoices}/>
            <NumberInput source ='iban'/>  
            <TextInput multiline source ='import_ibans'/>  
            <TextInput multiline source ='import_names'/>  
        </SimpleForm>        
    </Edit>
  )
}

