import { useState } from "react";
import productCategories from "./products";
import "./OrderSearch.css";
import { orderSearch } from "../../services/orderService";

function OrderSearch() {
    const [searchResults, setSearchResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [filters, setFilters] = useState({
        customerName: "",
        customerPhone: "",
        orderId: "",
        pickupDate: "",
        category: "",
        productName: "",
        quantity: "",
        unit: "",
        note: "",
        status: "",
        summaryNotes: "",

        // Sausage only
        sausageType: "",
        sausageForm: "",
        fennel: "",
        addCheese: ""
    });

    const selectedCategory = productCategories.find(
        category => category.name === filters.category
    );
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCategoryChange = (e) => {
        const category = e.target.value;

        setFilters(prev => ({
            ...prev,
            category,

            // Reset fields that depend on category
            productName: "",
            unit: "",

            // Reset sausage fields
            sausageType: "",
            sausageForm: "",
            fennel: "",
            addCheese: ""
        }));
    };

    const handleSearch = async (e) => {
        e.preventDefault();

        const request = {
            customerName: filters.customerName,
            phone: filters.customerPhone,
            orderId: filters.orderId,
            pickupDate: filters.pickupDate,
            category: filters.category,
            product: filters.productName,
            quantity: filters.quantity,
            unit: filters.unit,
            note: filters.note,
            status: filters.status,
            summaryNotes: filters.summaryNotes,

            type: filters.sausageType,
            form: filters.sausageForm,
            fennel: filters.fennel,
            cheese:
                filters.addCheese === ""
                    ? null
                    : filters.addCheese === "true"
        };

        const searchRequest = Object.fromEntries(
            Object.entries(request).filter(
                ([_, value]) =>
                    value !== "" &&
                    value !== null &&
                    value !== undefined
            )
        );

        console.log("1. Search Request:", searchRequest);

        try {
            setIsSearching(true);

            const response = await orderSearch(searchRequest);

            //console.log("2. ENTIRE RESPONSE:", response);
            //console.log("3. Is Array:", Array.isArray(response));
            //console.log("4. Length:", response?.length);

            setSearchResults(response);
            setHasSearched(true);

        } catch (error) {

            console.error("5. SEARCH ERROR:", error);
            console.error("Backend response:", error.response?.data);

            setSearchResults([]);
            setHasSearched(true);

        } finally {
            setIsSearching(false);
        }
    };
    const handleClear = () => {
        setFilters({
            customerName: "",
            customerPhone: "",
            orderId: "",
            pickupDate: "",
            category: "",
            productName: "",
            quantity: "",
            unit: "",
            note: "",
            status: "",
            summaryNotes: "",

            sausageType: "",
            sausageForm: "",
            fennel: "",
            addCheese: ""
        });
    };


    return (
        <div className="order-search-page">

            <div className="order-search-header">
                <h1>Order Search</h1>
                <p>Search and filter customer orders.</p>
            </div>

            <form
                className="order-search-form"
                onSubmit={handleSearch}
            >

                {/* CUSTOMER */}
                <div className="search-section">

                    <h3>Customer</h3>

                    <div className="search-grid">

                        <div className="search-field">
                            <label>Customer Name</label>
                            <input
                                type="text"
                                name="customerName"
                                value={filters.customerName}
                                onChange={handleChange}
                                placeholder="Customer name"
                            />
                        </div>

                        <div className="search-field">
                            <label>Customer Phone</label>
                            <input
                                type="text"
                                name="customerPhone"
                                value={filters.customerPhone}
                                onChange={handleChange}
                                placeholder="Phone number"
                            />
                        </div>

                        <div className="search-field">
                            <label>Order ID</label>
                            <input
                                type="number"
                                name="orderId"
                                value={filters.orderId}
                                onChange={handleChange}
                                placeholder="Order #"
                            />
                        </div>

                        <div className="search-field">
                            <label>Pickup Date</label>
                            <input
                                type="date"
                                name="pickupDate"
                                value={filters.pickupDate}
                                onChange={handleChange}
                            />
                        </div>

                    </div>
                </div>


                {/* ORDER ITEM */}
                <div className="search-section">

                    <h3>Order Details</h3>

                    <div className="search-grid">

                        <div className="search-field">
                            <label>Category</label>

                            <select
                                name="category"
                                value={filters.category}
                                onChange={handleCategoryChange}
                            >
                                <option value="">All Categories</option>

                                {productCategories.map((category) => (
                                    <option
                                        key={category.name}
                                        value={category.name}
                                    >
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="search-field">
                            <label>Product</label>

                            <select
                                name="productName"
                                value={filters.productName}
                                onChange={handleChange}
                                disabled={!filters.category || filters.category === "SAUSAGE"}
                            >
                                <option value="">
                                    {!filters.category
                                        ? "Select Category First"
                                        : filters.category === "SAUSAGE"
                                            ? "---"
                                            : "All Products"}
                                </option>

                                {selectedCategory?.products?.map((product) => (
                                    <option
                                        key={product}
                                        value={product}
                                    >
                                        {product}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="search-field">
                            <label>Quantity</label>
                            <input
                                type="number"
                                name="quantity"
                                value={filters.quantity}
                                onChange={handleChange}
                                placeholder="Quantity"
                            />
                        </div>

                        <div className="search-field">
                            <label>Unit</label>

                            <select
                                name="unit"
                                value={filters.unit}
                                onChange={handleChange}
                                disabled={!filters.category}
                            >
                                <option value="">
                                    {filters.category
                                        ? "Any Unit"
                                        : "Select Category First"}
                                </option>

                                {selectedCategory?.units?.map((unit) => (
                                    <option key={unit} value={unit}>
                                        {unit}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </div>


                    {/* SAUSAGE FILTERS */}
                    {filters.category === "SAUSAGE" && (

                        <div className="sausage-search-section">

                            <div className="sausage-search-header">
                                <h4>Sausage Details</h4>
                                <span>
                                    Optional sausage-specific filters
                                </span>
                            </div>

                            <div className="search-grid sausage-search-grid">

                                <div className="search-field">
                                    <label>Sausage Type</label>

                                    <select
                                        name="sausageType"
                                        value={filters.sausageType}
                                        onChange={handleChange}
                                    >
                                        <option value="">Any Type</option>
                                        <option value="Mild">Mild</option>
                                        <option value="Hot">Hot</option>
                                    </select>
                                </div>

                                <div className="search-field">
                                    <label>Sausage Form</label>

                                    <select
                                        name="sausageForm"
                                        value={filters.sausageForm}
                                        onChange={handleChange}
                                    >
                                        <option value="">Any Form</option>
                                        <option value="Link">Link</option>
                                        <option value="Bulk">Bulk</option>
                                        <option value="Patty">Patty</option>
                                    </select>
                                </div>

                                <div className="search-field">
                                    <label>Fennel</label>

                                    <select
                                        name="fennel"
                                        value={filters.fennel}
                                        onChange={handleChange}
                                    >
                                        <option value="">Any</option>
                                        <option value="None">None</option>
                                        <option value="Ground">Ground</option>
                                        <option value="Whole">Whole</option>
                                    </select>
                                </div>

                                <div className="search-field">
                                    <label>Cheese</label>

                                    <select
                                        name="addCheese"
                                        value={filters.addCheese}
                                        onChange={handleChange}
                                    >
                                        <option value="">Any</option>
                                        <option value="true">With Cheese</option>
                                        <option value="false">Without Cheese</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                    )}


                    <div className="search-grid search-grid-secondary">

                        <div className="search-field">
                            <label>Status</label>

                            <select
                                name="status"
                                value={filters.status}
                                onChange={handleChange}
                            >
                                <option value="">Any Status</option>
                                <option value="NEW">New</option>
                                <option value="IN_PROGRESS">
                                    In Progress
                                </option>
                                <option value="READY">Ready</option>
                                <option value="COMPLETED">
                                    Completed
                                </option>
                                <option value="CANCELLED">
                                    Cancelled
                                </option>
                            </select>
                        </div>

                        <div className="search-field search-field-wide">
                            <label>Item Note</label>

                            <input
                                type="text"
                                name="note"
                                value={filters.note}
                                onChange={handleChange}
                                placeholder="Search item notes"
                            />
                        </div>

                        <div className="search-field search-field-wide">
                            <label>Summary Notes</label>

                            <input
                                type="text"
                                name="summaryNotes"
                                value={filters.summaryNotes}
                                onChange={handleChange}
                                placeholder="Search order summary notes"
                            />
                        </div>

                    </div>

                </div>


                {/* BUTTONS */}
                <div className="search-actions">

                    <button
                        type="button"
                        className="clear-search-button"
                        onClick={handleClear}
                    >
                        Clear
                    </button>

                    <button
                        type="submit"
                        className="search-orders-button">
                        Search Orders
                    </button>

                </div>

            </form>

            <div className="search-results">

                {isSearching && (
                    <div className="search-results-message">
                        Searching orders...
                    </div>
                )}

                {!isSearching && hasSearched && searchResults.length === 0 && (
                    <div className="search-results-message">
                        No orders found.
                    </div>
                )}

                {!isSearching && searchResults.length > 0 && (
                    <>
                        <div className="search-results-header">
                            <h2>Search Results</h2>

                            <span>
                                {searchResults.length} order
                                {searchResults.length !== 1 ? "s" : ""} found
                            </span>
                        </div>

                        <div className="search-results-list">

                            {searchResults.map((order) => (

                                <div
                                    key={order.id}
                                    className="search-result-card"
                                >

                                    <div className="search-result-top">

                                        <div>
                                            <h3>
                                                Order #{order.id}
                                            </h3>

                                            <span className="search-result-customer">
                                                {order.customer?.name}
                                            </span>
                                        </div>

                                        <span className="search-result-status">
                                            {order.status ?? "No Status"}
                                        </span>

                                    </div>


                                    <div className="search-result-details">

                                        <div>
                                            <span className="detail-label">
                                                Phone
                                            </span>

                                            <span>
                                                {order.customer?.phone}
                                            </span>
                                        </div>

                                        <div>
                                            <span className="detail-label">
                                                Pickup Date
                                            </span>

                                            <span>
                                                {order.pickupDate
                                                    ? new Date(order.pickupDate + "T00:00:00").toLocaleDateString("en-US")
                                                    : ""}
                                            </span>
                                        </div>

                                    </div>
                                    
                                    <div className="search-result-items">

                                        {order.items?.map((item, index) => (

                                            <div
                                                key={`${order.id}-${index}`}
                                                className="search-result-item"
                                            >

                                                <div className="search-result-item-main">

                                                    {item.category === "SAUSAGE" ? (
                                                        <>
                                                            <strong>
                                                                {item.quantity}# -{" "}
                                                                {item.sausageType}{" "}
                                                                {item.sausageForm} Sausage
                                                            </strong>

                                                            <div className="item-tags">

                                                                {item.fennel &&
                                                                    item.fennel !== "None" && (
                                                                        <span>
                                                                            {item.fennel} Fennel
                                                                        </span>
                                                                    )}

                                                                {item.addCheese && (
                                                                    <span>
                                                                        Cheese
                                                                    </span>
                                                                )}

                                                            </div>
                                                        </>
                                                    ) : (
                                                        <strong>
                                                            {item.quantity} {item.unit} -{" "}
                                                            {item.productName}
                                                        </strong>
                                                    )}

                                                </div>

                                                {item.note && (
                                                    <div className="search-result-item-note">
                                                        Note: {item.note}
                                                    </div>
                                                )}

                                            </div>

                                        ))}

                                    </div>

                                    {order.summaryNotes && (
                                        <div className="search-result-summary-note">
                                            <strong>Summary Notes:</strong>{" "}
                                            {order.summaryNotes}
                                        </div>
                                    )}

                                </div>

                            ))}

                        </div>
                    </>
                )}

            </div>

        </div>
    );
}

export default OrderSearch;