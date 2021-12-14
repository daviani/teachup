import Layout from '../component/layout/layout';
import CategoryCard from '../component/card/category-card';

const Home = ({ data, setCategoryId, setLabel }) => (
    <Layout>
        <div className='flex flex-row flex-wrap justify-evenly'>
            {data.categories.map((category) => (
                <div key={category._id}
                    className='m-6'>
                    <CategoryCard category={category}
                        setCategoryId={setCategoryId}
                        setLabel={setLabel}
                    />
                </div>
            ))}
        < /div>
    </Layout>
);

export default Home;
