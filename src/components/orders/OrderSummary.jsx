function OrderSummary({ orderItems, summaryNotes, setSummaryNotes, customerName, customerPhone, pickupDate, setPickupDate }) {
    const countableUnits = [
        "Count",
        "Loaves",
        "Pack(s)",
        "12oz Container(s)",
        "16oz Container(s)",
        "24oz Container(s)",
        "32oz Container(s)",
        "Box(es)", 
        "Can(s)", 
        "PKG(s)", 
        "Bottle(s)",
        "Single",
        "Double",
        "Scamatch",
        "Full Loaf",
        "2 Foot",
        "3 Foot"
    ];
    const totalItems = orderItems.reduce((total, item) => {

        if (countableUnits.includes(item.unit)) {
            return total + Number(item.quantity);
        }

        return total + 1;

    }, 0);
    return (
        <div className="summary-card">

            <h2>Order Summary</h2>
            <div className="pickup-date-section">

                <label>Pickup Date</label>

                <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                />

            </div>
            {orderItems.length === 0 ? (

                <p className="empty-order">
                    No items added yet.
                </p>

            ) : (

                <div className="summary-items">

                    {orderItems.map(item => (

                        <div
                            key={item.id}
                            className="summary-item"
                        >

                            {item.category === "SAUSAGE" ? (

                                <>
                                    <strong>
                                        {item.type} Sausage
                                    </strong>

                                    <p>
                                        {item.form}

                                        {item.fennel !== "None" &&
                                            ` • ${item.fennel} Fennel`
                                        }

                                        {item.cheese &&
                                            " • Cheese"
                                        }
                                    </p>

                                    <p>
                                        {item.quantity} - {item.unit}
                                    </p>
                                </>

                            ) : (

                                <>
                                    <strong>
                                        {item.product}
                                    </strong>

                                    <p>
                                        {item.quantity} - {item.unit}
                                    </p>
                                </>

                            )}
                            {item.note?.trim() !== "" && (
                                <p className="order-notes">
                                    (Note: {item.note})
                                </p>
                            )}
                        </div>

                    ))}

                </div>
            )}

            <div className="summary-footer">
                Total Items: {totalItems}
            </div>

            <div className="form-group summary-notes">
                <label>Summary Notes</label>

                <textarea
                    value={summaryNotes}
                    onChange={(e) => setSummaryNotes(e.target.value)}
                    placeholder="P/U @ 10am, Call with total, etc..."
                    rows="4"
                />
            </div>
            <button
                className="place-order-button"
                disabled={
                    orderItems.length === 0 ||
                    customerName.trim() === "" ||
                    customerPhone.trim() === "" ||
                    pickupDate.trim() === ""
                }
                onClick={() => {
                    console.log("Place Order clicked");
                }}
            >
                Place Order
            </button>


        </div>
    )
};
export default OrderSummary;