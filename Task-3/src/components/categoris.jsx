import "../css/categories.css"
function Categories(){
    return(
        <div className="categories">
            <button onClick={()=>setSelectedCategory("mens")}>All</button>
            {/* جربت البروبس وبرضو مش نفعت */}
            <button>Mens</button>
            <button>Women</button>
            <button>Electronics</button>
            <button>Jawelery</button>
        </div>
    )
}
export default Categories 


