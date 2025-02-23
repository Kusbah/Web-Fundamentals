function pizzaOven (crust,sauce,cheeses,toppings){
    var Pizza = {};
    Pizza.crust = crust;
    Pizza.sauce = sauce;
    Pizza.cheeses = cheeses;
    Pizza.toppings = toppings;
    return Pizza;
}
var pizza1 = pizzaOven("deep dish","traditional", ["mozzarella"], ["pepperoni", "sausage"])
console.log(pizza1)
var pizza2 = pizzaOven("hand tossed","marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(pizza2)
var pizza3 = pizzaOven("hand tossed","marinara", ["mozzarella"], ["olives"])
console.log(pizza3)
var pizza4 = pizzaOven("hand tossed","marinara", ["feta"], ["onions"])
console.log(pizza4)
