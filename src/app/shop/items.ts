type Product = {
  image: string;
  name: string;
  description: string;
  price: number; // Added price attribute
};

export const products: Product[] = [
  {
    image: './../../../public/calefaccion.jpg',
    name: 'Product 1',
    description: 'Description of product 1',
    price: 10.99
  },
  {
    image: 'image-url-2.jpg',
    name: 'Product 2',
    description: 'Description of product 2',
    price: 12.99
  },
  {
    image: 'image-url-3.jpg',
    name: 'Product 3',
    description: 'Description of product 3',
    price: 8.99
  },
  {
    image: 'image-url-4.jpg',
    name: 'Product 4',
    description: 'Description of product 4',
    price: 15.99
  },
  {
    image: 'image-url-5.jpg',
    name: 'Product 5',
    description: 'Description of product 5',
    price: 9.99
  },
  {
    image: 'image-url-6.jpg',
    name: 'Product 6',
    description: 'Description of product 6',
    price: 14.99
  },
  {
    image: 'image-url-7.jpg',
    name: 'Product 7',
    description: 'Description of product 7',
    price: 11.99
  }
];
