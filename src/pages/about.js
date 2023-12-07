import React from 'react';
import axios from 'axios';

const TitleTest = ({ titles }) => {
    return (
        <div>
            <h2>List of Titles</h2>
            <ul>
                {titles?titles.map((title, index) => (
                    <li key={index}>{title}</li>
                )):''}
            </ul>
        </div>
    );
};

export async function getServerSideProps() {
    console.log('inside')
    try {
        // Replace the API endpoint with your actual endpoint
        const response = await axios.get('https://dev-1e.pantheonsite.io/wp-json/wp/v2/posts');

        // Extract titles from the response data
        const titles = response.data.map(post => post.title.rendered);
        console.log(titles)
        // Return the titles as props
        return {
            props: { titles },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        // You can handle the error and return an appropriate props object
        return {
            props: { titles: [] },
        };
    }
}

export default TitleTest;
