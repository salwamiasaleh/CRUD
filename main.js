var ProductNameInput= document.getElementById("ProductName")
var ProductPriceInput= document.getElementById("ProductPrice")
var ProductCategoryInput= document.getElementById("ProductDescription")
var ProductDescriptionInput = document.getElementById("ProductDescription")
var searchInput = document.getElementById("Search")
var ProductList
var currentindex=0
if(localStorage.getItem("list")==null){
    ProductList=[]
}
else{
  ProductList=JSON.parse(localStorage.getItem("list"))  
  disp()
}

function addProduct(){
    var product={
        name:ProductNameInput.value,
        price:ProductPriceInput.value,
        category:ProductCategoryInput.value,
        desc:ProductDescriptionInput.value
    }
    
    ProductList.push(product)
    disp()
    localStorage.setItem("list", JSON.stringify(ProductList))
    //must covert product list into string in order to be able to save into local storage 
}
function disp(){
    temp=""
    for(var i=0;i<ProductList.length;i++){
        temp+=`
    
        <tr>
                            <td>`
                                + i +
                            `
                            </td>
                            
                            <td>
                            `
                            +ProductList[i].name +
                            `
                            </td>
                            <td>
                            `
                            + ProductList[i].price+
                            `
                            </td>
                            <td>
                            `
                            + ProductList[i].category+
                            `
                            </td>
                            <td>
                            `
                            + ProductList[i].desc+
                            `
                            </td>
                            <td>
                                <button class="btn btn-warning" onclick="updateproduct(`+ i +`)">
                                    Update
                                </button>
                            </td>
                            <td>
                                
                                <button class="btn btn-danger" onclick="deleteproduct(`+ i +`)">
                                    Delete
                                </button>
                            </td>
                        </tr>
        
        `
     
    }

    document.getElementById("tablebody").innerHTML=temp
}
function deleteproduct(index){
console.log(index)
ProductList.splice(index,1)

localStorage.setItem("list", JSON.stringify(ProductList))

disp()
}
function search(){
var sinput =searchInput.value.toLowerCase()
console.log(sinput)
var temp=""
for(var i=0; i<ProductList.length;i++){
    if(ProductList[i].name.toLowerCase().includes(sinput)==true ||ProductList[i].category.toLowerCase().includes(sinput)==true  ){
        temp+=`
    
        <tr>
                            <td>`
                                + i +
                            `
                            </td>
                            
                            <td>
                            `
                            +ProductList[i].name.replace(sinput,`<span class="text-danger fw-bold">` + sinput+`</span>`) +
                            `
                            </td>
                            <td>
                            `
                            + ProductList[i].price+
                            `
                            </td>
                            <td>
                            `
                            + ProductList[i].category+
                            `
                            </td>
                            <td>
                            `
                            + ProductList[i].desc+
                            `
                            </td>
                            <td>
                                <button class="btn btn-warning" >
                                    Update
                                </button>
                            </td>
                            <td>
                                
                                <button class="btn btn-danger" onclick="deleteproduct(`+ i +`)">
                                    Delete
                                </button>
                            </td>
                        </tr>
        
        `
        document.getElementById("tablebody").innerHTML=temp
   
    }
}

}
function updateproduct(ind){
    currentindex=ind
    ProductNameInput.value=ProductList[ind].name
    ProductPriceInput.value=ProductList[ind].price
    ProductCategoryInput.value=ProductList[ind].category
    ProductDescriptionInput.value=ProductList[ind].desc
    document.getElementById("aproduct").style.display="none"
    document.getElementById("edit").style.display="inline-block"
    
}
function edit(){
    ProductList[currentindex].name=ProductNameInput.value
    ProductList[currentindex].price=ProductPriceInput.value
    ProductList[currentindex].category=ProductCategoryInput.value
    ProductList[currentindex].desc=ProductDescriptionInput.value
    localStorage.setItem("list", JSON.stringify(ProductList))
    disp()
   }

   function clearform(){
    
    ProductNameInput.value=""
    ProductPriceInput.value=""
    ProductCategoryInput.value=""
    ProductDescriptionInput.value=""
   }