
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
    } else {
        document.body.removeAttribute("data-theme");
        console.log("Theme Changed to DARK");
    }
}

async function GetRecpipe() {
    try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();

        const recipe = data.recipes[8];

        // Recipe details
        document.getElementById("cas-pt").textContent =
            `${recipe.prepTimeMinutes} min`;

        document.getElementById("cas-ct").textContent =
            `${recipe.cookTimeMinutes} min`;

        document.getElementById("cas-s").textContent =
            recipe.servings;

        document.getElementById("cas-d").textContent =
            recipe.difficulty;

        document.getElementById("cas-c").textContent =
            `${recipe.caloriesPerServing} Kcal`;

        document.getElementById("cas-n").textContent =
            recipe.name;

        document.getElementById("cas-image").src =
            recipe.image;

        document.getElementById("cas-image").alt =
            recipe.name;

        // Ingredients
        const ingredientIds = [
            "cas-i-one",
            "cas-i-two",
            "cas-i-three",
            "cas-i-four",
            "cas-i-five",
            "cas-i-six"
        ];

        ingredientIds.forEach((id, index) => {
            document.getElementById(id).textContent =
                recipe.ingredients[index] || "";
        });

        // Instructions
        const instructionIds = [
            "cas-ins-one",
            "cas-ins-two",
            "cas-ins-three",
            "cas-ins-four",
            "cas-ins-five"
        ];

        instructionIds.forEach((id, index) => {
            document.getElementById(id).textContent =
                recipe.instructions[index] || "";
        });

        // Popular Recipe One
        const popularRecipes = [
            { index: 0, prefix: "popularOne" },
            { index: 1, prefix: "popularTwo" },
            { index: 2, prefix: "popularThree" },
            { index: 8, prefix: "popularFour" }
        ];

        popularRecipes.forEach(({ index, prefix }) => {
            const popular = data.recipes[index];

            document.querySelectorAll(`.${prefix}Tag`).forEach(element => {
                element.textContent = popular.tags[0] || "";
            });

            document.getElementById(`${prefix}Image`).src =
                popular.image;

            document.getElementById(`${prefix}Image`).alt =
                popular.name;

            document.getElementById(`${prefix}Name`).textContent =
                popular.name;

            document.getElementById(`${prefix}Time`).textContent =
                `${popular.cookTimeMinutes} mins`;

            document.getElementById(`${prefix}Difficulty`).textContent =
                popular.difficulty;

            document.getElementById(`${prefix}Calories`).textContent =
                `${popular.caloriesPerServing} kcal`;
        });

    } catch (error) {
        console.error("Error fetching recipes:", error);
    }
}

GetRecpipe();
