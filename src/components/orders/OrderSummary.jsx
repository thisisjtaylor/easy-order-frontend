function OrderSummary({ orderItems }) {

    return (
        <div className="order-summary">

            <h2>Current Order</h2>

            {orderItems.length === 0 ? (

                <p>No items added yet.</p>

            ) : (

                <div className="order-items">

                    {orderItems.map((item, index) => (

                        <div
                            className="order-item"
                            key={index}
                        >

                            <h3>
                                {item.product.name}
                            </h3>

                            <p>
                                Quantity: {item.quantity} {item.unit}
                            </p>

                            {item.specialNotes && (
                                <p>
                                    Notes: {item.specialNotes}
                                </p>
                            )}

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
}

export default OrderSummary;