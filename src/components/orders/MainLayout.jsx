import {
    FilePenLine,
    Search,
    CalendarDays
} from "lucide-react";
import OrderForm from "./OrderForm";
import OrderSearch from "./OrderSearch";
import CalendarView from "./CalendarView";
import "./MainLayout.css";
import { useEffect, useState, useRef } from "react";
function MainLayout() {
    const [activePage, setActivePage] = useState("create");
    const [editingOrder, setEditingOrder] = useState(null);
    const mainContentRef = useRef(null);

    useEffect(() => {
        mainContentRef.current?.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto"
        });

        window.scrollTo(0, 0);
    }, [activePage]);

    const handleEditOrder = (order) => {
        setEditingOrder(order);
        setActivePage("create");

    };

    const handleCreateOrder = () => {
        setEditingOrder(null);
        setActivePage("create");
    };

    const handleOrderUpdated = () => {
        setEditingOrder(null);
        setActivePage("create");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const renderPage = () => {
        switch (activePage) {
            case "search":
                return <OrderSearch
                    onEditOrder={handleEditOrder} />;

            case "create":
                return <OrderForm
                    editingOrder={editingOrder}
                    onOrderUpdated={handleOrderUpdated} />;

            case "calendar":
                return <CalendarView />;

            default:
                return <OrderForm
                    editingOrder={editingOrder}
                    onOrderUpdated={handleOrderUpdated} />;


        }
    };

    return (
        <div className="app-layout">

            <aside className="sidebar">
                <div className="sidebar-header">
                    <h2>Easy Order</h2>
                </div>

                <nav className="sidebar-nav">
                    <button
                        className={
                            activePage === "create"
                                ? "active"
                                : ""
                        }
                        onClick={handleCreateOrder}
                    >
                        <FilePenLine
                            className="sidebar-icon"
                            size={22}
                        />

                        <span> Order Form</span>
                    </button>
                    <button
                        className={
                            activePage === "search"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setActivePage("search")
                        }
                    >
                        <Search
                            className="sidebar-icon"
                            size={22}
                        />

                        <span> Order Search</span>
                    </button>

                    <button
                        className={
                            activePage === "calendar"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setActivePage("calendar")
                        }
                    >
                        <CalendarDays
                            className="sidebar-icon"
                            size={22}
                        />

                        <span> Calendar View</span>
                    </button>

                </nav>
            </aside>

            <main
                ref={mainContentRef}
                className="main-content"
            >
                {renderPage()}
            </main>
        </div>
    );
}

export default MainLayout;