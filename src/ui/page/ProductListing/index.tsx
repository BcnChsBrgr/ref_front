import NavList from "../../component/NavList";
import { useLocation } from "react-router-dom";
import Products from "../../../../public/products.json";
import ProductOverView from "../../component/ProductOverView";

export default function ProductListing() {
    const location = useLocation();

    return (
        <div className="product-listing-container">
            <NavList />
            <div style={{ width: "80%", margin: "0 auto" }}>
                <h1>Product Listing Page!</h1>
                <h3>Pathname: {location.pathname}</h3>

                <br />

                <ProductOverView products={Products} />
            </div>
        </div>
    );
}
