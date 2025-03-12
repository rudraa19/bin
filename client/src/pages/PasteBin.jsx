import { useParams } from 'react-router-dom'
import BinContent from '../components/BinContent';

const PasteBin = () => {
    const id = useParams().id;
    return (
        <>
            <BinContent id={id} />
        </>
    )
}

export default PasteBin