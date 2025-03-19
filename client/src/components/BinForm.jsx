import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useEffect, useState } from 'react';
import { client } from '../../config'

const BinForm = () => {

    const [title, setTitle] = useState();
    const [expiration, setExpiration] = useState();
    const [data, setData] = useState();
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        if (isClicked) {
            document.body.style.cursor = "wait"
        } else {
            document.body.style.cursor = "inherit"
        }

        return () => {
            document.body.style.cursor = "inherit"
        }
    }, [isClicked])

    async function handleSubmit(e) {
        e.preventDefault();
        setIsClicked(true);
        try {
            const result = await client.post('/v1/content', {
                title,
                expiration,
                data
            })
            window.location.href = `/${result.data.key}`
        } catch (e) {
            alert(e)
        }
        setIsClicked(false);
    }

    return (
        <div className='p-[20px]'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <div className='flex justify-between'>
                        <Input className='w-[400px]' placeholder="Enter your title" onChange={(e) => setTitle(e.target.value)} required />
                        <Button className={`mr-[20px] ml-[10px] ${isClicked ? 'opacity-[0.6]' : 'opacity-[1]'}`} type="submit">+ Create</Button>
                    </div>
                </div>
                <div className='py-[10px]'>
                    <label>Expires in:</label>
                    <Select onValueChange={setExpiration} required>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Bin expires in" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value='10m'>10 Minutes</SelectItem>
                                <SelectItem value='1h'>1 Hour</SelectItem>
                                <SelectItem value='6h'>6 Hours</SelectItem>
                                <SelectItem value='12h'>12 Hours</SelectItem>
                                <SelectItem value='24h'>24 Hours</SelectItem>
                                <SelectItem value='48h'>48 Hours</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select >
                </div>
                <div>
                    <label>Editor:</label>
                    <Textarea onChange={(e) => setData(e.target.value)} className="h-[400px]" placeholder="Paste your text here" required />
                </div>
            </form>
        </div>
    )
}

export default BinForm