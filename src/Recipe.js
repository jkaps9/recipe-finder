import data from "./data.json";

class RecipeManager {
    recipeList = [];
    constructor() {
        this.#getRecipes();
    }

    searchRecipesByTitle(str) {

    }

    #getRecipes() {
       data.forEach(recipe => {
            recipeList.push(new Recipe(recipe.title, recipe.overview, recipe.image, recipe.servings, recipe.prepMinutes, recipe.cookMinutes, recipe.ingredients, recipe.instructions));
        }) 
    }
}

const recipeCardContainer = document.querySelector(".recipes__card__container");

 data.forEach(recipe => {
     //console.log(`${recipe.title}: ${recipe.overview}`);
     const recipeCard = getRecipeCard(recipe);
     recipeCardContainer.appendChild(recipeCard);
 })

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
    card.className='card recipes__card';
    
    // IMAGE
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("recipes__card__image");
    const image = document.createElement("img");
    const srcset = `.${recipe.image.small} 400w,\n.${recipe.image.large} 1400w`;
    image.setAttribute("sizes", "(max-width: 1400px) 100vw, 1400px");
    image.setAttribute("srcset", srcset);
    image.setAttribute("src", `.${recipe.image.large}`);
    image.setAttribute("alt", `.${recipe.title}`);
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

    // // Servings
    const statisticsItemOne = document.createElement("div");
    statisticsItemOne.classList.add("statistics__item");
    const servingsImage = document.createElement("img");
    servingsImage.setAttribute("src", "../assets/svgs/icon-servings.svg");
    servingsImage.setAttribute("alt", "servings icon");
    servingsImage.className = "statistics__img";
    const servings = document.createElement("span");
    servings.className = "statistics__value text-preset-9";
    servings.innerHTML = `Servings: ${recipe.servings}`;

    statisticsItemOne.appendChild(servingsImage);
    statisticsItemOne.appendChild(servings);

    // // Prep Time    
    const statisticsItemTwo = document.createElement("div");
    statisticsItemTwo.classList.add("statistics__item");
    const preptimeImage = document.createElement("img");
    preptimeImage.setAttribute("src", "../assets/svgs/icon-prep-time.svg");
    preptimeImage.setAttribute("alt", "prep time icon");
    preptimeImage.className = "statistics__img";
    const preptime = document.createElement("span");
    preptime.className = "statistics__value text-preset-9";
    preptime.innerHTML = `Prep: ${recipe.prepMinutes}`;

    statisticsItemTwo.appendChild(preptimeImage);
    statisticsItemTwo.appendChild(preptime);

    // // Cook Time
    
    const statisticsItemThree = document.createElement("div");
    statisticsItemThree.classList.add("statistics__item");
    const cooktimeImage = document.createElement("img");
    cooktimeImage.setAttribute("src", "../assets/svgs/icon-cook-time.svg");
    cooktimeImage.setAttribute("alt", "cook time icon");
    cooktimeImage.className = "statistics__img";
    const cooktime = document.createElement("span");
    cooktime.className = "statistics__value text-preset-9";
    cooktime.innerHTML = `Cook: ${recipe.cookMinutes}`;

    statisticsItemThree.appendChild(cooktimeImage);
    statisticsItemThree.appendChild(cooktime);

    statisticsContainer.appendChild(statisticsItemOne);
    statisticsContainer.appendChild(statisticsItemTwo);
    statisticsContainer.appendChild(statisticsItemThree);

    // View recipe button
    const viewRecipeBtn = document.createElement("a");
    viewRecipeBtn.setAttribute("href", "recipe.html");
    viewRecipeBtn.setAttribute("recipe-id", recipe.id);
    viewRecipeBtn.className = "btn--solid recipes__card__btn";
    viewRecipeBtn.innerHTML = "View Recipe";

    card.appendChild(imageContainer);
    card.appendChild(textContainer);
    card.appendChild(statisticsContainer);
    card.appendChild(viewRecipeBtn);

    return card;
}