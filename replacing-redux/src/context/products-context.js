import React, { useState } from "react";

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: (id) => {},
});

export default (props) => {
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "instagram",
      description: "DEAN - instagram",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "D (Half Moon)",
      description: "DEAN - D (Half Moon)",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "세상이 그대를 속일지라도",
      description: "김장훈 - 세상이 그대를 속일지라도",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Till the End of Time (기다린 만큼, 더)",
      description: "Car, the garden - Till the End of Time (기다린 만큼, 더)",
      isFavorite: false,
    },
    {
      id: "p5",
      title: "HUMBLE.",
      description: "Kendrick Lamer - HUMBLE.",
      isFavorite: false,
    },
    {
      id: "p6",
      title: "Sacrifice",
      description: "The Weeknd - Sacrifice",
      isFavorite: false,
    },
  ]);

  const toggleFavorite = (productId) => {
    setProductsList((currentProdList) => {
      const prodIndex = currentProdList.findIndex((p) => p.id === productId);
      const newFavStatus = !currentProdList[prodIndex].isFavorite;
      const updatedProducts = [...currentProdList];
      updatedProducts[prodIndex] = {
        ...currentProdList[prodIndex],
        isFavorite: newFavStatus,
      };

      return updatedProducts;
    });
  };

  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFav: toggleFavorite }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
