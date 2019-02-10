module.exports = {
  presets: [
    '@vue/app'
],
"plugins": [
    ["module-resolver", {
        "root": ["./src"],
        "alias": {
            "Collections": "./src/Collections",
            "Components": "./src/Components",
            "Models": "./src/Models",
            "Services": "./src/Services",
            "Util": "./src/Utils"
        }
    }]
]
}
