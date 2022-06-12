const input = document.getElementById('input');
const reset = document.getElementById('reset');
const imagesContainer = document.querySelector('.images');


reset.onclick = function() {
    input.value = '';
    input.focus();
}
function removeImages() {
    imagesContainer.innerHTML = ""
}

const defaultUrl = 'https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=gbSrw86sN0gHM9Nt417TshnjLZbHiar_mSUnFWzFHms';
const url = 'https://api.unsplash.com/search/photos?query=' + input.value + '&per_page=30&orientation=landscape&client_id=gbSrw86sN0gHM9Nt417TshnjLZbHiar_mSUnFWzFHms'; 
async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    showImages(data);
  }
getData(defaultUrl);

function showImages(data) {    
    
    console.log(data.results);
    for (let i = 0; i < data.results.length; i++) {
        const img = document.createElement('img');
        img.classList.add('image-item')
        img.src = (data.results)[i].urls.full;        
        img.alt = `image`;
        imagesContainer.append(img);
    
    }
}

input.addEventListener('keydown', function(event){
    if(event.key == 'Enter') {
        input.value;
        console.log(input.value);
        removeImages();
        const url = 'https://api.unsplash.com/search/photos?query=' + input.value + '&per_page=30&orientation=landscape&client_id=gbSrw86sN0gHM9Nt417TshnjLZbHiar_mSUnFWzFHms';  
        getData(url);  
        
    }
})