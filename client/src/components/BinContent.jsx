import { useEffect, useState } from 'react';
import { client } from '../../config'
import { Card } from './ui/card';

const BinContent = ({ id }) => {

    const [title, setTitle] = useState("Loading...");
    const [data, setData] = useState("Loading...");

    useEffect(() => {
        const getBinData = async () => {
            try {
                const result = await client.get('/v1/content', {
                    params: {
                        key: id
                    }
                });
                setTitle(result.data.title);
                setData(result.data.content);
            } catch (e) {
                if (e.response && e.response.status === 404) {
                    setTitle("404 - Bin not Found");
                    setData("This bin doesn't exist or it may have expired.");
                } else {
                    console.error(e);
                }
            }
        };

        getBinData();
    }, [id]);

    return (
        <div className='p-[20px]'>
            <h2 className='text-[28px] font-bold'>{title}</h2>
            <br />
            <Card className="p-[15px]">
                <pre>
                    {data}
                </pre>
            </Card>

        </div>
    )
}

export default BinContent;