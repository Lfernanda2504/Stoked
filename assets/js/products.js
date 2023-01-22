const containerProducts = document.getElementById('products');
let dataApi;
console.log("Hola");
window.addEventListener('load', () => {
    fetchData();
})
const fetchData = async () => {
    try {
        const res = await fetch('https://api.npoint.io/462ca70b4d99016a945d')
        dataApi = await res.json()
         console.log(dataApi);
        insertCard(dataApi)
    } catch (error) {
        console.log(error)
    }
}
let Card = ''
const insertCard = ()=>{
    Card =""
    dataApi.forEach(list => {
        Card += `
        <div class="container-product">
        <div class="content-img">
          <img src="${list.image}" alt="img-banner">
        </div>
        <div class="content-description">
        <h3>${list.nombre} <h3>
        <div class="content-price">
          <span>${list.precio.antes}</span> <h3>$ ${list.precio.ahora}</h3>
        </div>
        </div>
    </div> 
    ` 

});
console.log(containerProducts);
containerProducts.innerHTML = Card;

}