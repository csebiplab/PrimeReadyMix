
import { useState, useEffect } from 'react';
import axios from 'axios';
import { base } from '../../redux/api/apiEndpoints';

export const usePostDataFetching = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${base}/api/blogContent`);
                // console.log(response);
                // console.log(response?.data?.blogContentData);
                setData(response?.data?.blogContentData);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, isLoading, error };
};
