import { useState } from "react";

import OrderForm from "./OrderForm";
import OrderSearch from "./OrderSearch";

import "./MainLayout.css";

function MainLayout() {
    const [activePage, setActivePage] = useState("create");

    const renderPage = () => {
        switch (activePage) {
            case "search":
                return <OrderSearch />;

            case "create":
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
                        ＋ Create Order
                    </button>

                    <button
                        className={activePage === "search" ? "active" : ""}
                        onClick={() => setActivePage("search")}
                    >
                        🔍 Order Search
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