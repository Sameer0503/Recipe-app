import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements, renderLoader, clearLoader} from './views/baseElements';

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
            searchView.getRecipeCard(state.search.result.recipes);
        }catch(error){
            alert(`recipe not found. Try pizza`);
        }
    }
}
elements.searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    controlSearch();
    // console.log(searchView.getInput());
})