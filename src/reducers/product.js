const InitialState = [
    {
        id: 1,
        name: 'Iphone 5',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114113/iphone-8-64gb-1-400x460-1-400x460.png',
        description: 'Sản phẩm',
        price: 500,
        rating: 4,
        inventory: 10
    },  
    {
        id: 2,
        name: 'Iphone 7',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png',
        description: 'Sản phẩm',
        price: 5000,
        rating: 5,
        inventory: 10
    },
    {
        id: 3,
        name: 'Iphone 6',
        image: 'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gray-400x460.png',
        description: 'Sản phẩm',
        price: 6500,
        rating: 3,
        inventory: 10
    },
    {
        id: 1,
        name: 'Iphone 5',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114113/iphone-8-64gb-1-400x460-1-400x460.png',
        description: 'Sản phẩm',
        price: 500,
        rating: 4,
        inventory: 10
    },  
    {
        id: 2,
        name: 'Iphone 7',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png',
        description: 'Sản phẩm',
        price: 5000,
        rating: 5,
        inventory: 10
    },
    {
        id: 3,
        name: 'Iphone 6',
        image: 'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gray-400x460.png',
        description: 'Sản phẩm',
        price: 6500,
        rating: 3,
        inventory: 10
    },
    {
        id: 1,
        name: 'Iphone 5',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114113/iphone-8-64gb-1-400x460-1-400x460.png',
        description: 'Sản phẩm',
        price: 500,
        rating: 4,
        inventory: 10
    },  
    {
        id: 2,
        name: 'Iphone 7',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png',
        description: 'Sản phẩm',
        price: 5000,
        rating: 5,
        inventory: 10
    },
    {
        id: 3,
        name: 'Iphone 6',
        image: 'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gray-400x460.png',
        description: 'Sản phẩm',
        price: 6500,
        rating: 3,
        inventory: 10
    },
]
const products = (state = InitialState, action) => {
    switch (action.type) {
        default:
            return [...state]
    }
}
export default products;