  async function handleMainFood() {
    dummy = document.getElementById("InputValue").value;
    document.getElementById("InputValue").value = "";

    const localcategory = window.localStorage.getItem("category");

    try {
      const categoryObject = JSON.parse(localcategory);
      categorynamemain = categoryObject.strCategory;
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }

    try {
      const categoryapi = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${
          dummy === "" ? categorynamemain : dummy
        }`
      );
      const categorydata = await categoryapi.json();

      MainFoodList = categorydata.meals;
      console.log("MainFoodList", MainFoodList);
      if (MainFoodList === null) {
        alert("Sorry,this item is not available right now!!");
        return;
      }
      showInMain();
    } catch (err) {
      alert("Sorry,this item is not available right now!!");
      console.log("err", err);
    }
  }