const imageWrapper = document.querySelector(".images");
const clickedMore = document.querySelector(".load-more");
const lightbox = document.querySelector(".lightbox");
const downloadImgBtn = document.querySelector(".uil-import");
const closeBtn = document.querySelector(".uil-times");
const searchInput = document.querySelector(".search-box input");

const ApiKey = "";
const perPage = 10;
let currentPage = 1;
let searchTerm = null;

window.showLightBox=(name,img)=>{
 lightbox.querySelector("img").src=img;
 lightbox.querySelector("span").innerText=name;
 downloadImgBtn.setAttribute("data-img",img);
    lightbox.classList.add("show");
    lightbox.style.display="block";
    document.body.style.overflow="hidden";
}

const hideLightBox =()=>{
    lightbox.classList.remove('show');
    lightbox.style.display="none";
    document.body.style.overflow="auto";
}
const generateHtml = (images) => {
    images.map((img) => {
        imageWrapper.innerHTML += `
        <li class="card" onclick="showLightBox('${img.photographer}','${img.src.large2x}')">
            <img src="${img.src.large2x}" alt="image">
            <div class="details">
                <div class="photographer">
                    <i class="uil uil-camera"></i>
                    <span>"${img.photographer}"</span>
                </div>
                <button onclick="downloadImage('${img.src.large2x}')">
                    <i class="uil uil-import"></i>
                </button>
            </div>
        </li>`;
    }).join("");
};
window.downloadImage = function(imgUrl) {
   fetch(imgUrl).then(res=>res.blob()).then(file=>{
    const a = document.createElement('a');
    a.href=URL.createObjectURL(file);
    a.download=new Date().getTime();
    a.click();
   }).catch(()=>{
    alert("failed to download");
   })
};
const getImage = (apiUrl) => {
    clickedMore.innerHTML = "Loading...";
    clickedMore.classList.add("disabled");
    fetch(apiUrl, {
        headers: { Authorization: ApiKey },
    })
        .then((res) => res.json())
        .then((data) => {
            if(data.photos==0){
                imageWrapper.innerText="Image Not Found";
                clickedMore.innerHTML = "Load more";
                clickedMore.classList.remove("disabled");
            }
            else{

                generateHtml(data.photos);
                clickedMore.innerHTML = "Load more";
                clickedMore.classList.remove("disabled");
            }
            
           
        })
        .catch((error) => {
            console.log(error);
            "Failed to load images!"
});
};

function loadMore() {
    currentPage++;
    let apiUrl = `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${perPage}`;
    apiUrl = searchTerm
        ? `https://api.pexels.com/v1/search?query=${searchTerm}&page=${currentPage}&per_page=${perPage}`
        : apiUrl;
    getImage(apiUrl);
}

function loadSearchImages(e) {
    if (e.target.value === "") return (
        imageWrapper.innerText="",
        searchTerm = null,
        currentPage=1,
        getImage(`https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${perPage}`)
        
    );
  
    if (e.key === "Enter") {
        console.log(searchTerm);
        currentPage = 1;
        searchTerm = e.target.value;
        imageWrapper.innerHTML = "";
        getImage(`https://api.pexels.com/v1/search?query=${searchTerm}&page=${currentPage}&per_page=${perPage}`);
    }
}

clickedMore.addEventListener("click", loadMore);
searchInput.addEventListener("keyup", loadSearchImages);
closeBtn.addEventListener('click',hideLightBox);
downloadImgBtn.addEventListener('click',(e)=>downloadImage(e.target.dataset.img))
getImage(`https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${perPage}`);
