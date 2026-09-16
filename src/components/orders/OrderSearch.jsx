import { useState } from "react";

function OrderSearch() {

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

            // Clear sausage filters when leaving SAUSAGE
            ...(category !== "SAUSAGE" && {
                sausageType: "",
                sausageForm: "",
                fennel: "",
                addCheese: ""
            })
        }));
    };

    const handleSearch = (e) => {
        e.preventDefault();

        // Remove empty filters before sending to backend
        const searchRequest = Object.fromEntries(
            Object.entries(filters).filter(
                ([_, value]) => value !== ""
            )
        );

        console.log("Search Request:", searchRequest);

        // Later:
        // searchOrders(searchRequest);
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
                                <option value="CHEESE">Cheese</option>
                                <option value="LUNCHMEAT">Lunchmeat</option>
                                <option value="MARCONI">Marconi</option>
                                <option value="SALADS">Salads</option>
                                <option value="SANDWICHES">Sandwiches</option>
                                <option value="SAUSAGE">Sausage</option>
                                <option value="SUB SANDWICHES">
                                    Sub Sandwiches
                                </option>
                            </select>
                        </div>

                        <div className="search-field">
                            <label>Product</label>
                            <input
                                type="text"
                                name="productName"
                                value={filters.productName}
                                onChange={handleChange}
                                placeholder="Product name"
                            />
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
                            <input
                                type="text"
                                name="unit"
                                value={filters.unit}
                                onChange={handleChange}
                                placeholder="Pound(s), Count..."
                            />
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
                        className="search-orders-button"
                    >
                        Search Orders
                    </button>

                </div>

            </form>

        </div>
    );
}

export default OrderSearch;