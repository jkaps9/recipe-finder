import data from "./data.json";

// data.forEach(recipe => {
//   console.log(`${recipe.title}: ${recipe.overview}`);
// })

// console.log(`title: ${data[0].title}\n
//     overview: ${data[0].overview}\n
//     image: ${data[0].image}\n
//     servings: ${data[0].servings}\n
//     prepMinutes: ${data[0].prepMinutes}\n
//     cookMinutes: ${data[0].cookMinutes}\n
//     ingredients: ${data[0].ingredients}\n
//     instructions: ${data[0].instructions} `);

class Recipe {
    constructor(title, overview, image, servings, prepMinutes, cookMinutes, ingredients, instructions) {
        this.title = title;
        this.overview = overview;
        this.image = image;
        this.servings = servings;
        this.prepMinutes = prepMinutes;
        this.cookMinutes = cookMinutes;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }
}

function getRecipeCard(recipe) {
    const card = document.createElement("div");
    card.classList.add('recipes__card');

    // IMAGE
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("recipes__card__image");
    const image = document.createElement("img");
    const srcset = `.${recipe.image.small} 400w,\n.${recipe.image.large} 1400w`;
    image.setAttribute("sizes", "(max-width: 1400px) 100vw, 1400px");
    image.setAttribute("srcset", srcset);
    image.setAttribute("src", `.${recipe.image.large}`);
    image.setAttribute("loading", "lazy");
    image.setAttribute("decoding", "async");
    imageContainer.appendChild(image);

    // Text
    const textContainer = document.createElement("div");
    textContainer.classList.add("recipes__card__text");
    const title = document.createElement("h2");
    title.className = "recipes__card__title text-preset-5";
    title.innerHTML = recipe.title;
    const overview = document.createElement("p");
    overview.className = "recipes__card__description text-preset-9";
    overview.innerHTML = recipe.overview;
    textContainer.appendChild(title);
    textContainer.appendChild(overview);

    // Statistics
    const statisticsContainer = document.createElement("div");
    statisticsContainer.classList.add("recipes__card__statistics");
    const statisticsItem = document.createElement("div");
    const servings = 1;
}