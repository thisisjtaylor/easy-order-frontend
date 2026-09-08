function QuantitySelector({
    quantity,
    unit,
    allowedUnits,
    onQuantityChange,
    onUnitChange
}) {

    return (
        <div className="quantity-selector">

            <h3>How much?</h3>

            <div className="quantity-controls">

                <input
                    type="number"
                    min="0"
                    step="0.25"
                    value={quantity}
                    onChange={(e) =>
                        onQuantityChange(e.target.value)
                    }
                />

                <select
                    value={unit}
                    onChange={(e) =>
                        onUnitChange(e.target.value)
                    }
                >

                    <option value="">
                        Select unit
                    </option>

                    {allowedUnits.map((unitOption) => (

                        <option
                            key={unitOption}
                            value={unitOption}
                        >
                            {unitOption}
                        </option>

                    ))}

                </select>

            </div>

        </div>
    );
}

export default QuantitySelector;