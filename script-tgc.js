let themeNo = 0;
function changetheme() {
  themeNo++;
  if (themeNo > 1) {
    themeNo = 0;
  }
  changeatheme();
}

function changeatheme() {
  if (themeNo == 1) {
    // document.body.classList.add("light-theme");
    document.body.setAttribute("data-theme", "light");
    console.log("Theme Changed");
  } else if (themeNo == 0) {
    // document.body.classList.remove("light-theme");
    document.body.removeAttribute("data-theme", "light");
    console.log("Theme Changed to DARK");
  }
}


async function GetRecpipe() {
  try {
    const respone = await fetch("https://dummyjson.com/recipes");
    const data = await respone.json();
    console.log(data.recipes);



    
      // Thai Green Curry
      document.getElementById("tgc-pt").textContent = `${data.recipes[20].prepTimeMinutes} min`;
      document.getElementById("tgc-ct").textContent = `${data.recipes[20].cookTimeMinutes} min`;
      document.getElementById("tgc-s").textContent = `${data.recipes[20].servings}`;
      document.getElementById("tgc-d").textContent = `${data.recipes[20].difficulty}`;
      document.getElementById("tgc-c").textContent = `${data.recipes[20].caloriesPerServing} Kcal`;
        document.getElementById("tgc-n").textContent = `${data.recipes[20].name}`;    
        document.getElementById("tgc-image").src = `${data.recipes[20].image}`;
    //ingridents
    document.getElementById("tgc-i-one").textContent = `${data.recipes[20].ingredients[0]}`; 
    document.getElementById("tgc-i-two").textContent = `${data.recipes[20].ingredients[1]}`; 
    document.getElementById("tgc-i-three").textContent = `${data.recipes[20].ingredients[2]}`; 
    document.getElementById("tgc-i-four").textContent = `${data.recipes[20].ingredients[3]}`; 
    document.getElementById("tgc-i-five").textContent = `${data.recipes[20].ingredients[4]}`; 
    document.getElementById("tgc-i-six").textContent = `${data.recipes[20].ingredients[5]}`; 
    document.getElementById("tgc-i-seven").textContent = `${data.recipes[20].ingredients[6]}`; 
    document.getElementById("tgc-i-eight").textContent = `${data.recipes[20].ingredients[7]}`; 
    document.getElementById("tgc-i-nine").textContent = `${data.recipes[20].ingredients[8]}`; 
    //instructions
    document.getElementById("tgc-ins-one").textContent = `${data.recipes[20].instructions[0]}`;
    document.getElementById("tgc-ins-two").textContent = `${data.recipes[20].instructions[1]}`;
    document.getElementById("tgc-ins-three").textContent = `${data.recipes[20].instructions[2]}`;
    document.getElementById("tgc-ins-four").textContent = `${data.recipes[20].instructions[3]}`;
    document.getElementById("tgc-ins-five").textContent = `${data.recipes[20].instructions[4]}`;
    









    // Popular Card Container
    // Popular One
    const pplOneTag = document.querySelectorAll(".popularOneTag");
    pplOneTag.forEach((Element) => {
      Element.textContent = data.recipes[0].tags[0];
    });
    document.getElementById("popularOneImage").src = data.recipes[0].image;
    document.getElementById("popularOneName").textContent =
      data.recipes[0].name;
    document.getElementById("popularOneTime").textContent =
      `${data.recipes[0].cookTimeMinutes} mins`;
    document.getElementById("popularOneDifficulty").textContent =
      data.recipes[0].difficulty;
    document.getElementById("popularOneCalories").textContent =
      `${data.recipes[0].caloriesPerServing} kacl`;

    // Popular Two
    const ppltt = document.querySelectorAll(".popularTwoTag");
    ppltt.forEach((Element) => {
      Element.textContent = data.recipes[1].tags[0];
    });

    document.getElementById("popularTwoImage").src = data.recipes[1].image;
    document.getElementById("popularTwoName").textContent =
      data.recipes[1].name;
    document.getElementById("popularTwoTime").textContent =
      `${data.recipes[1].cookTimeMinutes} mins`;
    document.getElementById("popularTwoDifficulty").textContent =
      data.recipes[1].difficulty;
    document.getElementById("popularTwoCalories").textContent =
      `${data.recipes[1].caloriesPerServing} kacl`;

    // Popular Three
    const ppthreet = document.querySelectorAll(".popularThreeTag");
    ppthreet.forEach((Element) => {
      Element.textContent = data.recipes[2].tags[0];
    });
    document.getElementById("popularThreeImage").src = data.recipes[2].image;
    document.getElementById("popularThreeName").textContent =
      data.recipes[2].name;
    document.getElementById("popularThreeTime").textContent =
      `${data.recipes[2].cookTimeMinutes} mins`;
    document.getElementById("popularThreeDifficulty").textContent =
      data.recipes[2].difficulty;
    document.getElementById("popularThreeCalories").textContent =
      `${data.recipes[2].caloriesPerServing} kacl`;

    // Popular Four
    const pplft = document.querySelectorAll(".popularFourTag");
    pplft.forEach((Element) => {
      Element.textContent = data.recipes[8].tags[0];
    });

    document.getElementById("popularFourImage").src = data.recipes[8].image;
    document.getElementById("popularFourName").textContent =
      data.recipes[8].name;
    document.getElementById("popularFourTime").textContent =
      `${data.recipes[8].cookTimeMinutes} mins`;
    document.getElementById("popularFourDifficulty").textContent =
      data.recipes[8].difficulty;
    document.getElementById("popularFourCalories").textContent =
      `${data.recipes[8].caloriesPerServing} kacl`;

    // Popular Five
    const pplfivet = document.querySelectorAll(".popularFiveTag");
    pplfivet.forEach((Element) => {
      Element.textContent = data.recipes[3].tags[1];
    });

    document.getElementById("popularFiveImage").src = data.recipes[3].image;
    document.getElementById("popularFiveName").textContent =
      data.recipes[3].name;
    document.getElementById("popularFiveTime").textContent =
      `${data.recipes[3].cookTimeMinutes} mins`;
    document.getElementById("popularFiveDifficulty").textContent =
      data.recipes[3].difficulty;
    document.getElementById("popularFiveCalories").textContent =
      `${data.recipes[3].caloriesPerServing} kacl`;

    // Popular Six
    const pplst = document.querySelectorAll(".popularSixTag");
    pplst.forEach((Element) => {
      Element.textContent = data.recipes[10].tags[1];
    });
    document.getElementById("popularSixImage").src = data.recipes[10].image;
    document.getElementById("popularSixName").textContent =
      data.recipes[10].name;
    document.getElementById("popularSixTime").textContent =
      `${data.recipes[10].cookTimeMinutes} mins`;
    document.getElementById("popularSixDifficulty").textContent =
      data.recipes[10].difficulty;
    document.getElementById("popularSixCalories").textContent =
      `${data.recipes[10].caloriesPerServing} kacl`;

    // Popular Seven
    const pplsnt = document.querySelectorAll(".popularSevenTag");
    pplsnt.forEach((Element) => {
      Element.textContent = data.recipes[5].tags[0];
    });

    document.getElementById("popularSevenImage").src = data.recipes[5].image;
    document.getElementById("popularSevenName").textContent =
      data.recipes[5].name;
    document.getElementById("popularSevenTime").textContent =
      `${data.recipes[5].cookTimeMinutes} mins`;
    document.getElementById("popularSevenDifficulty").textContent =
      data.recipes[5].difficulty;
    document.getElementById("popularSevenCalories").textContent =
      `${data.recipes[5].caloriesPerServing} kacl`;

    // Popular Eight
    const pplet = document.querySelectorAll(".popularEightTag");
    pplet.forEach((Element) => {
      Element.textContent = data.recipes[14].tags[0];
    });
    document.getElementById("popularEightImage").src = data.recipes[14].image;
    document.getElementById("popularEightName").textContent =
      data.recipes[14].name;
    document.getElementById("popularEightTime").textContent =
      `${data.recipes[14].cookTimeMinutes} mins`;
    document.getElementById("popularEightDifficulty").textContent =
      data.recipes[14].difficulty;
    document.getElementById("popularEightCalories").textContent =
      `${data.recipes[14].caloriesPerServing} kacl`;

    // Quick and Easy Container
    // Quick and Easy One
    const qeo = document.querySelectorAll(".qneOneTag");
    qeo.forEach((Element) => {
      Element.textContent = data.recipes[1].tags[0];
    });
    document.getElementById("qneOneImage").src = data.recipes[1].image;
    document.getElementById("qneOneName").textContent = data.recipes[1].name;
    document.getElementById("qneOneTime").textContent =
      `${data.recipes[1].cookTimeMinutes} mins`;
    document.getElementById("qneOneDifficulty").textContent =
      data.recipes[1].difficulty;
    document.getElementById("qneOneCalories").textContent =
      `${data.recipes[1].caloriesPerServing} kacl`;

    // Quick and Easy Two
    const qet = document.querySelectorAll(".qneTwoTag");
    qet.forEach((Element) => {
      Element.textContent = data.recipes[29].tags[2];
    });
    document.getElementById("qneTwoImage").src = data.recipes[29].image;
    document.getElementById("qneTwoName").textContent = data.recipes[29].name;
    document.getElementById("qneTwoTime").textContent =
      `${data.recipes[29].prepTimeMinutes} mins`;
    document.getElementById("qneTwoDifficulty").textContent =
      data.recipes[29].difficulty;
    document.getElementById("qneTwoCalories").textContent =
      `${data.recipes[29].caloriesPerServing} kacl`;

    // Quick and Easy Three
    const qetht = document.querySelectorAll(".qneThreeTag");
    qetht.forEach((Element) => {
      Element.textContent = data.recipes[24].tags[0];
    });

    document.getElementById("qneThreeImage").src = data.recipes[24].image;
    document.getElementById("qneThreeName").textContent = data.recipes[24].name;
    document.getElementById("qneThreeTime").textContent =
      `${data.recipes[24].prepTimeMinutes} mins`;
    document.getElementById("qneThreeDifficulty").textContent =
      data.recipes[24].difficulty;
    document.getElementById("qneThreeCalories").textContent =
      `${data.recipes[24].caloriesPerServing} kacl`;

    // Quick and Easy Four
    const qefrt = document.querySelectorAll(".qneFourTag");
    qefrt.forEach((Element) => {
      Element.textContent = data.recipes[28].tags[2];
    });
    document.getElementById("qneFourImage").src = data.recipes[28].image;
    document.getElementById("qneFourName").textContent = data.recipes[28].name;
    document.getElementById("qneFourTime").textContent =
      `${data.recipes[28].cookTimeMinutes} mins`;
    document.getElementById("qneFourDifficulty").textContent =
      data.recipes[28].difficulty;
    document.getElementById("qneFourCalories").textContent =
      `${data.recipes[28].caloriesPerServing} kacl`;

    // Quick and Easy Five
    const qefivet = document.querySelectorAll(".qneFiveTag");
    qefivet.forEach((Element) => {
      Element.textContent = data.recipes[25].tags[2];
    });
    document.getElementById("qneFiveImage").src = data.recipes[25].image;
    document.getElementById("qneFiveName").textContent = data.recipes[25].name;
    document.getElementById("qneFiveTime").textContent =
      `${data.recipes[25].cookTimeMinutes} mins`;
    document.getElementById("qneFiveDifficulty").textContent =
      data.recipes[25].difficulty;
    document.getElementById("qneFiveCalories").textContent =
      `${data.recipes[25].caloriesPerServing} kacl`;

    //Healthy Container
    // Healthy One
    const hot = document.querySelectorAll(".healthyOneTag");
    hot.forEach((Element) => {
      Element.textContent = data.recipes[4].tags[0];
    });

    document.getElementById("healthyOneImage").src = data.recipes[4].image;
    document.getElementById("healthyOneName").textContent =
      data.recipes[4].name;
    document.getElementById("healthyOneTime").textContent =
      `${data.recipes[4].cookTimeMinutes} mins`;
    document.getElementById("healthyOneDifficulty").textContent =
      data.recipes[4].difficulty;
    document.getElementById("healthyOneCalories").textContent =
      `${data.recipes[4].caloriesPerServing} kacl`;

    // Healthy Two
    const htt = document.querySelectorAll(".healthyTwoTag");
    htt.forEach((Element) => {
      Element.textContent = data.recipes[8].tags[0];
    });

    document.getElementById("healthyTwoImage").src = data.recipes[8].image;
    document.getElementById("healthyTwoName").textContent =
      data.recipes[8].name;
    document.getElementById("healthyTwoTime").textContent =
      `${data.recipes[8].prepTimeMinutes} mins`;
    document.getElementById("healthyTwoDifficulty").textContent =
      data.recipes[8].difficulty;
    document.getElementById("healthyTwoCalories").textContent =
      `${data.recipes[8].caloriesPerServing} kacl`;

    // Healthy Three
    const htht = document.querySelectorAll(".healthyThreeTag");
    htht.forEach((Element) => {
      Element.textContent = data.recipes[5].tags[0];
    });

    document.getElementById("healthyThreeImage").src = data.recipes[5].image;
    document.getElementById("healthyThreeName").textContent =
      data.recipes[5].name;
    document.getElementById("healthyThreeTime").textContent =
      `${data.recipes[5].cookTimeMinutes} mins`;
    document.getElementById("healthyThreeDifficulty").textContent =
      data.recipes[5].difficulty;
    document.getElementById("healthyThreeCalories").textContent =
      `${data.recipes[5].caloriesPerServing} kacl`;

    // Healthy Four
    const hfourt = document.querySelectorAll(".healthyFourTag");
    hfourt.forEach((Element) => {
      Element.textContent = data.recipes[16].tags[2];
    });
    document.getElementById("healthyFourImage").src = data.recipes[16].image;
    document.getElementById("healthyFourName").textContent =
      data.recipes[16].name;
    document.getElementById("healthyFourTime").textContent =
      `${data.recipes[16].cookTimeMinutes} mins`;
    document.getElementById("healthyFourDifficulty").textContent =
      data.recipes[16].difficulty;
    document.getElementById("healthyFourCalories").textContent =
      `${data.recipes[16].caloriesPerServing} kacl`;

  } catch (err) {
    console.log(err);
  }
}

GetRecpipe();
