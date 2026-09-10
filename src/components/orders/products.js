const productCategories = [
    {
        name: "CHEESE",
        units: ["Pound(s)", "Slice(s)", "Count"],
        products: [
            "Asiago Aged (Black Wax)",
            "Asiago Medium Sharp (Brown Wax)",
            "Danish Blue Cheese",
            "Fiore Di Sardegna",
            "Fontina",
            "Fontinella",
            "Havarti",
            "Mascarpone Cheese",
            "Mozzarella (Cedar Valley)",
            "Mozzarella (Chellino)",
            "Parmesan Cup Grated",
            "Parmesan Reggiano",
            "Parmesan Reggiano - Grated",
            "Pecorino Romano",
            "Pecorino Romano - Grated",
            "Pecorino Toscano",
            "Provolone Domestic Sharp",
            "Provolone Imported Sharp",
            "Provolone Med Sharp Unsmoked",
            "Provolone Medium Sharp Smoked",
            "Provolone Mild",
            "Provolone Sharp (Mandarino)",
            "Ricotta",
            "Scamorza"
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
        units: ["Pound(s)", "Slice(s)"],
        products: [
            "Alpino Salami",
            "Coppa Hot",
            "Coppa Mild",
            "Genoa Salami (White Paper)",
            "German Salami (Brown Paper)",
            "Ham - Italian",
            "Ham - Polish",
            "Hot Capicollo",
            "Mortadella",
            "Mortadella W/Pistacchio",
            "Pepperoni",
            "Prosciutto Di Parma",
            "Prosciutto Domestic",
            "Prosciutto Imported",
            "Roast Beef W/Juice",
            "Sopressa Hot",
            "Sopressa Mild",
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
            "Casings",
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
            "California Sicilian w/o Pit",
            "California Sicilian w/Pit",
            "Kalamata w/o Pit",
            "Kalamata w/Pit",
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
            "Olive Salad",
            "Roasted Red Peppers"
        ]
    },

    {
        name: "SANDWHICHES",
        units: ["Single", "Double", "Scamatch", "Full Loaf"],
        products: [
            "Custom Sandwhich",
            "Gregarino Sandwhich",
            "Guido Sandwhich"
        ]
    },

    {
        name: "SUB SANDWHICHES",
        units: ["2 Foot", "3 Foot"],
        products: [
            "American Sub Sandwhich",
            "Custom Sub Sandwhich",
            "Gregarino Sub Sandwhich",
            "Guido Sub Sandwhich"
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