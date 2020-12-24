export const elements = {
    searchForm: document.querySelector(".search-form"),
    recipeName: document.getElementById('recipe-name'),
    recipeResultList: document.querySelector(".recipe-result-list")
}
export const elementClassname = {
    loader: 'loader-box'
}
export const renderLoader = (parent) => {
    const loader = `
        <div class="loader-box">
            <img src="img/loader.png" alt="loading ..." class="loader">
        </div>
    `;
    parent.insertAdjacentHTML("afterbegin", loader);
}
export const clearLoader = () => {
    const loader = document.querySelector(`.${elementClassname.loader}`);
    if(loader){
        loader.parentElement.removeChild(loader);
    }
}