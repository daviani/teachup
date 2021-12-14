import { ReactComponent as Minus } from '../../icons/minus.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';

const ShoppingCard = ({ item, setNumberCard }) => {

    return (
        <div className='m-3 flex flex-row justify-between'>
            <div>
                <img src={item.picture}
                    alt={item.label}
                    className='rounded-2xl'
                    style={{ height: '75px', width: '75px' }}/>
            </div>
            <div className='m-3'>
                <div>{item.title}</div>
                <div className='font-bold'>IDR{' '}{item.price}</div>
            </div>
            <div className='m-3'>
                <div className='flex flex-row border-solid border-2 rounded-2xl '>
                    <Minus onClick={() => setNumberCard(item.quantity - 1)}
                        className='mt-2 mr-2 cursor-pointer'/>
                    <p className='mt-2'>
                        {item.quantity}
                    </p>
                    <Plus onClick={() => setNumberCard(item.quantity + 1)}
                        className='mt-2 ml-2 cursor-pointer'/>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCard;
