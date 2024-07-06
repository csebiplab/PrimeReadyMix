import React from 'react';
import BarrieConcreteReadyMixPage from './Barrie';

const staticBackupMetadata = {
    title: "Barrie Concrete",
    keywords: "Barrie Concrete",
    description: "barrie concrete, ready mix company",
}


export async function generateMetadata() {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_LIVE_API;

        const metaDataResponse = await fetch(`${apiUrl}/api/barrie-concrete`, {
            cache: "no-store",
        });
        const metaData = await metaDataResponse.json();


        const { title, description, keywords } = metaData?.data?.[0] ?? {};

        return {
            title: title,
            description: description,
            keywords: keywords
        }
    } catch (error) {
        return staticBackupMetadata;
    }
}

const BarriePage = () => {
    return (
        <div>
            <BarrieConcreteReadyMixPage />
        </div>
    );
};

export default BarriePage;