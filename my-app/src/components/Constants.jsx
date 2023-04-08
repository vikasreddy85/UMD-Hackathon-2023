export const Pancakes_Plain = {
  query: 'Pancakes Plain',
  dataType: ["Survey (FNDDS)"],
  pagesize: 1,
  location: "Y",
  time: "lunch",
  dietary: ["dairy", "eggs", "gluten", "soy", "vegetarian"]
};

export const Scrambled_Egg = {
  query: 'Scrambled Egg',
  dataType: ["Survey (FNDDS)"],
  pagesize: 1,
  location: "Y",
  time: "lunch",
  dietary: ["dairy", "eggs", "vegetarian"]
};

export const Sandwich = {
  query: 'Sandwich',
  dataType: ["Survey (FNDDS)"],
  pagesize: 1,
  location: "Y",
  time: "lunch",
  dietary: ["dairy", "eggs", "soy"]
};

export const Grilled_Hot_Dog = {
  query: 'Grilled Hot Dog',
  dataType: ["Survey (FNDDS)"],
  pagesize: 1,
  location: "Y",
  time: "lunch",
  dietary: ["none"]
}

export const Onion_Marmalade_Sandwich = {
  query: 'Onion Marmalade Sandwich',
  dataType: ["Survey (FNDDS)"],
  pagesize: 1,
  location: "Y",
  time: "lunch",
  dietary: ["diary", "eggs", "gluten", "soy"]
}

export const Chorizo = {
  query: 'Chorizo',
  dataType: ["Survey (FNDDS)"],
  pagesize: 1,
  location: "Y",
  time: "lunch",
  dietary: ["diary", "soy"]
}

export const French_Toast = {
  query: 'French Toast',
  dataType: ["Survey (FNDDS)"],
  pagesize: 1,
  location: "Y",
  time: "lunch",
  dietary: ["diary", "eggs", "gluten", "soy", "vegetarian"]
}

export const English_Muffin = {
  query: 'English Muffin',
  dataType: ["Survey (FNDDS)"],
  pagesize: 1,
  location: "Y",
  time: "lunch",
  dietary: ["diary", "gluten", "soy", "vegetarian"]
}

export const Greek_Yogurt = {
  query: 'Greek Yogurt',
  dataType: ["Survey (FNDDS)"],
  pagesize: 1,
  location: "Y",
  time: "lunch",
  dietary: ["diary", "vegetarian"]
}

export const Yogurt = {
  query: 'Yogurt',
  dataType: ["Survey (FNDDS)"],
  pagesize: 1,
  location: "Y",
  time: "lunch",
  dietary: ["diary", "vegetarian"]
}

export const Biscuit = {
  query: 'Biscuit',
  dataType: ["Survey (FNDDS)"],
  pagesize: 1,
  location: "Y",
  time: "lunch",
  dietary: ["diary", "gluten", "vegetarian"]
}

export const Mashed_Potatoes ={
  query: 'Mashed Potatoes',
  dataType: ["Survey (FNDDS)"],
  pagesize: 1,
  location: "Y",
  time: "lunch",
  dietary: ["diary", "vegetarian"]
}


export const Cornbread ={
  query: 'Cornbread',
  dataType: ["Survey (FNDDS)"],
  pagesize: 1,
  location: "Y",
  time: "lunch",
  dietary: ["diary", "eggs", "vegetarian"]
}

export const Croissant ={
  query: 'Cornbread',
  dataType: ["Survey (FNDDS)"],
  pagesize: 1,
  location: "Y",
  time: "lunch",
  dietary: ["diary", "gluten", "eggs", "soy", "vegetarian"]
}

export const Buffalo_Chicken_Pizza  = {
  query: 'Rozogalo',
  dataType: ["Survey (FNDDS)"],
  pagesize: 1,
  location: "Y",
  time: "lunch",
  dietary: ["diary", "eggs", "gluten", "soy"] 
}

export const Cheese_Pizza  = {
  query: 'Cheese Pizza',
  dataType: ["Survey (FNDDS)"],
  pagesize: 1,
  location: "Y",
  time: "lunch",
  dietary: ["gluten", "diary", "soy", "vegetarian", "eggs"] 
}

export const Margherita_Pizza  = {
  query: 'Margherita Pizza',
  dataType: ["Survey (FNDDS)"],
  pagesize: 1,
  location: "Y",
  time: "lunch",
  dietary: ["gluten", "diary", "soy", "eggs"] 
}
export const Pepperoni_Pizza  = {
  query: 'Pepperoni Pizza',
  dataType: ["Survey (FNDDS)"],
  pagesize: 1,
  location: "Y",
  time: "lunch",
  dietary: ["gluten", "diary", "soy", "eggs"] 
}

export const White_Chicken = {
  query: 'White Chicken',
  dataType: ["Survey (FNDDS)"],
  pagesize: 1,
  location: "Y",
  time: "lunch",
  dietary: ["diary"] 
}

export const Pesto_Pasta = {
  query: 'Pesto Pasta',
  dataType: ["Survey (FNDDS)"],
  pagesize: 1,
  location: "Y",
  time: "lunch",
  dietary: ["diary", "gluten", "vegetarian"] 
}

export const Philly_Cheese_Steak_Pizza = {
  query: "Philly Cheese Steak Pizza",
  dataType: ["Survey (FNDDS)"],
  pagesize: 1,
  location: "Y",
  time: "lunch",
  dietary: ["diary", "eggs", "gluten", "soy"] 
}

export const Vegetable_Pizza = {
  query: "Philly Cheese Steak Pizza",
  dataType: ["Survey (FNDDS)"],
  pagesize: 1,
  location: "Y",
  time: "lunch",
  dietary: ["gluten", "eggs", "dairy", "soy", "vegetarian"] 
} 

export const Yahentamitsi = {
  breakfast: [Pancakes_Plain, Scrambled_Egg, Chorizo, French_Toast, English_Muffin],

  lunch: [Pancakes_Plain, Scrambled_Egg, Sandwich, Grilled_Hot_Dog, Onion_Marmalade_Sandwich, Chorizo, French_Toast, English_Muffin, Greek_Yogurt, Yogurt, Biscuit, Mashed_Potatoes, Cornbread, Croissant, Buffalo_Chicken_Pizza, Cheese_Pizza, Margherita_Pizza, Pepperoni_Pizza],
  
  dinner: [Grilled_Hot_Dog, Onion_Marmalade_Sandwich, White_Chicken, Pesto_Pasta, Philly_Cheese_Steak_Pizza, Vegetable_Pizza]
};