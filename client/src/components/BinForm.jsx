import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select';

const BinForm = () => {
    return (
        <div className='p-[20px]'>
            <form>
                <div>
                    <label>Title:</label>
                    <div className='flex justify-between'>
                        <Input className='w-[400px]' placeholder="Enter your title" required />
                        <Button className='mr-[20px]' type="submit">+ Create</Button>
                    </div>
                </div>
                <div className='py-[10px]'>
                    <lable>Expires in:</lable>
                    <Select required>
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
                    <Textarea className="h-[400px]" placeholder="Paste your text here" required />
                </div>
            </form>
        </div>
    )
}

export default BinForm