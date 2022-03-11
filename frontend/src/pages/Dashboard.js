import * as React from "react";
import { Card, CardContent, CardHeader, CardActionArea } from '@material-ui/core';
import { Title } from 'react-admin';


const Dashboard = (props) => {
    return (
        <div>
            <Title title="Dashboard" />
            <CardActionArea>
                <Card>                    
                    <CardHeader title="Accounts" />
                    <CardContent>50</CardContent>
                </Card>
            </CardActionArea>

            <CardActionArea>
                <Card>                    
                    <CardHeader title="Balances" />
                    <CardContent>40</CardContent>
                </Card>
            </CardActionArea>
        </div>

    )
}

export default Dashboard