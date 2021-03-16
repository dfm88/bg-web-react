import { React, useState } from 'react'
import { Card, CardHeader, CardContent, Tabs, Tab } from '@material-ui/core';
import { setNestedObjectValues } from 'formik';
import FaunaForm from './FaunaForm';
import ViabilitaForm from './ViabilitaForm';
import ProtCivileForm from './ProtCivileForm';


function TabForms(props) {

    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
        
        props.changeTabToApp(newValue);
    }

    return (
        <>
            
            <Tabs value={selectedTab} onChange={handleTabChange} aria-label="simple tabs example">
                <Tab label="Fauna" />
                <Tab label="Viabilità" />
                <Tab label="Protezione Civile" />
            </Tabs>

            {selectedTab === 0 && <FaunaForm/>}
            {selectedTab === 1 && <ViabilitaForm/>}
            {selectedTab === 2 && <ProtCivileForm/>}

           
        </>



    )
}

export default TabForms
