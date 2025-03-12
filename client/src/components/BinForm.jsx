import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useState } from 'react';
import { client } from '../../config'

const BinForm = () => {

    const [title, setTitle] = useState();
    const [expiration, setExpiration] = useState();
    const [data, setData] = useState();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const result = await client.post('/v1/content', {
                title,
                expiration,
                data
            })
            console.log(result.data.key)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='p-[20px]'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <div className='flex justify-between'>
                        <Input className='w-[400px]' placeholder="Enter your title" onChange={(e) => setTitle(e.target.value)} required />
                        <Button className='mr-[20px]' type="submit">+ Create</Button>
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
                                <SelectItem value='0'>Never</SelectItem>
                                <SelectItem value='10m'>10 minutes</SelectItem>
                                <SelectItem value='1h'>1 Hour</SelectItem>
                                <SelectItem value='1d'>1 day</SelectItem>
                                <SelectItem value='1w'>1 week</SelectItem>
                                <SelectItem value='2w'>2 week</SelectItem>
                                <SelectItem value='1M'>1 month</SelectItem>
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