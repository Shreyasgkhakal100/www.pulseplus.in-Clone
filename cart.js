var container = document.getElementById('container');
cartData = JSON.parse(localStorage.getItem("cartData")) || [];

showCartData(cartData);
function showCartData(cartData){

    
        if(cartData.length===0){
            container.innerHTML = "";

            //if elements is not present in cartData then do this.
            var bgImage = document.createElement("img");
            var bgImageDiv = document.createElement("div");
            var btn1 = document.createElement("button");
            var btn2 = document.createElement("button");

            //setting bgImageDiv
            bgImage.setAttribute("src", "https://www.pulseplus.in/content/images/icons/cart-empty.png");
            bgImageDiv.setAttribute("id","bgImageDiv");

            btn1.textContent = "ADD MEDICINES";
            btn1.addEventListener("click",function(){
                window.location.href = "#"
            });

            btn2.textContent = "MY ORDERS";
            btn2.addEventListener("click",function(){
                window.location.href = "#"
            })

            
            bgImageDiv.append(bgImage, btn1, btn2);
            container.append(bgImageDiv);
        }else{

            //If elements are present in cart then do this

            //creating html elements and then declaring variables.  

            //creating heading for page.
            var pageHeading = document.createElement("h2");
            
            //creating main div to show data.
            var mainDiv = document.createElement("div");

            //creating left div.
            var leftDiv = document.createElement("div");
            //creating elements of leftDiv.
            var cartProducts = document.createElement("div");
            var addMedicineBtn = document.createElement("button");
            var productsSlider = document.createElement("div");

            //creating right div.
            var rightDiv = document.createElement("div");
            //creating elements of rightDiv.
            var freeOrderBtn = document.createElement("button");
            var applyCouponBtn = document.createElement("button"); 
            var orderSummaryDiv = document.createElement("div");
            var proceedBtn = document.createElement("button");

            //setting values to the above declare variables.
            pageHeading.innerHTML = "Cart";

            //showing all the products present in the cart in leftDiv part.

            cartData.map(function(element, index) {
                var row = document.createElement("div");

                var firstDiv = document.createElement("div");
                var prodImg = document.createElement("img");
                var secondDiv = document.createElement("div");
                var title = document.createElement("p");
                var divUnderSecondDiv = document.createElement("div");
                var price = document.createElement("p");
                var deleteBtn = document.createElement("button");
                var thirdDiv = document.createElement("div");
                var increaseQty = document.createElement("select");
                var finalPrice = document.createElement("p");

                //setting up first div
                prodImg.setAttribute("src", element.imgUrl);
                firstDiv.appendChild(prodImg);

                //setting up second div
                title.textContent = element.title;
                divUnderSecondDiv.setAttribute("class", "priceAndButtonDiv");
                price.textContent = element.price;
                deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>'
                deleteBtn.addEventListener("click", function(){
                    deleteFromCart(index);
                });

                divUnderSecondDiv.append(price, deleteBtn);
                secondDiv.append(title, divUnderSecondDiv);

                //setting up third div
                increaseQty.append(function(){
                    for(i=1; i<=100; i++){
                        
                    }
                });



            });


        }
}

function deleteFromCart(index){
    //writ code to delete element from cart.
}