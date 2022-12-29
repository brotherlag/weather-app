import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import TimeSelecter from './TimeSelecter';
import Map from './Map';
import './body.scss';
import SearchBar from './SerachBar';


function Body() {
    const [showBar, setShowBar] = useState(false);

    const handleCloseBar = () => setShowBar(false);
    const handleShowBar = () => setShowBar(true);

    return (
        <>
            <Button variant="primary" onClick={handleShowBar}>
                Launch
            </Button>
            <SearchBar show={showBar} handleClose={handleCloseBar}/>
            <Tabs
                defaultActiveKey="now"
                id="fill-tab-example"
                className="mb-3"
                fill
            >
                <Tab eventKey="now" title="Now">
                    <TimeSelecter id="now" />
                    <Map />
                </Tab>
                <Tab eventKey="forecast" title="Forecast">
                    <TimeSelecter id="forecast" />
                    <Map />
                </Tab>

            </Tabs>
        </>
    );
}

export default Body;