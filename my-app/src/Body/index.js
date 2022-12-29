import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import './body.scss';
import SearchBar from './SerachBar';
import Now from './Tabs/Now';
import Forecast from './Tabs/Forecast';


function Body() {
    const [showBar, setShowBar] = useState(false);

    const handleCloseBar = () => setShowBar(false);
    const handleShowBar = () => setShowBar(true);

    return (
        <>
            <Button variant="primary" onClick={handleShowBar}>
                Search
            </Button>

            <SearchBar show={showBar} handleClose={handleCloseBar} />

            <Tabs
                defaultActiveKey="now"
                id="fill-tab-example"
                className="mb-3"
                fill
            >
                <Tab eventKey="now" title="Now">
                    <Now />
                </Tab>
                <Tab eventKey="forecast" title="Forecast">
                    <Forecast />
                </Tab>
            </Tabs>
        </>
    );
}

export default Body;