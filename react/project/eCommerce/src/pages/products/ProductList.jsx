import ProductCard from "../../components/ProductCard";

const products = [1,2,3,4,5,6,7,8];

function ProductList(){

return(

<div>

<h2>ProductList</h2>

<div className="row">

{products.map((p,i)=>(

<div className="col-md-3 mb-3" key={i}>

<ProductCard/>

</div>

))}

</div>

</div>

)

}

export default ProductList