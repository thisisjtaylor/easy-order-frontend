function OrderSummary({ orderItems }) {

return (
    <div className="summary-card">

        <h2>Order Summary</h2>

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

                    </div>

                ))}

            </div>
        )}

        <div className="summary-footer">
            Total Items: {orderItems.length}
        </div>

    </div>
)};
export default OrderSummary;