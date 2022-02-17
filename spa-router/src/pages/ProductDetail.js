import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <section>
      <h1>Product Detail</h1>
      <div>{params.productId}</div>
    </section>
  );
};

export default ProductDetail;
