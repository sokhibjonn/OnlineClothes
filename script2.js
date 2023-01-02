$(document).ready(function() {
    productList(products)
})




function filter(){
    let filteredName = [];
    $("input").each(function(elem){
        let currentInput = $("input")[elem];
        if(currentInput.checked){
            filteredName.push(currentInput.value)
        }
    });
    let filtered = products.filter(function(car){
        if(filteredName.includes(car.outt)){
            return true;
        }else if(filteredName.includes(car.color)){
            return true;
        }else if(filteredName.includes(car.name)){
            return true;
        }
        else{
            return false;
        }
    });
    if(filtered.length <= 0){
        productList(products)
    }else{
        productList(filtered)
    }
}
function filter2(){
    let filteredName = [];
    $("input").each(function(elem){
        let currentInput = $("input")[elem];
        if(currentInput.checked){
            filteredName.push(currentInput.value)
        }
    });
    let filtered = products.filter(function(car){
        if(filteredName.includes(car.out)){
            return true;
        } else if(filteredName.includes(car.else)){
            return true;
        }else if(filteredName.includes(car.elsee)){
            return true;
        }else if(filteredName.includes(car.elsse)){
            return true;
        }
        else{
            return false;
        }
    });
    if(filtered.length <= 0){
        productList(products)
    }else{
        productList(filtered)
    }
}

// f3

// sort
function priceSort() {
    let priceWow = products.sort((a, b) => {
        return a.price - b.price

    });
    productList(priceWow);
};
// price
let priceName ;
for(let i = 0;i < document.querySelectorAll(".checkPrice").length;i++){
    document.querySelectorAll(".checkPrice")[i].addEventListener("click" , function(){
        priceName = this.innerHTML;
        // console.log(priceName);
        filter3();
        })
}
function filter3(){
    let filteredPrice = products.filter((elem)=> {
        if(priceName === 'Below Rs.70') {
            if(elem.price > 0 && elem.price < 70){
                console.log("bosldi");
                return true;
            }else{
                console.log("xato");
                return false;
            }
        }else if(priceName === 'Rs.70 - Rs.300'){
            if (elem.price > 70 && elem.price < 305){
                return true;
            }else{
                return false;
            }
        }else if(priceName === 'Above Rs.305'){
            if (elem.price > 305 && elem.price < 4000){
                return true;
            }else{
                return false;
            }
        }
        
        
        
        
        
        
    });
    productList(filteredPrice)
}

// sort
function priceSort() {
    let priceWow = products.sort((a, b) => {
        return a.price - b.price

    });
    productList(priceWow);
};
// sort
function priceSort2() {
    let priceWoow = products.sort((a, b) => {
        return b.price - a.price

    });
    productList(priceWoow);
};


        
 // search
let mySearchess = document.querySelector("#myInputt");
mySearchess.addEventListener("input", mySearchch)


function mySearchch(elem){
    let ownnSearch = elem.target.value.toLowerCase();
    let fresh = products.filter(user => user.name.toLowerCase().includes(ownnSearch) )
    productList(fresh)
}


        function productList(elements){
            $("#products").empty();
            elements.forEach(elem => {

        let proHtml = ` <div class="col">
        <div style="border: 0px;" class="card h-100">
          <img  style="border: 0px;" src="` + elem.img + `" class="card-img-top " alt="...">
          <div  class="card-body">
          <h5 style="font-size:12px;text-align:center;font-weight:700;color:red" class="card-title">` + elem.category + `</h5>
            <h5 style="font-size:15px;text-align:center;font-weight:700;color:blue" class="card-title">` + elem.name + `</h5>
            <h5 style="font-size:12px;text-align:center;font-weight:700" class="card-title">` + elem.source + `</h5>
            <p style="color:black;text-align:center;font-size:12px;font-weight:800" class="card-text">Rs. `+ elem.price + `
            <svg style="margin-right:5%" id="decrementt-count" onclick="handleeDecrement()" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-suit-heart mma" viewBox="0 0 16 16">
            <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
          </svg></p>
            </div>
          <div class="card-footer">

          </div>
          </div>
          </div>`
          $("#products").append(proHtml)
    
    
    
    });
    
    
    }