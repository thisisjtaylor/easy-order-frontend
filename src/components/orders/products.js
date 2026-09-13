const productCategories = [
    {
        name: "CHEESE",
        units: ["Pound(s)", "Slice(s)", "12oz Container(s)", "16oz Container(s)", "32oz Container(s)", "Count"],
        products: [
            "American Cheese",
            "Asiago Aged (Black Wax)",
            "Asiago Fresco",
            "Asiago Medium Sharp (Brown Wax)",
            "Bel Paese",
            "Bucheron",
            "Danish Blue Cheese",
            "Don Wine",
            "Feta",
            "Fiore Di Sardegna",
            "Fontina",
            "Fontinella",
            "Gorgonzola",
            "Gouda",
            "Gruyere",
            "Havarti",
            "Locatelli",
            "Manchego",
            "Mascarpone Cheese",
            "Meseta",
            "Mozzarella (Cedar Valley)",
            "Mozzarella (Chellino)",
            "Ovoline (Fresh Mozzarella)",
            "Parmesan Cup Grated",
            "Parmesan Reggiano",
            "Parmesan Reggiano - Grated",
            "Pecorino Calabrese",
            "Pecorino Crotonese",
            "Pecorino Romano",
            "Pecorino Romano - Grated",
            "Pecorino Toscano",
            "Pepperjack",
            "Petit Basque",
            "Primo Sale",
            "Provolone Domestic Sharp",
            "Provolone Imported Sharp",
            "Provolone Med Sharp Unsmoked",
            "Provolone Medium Sharp Smoked",
            "Provolone Mild",
            "Provolone Sharp (Mandarino)",
            "Ricotta",
            "Ricotta Salata",
            "Roquefort",
            "Rosemary Goat Cheese",
            "Saracino",
            "Scamorza",
            "Swiss"
        ]
    },

    {
        name: "FISH",
        units: ["Pound(s)", "Box(es)", "Case(s)", "Count"],
        products: [
            "Bacala",
            "Calamari",
            "Calamari Tubes Only",
            "Calamari Uncleaned",
            "Cod Loins",
            "Lobster Tails",
            "Monkfish",
            "Octopus",
            "Octopus Baby",
            "Scallops",
            "Sepia",
            "Shrimp 10/15",
            "Shrimp 16/20",
            "Shrimp 16/20 Peeled & Deveined",
            "Shrimp Big",
            "Shrimp Breaded",
            "Shrimp Breaded 16/20",
            "Shrimp Cleaned",
            "Shrimp Jumbo Cooked",
            "Shrimp Tail Off 16/20",
            "Skate",
            "Smelts",
            "Zmollusk-Clams",
            "Zmollusk-Clams Cherrystone",
            "Zmollusk-Clams Large",
            "Zmollusk-Clams Littleneck",
            "Zmollusk-Clams Middlenecks",
            "Zmollusk-Clams Small",
            "Zmollusk-Mussels",
            "Zmollusk-Oysters"
        ]
    },
    {
        name: "GROCERY",
        units: ["Box(es)", "Can(s)", "PKG(s)", "Bottle(s)", "Count"],
        products: [
            "Cannoli Shells - Large",
            "Cannoli Shells - Small",
            "Fennel Celery",
            "Full Red Tomato Sauce",
            "Lasagna Sheets",
            "Marconi Vinegar & Oil",
            "Mostaccioli Cookies",
            "Pizzelle Anise",
            "Raspberry Cookies",
            "Savoia Sauce",
            "Sport Pepper Small",
            "Tomato Sauce Dei Fratelli",
            "Tuna Tonno"
        ]
    },

    {
        name: "LUNCH MEAT",
        units: ["Pound(s)", "Slice(s)", "Whole"],
        products: [
            "Alpino Salami",
            "Coppa Hot",
            "Coppa Mild",
            "Genoa Salami (White Paper)",
            "German Salami (Brown Paper)",
            "Guanciale",
            "Ham - Italian",
            "Ham - Polish",
            "Head Cheese",
            "Hot Capicollo",
            "Mortadella",
            "Mortadella w/Pistacchio",
            "Pancetta",
            "Pepperoni",
            "Pepperoni Sticks",
            "Prosciutto Di Parma",
            "Prosciutto Domestic",
            "Prosciutto Imported",
            "Prosciutto Hot",
            "Prosciutto Speck",
            "Roast Beef w/Juice",
            "Sopressa Hot",
            "Sopressa Mild",
            "Turkey",
            "Volpi Salami"
        ]
    },
    {
        name: "MARCONI",
        units: ["Loaves", "Pack(s)", "Count"],
        products: [
            "Dough - Fresh",
            "Dough - Frozen",
            "Old World Loaves (Big)",
            "Old World Loaves (Small)",
            "Regular Loaves",
            "Sandwich Rolls",
            "Sliced Loaves",
            "1# Twist",
            "2# Twist"
        ]
    },
    {
        name: "MISCELLANEOUS MEAT",
        units: ["6 Pack", "5 Pack", "4 Pack", "3 Pack", "2 Pack", "1 Pack", "Pound(s)", "Count"],
        products: [
            "Avoltini",
            "Bolognese",
            "Casings",
            "Marinated Steaks",
            "Meatballs",
            "Meatball Mix",
            "Neckbones",
            "Porchetta",
            "Pork Belly",
            "Spiced Chicken",
            "Tenderloin"
        ]
    },
    {
        name: "OLIVES",
        units: [
            "12oz Container(s)",
            "16oz Container(s)",
            "32oz Container(s)"
        ],
        products: [
            "Blue Cheese Stuffed Olives",
            "California Sicilian w/o Pit",
            "California Sicilian w/Pit",
            "Kalamata w/o Pit",
            "Oil Cured",
            "Sweet Sicilian w/Pit"
        ]
    },

    {
        name: "SALADS",
        units: [
            "12oz Container(s)",
            "16oz Container(s)",
            "24oz Container(s)",
            "32oz Container(s)"
        ],
        products: [
            "Artichoke Salad",
            "Fish Salad",
            "Olive Salad",
            "Roasted Red Peppers"
        ]
    },

    {
        name: "SANDWHICHES",
        units: ["Single(s)", "Double(s)", "Scamatch(es)", "Full Loaf"],
        products: [
            "Guido Sandwhich",
            "Gregarino Sandwhich",
            "Custom Sandwhich"
        ]
    },

    {
        name: "SUB SANDWHICHES",
        units: ["2 Foot", "3 Foot"],
        products: [
            "Guido Sub Sandwhich",
            "Gregarino Sub Sandwhich",
            "American Sub Sandwhich",
            "Custom Sub Sandwhich"
        ]
    },
    // SAUSAGE IS CONFIGURABLE
    {
        name: "SAUSAGE",
        units: ["Pound(s)", "Bun Size Link(s)", "Patties"],

        options: {
            type: [
                "Mild",
                "Hot",
                "Amasenese",
                "Amasenese Hot",
                "Liver"
            ],

            form: [
                "Link",
                "Bulk"
            ],

            fennel: [
                "None",
                "Ground",
                "Whole",
                "Whole & Ground"
            ],

            cheese: [
                "None",
                "Cheese"
            ]
        }
    },
    {
        name: "TRAYS",
        units: [
            "Small",
            "Medium",
            "Large"
        ],
        products: [
            "Meat & Cheese Tray",
            "Sandwhich Tray"
        ]
    },
];

export default productCategories;
