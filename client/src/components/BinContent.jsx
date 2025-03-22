import { useEffect, useState } from 'react';
import { client } from '../../config'
import { Card } from './ui/card';
import { Button } from './ui/button';
import CopyToClipboard from 'react-copy-to-clipboard';

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
                    alert(e)
                }
            }
        };

        getBinData();
    }, [id]);

    return (
        <div className='p-[20px]'>
            <h2 className='text-[28px] font-bold'>{title}</h2>
            <br />
            <Card className="p-[18px] relative">
                <div className="absolute top-[1rem] right-[1rem]">
                    <CopyToClipboard text={data} onCopy={() => alert("Copied to clipboard")}>
                        <Button size="sm" className="p-[5px]">Copy</Button>
                    </CopyToClipboard>
                </div>
                <pre className='w-full break-words whitespace-pre-wrap overflow-auto'>
                    {data}
                </pre>
            </Card>

        </div>
    )
}

export default BinContent;