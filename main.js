const getdata = async ()=>{
    const response = await axios.get("https://dummyjson.com/products");
    
    let posts = response.data.products;

    const result = posts.map( function(post){
        return `
        <div class="product">
        <h2> ${post.title} </h2>
        <img src=" ${post.thumbnail} "/>
        <p>${post.price}$</p>
        </div>
        `
    }).join('');
    document.querySelector(".posts").innerHTML=result;
}
getdata();