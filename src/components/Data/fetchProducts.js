
const fetchProducts = (productos)=> {

    return new Promise((res,rej) => {
        setTimeout(()=>{
            res(productos)
        },3000);
    }) 
}

export default fetchProducts;