import { paginateRecipe } from "./searchView";

export const elements = {
    searchForm: document.querySelector(".search-form"),
    recipeName: document.getElementById('recipe-name'),
    recipeResultList: document.querySelector(".recipe-result-list")
}
export const elementClassname = {
    loader: 'loader-box',
    pagination: 'pagination-box'
}
export const renderLoader = (parent) => {
    const loader = `
        <div class="loader-box">
            <img src="img/loader.png" alt="loading ..." class="loader">
        </div>
    `;
    parent.insertAdjacentHTML("afterbegin", loader);
}

export const renderPagination = (parent) => {
    const markup = `
    <nav aria-label="Page navigation" class="pagination-box">
        <ul class="pagination justify-content-center">
            <li class="page-item"><a class="page-link" data-curpage = -1 href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" data-curpage = 1 href="#">Next</a></li>
        </ul>
    </nav>
    `;
    parent.insertAdjacentHTML("beforeend",markup);
}

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementClassname.loader}`);
    if(loader){
        loader.parentElement.removeChild(loader);
    }
}
