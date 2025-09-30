import React from 'react';
import ProductCard from '../molecules/CategoryCard';
import CategoryCard from '../molecules/CategoryCard';
import { productCategoriesHome  } from '../../app/data/productCategories';
export default function CategorySectionHome() {
    const productCategories = productCategoriesHome;

    return (
        <section className="category-section">
            <div className="category-container">
                <h2 className="category-heading">Our Product Categories</h2>
                <div className="category-divider"></div>
                <p className="category-subheading">Explore our range of high-quality power management solutions</p>

                <div className="category-cards-container">
                    {productCategories.map((category, index) => (
                        <div key={index} className="category-card-wrapper">
                            <CategoryCard
                                image={category.image}
                                title={category.title}
                                description={category.description}
                                link={category.link}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}