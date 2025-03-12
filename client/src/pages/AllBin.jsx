import { useState, useEffect } from 'react';
import { client } from '../../config';
import BinCard from '../components/BinCard';

const AllBin = () => {
    const [data, setData] = useState([{ title: "Loading...", key: "Loading..." }]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getAllData() {
            setIsLoading(true)
            try {
                const result = await client.get('/v1/content/all');
                setData(result.data.data);
            } catch (e) {
                console.log(e);
            }
            setIsLoading(false)
        }
        getAllData();
    }, []);

    return (
        <div className='p-[20px] flex flex-col flex-wrap sm:flex-row w-full'>
            {isLoading ? (
                <div className="flex justify-center items-center flex-col w-full h-full">
                    <h2 className='text-[28px] font-bold'>Loading...</h2>
                    <p>This might take a few seconds...</p>
                </div>
            ) : (
                data.length == 0 ? "There are no pastes in the bin right now." :
                    data.map((item) => (
                        <BinCard key={item.key} binKey={item.key} title={item.title} />
                    ))
            )}
        </div>

    );
};

export default AllBin;
