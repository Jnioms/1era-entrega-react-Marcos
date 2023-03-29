import React from "react";

const ItemListContainer = (props) => {
  const { greeting } = props;
  return (
    <main className="container">
      <div className="starter-template">
        <h1>{greeting}</h1>
      </div>
    </main>
  );
};

export default ItemListContainer;
