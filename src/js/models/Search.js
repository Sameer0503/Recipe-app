export default class Search{
    constructor(query){
        this.query = query;
    }
    async getRecipes(){
        const apiURL = "https://forkify-api.herokuapp.com/api/search";
        try{
            const response = await fetch(apiURL + "?q=" +this.query);
            this.result = await response.json();
            // console.log(this.result);
        }catch(error){
            alert(error);
        }
    }
}