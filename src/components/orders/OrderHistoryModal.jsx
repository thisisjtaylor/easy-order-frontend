function OrderHistoryModal({ orders, customerName, onClose, onAddItem }) {

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
                                        <strong className="history-product">
                                            {item.productName}
                                        </strong>

                                        <span className="history-quantity">
                                            {item.quantity} - {item.unit}
                                        </span>

                                        <small className="history-note">
                                            {item.note ? `(Note: ${item.note})` : ""}
                                        </small>

                                        <button
                                            type="button"
                                            className="add-history-item-button"
                                            onClick={() => onAddItem(item)}
                                            title="Add to current order"
                                        >
                                            +
                                        </button>
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