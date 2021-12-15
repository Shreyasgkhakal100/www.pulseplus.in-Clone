var mdata=[
    {
        name:"A Clav 625 mg Tablet",
        location:"Capital Pharma",
        price:195.00,
        off:20,
        catg:"health",
        avail:"Instock",
        imgs:"https://th.bing.com/th/id/OIP.59U8Ip0sA2No8W6qp-C-1AHaHa?pid=ImgDet&w=511&h=512&rs=1",
        Packing: "6 Tablets / Strip",
        pruductdetailes:{
            SKU: 'PC-1211',
            ProductDescription: 'A Clav 625 mg Tablet is manufactured by Capital Pharma',
            Packing: 'Strip',
            Condition: 'New',
            Soldby: 'Pulse Pharmacy India Pvt. Ltd.'
        }
    },
    {
        name:"A Daxid L Tablet",
        location:"A Daxid L Tablet",
        price:50.00,
        off:5.00,
        catg:"health",
        avail:"Out of Stock",
        imgs:"https://th.bing.com/th/id/OIP.59U8Ip0sA2No8W6qp-C-1AHaHa?pid=ImgDet&w=511&h=512&rs=1",
        Packing: "10 Tablets / Strip",
        pruductdetailes:{
            SKU: 'PC-44563',
            ProductDescription: 'A Daxid L Tablet is manufactured by Eskon Pharma',
            Packing: 'Strip',
            Condition: 'New',
            Soldby: 'Pulse Pharmacy India Pvt. Ltd.'
            
        } 
    },
    
        {
            name:"Aaranac P Tablet",
            location:"Aaranac P Tablet",
            imgs:"https://th.bing.com/th/id/OIP.59U8Ip0sA2No8W6qp-C-1AHaHa?pid=ImgDet&w=511&h=512&rs=1",
            price:37.50,
            off:5.00,
            catg:"health",
            avail:"In Stock",
            Packing: "10 Tablets / Strip",
            pruductdetailes:{
                SKU: 'PC-2065',
                ProductDescription: 'Aaranac P Tablet is manufactured by Aara Life Sciences (I) Pvt Ltd',
                Packing: 'Strip',
                Condition: 'New',
                Soldby: 'Pulse Pharmacy India Pvt. Ltd.'
                
            } 
        },
        {
            name:"Gabagesic Gel 30 gm",
            location:"Crescent Therapeutics Ltd",
            price:232.80,
            off:0,
            catg:"health",
            avail:"In Stock",
            imgs:"https://media.istockphoto.com/vectors/pill-bottle-with-pills-vector-id459969585?k=6&m=459969585&s=612x612&w=0&h=ZyDyz05L-WMSSCs8v8RBxw4mZ-byXDiy008yAyNAv20=",
            Packing: "Tube",
            pruductdetailes:{
                SKU: 'PC-15264',
                ProductDescription: 'Gabagesic Gel 30 gm is manufactured by Linux Laboratories',
                Packing: 'Tube',
                Condition: 'New',
                Soldby: 'Pulse Pharmacy India Pvt. Ltd.'
                
            } 
        },
        {
            name:"Gabarich 150 mg Tablet",
            location:"Crescent Therapeutics Ltd",
            price:98.62,
            off:0,
            catg:"health",
            avail:"In Stock",
            imgs:"https://th.bing.com/th/id/OIP.59U8Ip0sA2No8W6qp-C-1AHaHa?pid=ImgDet&w=511&h=512&rs=1",
            Packing: "10 Tablets / Strip",
            pruductdetailes:{
                SKU: 'SKU: PC-14550',
                ProductDescription: 'Gabarich 150 mg Tablet is manufactured by Crescent Therapeutics Ltd',
                Packing: 'Strip',
                Condition: 'New',
                Soldby: 'Pulse Pharmacy India Pvt. Ltd.'
                
            } 
        },
        {
            name:"Macbery PD Syrup",
            location:"Macleods Pharmaceuticals Pvt Ltd",
            price:62.40,
            off:5.00,
            catg:"health",
            avail:"In Stock",
            imgs:"https://media.istockphoto.com/vectors/pill-bottle-with-pills-vector-id459969585?k=6&m=459969585&s=612x612&w=0&h=ZyDyz05L-WMSSCs8v8RBxw4mZ-byXDiy008yAyNAv20=",
            Packing: "Macbery PD Syrup is manufactured by Macleods Pharmaceuticals Pvt Ltd",
            pruductdetailes:{
                SKU: 'PC-53321',
                ProductDescription: 'Macbery PD Syrup is manufactured by Macleods Pharmaceuticals Pvt Ltd',
                Packing: 'Macbery PD Syrup is manufactured by Macleods Pharmaceuticals Pvt Ltd',
                Condition: 'New',
                Soldby: 'Pulse Pharmacy India Pvt. Ltd.'
                
            } 
        }
    
]

localStorage.setItem("proData",JSON.stringify(mdata))
mdata.map(function(elem){
    msdiv=document.createElement("div")
    imdiv=document.createElement("div")
    img=document.createElement("img")
    imsrc=elem.imgs
    img.setAttribute("src",imsrc)
    h3n=document.createElement("h3")
    nameh=elem.name
    h3n.textContent=nameh
    mrdiv=document.createElement("div")
    mrdiv.setAttribute("id","mrdiv")
    hf=document.createElement("p")
    hf.textContent="Mkt:"
    hs=document.createElement("p")
    var mark=elem.location
    hs.textContent=mark
 document.getElementById("prod").append(msdiv)
 msdiv.append(imdiv)
 imdiv.append(img)
 msdiv.append(h3n)
 msdiv.append(mrdiv)
 mrdiv.append(hf,hs)
 
})