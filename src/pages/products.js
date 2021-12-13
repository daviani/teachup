import Layout from '../component/layout/layout'
import ProductCard from '../component/card/product-card'

const Products = ({ data, categoryId, label }) => {
    return (
        <Layout>
            <>
                {categoryId ?
                    <div className="flex flex-row flex-wrap justify-evenly">
                        {data.plants.map((plant) => (
                            <div key={plant._id}>
                                {plant.category_id === categoryId && (
                                    <div className="m-6">
                                        <ProductCard plant={plant} label={label}/>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    :
                    <div className="flex flex-row flex-wrap justify-evenly">
                        {data.plants.map((plant) => (
                            <div key={plant._id}>
                                <div className="m-6">
                                    <ProductCard plant={plant} label={label}/>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </>
        </Layout>
    )
}

export default Products
// {data.plants.map((plant) =>
//     <>
//         {plant.category_id === categoryId &&
//             <>
//                 <div>
//
//                     <ProductCard plant={plant} label={label}/>*/}
//                 </div>
//             </>
//         }
//
//     </>
// )}
