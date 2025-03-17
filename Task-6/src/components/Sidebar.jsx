import { Link } from "react-router";
function Sidebar(){
    return(
        
        <ul className="p-10">
            <li className="text-white my-5"><Link to="products">Get All Products</Link></li>
            <li className="text-white"><Link to="categories">Get All Categories</Link></li>
        </ul>
    )
}
export default Sidebar;