function CustomerInformation({
    customerName,
    setCustomerName,
    customerPhone,
    setCustomerPhone,
    fulfillmentType,
    setFulfillmentType,
    orderNotes,
    setOrderNotes
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

            <div className="form-group">
                <label>Order Notes</label>

                <textarea
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    placeholder="Special instructions..."
                    rows="4"
                />
            </div>

        </div>
    );
}

export default CustomerInformation;