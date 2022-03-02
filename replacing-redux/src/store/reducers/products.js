import { TOGGLE_FAV } from "../actions/products";

const initialState = {
  products: [
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
      description: "Kendrick Lamer - HUMBLE. Bitch, Be humble",
      isFavorite: false,
    },
    {
      id: "p6",
      title: "Sacrifice",
      description: "The Weeknd - Sacrifice",
      isFavorite: false,
    },
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAV:
      const prodIndex = state.products.findIndex(
        (p) => p.id === action.productId
      );
      const newFavStatus = !state.products[prodIndex].isFavorite;
      const updatedProducts = [...state.products];
      updatedProducts[prodIndex] = {
        ...state.products[prodIndex],
        isFavorite: newFavStatus,
      };
      return { ...state, products: updatedProducts };

    default:
      return state;
  }
};

export default productReducer;
