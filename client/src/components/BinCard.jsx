import { Card } from './ui/card';

const BinCard = ({ binKey, title }) => {
    return (
        <div className='p-[5px] my-[5px] sm:w-[33%] w-[100%] h-[70px] cursor-pointer' onClick={() => window.location.href = `/${binKey}`}>
            <Card className='p-[10px] w-full'>
                <div>
                    <p className='font-bold'>{title}</p>
                    <div>bin.rudrax.dev/{binKey}</div>
                </div>
            </Card>
        </div>
    )
}

export default BinCard