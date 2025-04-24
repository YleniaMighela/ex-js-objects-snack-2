const original = {
    title: "Original Book",
    author: {
        name: "John",
        age: 45
    }
};

const copy = { ...original };
copy.author.name = "Jane";

console.log(original.author.name); // Jane
console.log(copy.author.name); // Jane

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // 

const book = {
    title: "Shallow Waters",
    genres: ["Adventure", "Fantasy"]
};

const secondBook = { ...book };
secondBook.genres.push("Mystery");

console.log(book.genres); // ["Adventure", "Fantasy", Mystery]
console.log(secondBook.genres); // ["Adventure", "Fantasy", Mystery]

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // 

const menu = {
    breakfast: "Eggs & Bacon",
    lunch: "Burger",
};

const clonedMenu = structuredClone(menu);
clonedMenu.dinner = "Pizza";

console.log(menu.dinner); // undefined
console.log(clonedMenu.dinner); // Pizza

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // 

const order = {
    items: [
        { name: "Burger", quantity: 1 },
        { name: "Fries", quantity: 2 }
    ],
    total: 12.5
};

const newOrder = JSON.parse(JSON.stringify(order));
newOrder.items[0].name = "Vegan Burger";

console.log(order.items[0].name); // Burger
console.log(newOrder.items[0].name); // Vegan Burger

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
const menu1 = {
    breakfast: ["Pancakes", "Coffee"],
    lunch: ["Burger", "Fries"]
};

const updatedMenu = { ...menu1 };
updatedMenu.breakfast.push("Orange Juice");

console.log(menu1.breakfast); // ["Pancakes", "Coffee","Orange Juice]
console.log(updatedMenu.breakfast); // ["Pancakes", "Coffee","Orange Juice]

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // 

const user = {
    username: "alice123",
    email: "alice@example.com",
    preferences: {
        theme: "light",
        notifications: true
    }
};

const newUser = structuredClone(user);
newUser.preferences.theme = "dark";

console.log(user.preferences.theme); // light
console.log(newUser.preferences.theme); // dark


// // // // // // // // // // // // // // // // // // // // // // // // // // // // // 

const kitchen = {
    utensils: ["Spoon", "Fork", "Knife"],
    chef: { name: "Marco" }
};

const cloneKitchen = JSON.parse(JSON.stringify(kitchen));
cloneKitchen.utensils[1] = "Chopsticks";

console.log(kitchen.utensils); // Spoon", "Fork", "Knife"
console.log(cloneKitchen.utensils); // Spoon", "Chopsticks", "Knife"

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // 

const delivery = {
    address: {
        city: "Rome",
        zip: "00100"
    },
    status: "on the way"
};

const secondDelivery = { ...delivery };
secondDelivery.address.city = "Milan";

console.log(delivery.address.city); // Milan
console.log(secondDelivery.address.city); // Milan