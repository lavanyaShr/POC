import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from "../../common/Button";
import  styles from './platform.module.scss';
import {ENDPOINT_PAGE_API, SCHEDULE_NOW} from "../../../utils/util";
import {fetchApiData} from "../../../utils/apiUtils";
const PlatformSection = ({imgSrc}) => {
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = ENDPOINT_PAGE_API;
            const data = await fetchApiData(url);
            if (data) {
                setApiData(data);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.platformSection}>
            {apiData && (
                <div className={styles.platformSubject}>
                    <h1>{apiData.title.rendered}</h1>
                    <h4>{apiData.acf.page_subtitle}</h4>
                    <h3>{apiData.acf.hero_description}</h3>
                    <Button type={'btn-explore'} label={SCHEDULE_NOW} />
                </div>
            )}
            <div>
                <img className={styles.endpointImage} src={imgSrc} alt="Platform Image" />
            </div>
        </div>
    );
};

PlatformSection.propTypes = {
    imgSrc: PropTypes.string,

};

export default PlatformSection;
