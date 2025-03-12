import { Button } from './ui/button';
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <div className='flex h-[56px] items-center px-[20px] justify-between bg-[#fdfdfd] shadow-2xs'>
                <div className='text-[18px] font-semibold'>
                    <Link to='/'>
                        <span className='text-[28px]'>BIN</span>.rudrax.dev
                    </Link>
                </div>
                <div>
                    <Button className='mx-[4px]' variant='outline' onClick={() => window.location.href = "/"}>+New</Button>
                    <Button className='mx-[4px]' variant='outline' onClick={() => window.location.href = "/all"}>All pastes</Button>
                </div>
            </div>
        </>
    );
}

export default Navbar;
