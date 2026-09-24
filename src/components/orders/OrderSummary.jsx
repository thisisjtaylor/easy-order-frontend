import { useState } from "react";
import { placeOrder, updateOrder } from "../../services/orderService";
import { X } from "lucide-react";
function OrderSummary({ onOrderUpdated, editingOrder, orderItems, summaryNotes, setSummaryNotes, customerName, customerPhone, pickupDate, setPickupDate, onRemoveItem, onOrderPlaced }) {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");
    const [showStatusModel, setStatusModel] = useState(false);

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
        "Single(s)",
        "Double(s)",
        "Scamatch(es)",
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

    const handleSubmitOrder = async () => {

        if (orderItems.length === 0) {
            setMessage("Please add at least one item.");
            return;
        }

        const request = {
            customerName: customerName,
            phone: customerPhone,
            pickupDate: pickupDate,
            summaryNotes: summaryNotes,

            items: orderItems.map(item => {

                if (item.category === "SAUSAGE") {
                    return {
                        category: item.category,
                        type: item.type,
                        form: item.form,
                        fennel: item.fennel,
                        cheese: item.cheese,
                        quantity: item.quantity,
                        unit: item.unit,
                        note: item.note
                    };
                }

                return {
                    category: item.category,
                    product: item.product,
                    quantity: item.quantity,
                    unit: item.unit,
                    note: item.note
                };
            })
        };

        try {
            let response;
            setIsSubmitting(true);
            setMessage("");

            console.log("Sending order:", request);

            if (editingOrder) {

                response = await updateOrder(
                    editingOrder.id,
                    request
                );
                onOrderUpdated();
            } else {

                response = await placeOrder(request);

            }
            console.log("Order placed:", response);

            setMessage(response.message);
            setStatusModel(true);

            onOrderPlaced();

        } catch (error) {

            console.error("Error placing order:", error);

            const errorMessage =
                error.response?.data?.message ||
                "Unable to place order. Please try again.";

            setMessage(errorMessage);
            setShowStatusModel(true);

        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="summary-card">

            <h2>Order Summary</h2>
            <div className="pickup-date-section">

                <label>Pickup Date</label>

                <input
                    type="date"
                    min={new Date().toLocaleDateString("en-CA")}
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                />

            </div>
            {orderItems.length === 0 ? (

                <p className="empty-order">
                    No items added yet
                </p>

            ) : (

                <div className="summary-items">

                    {orderItems.map((item, index) => (

                        <div
                            key={item.id}
                            className="summary-item"
                        >

                            <div className="summary-item-header">

                                <div className="summary-item-title">

                                    {item.unit === "Pound(s)" ? (

                                        <>
                                            <span className="summary-quantity">
                                                {item.quantity}# -
                                            </span>

                                            <strong>
                                                {item.category === "SAUSAGE"
                                                    ? `${item.type} ${item.form} Sausage`
                                                    : item.product
                                                }
                                            </strong>


                                        </>

                                    ) : (
                                        <>
                                            <span className="summary-quantity">
                                                {item.quantity} - {item.unit}
                                            </span>

                                            <strong>
                                                {" "}
                                                {item.category === "SAUSAGE"
                                                    ? `${item.type} ${item.form} Sausage`
                                                    : item.product
                                                }
                                            </strong>
                                        </>
                                    )}

                                </div>

                                <X
                                    size={16}
                                    className="remove-item-button"
                                    onClick={() => onRemoveItem(index)}
                                    />
                            </div>



                            {item.category === "SAUSAGE" && (
                                <div className="summary-options">

                                    {item.fennel &&
                                        item.fennel !== "None" && (
                                            <span className="summary-tag">
                                                {item.fennel} Fennel
                                            </span>
                                        )}

                                    {item.cheese && (
                                        <span className="summary-tag">
                                            Cheese
                                        </span>
                                    )}

                                </div>
                            )}

                            {item.note?.trim() !== "" && (
                                <div className="order-notes">
                                    <strong>Note:</strong> {item.note}
                                </div>
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
            {editingOrder === null ? (
                <button
                    className="place-order-button"
                    disabled={
                        orderItems.length === 0 ||
                        customerName.trim() === "" ||
                        customerPhone.trim() === "" ||
                        customerPhone.length < 10 ||
                        pickupDate.trim() === "" ||
                        isSubmitting}
                    onClick={handleSubmitOrder}>
                    {isSubmitting ? "Placing Order..." : "Place Order"}
                </button>) : (
                <button
                    className="place-order-button"
                    disabled={
                        orderItems.length === 0 ||
                        customerName.trim() === "" ||
                        customerPhone.trim() === "" ||
                        customerPhone.length < 10 ||
                        pickupDate.trim() === "" ||
                        isSubmitting}
                    onClick={handleSubmitOrder}>
                    {isSubmitting ? "Updating Order..." : "Update Order"}
                </button>)}


            {showStatusModel && (
                <div className="modal-status-overlay">

                    <div className="status-modal">

                        <h3>Order Status:</h3>

                        <p>{message}</p>

                        <button
                            type="button"
                            onClick={() => setStatusModel(false)}
                        >
                            Close
                        </button>

                    </div>

                </div>
            )}

        </div>
    )
};
export default OrderSummary;