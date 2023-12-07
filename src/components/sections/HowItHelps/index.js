import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import  styles from './howithelps.module.scss';
import {fetchApiData} from "../../../utils/apiUtils"
import {ENDPOINT_PAGE_API} from "../../../utils/util";
const HowItHelps = () => {
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
        <div className={styles.howItHelpsWrapper}>
            {apiData && (
                <div>
                    <h1>{apiData.acf.module_heading}</h1>
                    <p>{apiData.acf.content}</p>
                </div>
            )}
        </div>
    );
};

HowItHelps.propTypes = {
    mainHeading: PropTypes.string,
    para: PropTypes.string,
};

export default HowItHelps;
