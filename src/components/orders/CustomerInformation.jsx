function CustomerInformation({
    customerName,
    setCustomerName,
    customerPhone,
    setCustomerPhone,
    customerOrderHistory,
    historyLoaded,
    setShowOrderHistory
}) {

    return (
        <div className="customer-card">

            <h2>Customer Information</h2>

            <div className="form-group">
                <label>Name</label>

                <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Customer name"
                />
            </div>

            <div className="form-group">
                <label>Phone Number</label>

                <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="(555) 555-5555"
                />
            </div>
            <button
                type="button"
                className="history-button"
                disabled={
                    customerPhone.trim() === "" ||
                    !historyLoaded ||
                    customerOrderHistory.length === 0
                }
                onClick={() => setShowOrderHistory(true)}
            >
                View Order History
            </button>
        </div>
    );
}

export default CustomerInformation;