import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import OrderPage from "./pages/OrderPage";
import OrderSearch from "./components/orders/OrderSearch";
import MainLayout from "./components/orders/MainLayout";
function App() {

 const [currentPage, setCurrentPage] = useState("home");
    const [editingOrder, setEditingOrder] = useState(null);

    const handleEditOrder = (order) => {
        setEditingOrder(order);
        setCurrentPage("createOrder");
    };

    const handleEditComplete = () => {
        setEditingOrder(null);
        setCurrentPage("orderSearch");
    };

    return (
        <MainLayout
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        >
            {currentPage === "createOrder" && (
                <OrderForm
                    editingOrder={editingOrder}
                    onEditComplete={handleEditComplete}
                />
            )}

            {currentPage === "orderSearch" && (
                <OrderSearch
                    onEditOrder={handleEditOrder}
                />
            )}
        </MainLayout>
    );
    /*
  const [count, setCount] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState(null);
  function ProductSelector() {

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState("");
    const [unit, setUnit] = useState("");

    const products = [
        {
            id: 1,
            name: "Ham",
            units: ["pounds", "count"]
        },
        {
            id: 2,
            name: "Turkey",
            units: ["pounds", "count"]
        },
        {
            id: 3,
            name: "Roast Beef",
            units: ["pounds", "count"]
        }
    ];

    return (
        <div>

            <select
                value={selectedProduct?.id || ""}
                onChange={(e) => {
                    const product = products.find(
                        p => p.id === Number(e.target.value)
                    );

                    setSelectedProduct(product);
                    setUnit("");
                }}
            >

                <option value="">
                    🥩 Select Lunchmeat
                </option>

                {products.map(product => (
                    <option
                        key={product.id}
                        value={product.id}
                    >
                        {product.name}
                    </option>
                ))}

            </select>


            {selectedProduct && (

                <div>

                    <h3>{selectedProduct.name}</h3>

                    <label>Quantity</label>

                    <input
                        type="number"
                        min="0"
                        step="0.25"
                        value={quantity}
                        onChange={(e) =>
                            setQuantity(e.target.value)
                        }
                    />


                    <select
                        value={unit}
                        onChange={(e) =>
                            setUnit(e.target.value)
                        }
                    >

                        <option value="">
                            Select unit
                        </option>

                        {selectedProduct.units.map(unit => (
                            <option key={unit} value={unit}>
                                {unit}
                            </option>
                        ))}

                    </select>

                </div>
            )}

        </div>
    );
}
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started bitches</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
      <button onClick={() => setSelectedCategory("lunchmeat")}>
        LUNCHMEAT
    </button>
        {selectedCategory === "lunchmeat" && (
    <select>
        <option>Select Lunchmeat</option>
        <option>Ham</option>
        <option>Turkey</option>
        <option>Roast Beef</option>
        <option>Salami</option>
    </select>
)}
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )*/
}

export default App;
