import { useState } from 'react';
import { client } from '../../config'

const BinContent = ({ id }) => {

    const [title, setTitle] = useState("Loading...");
    const [data, setData] = useState("Loading...");

    async function getBinData() {
        try {
            const result = await client.get('/v1/content', {
                params: {
                    key: id
                }
            })
            setTitle(result.data.title)
            setData(result.data.content)
        } catch (e) {
            console.log(e);
        }
    }
    getBinData();

    return (
        <>
            <h2>{title}</h2>
            <br />
            <pre>
                {data}
            </pre>

        </>
    )
}

export default BinContent;