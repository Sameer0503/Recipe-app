import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements, elementClassname, renderLoader, clearLoader, renderPagination} from './views/baseElements';

// const search = new Search("pizza");
// console.log(search);

const state = {};

async function controlSearch(){
    const query = searchView.getInput();
    if(query){
        state.search = new Search(query);

        searchView.clearSearch();
        searchView.clearView();
        renderLoader(elements.recipeResultList);
        try{
            await state.search.getRecipes();
            clearLoader();
            state.search.currentPage = 1;
            const recipes = searchView.paginateRecipe(state.search.result.recipes, state.search.currentPage);
            searchView.getRecipeCard(recipes);
            renderPagination(elements.recipeResultList);
            paginateHandler();
        }catch(error){
            alert(`recipe not found. Try pizza.`);
            console.log(error);
        }
    }
}
elements.searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    controlSearch();
    // console.log(searchView.getInput());
})

const paginateHandler = () => {
    let currentPage = state.search.currentPage;
    const page = document.querySelector(`.${elementClassname.pagination}`);
    page.addEventListener("click", (e) => {
        // e.preventDefault();
        const navPage = parseInt(e.target.dataset.curpage);
        switch (navPage) {
            case -1 & currentPage !== 1:
                currentPage--;
                searchView.clearView();
                searchView.getRecipeCard(searchView.paginateRecipe(state.search.result.recipes, currentPage));
                renderPagination(elements.recipeResultList);
                break;
        
            case 1 & currentPage < 2 :
                currentPage++;
                searchView.clearView();
                searchView.getRecipeCard(searchView.paginateRecipe(state.search.result.recipes, currentPage));
                renderPagination(elements.recipeResultList);
                break;
        }
    });
}