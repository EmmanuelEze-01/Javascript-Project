
let themeNo = 0;

function changetheme() {
  themeNo++;

  if (themeNo > 1) {
    themeNo = 0;
  }

  changeatheme();
}

function changeatheme() {
  if (themeNo === 1) {
    document.body.setAttribute("data-theme", "light");
    console.log("Theme Changed");
  } else if (themeNo === 0) {
    document.body.removeAttribute("data-theme");
    console.log("Theme Changed to DARK");
  }
}

async function GetRecpipe() {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();

    // Beef and Broccoli Stir-Fry
    // API recipe ID: 8
    // Array index: 7

    const recipe = data.recipes[7];

    // Recipe information

    document.getElementById("bbs-pt").textContent =
      `${recipe.prepTimeMinutes} min`;

    document.getElementById("bbs-ct").textContent =
      `${recipe.cookTimeMinutes} min`;

    document.getElementById("bbs-s").textContent =
      recipe.servings;

    document.getElementById("bbs-d").textContent =
      recipe.difficulty;

    document.getElementById("bbs-c").textContent =
      `${recipe.caloriesPerServing} Kcal`;

    document.getElementById("bbs-n").textContent =
      recipe.name;

    document.getElementById("bbs-image").src =
      recipe.image;

    // Ingredients

    document.getElementById("bbs-i-one").textContent =
      recipe.ingredients[0];

    document.getElementById("bbs-i-two").textContent =
      recipe.ingredients[1];

    document.getElementById("bbs-i-three").textContent =
      recipe.ingredients[2];

    document.getElementById("bbs-i-four").textContent =
      recipe.ingredients[3];

    document.getElementById("bbs-i-five").textContent =
      recipe.ingredients[4];

    document.getElementById("bbs-i-six").textContent =
      recipe.ingredients[5];

    document.getElementById("bbs-i-seven").textContent =
      recipe.ingredients[6];

    document.getElementById("bbs-i-eight").textContent =
      recipe.ingredients[7];

    document.getElementById("bbs-i-nine").textContent =
      recipe.ingredients[8];

    // Instructions

    document.getElementById("bbs-ins-one").textContent =
      recipe.instructions[0];

    document.getElementById("bbs-ins-two").textContent =
      recipe.instructions[1];

    document.getElementById("bbs-ins-three").textContent =
      recipe.instructions[2];

    document.getElementById("bbs-ins-four").textContent =
      recipe.instructions[3];

    document.getElementById("bbs-ins-five").textContent =
      recipe.instructions[4];

    document.getElementById("bbs-ins-six").textContent =
      recipe.instructions[5];

    // Popular Recipe Cards

    const popularRecipes = [
      { index: 0, prefix: "popularOne" },
      { index: 1, prefix: "popularTwo" },
      { index: 2, prefix: "popularThree" },
      { index: 8, prefix: "popularFour" }
    ];

    popularRecipes.forEach(({ index, prefix }) => {
      const popularRecipe = data.recipes[index];

      document.querySelectorAll(`.${prefix}Tag`).forEach((element) => {
        element.textContent = popularRecipe.tags[0] || popularRecipe.cuisine;
      });

      document.getElementById(`${prefix}Image`).src =
        popularRecipe.image;

      document.getElementById(`${prefix}Name`).textContent =
        popularRecipe.name;

      document.getElementById(`${prefix}Time`).textContent =
        `${popularRecipe.cookTimeMinutes} mins`;

      document.getElementById(`${prefix}Difficulty`).textContent =
        popularRecipe.difficulty;

      document.getElementById(`${prefix}Calories`).textContent =
        `${popularRecipe.caloriesPerServing} kcal`;
    });

    // Refresh Lucide icons
    if (window.lucide) {
      lucide.createIcons();
    }

  } catch (error) {
    console.error("Error loading recipe:", error);
  }
}

GetRecpipe();
