"use client"
import { useEffect, useState } from 'react';
import { makeRequest } from '../utils/demoapi';

export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await makeRequest('GET', '/some-endpoint');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Phemex Data:</h1>
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
}
