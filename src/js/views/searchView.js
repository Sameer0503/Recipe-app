import {elements} from './baseElements';

export const getInput = () => {
    return elements.recipeName.value;
}

function renderRecipeList(recipe){
    const recipeCard =`
    <div class="row mt-2 py-2 border shadow justify-content-around">
        <div class="col-md-4 img-container ">
            <img src="${recipe.image_url}" class="img-fluid recipe-img rounded-circle" alt="">
        </div>
        <div class="col-md-8 text-center">
            <div><strong>${recipe.title}</strong></div>
            <div><em>${recipe.publisher}</em></div>
    </div>
    `;
    return recipeCard;
}

/**
 * @param {array} recipes 
 * @param {number} pageNo 
 * @param {number} limitPerPage 
 */
export const paginateRecipe = (recipes, pageNo = 1, limitPerPage = 10) => {
    const start = (pageNo - 1) * limitPerPage;
    const end = pageNo*limitPerPage;
    return recipes.slice(start,end);
}
export function getRecipeCard(recipes){
    recipes.forEach((recipe) => {
        elements.recipeResultList.insertAdjacentHTML('afterbegin', renderRecipeList(recipe));
    });
}

export const clearView = () => {
    elements.recipeResultList.innerHTML = '';
}
export const clearSearch = () => {
    elements.recipeName.value = '';
}