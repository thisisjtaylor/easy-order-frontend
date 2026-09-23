import { useEffect, useState } from "react";
import "./CalendarView.css";
import { orderSearch } from "../../services/orderService";

function CalendarView() {

    const [currentDate, setCurrentDate] = useState(() => new Date());
    const [selectedDate, setSelectedDate] = useState(() => new Date());
    const [selectedStat, setSelectedStat] = useState("ANY");
    const [orders, setOrders] = useState([]);
    const [isLoadingOrders, setIsLoadingOrders] = useState(false);
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const monthName = currentDate.toLocaleString("default", { month: "long" });

    const ORDER_VIEWS = {
        ANY: {
            label: "All Orders",
            matchesItem: () => true
        },
        SAUSAGE: {
            label: "Sausage Orders",

            matchesItem: (item) =>
                item.category === "SAUSAGE"
        },

        BREAD: {
            label: "Bread Orders",

            matchesItem: (item) =>
                item.category === "MARCONI" ||
                item.category === "SUB SANDWICHES"
        }
    };

    const selectedView = ORDER_VIEWS[selectedStat];
    const getSausageStats = (orders) => {

        const grouped = {};

        orders.forEach(order => {

            order.items?.forEach(item => {

                if (item.category !== "SAUSAGE") {
                    return;
                }

                const unit = item.unit ?? "";
                const type = item.sausageType ?? "";
                const form = item.sausageForm ?? "";

                const fennel =
                    item.fennel && item.fennel !== "None"
                        ? item.fennel
                        : null;

                const cheese =
                    item.addCheese === true;

                // Everything that makes this sausage item unique
                const key = [
                    unit,
                    type,
                    form,
                    fennel ?? "",
                    cheese
                ].join("|");

                if (!grouped[key]) {
                    grouped[key] = {
                        quantity: 0,
                        unit,
                        type,
                        form,
                        fennel,
                        cheese
                    };
                }

                grouped[key].quantity +=
                    Number(item.quantity) || 0;
            });
        });

        return Object.values(grouped);
    };
    const filteredOrders = orders
        .map((order) => {

            const filteredItems =
                order.items?.filter(
                    selectedView.matchesItem
                ) || [];

            return {
                ...order,
                items: filteredItems
            };

        })
        .filter(
            (order) => order.items.length > 0
        );

    const formatDateKey = (date) => {

        const y = date.getFullYear();

        const m = String(
            date.getMonth() + 1
        ).padStart(2, "0");

        const d = String(
            date.getDate()
        ).padStart(2, "0");

        return `${y}-${m}-${d}`;
    };

    const formatDisplayDate = (date) => {
        return date.toLocaleDateString(
            "en-US",
            {
                month: "long",
                day: "numeric",
                year: "numeric"
            }
        );
    };

    const formatShortDate = (date) => {
        return date.toLocaleDateString("en-US");
    };

    const previousMonth = () => {
        setCurrentDate(
            new Date(year, month - 1, 1)
        );
    };

    const nextMonth = () => {
        setCurrentDate(
            new Date(year, month + 1, 1)
        );
    };
    const loadOrders = async (date) => {

        const pickupDate = formatDateKey(date);

        try {

            setIsLoadingOrders(true);

            const request = {
                pickupDate: pickupDate
            };

            console.log(
                "Calendar Order Search Request:",
                request
            );

            const response = await orderSearch(request);

            console.log(
                "Calendar Order Search Response:",
                response
            );

            setOrders(response);

        } catch (error) {

            console.error(
                "Error loading calendar orders:",
                error
            );

            setOrders([]);

        } finally {

            setIsLoadingOrders(false);
        }
    };
    useEffect(() => {

        loadOrders(selectedDate);

    }, []);
    const handleDayClick = (day) => {

        const date = new Date(
            year,
            month,
            day
        );

        setSelectedDate(date);

        loadOrders(date);
    };

    const calendarDays = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarDays.push(
            <div
                key={`empty-${i}`}
                className="calendar-day empty"
            />
        );
    }

    for (let day = 1; day <= daysInMonth; day++) {

        const date =
            new Date(year, month, day);

        const dateKey =
            formatDateKey(date);

        const selected =
            formatDateKey(selectedDate) === dateKey;


        calendarDays.push(

            <button
                key={day}
                className={
                    `calendar-day ${selected ? "selected" : ""
                    }`
                }
                onClick={() =>
                    handleDayClick(day)
                }
            >

                <span className="calendar-day-number">
                    {day}
                </span>


            </button>
        );
    }
    const sausageStats = getSausageStats(filteredOrders);
    const quantityByProductAndUnit = filteredOrders
        .flatMap((order) => order.items ?? [])
        .reduce((totals, item) => {

            const unit = item.unit || "No Unit";
            const quantity = Number(item.quantity) || 0;

            const isSubSandwich =
                item.category === "SUB SANDWICHES";

            const productName =
                item.productName || "";

            // Sub sandwiches group ONLY by unit.
            // Everything else groups by product + unit.
            const key = isSubSandwich
                ? `SUB|${unit}`
                : `${productName}|${unit}`;

            if (!totals[key]) {
                totals[key] = {
                    productName,
                    unit,
                    quantity: 0,
                    isSubSandwich
                };
            }

            totals[key].quantity += quantity;

            return totals;

        }, {});
    /*const selectedStats =
        selectedStat === "SAUSAGE"
            ? sausageStats
            : breadStats;

    const totalSausagePounds =
        sausageStats
            .filter(
                stat =>
                    stat.unit === "Pound(s)"
            )
            .reduce(
                (total, stat) =>
                    total + stat.quantity,
                0
            );
*/
    return (

        <div className="calendar-view-page">

            {/* PAGE HEADER */}

            <div className="calendar-page-header">

                <div>
                    <h1>Order Calendar</h1>

                    <p>
                        View scheduled orders and
                        production totals
                    </p>
                </div>

            </div>


            {/* TOP SECTION */}

            <div className="calendar-top-layout">

                {/* CALENDAR */}

                <div className="calendar-card">

                    <div className="calendar-header">

                        <button
                            onClick={previousMonth}
                            className="calendar-nav-button"
                        >
                            ‹
                        </button>

                        <h2>
                            {monthName} {year}
                        </h2>

                        <button
                            onClick={nextMonth}
                            className="calendar-nav-button"
                        >
                            ›
                        </button>

                    </div>


                    <div className="calendar-weekdays">

                        <span>SUN</span>
                        <span>MON</span>
                        <span>TUE</span>
                        <span>WED</span>
                        <span>THU</span>
                        <span>FRI</span>
                        <span>SAT</span>

                    </div>


                    <div className="calendar-grid">

                        {calendarDays}

                    </div>


                </div>


                {/* STATISTICS */}

                <div className="calendar-stats-card">

                    <h2>
                        Orders for{" "}
                        {formatDisplayDate(selectedDate)}
                    </h2>


                    <div className="stats-selector">

                        <label>
                            Show Stats For:
                        </label>

                        <select
                            value={selectedStat}
                            onChange={(event) =>
                                setSelectedStat(
                                    event.target.value
                                )
                            }
                        >
                            {Object.entries(ORDER_VIEWS).map(
                                ([key, view]) => (
                                    <option
                                        key={key}
                                        value={key}
                                    >
                                        {view.label}
                                    </option>
                                )
                            )}

                        </select>

                    </div>


                    {selectedStat !== "ANY" && (

                        <div className="stats-results">

                            <div className="stats-title-row">
                                <h3>
                                    {selectedStat} ORDERS FOR:{" "}
                                    {formatShortDate(selectedDate)}
                                </h3>
                            </div>

                            <div className="quantity-breakdown">

                                {selectedStat === "SAUSAGE" ? (

                                    sausageStats.length > 0 ? (

                                        sausageStats.map((stat, index) => (

                                            <div
                                                className="quantity-breakdown-row"
                                                key={index}
                                            >
                                                <strong>
                                                    {stat.unit === "Pound(s)"
                                                        ? `${stat.quantity}#`
                                                        : stat.quantity}
                                                </strong>

                                                <span>
                                                    {" - "}
                                                    {stat.unit !== "Pound(s)" &&
                                                        `${stat.unit} `
                                                    }
                                                    {stat.type} {stat.form} Sausage
                                                </span>

                                                {stat.fennel && (
                                                    <span className="production-tag">
                                                        {" "}[{stat.fennel} Fennel]
                                                    </span>
                                                )}

                                                {stat.cheese && (
                                                    <span className="production-tag">
                                                        [Cheese]
                                                    </span>
                                                )}
                                            </div>

                                        ))

                                    ) : (
                                        <p>No sausage orders found.</p>
                                    )

                                ) : (

                                    Object.values(quantityByProductAndUnit).length > 0 ? (

                                        Object.values(quantityByProductAndUnit).map(
                                            (stat) => (

                                                <div
                                                    className="quantity-breakdown-row"
                                                    key={`${stat.productName}-${stat.unit}`}
                                                >
                                                    <strong>
                                                        {stat.quantity}
                                                    </strong>

                                                    <span>
                                                        {" - "}
                                                        {stat.unit}

                                                        {!stat.isSubSandwich &&
                                                            stat.productName && (
                                                                <> {stat.productName}</>
                                                            )}
                                                    </span>
                                                </div>

                                            )
                                        )

                                    ) : (
                                        <p>No items found.</p>
                                    )

                                )}

                            </div>

                        </div>

                    )}

                </div>

            </div>


            {/* SELECTED DAY ORDERS */}

            <div className="calendar-orders-section">

                <div className="calendar-orders-header">

                    <h2>
                        Orders for{" "}
                        {formatDisplayDate(selectedDate)}
                    </h2>

                    <strong>
                        {filteredOrders.length}{" "}
                        {filteredOrders.length === 1
                            ? "Order"
                            : "Orders"}
                    </strong>

                </div>


                <div className="calendar-orders-list">

                    {isLoadingOrders ? (

                        <div className="calendar-empty-message">
                            Loading orders...
                        </div>

                    ) : orders.length === 0 ? (

                        <div className="calendar-empty-message">
                            No orders scheduled for this date.
                        </div>

                    ) : (

                        filteredOrders.map((order) => (

                            <div
                                key={order.id}
                                className="calendar-order-card"
                            >

                                <div className="calendar-order-customer">

                                    <div className="calendar-order-title">

                                        <strong>
                                            Order #{order.id}
                                        </strong>

                                        <span
                                            className={`calendar-status ${order.status?.toLowerCase()
                                                }`}
                                        >
                                            {order.status}
                                        </span>

                                    </div>

                                    <span>
                                        Name: {order.customer?.name}
                                    </span>

                                    <span>
                                        Phone: {order.customer?.phone}
                                    </span>

                                    <span>
                                        P/U Date: {order.pickupDate}
                                    </span>

                                    {order.items?.map((item, index) => (

                                        <div
                                            key={`${order.id}-${index}`}
                                            className="search-result-item"
                                        >

                                            <div className="search-result-item-main">

                                                {item.category === "SAUSAGE" ? (
                                                    <>
                                                        <span className="item-quantity">
                                                            {item.unit === "Pound(s)"
                                                                ? `${item.quantity}#`
                                                                : `${item.quantity} ${item.unit}`
                                                            }{" - "}
                                                        </span>

                                                        <strong>
                                                            {item.sausageType} {item.sausageForm} Sausage
                                                        </strong>

                                                        <div className="item-tags">

                                                            {item.fennel &&
                                                                item.fennel !== "None" && (
                                                                    <span>
                                                                        {item.fennel} Fennel
                                                                    </span>
                                                                )}

                                                            {item.addCheese && (
                                                                <span>
                                                                    Cheese
                                                                </span>
                                                            )}

                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className="item-quantity">
                                                            {item.unit === "Pound(s)"
                                                                ? `${item.quantity}# - `
                                                                : `${item.quantity} - ${item.unit}`
                                                            }{" "}
                                                        </span>

                                                        <strong>
                                                            {item.productName}
                                                        </strong>
                                                    </>
                                                )}

                                            </div>

                                            {item.note && (
                                                <div className="search-result-item-note">
                                                    Note: {item.note}
                                                </div>
                                            )}

                                        </div>

                                    ))}
                                </div>

                            </div>

                        ))

                    )}

                </div>

            </div>

        </div>
    );
}

export default CalendarView;