function OrderSummary({ orderItems, orderNotes, customerName, customerPhone, pickupDate, setPickupDate }) {

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
                            {orderNotes?.trim() !== "" && (
                                <p className="order-notes">
                                    Notes: {orderNotes}
                                </p>
                            )}
                        </div>

                    ))}

                </div>
            )}

            <div className="summary-footer">
                Total Items: {orderItems.length}
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