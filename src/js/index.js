import Search from './models/Search';

// const search = new Search("pizza");
// console.log(search);

const state = {};

async function controlSearch(){
    const query = "pizza";
    if(query){
        state.search = new Search(query);
        await state.search.getRecipes();
    }
    console.log(state.search.result);
}
document.querySelector(".search-form").addEventListener("submit",(e)=>{
    e.preventDefault();
    controlSearch();
})