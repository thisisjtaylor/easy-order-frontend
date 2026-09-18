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

                                <strong className="history-order-number">
                                    Order #{order.id}
                                </strong>

                                <div className="history-pickup-date">
                                    <strong>Pickup Date:</strong>{" "}
                                    {new Date(order.pickupDate + "T00:00:00").toLocaleDateString()}
                                </div>

                                <span className="history-status">
                                    {order.status}
                                </span>


                            </div>



                            <div className="order-history-items">
                                {order.summaryNotes && (
                                    <div className="history-summary-notes">
                                        <strong>Summary Notes:</strong>
                                        <span>{order.summaryNotes}</span>
                                    </div>
                                )}
                                {order.items.map((item, index) => (
                                    <div key={index} className="order-history-item">

                                        <div className="history-item-content">

                                            {/* ITEM NAME / QUANTITY */}
                                            <div className="history-item-title">

                                                {item.unit === "Pound(s)" ? (
                                                    <>
                                                        <span className="history-quantity">
                                                            {item.quantity}# -
                                                        </span>

                                                        <strong>
                                                            {item.category === "SAUSAGE"
                                                                ? `${item.sausageType} ${item.sausageForm} Sausage`
                                                                : item.productName
                                                            }
                                                        </strong>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className="history-quantity">
                                                            {item.quantity}-{item.unit}
                                                        </span>

                                                        <strong>
                                                            {" "}
                                                            {item.category === "SAUSAGE"
                                                                ? `${item.sausageType} ${item.sausageForm} Sausage`
                                                                : item.productName
                                                            }
                                                        </strong>
                                                    </>
                                                )}

                                            </div>


                                            {/* SAUSAGE OPTIONS */}
                                            {item.category === "SAUSAGE" && (
                                                <div className="history-options">

                                                    {item.fennel && item.fennel !== "None" && (
                                                        <span className="history-tag">
                                                            {item.fennel} Fennel
                                                        </span>
                                                    )}

                                                    {item.addCheese && (
                                                        <span className="history-tag">
                                                            Cheese
                                                        </span>
                                                    )}

                                                </div>
                                            )}


                                            {/* ITEM NOTE */}
                                            {item.note?.trim() !== "" && (
                                                <div className="history-note">
                                                    <strong>Note: </strong>{" "}
                                                    {item.note}
                                                </div>
                                            )}

                                        </div>


                                        {/* ADD TO CURRENT ORDER */}
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