var mainContent = document.getElementById("mainContent");

var plans =[
    {
        name:"Basic Master Health Checkup",
        tests:["Thyroid Profile" , "Diabetic profile" , "Cardiac profile"],
        PoweredBy: "Thyrocare",
        time:"24 hrs",
        price:1100,
    },
    {
        name:"Hypertension Health Checkup",
        tests:["Aldosterone","Cortisol","Cholesterol tests"],
        PoweredBy: "Thyrocare",
        time:"24 hrs",
        price:4000
    },
    {
        name:"Complete Master Health Checkup",
        tests:["Thyroid Profile","Renal profile","Liver function tests"],
        PoweredBy: "Thyrocare",
        time:"24 hrs",
        price:3400
    }
]

showPlans(plans)
function showPlans(plans) {
    plans.map(function(element, index) {

        //creating html elements
        var planCard = document.createElement("div");

        var planHeadingDiv = document.createElement("div");
        var heading = document.createElement("p");

        var includesDiv = document.createElement("div");
        var imageDiv1 = document.createElement("div");
        var image1 = document.createElement("img");
        var textDiv1 = document.createElement("div");
        var text1 = document.createElement("p");

        var hr = document.createElement("hr");

        var powerByDiv = document.createElement("div");
        var imageDiv2 = document.createElement("div");
        var image2 = document.createElement("img");
        var textDiv2 = document.createElement("div");
        var text2 = document.createElement("p");

        var buttonsDiv = document.createElement("div");
        var btn1 = document.createElement("button");
        var pricing = document.createElement("p");
        var btn2 = document.createElement("button");

        //setting out content for above created html elements.
        //plan heading
        heading.innerHTML = element.name;
        planHeadingDiv.appendChild(heading);

        //includes div
        image1.setAttribute("src","https://www.pulseplus.in/content/images/lab/lab-icon-1.png");
        imageDiv1.appendChild(image1);
        text1.innerHTML = '<b>Includes Following Tests</b><br>'+element.tests[0]+"<br>"+element.tests[1]+"<br>"+element.tests[2];
        textDiv1.appendChild(text1);
        includesDiv.append(imageDiv1, textDiv1, hr);

        //powerByDiv
        image2.setAttribute("src","https://www.pulseplus.in/content/images/lab/lab-provider-icon.png");
        imageDiv2.appendChild(image2);
        text2.innerHTML = 'Power By '+element.PoweredBy+'<br>'+'<ul><li>Online report in 24 hrs</li><li>NABL, CAP accredited</li></ul>';
        textDiv2.appendChild(text2);
        powerByDiv.append(imageDiv2, textDiv2);

        //buttonsDiv
        btn1.innerHTML = '30% off';
        btn2.innerHTML = 'Add To Cart';
        btn2.addEventListener('click', function(){
            addToCart(index);
        })
        pricing.innerHTML = '<b>'+element.price*0.7+'</b>'+'<p style="color: grey text-decoration: linethrough;">'+element.price+'</p>';
        buttonsDiv.append(btn1, pricing, btn2);
        
        //appending in main planCard
        planCard.append(planHeadingDiv, includesDiv, powerByDiv, buttonsDiv);

        //appending card into mainContent,
        mainContent.appendChild(planCard);

    });
}




var cartData = JSON.parse(localStorage.getItem("cartData")) || [];
function addToCart(index){
    cartData.push(plans[index]);
}
