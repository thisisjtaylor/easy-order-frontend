import { useState } from "react";

import ProductSelector from "./ProductSelector";
import QuantitySelector from "./QuantitySelector";
import OrderSummary from "./OrderSummary";
import CategorySelector from "./CategorySelector";

function OrderForm() {
const [selectedCategory, setSelectedCategory] =
    useState(null);

const [selectedProduct, setSelectedProduct] =
    useState(null);

const [quantity, setQuantity] =
    useState("");

const [unit, setUnit] =
    useState("");

const [specialNotes, setSpecialNotes] =
    useState("");

const [orderItems, setOrderItems] =
    useState([]);
const categories = [
    {
        id: 1,
        name: "Lunchmeat",
        icon: "🥩",
        products: [
            {
                id: 101,
                name: "Ham",
                units: ["pounds", "count"]
            },
            {
                id: 102,
                name: "Turkey",
                units: ["pounds", "count"]
            },
            {
                id: 103,
                name: "Roast Beef",
                units: ["pounds", "count"]
            },
            {
                id: 104,
                name: "Salami",
                units: ["pounds", "count"]
            }
        ]
    },

    {
        id: 2,
        name: "Cheese",
        icon: "🧀",
        products: [
            {
                id: 201,
                name: "American",
                units: ["pounds", "count"]
            },
            {
                id: 202,
                name: "Swiss",
                units: ["pounds", "count"]
            },
            {
                id: 203,
                name: "Provolone",
                units: ["pounds", "count"]
            },
            {
                id: 204,
                name: "Cheddar",
                units: ["pounds", "count"]
            }
        ]
    },

    {
        id: 3,
        name: "Sausage",
        icon: "🌭",
        products: [
            {
                id: 301,
                name: "Italian Sausage",
                units: ["pounds", "count"]
            },
            {
                id: 302,
                name: "Polish Sausage",
                units: ["pounds", "count"]
            },
            {
                id: 303,
                name: "Bratwurst",
                units: ["pounds", "count"]
            }
        ]
    },

    {
        id: 4,
        name: "Sandwiches",
        icon: "🥪",
        products: [
            {
                id: 401,
                name: "Italian Sandwich",
                units: ["count"]
            },
            {
                id: 402,
                name: "Turkey Sandwich",
                units: ["count"]
            },
            {
                id: 403,
                name: "Ham & Cheese",
                units: ["count"]
            }
        ]
    },

    {
        id: 5,
        name: "Trays",
        icon: "🍱",
        products: [
            {
                id: 501,
                name: "Small Meat Tray",
                units: ["count"]
            },
            {
                id: 502,
                name: "Large Meat Tray",
                units: ["count"]
            }
        ]
    }
];

const lunchcheese_products = [

        {
            id: 1,
            name: "Provolone",
            units: ["pounds", "count"]
        }
    ];


    const handleProductSelected = (product) => {

        setSelectedProduct(product);

        setQuantity("");

        setUnit("");
    };


    const addToOrder = () => {

        if (!selectedProduct) {
            alert("Please select a product.");
            return;
        }

        if (!quantity || quantity <= 0) {
            alert("Please enter a quantity.");
            return;
        }

        if (!unit) {
            alert("Please select a unit.");
            return;
        }


        const newItem = {

            product: selectedProduct,

            quantity: quantity,

            unit: unit

        };


        setOrderItems([
            ...orderItems,
            newItem
        ]);


        setSelectedProduct(null);

        setQuantity("");

        setUnit("");
    };


    return (
        <div className="order-form">

            <h1>New Order</h1>
        <CategorySelector
    categories={categories}
    selectedCategory={selectedCategory}
    onCategorySelected={(category) => {

        setSelectedCategory(category);

        setSelectedProduct(null);

        setQuantity("");

        setUnit("");

        setSpecialNotes("");

    }}
/>
        

            {selectedCategory && (

    <ProductSelector
        products={selectedCategory.products}
        onProductSelected={handleProductSelected}
    />

)}


            {selectedProduct && (

                <div>

                    <h2>
                        {selectedProduct.name}
                    </h2>


                    <QuantitySelector

                        quantity={quantity}

                        unit={unit}

                        allowedUnits={
                            selectedProduct.units
                        }

                        onQuantityChange={
                            setQuantity
                        }

                        onUnitChange={
                            setUnit
                        }

                    />


                    <button
                        className="add-button"
                        onClick={addToOrder}
                    >
                        + Add to Order
                    </button>

                </div>

            )}


            <OrderSummary
                orderItems={orderItems}
            />


            {orderItems.length > 0 && (

                <button
                    className="place-order-button"
                    onClick={() =>
                        console.log(orderItems)
                    }
                >
                    Place Order
                </button>

            )}

        </div>

    );
}

export default OrderForm;