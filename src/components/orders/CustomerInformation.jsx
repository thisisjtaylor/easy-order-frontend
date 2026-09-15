function CustomerInformation({
    customerName,
    setCustomerName,
    customerPhone,
    setCustomerPhone,
    customerOrderHistory,
    historyLoaded,
    setShowOrderHistory
}) {
    const formatPhoneNumber = (phone) => {
        if (!phone) return "";

        const digits = phone.replace(/\D/g, "").slice(0, 10);

        if (digits.length < 4) {
            return digits;
        }

        if (digits.length < 7) {
            return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
        }

        return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    };

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
                    value={formatPhoneNumber(customerPhone)}
                    onChange={(e) => {
                        const digits = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 10);

                        setCustomerPhone(digits);
                    }}
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