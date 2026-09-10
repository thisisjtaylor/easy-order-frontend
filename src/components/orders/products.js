const productCategories = [
    {
        name: "CHEESE",
        units: ["Pound(s)", "Slice(s)", "Count"],
        products: [
            "Asiago Aged (Black Wax)",
			"Asiago Medium Sharp (Brown Wax)",
			"Fiore Di Sardegna",
			"Havarti",
			"Parmesan Reggiano",
			"Pecorino Toscano",
            "Danish Blue Cheese",
            "Fontina",
            "Fontinella",
            "Mascarpone Cheese",
            "Mozzarella (Cedar Valley)",
            "Mozzarella (Chellino)",
            //"Parmesan Reggiano",
            "Parmesan Cup Grated",
            "Parmesan Reggiano -  Grated",
            "Pecorino Romano - Grated",
            "Pecorino Romano",
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
        name: "OLIVES",
        units: [
            "12oz Container(s)",
            "16oz Container(s)",
            "32oz Container(s)"
        ],
        products: [
            "California Sicilian W/O Pit",
            "California Sicilian W/Pit",
            "Kalamata W/O Pit",
            "Kalamata W/Pit",
            "Oil Cured",
            "Sweet Sicilian W/Pit",
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
            "Mortadella W/Pistacchio",
            "Mortadella",
            "Pepperoni",
            "Prosciutto Di Parma",
            "Prosciutto Domestic",
            "Prosciutto Imported",
            "Roast Beef W/Juice",
            "Sopressa Hot",
            "Sopressa Mild",
            "Volpi Salami",
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
        name: "SANDWHICHES",
        units: ["Single", "Double", "Scamatch", "Full Loaf"],
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
        name: "MARCONI",
        units: ["Loaves", "Pack(s)", "Count"],
        products: [
			"Dough - Fresh",
            "Dough - Frozen",
			"Old World Loaves (Big)",
			"Old World Loaves (Small)",
			"Sliced Loaves",
            "Regular Loaves",
            "Sandwich Rolls",
            "Twist 1#",
            "Twist 2#",
        ]
    },

     {
        name: "MISCELLANEOUS",
        units: ["6 Pack", "5 Pack", "4 Pack", "3 Pack", "2 Pack", "1 Pack", "Count"],
        products: [
			"Meatballs"
        ]
    }
];

export default productCategories;