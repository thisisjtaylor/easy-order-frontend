import { useState } from "react";

function CategorySelector({
    categories,
    selectedCategory,
    onCategorySelected
}) {
    const [openCategory, setOpenCategory] = useState(null);

    const handleCategoryClick = (category) => {

        // If clicking the category that is already open,
        // close it
        if (openCategory?.id === category.id) {
            setOpenCategory(null);
            return;
        }

        // Otherwise open this category
        setOpenCategory(category);

        // Tell OrderForm which category was selected
        onCategorySelected(category);
    };

    return (
        <div className="category-dropdown-container">

            {categories.map((category) => (

                <div
                    key={category.id}
                    className="category-dropdown"
                >

                    {/* CATEGORY BUTTON */}
                    <button
                        className={
                            selectedCategory?.id === category.id
                                ? "category-button selected"
                                : "category-button"
                        }
                        onClick={() =>
                            handleCategoryClick(category)
                        }
                    >
                        <span className="category-icon">
                            {category.icon}
                        </span>

                        <span className="category-name">
                            {category.name}
                        </span>

                        <span className="dropdown-arrow">
                            {openCategory?.id === category.id
                                ? "▲"
                                : "▼"}
                        </span>
                    </button>


                    {/* PRODUCT DROPDOWN */}
                    {openCategory?.id === category.id && (

                        <div className="product-menu">

                            {category.products.map((product) => (

                                <button
                                    key={product.id}
                                    className="product-option"
                                    onClick={() =>
                                        onCategorySelected({
                                            ...category,
                                            selectedProduct: product
                                        })
                                    }
                                >
                                    {product.name}
                                </button>

                            ))}

                        </div>

                    )}

                </div>

            ))}

        </div>
    );
}

export default CategorySelector;