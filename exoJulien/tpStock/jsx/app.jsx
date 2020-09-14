var mesProduits = [{
  category: "Sporting Goods",
  price: "$49.99",
  stocked: true,
  name: "Football"
}, {
  category: "Sporting Goods",
  price: "$9.99",
  stocked: true,
  name: "Baseball"
}, {
  category: "Sporting Goods",
  price: "$29.99",
  stocked: false,
  name: "Basketball"
}, {
  category: "Electronics",
  price: "$99.99",
  stocked: true,
  name: "iPod Touch"
}, {
  category: "Electronics",
  price: "$399.99",
  stocked: false,
  name: "iPhone 5"
}, { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }];

function Stock(props) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      { id: "title" },
      props.mesProduits.map(function (produit, key) {
        return React.createElement(
          "h2",
          { key: key },
          produit.category
        );
      })
    ),
    React.createElement(
      "div",
      { id: "title" },
      props.mesProduits.map(function (produit, key) {
        return React.createElement(
          "h3",
          { key: key },
          produit.name
        );
      })
    ),
    React.createElement(
      "div",
      { id: "title" },
      props.mesProduits.map(function (produit, key) {
        return React.createElement(
          "h3",
          { key: key },
          produit.price
        );
      })
    ),
    React.createElement(
      "div",
      { id: "title" },
      props.mesProduits.map(function (produit, key) {
        if (produit.stocked == true) {
          return React.createElement(
            "h3",
            null,
            "produit en stock"
          );
        } else {
          return React.createElement(
            "h3",
            null,
            "stock \xE9puis\xE9"
          );
        }
      })
    )
  );
}

function Bouton(prosp) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement("input", { type: "button", value: "Montrer le stock/caccher le stock" })
  );
}

function Home() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Stock, { mesProduits: mesProduits }),
    React.createElement(Bouton, null)
  );
}

ReactDOM.render(React.createElement(Home, null), document.querySelector("section"));