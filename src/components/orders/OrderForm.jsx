import productCategories from "./products";
import "./OrderForm.css";
import OrderSummary from "./OrderSummary";
import CustomerInformation from "./CustomerInformation";
import { useEffect, useState } from "react";
import { getOrderHistory } from "../../services/orderService";
import OrderHistoryModal from "./OrderHistoryModal";

function OrderForm() {

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedUnit, setSelectedUnit] = useState(null);
    const [quantity, setQuantity] = useState("");
    const [orderItems, setOrderItems] = useState([]);
    const [sausageType, setSausageType] = useState("Mild");
    const [sausageForm, setSausageForm] = useState("Link");
    const [sausageFennel, setSausageFennel] = useState("None");
    const [sausageCheese, setSausageCheese] = useState(false);
    const [customerName, setCustomerName] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [orderNotes, setOrderNotes] = useState("");
    const [pickupDate, setPickupDate] = useState("");
    const [customerOrderHistory, setCustomerOrderHistory] = useState([]);
    const [historyLoaded, setHistoryLoaded] = useState(false);
    const [summaryNotes, setSummaryNotes] = useState("");
    const [historyMessage, setHistoryMessage] = useState("");
    const [showOrderHistory, setShowOrderHistory] = useState(false);


    useEffect(() => {

        if (customerPhone.trim().length < 10) {
            setCustomerOrderHistory([]);
            setHistoryLoaded(false);
            setHistoryMessage("");
            setShowOrderHistory(false);
            return;
        }

        const fetchHistory = async () => {

            try {

                const orders = await getOrderHistory(customerPhone);
                if (orders.length > 0) {
                    const returnedCustomerName = orders[0].customer.name;

                    setCustomerName(returnedCustomerName);
                }
                setCustomerOrderHistory(orders);
                setHistoryLoaded(true);

                if (orders.length === 0) {
                    setHistoryMessage("No previous orders found.");
                    setShowOrderHistory(false);
                } else {
                    setHistoryMessage("");
                }

            } catch (error) {

                console.error(error);

                setCustomerOrderHistory([]);
                setHistoryLoaded(true);
                setHistoryMessage("Unable to retrieve order history.");
                setShowOrderHistory(false);
            }
        };

        fetchHistory();

    }, [customerPhone]);
    const handleCategoryChange = (event) => {

        const categoryName = event.target.value;

        const category = productCategories.find(
            category => category.name === categoryName
        );

        setSelectedCategory(category);
        setSelectedProduct(null);
        setSelectedUnit(category?.units?.[0] || null);
        setQuantity("");
    };

    const handleProductChange = (event) => {

        const productName = event.target.value;

        const product = selectedCategory.products.find(
            product => product === productName
        );

        setSelectedProduct(product);
    };

    const handleUnitChange = (event) => {
        setSelectedUnit(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleAddToOrder = () => {

        if (!selectedCategory || !selectedUnit || !quantity) {
            return;
        }

        let orderItem;

        if (selectedCategory.name === "SAUSAGE") {

            orderItem = {
                id: Date.now(),
                category: "SAUSAGE",
                type: sausageType,
                form: sausageForm,
                fennel: sausageFennel,
                cheese: sausageCheese,
                unit: selectedUnit,
                quantity: quantity,
                note: orderNotes
            };

        } else {

            if (!selectedProduct) {
                return;
            }

            orderItem = {
                id: Date.now(),
                category: selectedCategory.name,
                product: selectedProduct,
                unit: selectedUnit,
                quantity: quantity,
                note: orderNotes
            };

        }

        setOrderItems(prevItems => [
            ...prevItems,
            orderItem
        ]);

        setSelectedCategory("Please select a category");
        setSelectedProduct(null);
        setQuantity("");
        setSelectedProduct(null);
        setOrderNotes("");
        setSausageType("Mild");
        setSausageForm("Link");
        setSausageFennel("None");
        setSausageCheese(false);
    };

    return (
        <div className="order-page">
            <div className="order-layout">

                <CustomerInformation
                    customerName={customerName}
                    setCustomerName={setCustomerName}
                    customerPhone={customerPhone}
                    setCustomerPhone={setCustomerPhone}
                    customerOrderHistory={customerOrderHistory}
                    historyLoaded={historyLoaded}
                    setShowOrderHistory={setShowOrderHistory}
                />

                <div className="order-card">

                    <div className="order-header">
                        <h1>Create an Order</h1>
                        <p>Select a product and enter the quantity.</p>
                    </div>

                    {/* Category */}
                    <div className="form-group">

                        <label>Category</label>

                        <select
                            value={selectedCategory?.name || ""}
                            onChange={handleCategoryChange}
                        >
                            <option value="">
                                Select a category
                            </option>

                            {productCategories.map(category => (
                                <option
                                    key={category.name}
                                    value={category.name}
                                >
                                    {category.name}
                                </option>
                            ))}
                        </select>

                    </div>


                    {/* Product / Sausage Configuration */}

                    {selectedCategory?.name === "SAUSAGE" ? (

                        <div className="sausage-config">

                            <div className="sausage-section">
                                <label className="sausage-label">
                                    Type
                                </label>

                                <div className="option-row">

                                    {[
                                        "Mild",
                                        "Hot",
                                        "Amasenese",
                                        "Amasenese Hot",
                                        "Liver"
                                    ].map(type => (

                                        <label key={type} className="radio-option">

                                            <input
                                                type="radio"
                                                name="sausageType"
                                                value={type}
                                                checked={sausageType === type}
                                                onChange={(e) =>
                                                    setSausageType(e.target.value)
                                                }
                                            />

                                            {type}

                                        </label>

                                    ))}

                                </div>
                            </div>


                            <div className="sausage-section">
                                <label className="sausage-label">
                                    Form
                                </label>

                                <div className="option-row">

                                    {["Link", "Bulk"].map(form => (

                                        <label key={form} className="radio-option">

                                            <input
                                                type="radio"
                                                name="sausageForm"
                                                value={form}
                                                checked={sausageForm === form}
                                                onChange={(e) =>
                                                    setSausageForm(e.target.value)
                                                }
                                            />

                                            {form}

                                        </label>

                                    ))}

                                </div>
                            </div>


                            <div className="sausage-section">
                                <label className="sausage-label">
                                    Fennel
                                </label>

                                <div className="option-row">

                                    {[
                                        "None",
                                        "Whole",
                                        "Ground",
                                        "Whole & Ground"
                                    ].map(fennel => (

                                        <label key={fennel} className="radio-option">

                                            <input
                                                type="radio"
                                                name="sausageFennel"
                                                value={fennel}
                                                checked={sausageFennel === fennel}
                                                onChange={(e) =>
                                                    setSausageFennel(e.target.value)
                                                }
                                            />

                                            {fennel}

                                        </label>

                                    ))}

                                </div>
                            </div>


                            <div className="sausage-section">

                                <label className="checkbox-option">

                                    <input
                                        type="checkbox"
                                        checked={sausageCheese}
                                        onChange={(e) =>
                                            setSausageCheese(e.target.checked)
                                        }
                                    />

                                    Add Cheese

                                </label>

                            </div>

                        </div>

                    ) : (

                        // NORMAL PRODUCT SELECTOR
                        <div className="form-group">

                            <label>Product</label>

                            <select
                                value={selectedProduct || ""}
                                onChange={handleProductChange}
                                disabled={!selectedCategory}
                            >
                                <option value="">
                                    Select a product
                                </option>

                                {selectedCategory?.products?.map(product => (

                                    <option
                                        key={product}
                                        value={product}
                                    >
                                        {product}
                                    </option>

                                ))}

                            </select>

                        </div>

                    )}


                    {/* Quantity + Unit */}
                    <div className="form-row">

                        <div className="form-group quantity-group">

                            <label>Quantity</label>

                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={handleQuantityChange}
                                placeholder="0"
                            />

                        </div>


                        <div className="form-group unit-group">

                            <label>Unit</label>

                            <select
                                value={selectedUnit || ""}
                                onChange={handleUnitChange}
                                disabled={!selectedCategory}
                            >
                                {selectedCategory?.units?.map(unit => (
                                    <option
                                        key={unit}
                                        value={unit}
                                    >
                                        {unit}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Order Notes</label>

                        <textarea
                            value={orderNotes}
                            onChange={(e) => setOrderNotes(e.target.value)}
                            placeholder="Special instructions..."
                            rows="4"
                        />
                    </div>

                    {/* Add to Order */}
                    <button
                        className="add-button"
                        onClick={handleAddToOrder}
                        disabled={
                            !selectedCategory ||
                            !selectedUnit ||
                            !quantity ||
                            (
                                selectedCategory.name !== "SAUSAGE" &&
                                !selectedProduct
                            )
                        }
                    >
                        Add to Order
                    </button>
                </div>

                <OrderSummary
                    orderItems={orderItems}
                    orderNotes={orderNotes}
                    customerName={customerName}
                    customerPhone={customerPhone}
                    pickupDate={pickupDate}
                    setPickupDate={setPickupDate}
                    setSummaryNotes={setSummaryNotes}
                />

                {showOrderHistory && (
                    <OrderHistoryModal
                        orders={customerOrderHistory}
                        customerName={customerName}
                        onClose={() => setShowOrderHistory(false)}
                    />
                )}

            </div>

        </div>
    );
}

export default OrderForm;