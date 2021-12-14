import { Link } from 'react-router-dom';

const ProductCard = ({ plant, label, setProduct }) => {
    const setProd = () => {
        setProduct(plant);
    };

    const path = ('product/' + plant.label);
    return (
        <Link to={path} onClick={setProd}>
            <div style={{ width: '190px' }}>
                <img src={plant.pictures[0]}
                    alt={plant.label}
                    className='rounded-t-2xl'
                    style={{ height: '250px', width: '190px' }}
                />
                <div className='p-3 rounded-b-2xl'
                    style={{ backgroundColor: '#f6ebf1' }}
                >
                    <div className='text-t-secondary font-bold'>
                        {label}
                    </div>
                    <div className='font-bold'>
                        {plant.label}
                    </div>
                    <div className='mt-3 text-primary font-bold'>
                        IDR{' '}{plant.price}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
