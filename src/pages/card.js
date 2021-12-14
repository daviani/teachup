import { Link } from 'react-router-dom';
import ShoppingCard from '../component/card/shopping-card';
import Modal from '../component/modal/modal';
import { useState } from 'react';

const Card = ({ data, setNumberCard }) => {
    const [isOpenThanks, setIsOpenThanks] = useState(false);

    const closeModalAbout = () => {
        setIsOpenThanks(false);
    };
    const fullTotal = (data) => {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            let value = data[i].quantity * data[i].price;
            total += value;
        }
        return total;
    };

    const thanksItem = () => (
        <div className='m-5 text-bold text-center '>
            Thank you for your visit :)
        </div>
    );

    return (
        <div className='bg-t-primary h-screen'>
            <Link className='mt-3 ml-3 text-white font-bold'
                to='/'>
                Back
            </Link>
            <div className='bg-white rounded-t-xl fixed w-screen bottom-0'>
                <div className='mt-3 ml-3'>
                    <p className='font-bold'>
                        Shopping Bag
                    </p>
                    {data.length > 0
                        ?
                        <>
                            <div >
                                <div className='flex flex-col-reverse m-3'>
                                    {data.map((item) => (
                                        <ShoppingCard item={item} setNumberCard={setNumberCard}/>
                                    ))}
                                </div>
                                <div className='flex flex-row justify-between mt-3'>
                                    <div >
                                        Total
                                    </div>
                                    <div className='text-primary font-bold mr-3'>
                                        IDR{' '}{fullTotal(data)}
                                    </div>
                                </div>
                            </div>
                            <p className='m-3 text-center bg-primary rounded-2xl font-bold text-accent p-3 cursor-pointer'
                                onClick={() => setIsOpenThanks(true)}
                            >
                                {'Checkout ('}{' '}{data.length}{' '}{')'}
                            </p>
                            <Modal text={thanksItem}
                                isOpen={isOpenThanks}
                                closeModal={closeModalAbout}
                            />
                        </>
                        :
                        <div className='m-3 text-center'>
                            <div>
                                Your shopping cart is empty !
                            </div>
                            <Link to='/' className='text-primary font-bold'>Home</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;
