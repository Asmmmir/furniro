

export interface ProductItem {
    name: string,
    description: string,
    price: number,
    imageURL: string,
    discount?:number,
    newProduct?:boolean
}


export const products:ProductItem[] = [
    {
        name:'Syltherine',
        description:'Stylish cafe chair',
        price: 250000,
        imageURL:'./images/products/syltherine.jpg',
        discount:-30

    },
    {
        name:'Leviosa',
        description:'Stylish cafe chair',
        price: 250000,
        imageURL:'./images/products/leviosa.jpg',

    },
    {
        name:'Lolito',
        description:'Luxury big sofa',
        price: 70000,
        imageURL:'./images/products/lolito.jpg',
        discount:-50

    },
    {
        name:'Respira',
        description:'Outdoor bar table and stool',
        price: 500000,
        imageURL:'./images/products/respira.jpg',
        newProduct:true

    },
    {
        name:'Grifo',
        description:'Night lamp',
        price: 1500000,
        imageURL:'./images/products/grifo.jpg',


    },
    {
        name:'Muggo',
        description:'Small mug',
        price: 150000,
        imageURL:'./images/products/muggo.jpg',
        newProduct:true

    },
    {
        name:'Pingky',
        description:'Cute bed set',
        price: 700000,
        imageURL:'./images/products/pingky.jpg',
        discount:-50

    },
    {
        name:'Potty',
        description:'Minimalist flower pot',
        price: 500000,
        imageURL:'./images/products/potty.jpg',
        newProduct:true

    },

]