// Function Asyncrons Get All Posts

async function getPosts(){
    // Step 1 Url In Variable
    let url = "https://jsonplaceholder.typicode.com/posts";
    // Step 2 Check Url 
    const response = await fetch(url),
    // Step 3  Data   return => Json 
            data   = await response.json()
                    return data

}
getPosts()

async function displayPostsInToCard(){
    // Get All Posts In Api 
    const posts = await getPosts(), 
    // Loop In Posts
    row = document.querySelector('.row');
    // for of  loop 
    for(let post of posts){
        // Create Card 
        row.innerHTML += `
                    <div class="col-lg-4 col-md-12 mt-4">
            <div class="card text-center">
            <div class="card-header bg-dark p-3 text-light">
                ${post.title}
            </div>
            <div class="card-body">
                <h5 class="card-title w-25  mx-auto border border-primary shadow-lg p-1 mb-1 opacity-75 rounded text-warning bg-dark fs-2"> 
                    ${post.id }
                </h5>
                <p class="card-text bg-dark text-light">${post.body}</p>
                <a  href="https://jsonplaceholder.typicode.com/posts" class="btn btn-warning fs-4 shadow rounded opacity-75">Go Json Placeholder</a>
            </div>
            </div>
            </div>
        `
    }
}
displayPostsInToCard()