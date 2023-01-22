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
        <div class="card">
        <div class="content-img">
          <img src="${list.image}" alt="img-banner">
        </div>
        <Strong><h3>${list.nombre} <h3></strong>
        <div class="content-price">
          <h6>${list.precio.antes}</h6> <h3>${list.precio.ahora}</h3>
        </div>
    </div> 
    ` 

});
console.log(containerProducts);
containerProducts.innerHTML = Card;

}