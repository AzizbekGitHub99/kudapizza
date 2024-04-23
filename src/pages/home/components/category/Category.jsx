import { useContext } from 'react';

import CategoryCard from '../../../../components/category-card/CategoryCard';
import { CategoryContext } from '../../../../contexts/CategoryContext';

import './category.scss';

const Category = () => {
    const { category } = useContext(CategoryContext)
    return (
        <section className="category">
            <div className='container category__rows'>
                {category.map(category => { return (<CategoryCard key={category.name} {...category} />) })}
            </div>
        </section>
    )
}

export default Category