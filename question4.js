const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}

const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};



// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
//  il metodo migliore sarebbe l'utilizzo dello spread operator perchè andrebbe a copiare anche le funzioni

// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
//  il metodo migliore sarebbe l'utilizzo dello structuredClone sia perchè non ci sono funzioni al suo interno sia perchè andrebbe a copiare gli oggetti complessi 