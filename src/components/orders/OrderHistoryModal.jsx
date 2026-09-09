function OrderHistoryModal({ orders, customerName, onClose }) {
    return (
        <div className="modal-overlay">
            <div className="order-history-modal">

                <div className="modal-header">
                    <h2>Order History for {customerName}</h2>

                    <button
                        type="button"
                        className="modal-close-button"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>

                <div className="order-history-list">

                    {orders.map((order) => (
                        <div
                            key={order.id}
                            className="order-history-card"
                        >

                            <div className="order-card-header">
                                <strong>Order #{order.id}</strong>
                                <span>{order.status}</span>
                            </div>

                            <p>
                                <strong>Pickup Date:</strong>{" "}
                                {order.pickupDate}
                            </p>

                            {order.summaryNotes && (
                                <p>
                                    <strong>Summary Notes:</strong>{" "}
                                    {order.summaryNotes}
                                </p>
                            )}

                            <div className="order-history-items">

                                {order.items.map((item, index) => (
                                    <div
                                        key={index}
                                        className="order-history-item"
                                    >
                                        <strong>{item.productName}</strong>

                                        <span>
                                            {item.quantity} - {item.unit}
                                        </span>

                                        {item.note && (
                                            <small>
                                                (Note: {item.note})
                                            </small>
                                        )}
                                    </div>
                                ))}

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
}

export default OrderHistoryModal;