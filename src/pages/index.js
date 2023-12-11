import React from 'react';
import AdvanceHeading from "../components/common/AdvanceHeading";
import ContentWithImage from "../components/common/ContentWithImage";

const componentMap = {
    content_with_image: ContentWithImage,
    advance_heading: AdvanceHeading,
    // Add other components as needed
};

const Home = ({ pageData, imageData }) => {
    const { acf: { module } } = pageData;

    return (
        <div>
            <h1>Home Page</h1>

            {module && module.map((moduleItem, index) => {
                const Component = componentMap[moduleItem.module_name];

                if (Component) {
                    // Find the corresponding image data
                    const imageDetails = moduleItem.module_name === 'content_with_image'
                        ? imageData.find(data => data.id === moduleItem.content_with_image.image)
                        : null;

                    return (
                        <Component
                            key={index}
                            {...moduleItem}
                            imageDetails={imageDetails}
                        />
                    );
                }

                return null;
            })}
        </div>
    );
};

export async function getServerSideProps() {
    try {
        // Fetch data from the page API
        const pageRes = await fetch('https://dev-1e.pantheonsite.io/wp-json/wp/v2/pages/72?nocache');
        const pageData = await pageRes.json();

        // Extract image IDs from the page data
        const imageIds = pageData.acf.module
            .filter(moduleItem => moduleItem.module_name === 'content_with_image')
            .map(moduleItem => moduleItem.content_with_image.image);


        // Fetch image details for each image ID
        const imagePromises = imageIds.map(async imageId => {
            const res = await fetch(`https://dev-1e.pantheonsite.io/wp-json/wp/v2/media/${imageId}`);
            const imageData = await res.json();
            return imageData;
        });

        // Wait for all image details requests to complete
        const imageData = await Promise.all(imagePromises);

        // Pass the data to the page component
        return {
            props: {
                pageData,
                imageData,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return {
            notFound: true,
        };
    }
}

export default Home;

