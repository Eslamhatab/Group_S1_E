/*** 
 *  function get posts async  
 *   Fetch Url 
 *  Varaibel Response  
 *  json 
 *   return 
 * 
 * call Fuction 
 * 
 * 2* display Posts To Card ()
 * 
 * 
 * 
 */
//Function Asyncrons Get All Posts 
async function getPosts(){
        // Url IN Vraiable 
    // let url = "https://jsonplaceholder.typicode.com/posts";
    let url = "https://jsonplaceholder.org/posts"
        //Check URL using Fetch Function In Vraiab;e Response 
    const response  = await fetch(url),
    //change  All Posts To  Jeson In Class Name Data 
                data     = await response.json()
                // Return All Data 
                return data
}

getPosts()

//Display Posts In Ti Card OR table  
