import Layout from '../component/layout/layout';
import ProductCard from '../component/card/product-card';

const Products = ({ data, categoryId, label, setProduct }) => {
    return (
        <Layout>
            <>
                {categoryId ?
                    <div className='flex flex-row flex-wrap justify-evenly'>
                        {data.plants.map((plant) => (
                            <>
                                {plant.category_id === categoryId && (
                                    <div key={plant._id} className='m-6'>
                                        <ProductCard plant={plant}
                                            label={label}
                                            setProduct={setProduct}/>
                                    </div>
                                )}
                            </>
                        ))}
                    </div>
                    :
                    <div className='flex flex-row flex-wrap justify-evenly'>
                        {data.plants.map((plant) => (
                            <div key={plant._id} className='m-6'>
                                <ProductCard plant={plant}
                                    label={label}
                                    setProduct={setProduct}
                                />
                            </div>
                        ))}
                    </div>
                }
            </>
        </Layout>
    );
};

export default Products;
