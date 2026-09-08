import { useState } from "react";

function ProductSelector({ products, onProductSelected }) {

    const [isOpen, setIsOpen] = useState(false);

    const handleProductClick = (product) => {
        onProductSelected(product);
        setIsOpen(false);
    };

    return (
        <div className="product-selector">

            <button
                className="product-select-button"
                onClick={() => setIsOpen(!isOpen)}
            >
                Select Product
            </button>

            {isOpen && (

                <div className="product-menu">

                    {products.map((product) => (

                        <button
                            key={product.id}
                            className="product-option"
                            onClick={() => handleProductClick(product)}
                        >
                            {product.name}
                        </button>

                    ))}

                </div>

            )}

        </div>
    );
}

export default ProductSelector;