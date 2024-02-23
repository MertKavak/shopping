import bcrypt from "bcrypt";
export default {
  users: [
    {
      name: "emnre",
      email: "emre@gmail.com",
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: "mert",
      email: "mert@gmail.com",
      password: bcrypt.hashSync('12345', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      title: "Keten Pantolon",
      image: "/img/pantolon_1.jpg",
      price: 599.99,
      countInstock: 10,
      description: "Kumaşı likralıdır. Giydikçe esnek özellik gösterir.",
      raiting: 15,
    },
    {
      title: "Kumaş Pantolon",
      image: "/img/pantolon_2.jpg",
      price: 699.99,
      countInstock: 5,
      description: "Kumaşı likralıdır. Giydikçe esnek özellik gösterir.",
      raiting: 10,
    },
    {
      title: "Kot Pantolon",
      image: "/img/pantolon_3.jpeg",
      price: 799.99,
      countInstock: 2,
      description: "Kumaşı likralıdır. Giydikçe esnek özellik gösterir.",
      raiting: 20,
    },
    {
      title: "Kargo Pantolon",
      image: "/img/pantolon_5.jpg",
      price: 899.99,
      countInstock: 1,
      description: "Kumaşı likralıdır. Giydikçe esnek özellik gösterir.",
      raiting: 12,
    },
  ],
};
