import Filter from "./Filter";

const Allcategories =() => {
    return(
        <div>
            <h1>What kind of food do you like?</h1>
            {['SEAFOOD', 'ITALIAN', 'APPETIZERS', 'SALADS', 'ALL'].map(category => <Filter key={category} category={category}/>)}
            
        </div>
    )
}
export default Allcategories;
