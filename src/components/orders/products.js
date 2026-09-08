const productCategories = [
    {
        name: "CHEESE",
        units: ["POUNDS(#)", "COUNT"],
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
            "12oz Container",
            "16oz Container",
            "24oz Container",
            "32oz Container"
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
            "Small (12oz)",
            "Medium (16oz)",
            "Large (32oz)"
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
        units: ["POUNDS", "COUNT"],
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
        units: ["POUNDS", "COUNT", "BOX(ES)", "CASES"],
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
        units: ["BOXES", "CANS", "PKG", "BOTTLE"],
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
            "Roasted Red Peppers Small",
            "Savoia Sauce",
            "Sport Pepper Small",
            "Tomato Sauce Dei Fratelli",
            "Tuna Tonno"
        ]
    },

    {
        name: "SANDWHICHES",
        units: ["Single", "Double", "Full Loaf"],
        products: [
            "Guido",
            "Gregarino",
            "Custom sandwhich"
        ]
    },

    {
        name: "SUB SANDWHICHES",
        units: ["2 Foot", "3 Foot"],
        products: [
            "Guido",
            "Gregarino",
            "American",
            "Custom sub"
        ]
    },

    // SAUSAGE IS CONFIGURABLE
    {
        name: "SAUSAGE",
        units: ["Pounds(#)", "Bun Size Links"],

        options: {
            type: [
                "Mild",
                "Hot",
                "Amasenese",
                "Amasenese Hot",
                "Liver"
            ],

            form: [
                "Links",
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
        units: ["Count"],
        products: [
            "Marconi bread-mini loaves",
            "Marconi bread-regular",
            "Marconi bread-sandwich rolls",
            "Marconi bread-sandwich rolls precut",
            "Marconi bread-sliced",
            "Marconi bread-twist 1#",
            "Marconi bread-twist 2#",
            "Marconi bread-dough fresh",
            "Marconi bread-dough frozen"
        ]
    }
];

export default productCategories;