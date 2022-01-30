// export const getProducts =() => fetchProducts();

export const fetchProducts = async () => 
{
    console.log('inside fetchProducts');
    try{
    const data = await fetch('https://fortnite-api.theapinetwork.com/items/list');
    const jsonData = await data.json();
    console.log("jsonData print list ", jsonData.data)
    return jsonData.data;
    }
    catch(exception){
        console.log('exception occurred');
    }
}
    // fetch('https://fortnite-api.theapinetwork.com/items/list')
    // .then(response =>response.json().data[0]);
