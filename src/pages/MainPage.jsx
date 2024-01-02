import Loading from "../components/Loading";
import Card from "../components/Card";
import { useContext } from "react";
import { ProductContext } from "../context/productContext";

const MainPage = () => {
    const { products } = useContext(ProductContext);
    return (
        <div className=" container d-flex flex-wrap justify-content-center gap-3 gap-md-4">
            {/* veriler gelmediyse loading yayınla */}
            {!products && <Loading />}
            {/* veriler geldiyse ekrana bas */}
            {products?.map((product) => (<Card key={product.id} product={product} />))}
        </div>
    )
}

export default MainPage