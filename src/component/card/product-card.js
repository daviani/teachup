import { Link } from 'react-router-dom'

const ProductCard = ({ plant, label }) => {
const path = ('product/' + plant.label)
    return (
        <Link to={path}>
            <div style={{ width: '190px' }}>
                <img src={plant.pictures[0]}
                     alt={plant.label}
                     className="rounded-t-2xl"
                     style={{ height: '250px', width: '190px' }}
                />
                <div className="p-3 rounded-b-2xl"
                     style={{ backgroundColor: '#f6ebf1' }}
                >
                    <div className="text-t-secondary font-bold">
                        {label}
                    </div>
                    <div className="text-bold">
                        {plant.label}
                    </div>
                    <div className="mt-3 text-primary font-bold">
                        IDR{' '}{plant.price}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
// <div style={{ width: '190px' }}>
// <img src={plant.pictures[0]} alt={plant.plants[0].label} className="rounded-t-2xl"
// style={{ height: '250px', width: '190px' }}/>
// <div className="p-3 rounded-b-2xl"
//      style={{ backgroundColor: '#f6ebf1' }}
// >
//     <div className="text-t-secondary">
//         {label}
//     </div>
//     <div className="text-bold">
//         {plant.label}
//     </div>
//     <div className="mt-3 text-primary">
//         {/*IDR{' '}{plant.price}*/}
//     </div>
// </div>
// </div>