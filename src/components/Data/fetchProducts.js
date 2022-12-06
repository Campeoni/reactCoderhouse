
const fetchProducts = (productos)=> {

    return new Promise((res,rej) => {
        setTimeout(()=>{
            res(productos)
        },200);
    }) 
}

export default fetchProducts;