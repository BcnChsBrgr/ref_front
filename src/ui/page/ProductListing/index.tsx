import NavList from "../../component/NavList";
import {useLocation} from "react-router-dom";

export default function ProductListing() {
    const location = useLocation();

    return(
        <div className="product-listing-container">
            <NavList/>
            <h1>Product Listing Page!</h1>
            <h3>Pathname: {location.pathname} </h3>
        </div>
    )
}