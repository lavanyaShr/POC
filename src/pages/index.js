// PlatformSection.js
import React from 'react';
import PlatformSection from "../components/sections/PlatformSection"
import HowItHelps from "../components/sections/HowItHelps"
const EndpointAutomationPage = () => {

    const imgSrc =  '/images/Experience-Automation.png';
    return (
        <React.Fragment>

        <div className={'platform-section-header'}>
        <PlatformSection
            imgSrc={imgSrc}
        />
        </div>
            <div>
                <HowItHelps/>
            </div>
        </React.Fragment>

    );
};



export default EndpointAutomationPage;
