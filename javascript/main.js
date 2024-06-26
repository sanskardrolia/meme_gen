const generateMemeBtn = document.querySelector("#Gen_Btn");
const memeImage = document.querySelector("#image")
const author_name = document.querySelector("#author")
const exit_fun = document.querySelector("#Exit_Btn")
const title_meme = document.querySelector("#title")

const updateDetails = (url,author,title)=> {
    memeImage.setAttribute("src", url);
    author_name.innerHTML = `Meme By: ${author}`;
    title_meme.innerHTML = `Title: ${title}`
    
    
};

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/memes")
    .then((response) => response.json())
    .then((data) => {
        updateDetails(data.url, data.author, data.title);
    });
    
};

const logout_fns = () =>{
            
            alert('Logged out successfully!');
             window.location.href = './index.html';  // Redirect to the login page
};

let count=1;

generateMemeBtn.addEventListener("click", generateMeme);
exit_fun.addEventListener("click", logout_fns)
generateMeme();