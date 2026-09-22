import { useState } from "react";
import {
    FilePenLine,
    Search,
    CalendarDays
} from "lucide-react";
import OrderForm from "./OrderForm";
import OrderSearch from "./OrderSearch";
import CalendarView from "./CalendarView";
import "./MainLayout.css";

function MainLayout() {
    const [activePage, setActivePage] = useState("create");

    const renderPage = () => {
        switch (activePage) {
            case "search":
                return <OrderSearch />;

            case "create":
                return <OrderForm />;

            case "calendar":
                return <CalendarView />;

            default:
                return <OrderForm />;


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
                        className={activePage === "create" ? "active" : ""}
                        onClick={() => setActivePage("create")}
                    >
                        <FilePenLine
                            className="sidebar-icon"
                            size={22}
                        />

                        <span>{" "}Create Order</span>
                    </button>
                    <button
                        className={activePage === "search" ? "active" : ""}
                        onClick={() => setActivePage("search")}
                    >
                        <Search
                            className="sidebar-icon"
                            size={22}
                        />

                        <span>{" "}Order Search</span>
                    </button>
                    <button
                        className={activePage === "calendar" ? "active" : ""}
                        onClick={() => setActivePage("calendar")}
                    >
                        <CalendarDays
                            className="sidebar-icon"
                            size={22}
                        />

                        <span>{" "}Calendar View</span>
                    </button>
                </nav>
            </aside>

            <main className="main-content">
                {renderPage()}
            </main>

        </div>
    );
}

export default MainLayout;