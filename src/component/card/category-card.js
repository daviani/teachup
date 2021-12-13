import { Link } from 'react-router-dom'

const CategoryCard = ({ category, setCategoryId, setLabel }) => {
    const ColorsTabs = [
        '#eed8c3',
        '#cdd9ea',
        '#cde7c3',
        '#e1c5d5'
    ]

    const randomIndex = (max) => {
        return Math.floor(Math.random() * max)
    }
    const randomColors = ColorsTabs[randomIndex(ColorsTabs.length)]

    const setCat = () => {
        setCategoryId(category._id)
        setLabel(category.label)
    }
    return (

        <Link to="/products" onClick={setCat}>
            <img src={category.picture}
                 alt={category.label}
                 className="rounded-t-2xl"
                 style={{ height: '250px', width: '190px' }}/>
            <div className="p-3 rounded-b-2xl"
                 style={{ backgroundColor: randomColors }}
            >
                {category.label}
            </div>
        </Link>
    )
}

export default CategoryCard
