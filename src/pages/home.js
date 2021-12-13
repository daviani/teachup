import Layout from '../component/layout/layout'

import data from '../utils/data.json'
import CategoryCard from '../component/card/category-card'

const Home = () => {

    return (
        <Layout>
            <div className="flex flex-row flex-wrap justify-around ">
                {data.categories.map((category) => (
                    <div key={category._id} className="m-6">
                        <CategoryCard category={category}/>
                    </div>
                ))
                }
            < /div>

        </Layout>
    )
}

export default Home
