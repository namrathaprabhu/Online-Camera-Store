var displayString = "";

$("#cart").html("");
var cart = new shopping_cart("jadrn030");
var proj4_data;

$(document).ready(function()
{ 
	
    proj4_data = new Array();
    $.ajax({
		url:"http://jadran.sdsu.edu/jadrn030/servlets/AjaxDB", 
		success: function(response){
			storeData(response);
			handle_string_data();
		},
		error: function(response) {
            //alert(response+"Some problem occurred to get data from Database.<br>Refresh page.");
        }
    }); // end of ajax call


    // Shopping cart count display
   $('#count').text(cart.size());
   $('#content').on('click','.add_cart', function(e) {

		var product = $(e.target).attr("name");
		var prodDetails = product.split(",");
		var qty = $("[name="+prodDetails[0]+"]").val(); 
		if (qty == 0 || qty == "") {
			$("#"+prodDetails[0]).text("please enter the quantity");
			return;
		}

		else if(qty > prodDetails[2]) {
			$("#"+prodDetails[0]).text("Sorry!The entered quantity is not available");
			return;
		}

        $('#count').text(cart.size());
        cart.add(prodDetails[0],prodDetails[1],qty);
        $('#count').text(cart.size());
    }); // end of on click function

   $('#myModal').on('click','.add_cart', function(e) {
		var product = $(e.target).attr("name");
		var prodDetails = product.split(",");
		var qty = $("[name="+prodDetails[0]+"]").val();		
        $('#count').text(cart.size());
            cart.add(prodDetails[0],prodDetails[1],1);
        $('#count').text(cart.size());
    }); // end of on click function

   $('#content').on('click','.show_cart', function(e) {
    var id = (e.target.id);
    showDetails(id);
    }); //end of on click funtion

/***************************** Filter ****************************************/

$('#nikon').on('click', function() {
	displayString= "";
		for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][2] == 1) {
            	//alert("hi");	
            if (proj4_data[i][8] > 0) {
               statusDisplay = "In Stock";
               addToCartButton="<input id = 'addButton' class='add_cart' name='" + proj4_data[i][0]+','+proj4_data[i][7]+','+proj4_data[i][8]+"' type='button' value= 'Add to Cart'>";
            }// end of if
            else{
            statusDisplay = "Coming Soon";
            addToCartButton="<button disabled> Add to cart</button>";
            }// end of else
        displayString+= "<div class='boxes'>";
        displayString+= "<div class='display_img productImg' id="+proj4_data[i][0]+"><img class='productImg' src=/~jadrn030/abccba/"+proj4_data[i][9]+" width=200px height=150></div>";
        displayString+= "<div class='caption'>";
        displayString+= "<p class='title'>"+proj4_data[i][0]+"</p>";
        displayString+= "<p><b>Manufacturer's ID:&nbsp;</b>"+proj4_data[i][3]+"</p>";
        //displayString+= "<p>"+proj4_data[i][1]+"</p>";
        displayString+= "<p class='green'><b>"+statusDisplay+"</b></p>";
        //displayString+= "<p><b>"+proj4_data[i][8]+" left</b></p>";
        displayString+= "<p>$"+proj4_data[i][7]+"</p>";
        displayString+="<p>Quantity:&nbsp;<input type='number' min='1' size='5' value='1' name='"+proj4_data[i][0]+"' id='qty'/></p>";
        displayString+="<p id='"+proj4_data[i][0]+"'></p>";
        displayString+= "<p>"+addToCartButton+"<input type='button' class='show_cart' value='Show Details' data-toggle='modal' data-target='#myModal' id='"+proj4_data[i][0]+"' name='show'></p></div></div></div>";
        //displayString+= "<input type=hidden id=sku"+proj4_data[i][6]+" value="+proj4_data[i][6]+" /> <input type=hidden id=onh"+proj4_data[i][6]+" value="+proj4_data[i][5]+"></div></div></div>";
        document.getElementById("content").innerHTML = displayString;
    $("#cart").html("");
       } } }); // end of if, for, on click 

$('#canon').on('click', function() {
		displayString = "";
		for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][2] == 2) {
            	
               if (proj4_data[i][8] > 0) {
               statusDisplay = "In Stock";
               addToCartButton="<input id = 'addButton' class='add_cart' name='" + proj4_data[i][0]+','+proj4_data[i][7]+','+proj4_data[i][8]+"' type='button' value= 'Add to Cart'>";
            }// end of if
            else{
            statusDisplay = "Coming Soon";
            addToCartButton="<button disabled> Add to cart</button>";
            }// end of else
       displayString+= "<div class='boxes'>";
        displayString+= "<div class='display_img productImg' id="+proj4_data[i][0]+"><img class='productImg' src=/~jadrn030/abccba/"+proj4_data[i][9]+" width=200px height=150></div>";
        displayString+= "<div class='caption'>";
        displayString+= "<p class='title'>"+proj4_data[i][0]+"</p>";
        displayString+= "<p><b>Manufacturer's ID:&nbsp;</b>"+proj4_data[i][3]+"</p>";
        //displayString+= "<p>"+proj4_data[i][1]+"</p>";
        displayString+= "<p class='green'><b>"+statusDisplay+"</b></p>";
        //displayString+= "<p><b>"+proj4_data[i][8]+" left</b></p>";
        displayString+= "<p>$"+proj4_data[i][7]+"</p>";
        displayString+="<p>Quantity:&nbsp;<input type='number' min='1' size='5' value='1' name='"+proj4_data[i][0]+"' id='qty'/></p>";
        displayString+="<p id='"+proj4_data[i][0]+"'></p>";
        displayString+= "<p>"+addToCartButton+"<input type='button' class='show_cart' value='Show Details' data-toggle='modal' data-target='#myModal' id='"+proj4_data[i][0]+"' name='show'></p></div></div></div>";
        //displayString+= "<input type=hidden id=sku"+proj4_data[i][6]+" value="+proj4_data[i][6]+" /> <input type=hidden id=onh"+proj4_data[i][6]+" value="+proj4_data[i][5]+"></div></div></div>";
        document.getElementById("content").innerHTML = displayString;
    $("#cart").html("");
      } } }); // end of if, for, on click


 $('#olympus').on('click', function() {
		displayString = "";
		for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][2] == 3) {
            	
               if (proj4_data[i][8] > 0) {
               statusDisplay = "In Stock";
               addToCartButton="<input id = 'addButton' class='add_cart' name='" + proj4_data[i][0]+','+proj4_data[i][7]+','+proj4_data[i][8]+"' type='button' value= 'Add to Cart'>";
            }// end of if
            else{
            statusDisplay = "Coming Soon";
            addToCartButton="<button disabled> Add to cart</button>";
            }// end of else
        displayString+= "<div class='boxes'>";
        displayString+= "<div class='display_img productImg' id="+proj4_data[i][0]+"><img class='productImg' src=/~jadrn030/abccba/"+proj4_data[i][9]+" width=200px height=150></div>";
        displayString+= "<div class='caption'>";
        displayString+= "<p class='title'>"+proj4_data[i][0]+"</p>";
        displayString+= "<p><b>Manufacturer's ID:&nbsp;</b>"+proj4_data[i][3]+"</p>";
        //displayString+= "<p>"+proj4_data[i][1]+"</p>";
        displayString+= "<p class='green'><b>"+statusDisplay+"</b></p>";
        //displayString+= "<p><b>"+proj4_data[i][8]+" left</b></p>";
        displayString+= "<p>$"+proj4_data[i][7]+"</p>";
        displayString+="<p>Quantity:&nbsp;<input type='number' min='1' size='5' value='1' name='"+proj4_data[i][0]+"' id='qty'/></p>";
        displayString+="<p id='"+proj4_data[i][0]+"'></p>";
        displayString+= "<p>"+addToCartButton+"<input type='button' class='show_cart' value='Show Details' data-toggle='modal' data-target='#myModal' id='"+proj4_data[i][0]+"' name='show'></p></div></div></div>";
        //displayString+= "<input type=hidden id=sku"+proj4_data[i][6]+" value="+proj4_data[i][6]+" /> <input type=hidden id=onh"+proj4_data[i][6]+" value="+proj4_data[i][5]+"></div></div></div>";
        document.getElementById("content").innerHTML = displayString;
    $("#cart").html("");
      } } }); // end of if, for, on click

 $('#lumix').on('click', function() {
		displayString = "";
		for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][2] == 4) {
               if (proj4_data[i][8] > 0) {
               statusDisplay = "In Stock";
               addToCartButton="<input id = 'addButton' class='add_cart' name='" + proj4_data[i][0]+','+proj4_data[i][7]+','+proj4_data[i][8]+"' type='button' value= 'Add to Cart'>";
            }// end of if
            else{
            statusDisplay = "Coming Soon";
            addToCartButton="<button disabled> Add to cart</button>";
            }// end of else
        displayString+= "<div class='boxes'>";
        displayString+= "<div class='display_img productImg' id="+proj4_data[i][0]+"><img class='productImg' src=/~jadrn030/abccba/"+proj4_data[i][9]+" width=200px height=150></div>";
        displayString+= "<div class='caption'>";
        displayString+= "<p class='title'>"+proj4_data[i][0]+"</p>";
        displayString+= "<p><b>Manufacturer's ID:&nbsp;</b>"+proj4_data[i][3]+"</p>";
        //displayString+= "<p>"+proj4_data[i][1]+"</p>";
        displayString+= "<p class='green'><b>"+statusDisplay+"</b></p>";
        //displayString+= "<p><b>"+proj4_data[i][8]+" left</b></p>";
        displayString+= "<p>$"+proj4_data[i][7]+"</p>";
        displayString+="<p>Quantity:&nbsp;<input type='number' min='1' size='5' value='1' name='"+proj4_data[i][0]+"' id='qty'/></p>";
        displayString+="<p id='"+proj4_data[i][0]+"'></p>";
        displayString+= "<p>"+addToCartButton+"<input type='button' class='show_cart' value='Show Details' data-toggle='modal' data-target='#myModal' id='"+proj4_data[i][0]+"' name='show'></p></div></div></div>";
        //displayString+= "<input type=hidden id=sku"+proj4_data[i][6]+" value="+proj4_data[i][6]+" /> <input type=hidden id=onh"+proj4_data[i][6]+" value="+proj4_data[i][5]+"></div></div></div>";
        document.getElementById("content").innerHTML = displayString;
    $("#cart").html("");
      } } }); // end of if, for, on click

$('#pentax').on('click', function() {
		displayString = "";
		for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][2] == 5) {
            	
            	document.getElementById("content").innerHTML = "";
               if (proj4_data[i][8] > 0) {
               statusDisplay = "In Stock";
               addToCartButton="<input id = 'addButton' class='add_cart' name='" + proj4_data[i][0]+','+proj4_data[i][7]+','+proj4_data[i][8]+"' type='button' value= 'Add to Cart'>";
            }// end of if
            else{
            statusDisplay = "Coming Soon";
            addToCartButton="<button disabled> Add to cart</button>";
            }// end of else
        displayString+= "<div class='boxes'>";
        displayString+= "<div class='display_img productImg' id="+proj4_data[i][0]+"><img class='productImg' src=/~jadrn030/abccba/"+proj4_data[i][9]+" width=200px height=150></div>";
        displayString+= "<div class='caption'>";
        displayString+= "<p class='title'>"+proj4_data[i][0]+"</p>";
        displayString+= "<p><b>Manufacturer's ID:&nbsp;</b>"+proj4_data[i][3]+"</p>";
        //displayString+= "<p>"+proj4_data[i][1]+"</p>";
        displayString+= "<p class='green'><b>"+statusDisplay+"</b></p>";
        //displayString+= "<p><b>"+proj4_data[i][8]+" left</b></p>";
        displayString+= "<p>$"+proj4_data[i][7]+"</p>";
        displayString+="<p>Quantity:&nbsp;<input type='number' min='1' size='5' value='1' name='"+proj4_data[i][0]+"' id='qty'/></p>";
        displayString+="<p id='"+proj4_data[i][0]+"'></p>";
        displayString+= "<p>"+addToCartButton+"<input type='button' class='show_cart' value='Show Details' data-toggle='modal' data-target='#myModal' id='"+proj4_data[i][0]+"' name='show'></p></div></div></div>";
        //displayString+= "<input type=hidden id=sku"+proj4_data[i][6]+" value="+proj4_data[i][6]+" /> <input type=hidden id=onh"+proj4_data[i][6]+" value="+proj4_data[i][5]+"></div></div></div>";
        document.getElementById("content").innerHTML = displayString;
    $("#cart").html("");
      } } }); // end of if, for, on click

$('#leica').on('click', function() {
		displayString = "";
		for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][2] == 6) {
            	
               if (proj4_data[i][8] > 0) {
               statusDisplay = "In Stock";
               addToCartButton="<input id = 'addButton' class='add_cart' name='" + proj4_data[i][0]+','+proj4_data[i][7]+','+proj4_data[i][8]+"' type='button' value= 'Add to Cart'>";
            }// end of if
            else{
            statusDisplay = "Coming Soon";
            addToCartButton="<button disabled> Add to cart</button>";
            }// end of else
        displayString+= "<div class='boxes'>";
        displayString+= "<div class='display_img productImg' id="+proj4_data[i][0]+"><img class='productImg' src=/~jadrn030/abccba/"+proj4_data[i][9]+" width=200px height=150></div>";
        displayString+= "<div class='caption'>";
        displayString+= "<p class='title'>"+proj4_data[i][0]+"</p>";
        displayString+= "<p><b>Manufacturer's ID:&nbsp;</b>"+proj4_data[i][3]+"</p>";
        //displayString+= "<p>"+proj4_data[i][1]+"</p>";
        displayString+= "<p class='green'><b>"+statusDisplay+"</b></p>";
        //displayString+= "<p><b>"+proj4_data[i][8]+" left</b></p>";
        displayString+= "<p>$"+proj4_data[i][7]+"</p>";
        displayString+="<p>Quantity:&nbsp;<input type='number' min='1' size='5' value='1' name='"+proj4_data[i][0]+"' id='qty'/></p>";
        displayString+="<p id='"+proj4_data[i][0]+"'></p>";
        displayString+= "<p>"+addToCartButton+"<input type='button' class='show_cart' value='Show Details' data-toggle='modal' data-target='#myModal' id='"+proj4_data[i][0]+"' name='show'></p></div></div></div>";
        //displayString+= "<input type=hidden id=sku"+proj4_data[i][6]+" value="+proj4_data[i][6]+" /> <input type=hidden id=onh"+proj4_data[i][6]+" value="+proj4_data[i][5]+"></div></div></div>";
        document.getElementById("content").innerHTML = displayString;
    $("#cart").html("");
      } } }); // end of if, for, on click

$('#sony').on('click', function() {
		displayString = "";
		for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][2] == 7) {
               if (proj4_data[i][8] > 0) {
               statusDisplay = "In Stock";
               addToCartButton="<input id = 'addButton' class='add_cart' name='" + proj4_data[i][0]+','+proj4_data[i][7]+','+proj4_data[i][8]+"' type='button' value= 'Add to Cart'>";
            }// end of if
            else{
            statusDisplay = "Coming Soon";
            addToCartButton="<button disabled> Add to cart</button>";
            }// end of else
        displayString+= "<div class='boxes'>";
        displayString+= "<div class='display_img productImg' id="+proj4_data[i][0]+"><img class='productImg' src=/~jadrn030/abccba/"+proj4_data[i][9]+" width=200px height=150></div>";
        displayString+= "<div class='caption'>";
        displayString+= "<p class='title'>"+proj4_data[i][0]+"</p>";
        displayString+= "<p><b>Manufacturer's ID:&nbsp;</b>"+proj4_data[i][3]+"</p>";
        //displayString+= "<p>"+proj4_data[i][1]+"</p>";
        displayString+= "<p class='green'><b>"+statusDisplay+"</b></p>";
        //displayString+= "<p><b>"+proj4_data[i][8]+" left</b></p>";
        displayString+= "<p>$"+proj4_data[i][7]+"</p>";
        displayString+="<p>Quantity:&nbsp;<input type='number' min='1' size='5' value='1' name='"+proj4_data[i][0]+"' id='qty'/></p>";
        displayString+="<p id='"+proj4_data[i][0]+"'></p>";
        displayString+= "<p>"+addToCartButton+"<input type='button' class='show_cart' value='Show Details' data-toggle='modal' data-target='#myModal' id='"+proj4_data[i][0]+"' name='show'></p></div></div></div>";
        //displayString+= "<input type=hidden id=sku"+proj4_data[i][6]+" value="+proj4_data[i][6]+" /> <input type=hidden id=onh"+proj4_data[i][6]+" value="+proj4_data[i][5]+"></div></div></div>";
        document.getElementById("content").innerHTML = displayString;
    $("#cart").html("");
      } } }); // end of if, for, on click

$('#fuji').on('click', function() {
		displayString = "";
		for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][2] == 8) {
            
               if (proj4_data[i][8] > 0) {
               statusDisplay = "In Stock";
               addToCartButton="<input id = 'addButton' class='add_cart' name='" + proj4_data[i][0]+','+proj4_data[i][7]+','+proj4_data[i][8]+"' type='button' value= 'Add to Cart'>";
            }// end of if
            else{
            statusDisplay = "Coming Soon";
            addToCartButton="<button disabled> Add to cart</button>";
            }// end of else
        displayString+= "<div class='boxes'>";
        displayString+= "<div class='display_img productImg' id="+proj4_data[i][0]+"><img class='productImg' src=/~jadrn030/abccba/"+proj4_data[i][9]+" width=200px height=150></div>";
        displayString+= "<div class='caption'>";
        displayString+= "<p class='title'>"+proj4_data[i][0]+"</p>";
        displayString+= "<p><b>Manufacturer's ID:&nbsp;</b>"+proj4_data[i][3]+"</p>";
        //displayString+= "<p>"+proj4_data[i][1]+"</p>";
        displayString+= "<p class='green'><b>"+statusDisplay+"</b></p>";
        //displayString+= "<p><b>"+proj4_data[i][8]+" left</b></p>";
        displayString+= "<p>$"+proj4_data[i][7]+"</p>";
        displayString+="<p>Quantity:&nbsp;<input type='number' min='1' size='5' value='1' name='"+proj4_data[i][0]+"' id='qty'/></p>";
        displayString+="<p id='"+proj4_data[i][0]+"'></p>";
        displayString+= "<p>"+addToCartButton+"<input type='button' class='show_cart' value='Show Details' data-toggle='modal' data-target='#myModal' id='"+proj4_data[i][0]+"' name='show'></p></div></div></div>";
        //displayString+= "<input type=hidden id=sku"+proj4_data[i][6]+" value="+proj4_data[i][6]+" /> <input type=hidden id=onh"+proj4_data[i][6]+" value="+proj4_data[i][5]+"></div></div></div>";
        document.getElementById("content").innerHTML = displayString;
    $("#cart").html("");
      } } }); // end of if, for, on click

$('#dslr').on('click', function() {
		displayString = "";
		for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == 1) {
            	
               if (proj4_data[i][8] > 0) {
               statusDisplay = "In Stock";
               addToCartButton="<input id = 'addButton' class='add_cart' name='" + proj4_data[i][0]+','+proj4_data[i][7]+','+proj4_data[i][8]+"' type='button' value= 'Add to Cart'>";
            }// end of if
            else{
            statusDisplay = "Coming Soon";
            addToCartButton="<button disabled> Add to cart</button>";
            }// end of else
        displayString+= "<div class='boxes'>";
        displayString+= "<div class='display_img productImg' id="+proj4_data[i][0]+"><img class='productImg' src=/~jadrn030/abccba/"+proj4_data[i][9]+" width=200px height=150></div>";
        displayString+= "<div class='caption'>";
        displayString+= "<p class='title'>"+proj4_data[i][0]+"</p>";
        displayString+= "<p><b>Manufacturer's ID:&nbsp;</b>"+proj4_data[i][3]+"</p>";
        //displayString+= "<p>"+proj4_data[i][1]+"</p>";
        displayString+= "<p class='green'><b>"+statusDisplay+"</b></p>";
        //displayString+= "<p><b>"+proj4_data[i][8]+" left</b></p>";
        displayString+= "<p>$"+proj4_data[i][7]+"</p>";
        displayString+="<p>Quantity:&nbsp;<input type='number' min='1' size='5' value='1' name='"+proj4_data[i][0]+"' id='qty'/></p>";
        displayString+="<p id='"+proj4_data[i][0]+"'></p>";
        displayString+= "<p>"+addToCartButton+"<input type='button' class='show_cart' value='Show Details' data-toggle='modal' data-target='#myModal' id='"+proj4_data[i][0]+"' name='show'></p></div></div></div>";
        //displayString+= "<input type=hidden id=sku"+proj4_data[i][6]+" value="+proj4_data[i][6]+" /> <input type=hidden id=onh"+proj4_data[i][6]+" value="+proj4_data[i][5]+"></div></div></div>";
        document.getElementById("content").innerHTML = displayString;
    $("#cart").html("");
      } } }); // end of if, for, on click

$("#pas").on('click', function() {
		displayString = "";

		for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == 2) {
            	
               if (proj4_data[i][8] > 0) {
               statusDisplay = "In Stock";
               addToCartButton="<input id = 'addButton' class='add_cart' name='" + proj4_data[i][0]+','+proj4_data[i][7]+','+proj4_data[i][8]+"' type='button' value= 'Add to Cart'>";
            }// end of if
            else{
            statusDisplay = "Coming Soon";
            addToCartButton="<button disabled> Add to cart</button>";
            }// end of else
        displayString+= "<div class='boxes'>";
        displayString+= "<div class='display_img productImg' id="+proj4_data[i][0]+"><img class='productImg' src=/~jadrn030/abccba/"+proj4_data[i][9]+" width=200px height=150></div>";
        displayString+= "<div class='caption'>";
        displayString+= "<p class='title'>"+proj4_data[i][0]+"</p>";
        displayString+= "<p><b>Manufacturer's ID:&nbsp;</b>"+proj4_data[i][3]+"</p>";
        //displayString+= "<p>"+proj4_data[i][1]+"</p>";
        displayString+= "<p class='green'><b>"+statusDisplay+"</b></p>";
        //displayString+= "<p><b>"+proj4_data[i][8]+" left</b></p>";
        displayString+= "<p>$"+proj4_data[i][7]+"</p>";
        displayString+="<p>Quantity:&nbsp;<input type='number' min='1' size='5' value='1' name='"+proj4_data[i][0]+"' id='qty'/></p>";
        displayString+="<p id='"+proj4_data[i][0]+"'></p>";
        displayString+= "<p>"+addToCartButton+"<input type='button' class='show_cart' value='Show Details' data-toggle='modal' data-target='#myModal' id='"+proj4_data[i][0]+"' name='show'></p></div></div></div>";
        //displayString+= "<input type=hidden id=sku"+proj4_data[i][6]+" value="+proj4_data[i][6]+" /> <input type=hidden id=onh"+proj4_data[i][6]+" value="+proj4_data[i][5]+"></div></div></div>";
        document.getElementById("content").innerHTML = displayString;
    $("#cart").html("");
      } } }); // end of if, for, on click

$('#adam').on('click', function() {
		displayString = "";
		for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == 3) {
            	
               if (proj4_data[i][8] > 0) {
               statusDisplay = "In Stock";
               addToCartButton="<input id = 'addButton' class='add_cart' name='" + proj4_data[i][0]+','+proj4_data[i][7]+','+proj4_data[i][8]+"' type='button' value= 'Add to Cart'>";
            }// end of if
            else{
            statusDisplay = "Coming Soon";
            addToCartButton="<button disabled> Add to cart</button>";
            }// end of else
        displayString+= "<div class='boxes'>";
        displayString+= "<div class='display_img productImg' id="+proj4_data[i][0]+"><img class='productImg' src=/~jadrn030/abccba/"+proj4_data[i][9]+" width=200px height=150></div>";
        displayString+= "<div class='caption'>";
        displayString+= "<p class='title'>"+proj4_data[i][0]+"</p>";
        displayString+= "<p><b>Manufacturer's ID:&nbsp;</b>"+proj4_data[i][3]+"</p>";
        //displayString+= "<p>"+proj4_data[i][1]+"</p>";
        displayString+= "<p class='green'><b>"+statusDisplay+"</b></p>";
        //displayString+= "<p><b>"+proj4_data[i][8]+" left</b></p>";
        displayString+= "<p>$"+proj4_data[i][7]+"</p>";
        displayString+="<p>Quantity:&nbsp;<input type='number' min='1' size='5' value='1' name='"+proj4_data[i][0]+"' id='qty'/></p>";
        displayString+="<p id='"+proj4_data[i][0]+"'></p>";
        displayString+= "<p>"+addToCartButton+"<input type='button' class='show_cart' value='Show Details' data-toggle='modal' data-target='#myModal' id='"+proj4_data[i][0]+"' name='show'></p></div></div></div>";
        //displayString+= "<input type=hidden id=sku"+proj4_data[i][6]+" value="+proj4_data[i][6]+" /> <input type=hidden id=onh"+proj4_data[i][6]+" value="+proj4_data[i][5]+"></div></div></div>";
        document.getElementById("content").innerHTML = displayString;
    $("#cart").html("");
      } } }); // end of if, for, on click

$('#uw').on('click', function() {
		displayString = "";
		for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == 4) {
            	
               if (proj4_data[i][8] > 0) {
               statusDisplay = "In Stock";
               addToCartButton="<input id = 'addButton' class='add_cart' name='" + proj4_data[i][0]+','+proj4_data[i][7]+','+proj4_data[i][8]+"' type='button' value= 'Add to Cart'>";
            }// end of if
            else{
            statusDisplay = "Coming Soon";
            addToCartButton="<button disabled> Add to cart</button>";
            }// end of else
        displayString+= "<div class='boxes'>";
        displayString+= "<div class='display_img productImg' id="+proj4_data[i][0]+"><img class='productImg' src=/~jadrn030/abccba/"+proj4_data[i][9]+" width=200px height=150></div>";
        displayString+= "<div class='caption'>";
        displayString+= "<p class='title'>"+proj4_data[i][0]+"</p>";
        displayString+= "<p><b>Manufacturer's ID:&nbsp;</b>"+proj4_data[i][3]+"</p>";
        //displayString+= "<p>"+proj4_data[i][1]+"</p>";
        displayString+= "<p class='green'><b>"+statusDisplay+"</b></p>";
        //displayString+= "<p><b>"+proj4_data[i][8]+" left</b></p>";
        displayString+= "<p>$"+proj4_data[i][7]+"</p>";
        displayString+="<p>Quantity:&nbsp;<input type='number' min='1' size='5' value='1' name='"+proj4_data[i][0]+"' id='qty'/></p>";
        displayString+="<p id='"+proj4_data[i][0]+"'></p>";
        displayString+= "<p>"+addToCartButton+"<input type='button' class='show_cart' value='Show Details' data-toggle='modal' data-target='#myModal' id='"+proj4_data[i][0]+"' name='show'></p></div></div></div>";
        //displayString+= "<input type=hidden id=sku"+proj4_data[i][6]+" value="+proj4_data[i][6]+" /> <input type=hidden id=onh"+proj4_data[i][6]+" value="+proj4_data[i][5]+"></div></div></div>";
        document.getElementById("content").innerHTML = displayString;
    $("#cart").html("");
      } } }); // end of if, for, on click

$('#film').on('click', function() {
		displayString = "";
		for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == 5) {
            	
               if (proj4_data[i][8] > 0) {
               statusDisplay = "In Stock";
               addToCartButton="<input id = 'addButton' class='add_cart' name='" + proj4_data[i][0]+','+proj4_data[i][7]+','+proj4_data[i][8]+"' type='button' value= 'Add to Cart'>";
            }// end of if
            else{
            statusDisplay = "Coming Soon";
            addToCartButton="<button disabled> Add to cart</button>";
            }// end of else
        displayString+= "<div class='boxes'>";
        displayString+= "<div class='display_img productImg' id="+proj4_data[i][0]+"><img class='productImg' src=/~jadrn030/abccba/"+proj4_data[i][9]+" width=200px height=150></div>";
        displayString+= "<div class='caption'>";
        displayString+= "<p class='title'>"+proj4_data[i][0]+"</p>";
        displayString+= "<p><b>Manufacturer's ID:&nbsp;</b>"+proj4_data[i][3]+"</p>";
        //displayString+= "<p>"+proj4_data[i][1]+"</p>";
        displayString+= "<p class='green'><b>"+statusDisplay+"</b></p>";
        //displayString+= "<p><b>"+proj4_data[i][8]+" left</b></p>";
        displayString+= "<p>$"+proj4_data[i][7]+"</p>";
        displayString+="<p>Quantity:&nbsp;<input type='number' min='1' size='5' value='1' name='"+proj4_data[i][0]+"' id='qty'/></p>";
        displayString+="<p id='"+proj4_data[i][0]+"'></p>";
        displayString+= "<p>"+addToCartButton+"<input type='button' class='show_cart' value='Show Details' data-toggle='modal' data-target='#myModal' id='"+proj4_data[i][0]+"' name='show'></p></div></div></div>";
        //displayString+= "<input type=hidden id=sku"+proj4_data[i][6]+" value="+proj4_data[i][6]+" /> <input type=hidden id=onh"+proj4_data[i][6]+" value="+proj4_data[i][5]+"></div></div></div>";
        document.getElementById("content").innerHTML = displayString;
    $("#cart").html("");
      } } }); // end of if, for, on click

$('#mirrorless').on('click', function() {
		displayString = "";
		for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == 6) {
            	
               if (proj4_data[i][8] > 0) {
               statusDisplay = "In Stock";
               addToCartButton="<input id = 'addButton' class='add_cart' name='" + proj4_data[i][0]+','+proj4_data[i][7]+','+proj4_data[i][8]+"' type='button' value= 'Add to Cart'>";
            }// end of if
            else{
            statusDisplay = "Coming Soon";
            addToCartButton="<button disabled> Add to cart</button>";
            }// end of else
        displayString+= "<div class='boxes'>";
        displayString+= "<div class='display_img productImg' id="+proj4_data[i][0]+"><img class='productImg' src=/~jadrn030/abccba/"+proj4_data[i][9]+" width=200px height=150></div>";
        displayString+= "<div class='caption'>";
        displayString+= "<p class='title'>"+proj4_data[i][0]+"</p>";
        displayString+= "<p><b>Manufacturer's ID:&nbsp;</b>"+proj4_data[i][3]+"</p>";
        //displayString+= "<p>"+proj4_data[i][1]+"</p>";
        displayString+= "<p class='green'><b>"+statusDisplay+"</b></p>";
        //displayString+= "<p><b>"+proj4_data[i][8]+" left</b></p>";
        displayString+= "<p>$"+proj4_data[i][7]+"</p>";
        displayString+="<p>Quantity:&nbsp;<input type='number' min='1' size='5' value='1' name='"+proj4_data[i][0]+"' id='qty'/></p>";
        displayString+="<p id='"+proj4_data[i][0]+"'></p>";
        displayString+= "<p>"+addToCartButton+"<input type='button' class='show_cart' value='Show Details' data-toggle='modal' data-target='#myModal' id='"+proj4_data[i][0]+"' name='show'></p></div></div></div>";
        //displayString+= "<input type=hidden id=sku"+proj4_data[i][6]+" value="+proj4_data[i][6]+" /> <input type=hidden id=onh"+proj4_data[i][6]+" value="+proj4_data[i][5]+"></div></div></div>";
        document.getElementById("content").innerHTML = displayString;
    $("#cart").html("");
      } } }); // end of if, for, on click

$('#superzoom').on('click', function() {
		displayString = "";
		for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] ==7) {
            	
               if (proj4_data[i][8] > 0) {
               statusDisplay = "In Stock";
               addToCartButton="<input id = 'addButton' class='add_cart' name='" + proj4_data[i][0]+','+proj4_data[i][7]+','+proj4_data[i][8]+"' type='button' value= 'Add to Cart'>";
            }// end of if
            else{
            statusDisplay = "Coming Soon";
            addToCartButton="<button disabled> Add to cart</button>";
            }// end of else
        displayString+= "<div class='boxes'>";
        displayString+= "<div class='display_img productImg' id="+proj4_data[i][0]+"><img class='productImg' src=/~jadrn030/abccba/"+proj4_data[i][9]+" width=200px height=150></div>";
        displayString+= "<div class='caption'>";
        displayString+= "<p class='title'>"+proj4_data[i][0]+"</p>";
        displayString+= "<p><b>Manufacturer's ID:&nbsp;</b>"+proj4_data[i][3]+"</p>";
        //displayString+= "<p>"+proj4_data[i][1]+"</p>";
        displayString+= "<p class='green'><b>"+statusDisplay+"</b></p>";
        //displayString+= "<p><b>"+proj4_data[i][8]+" left</b></p>";
        displayString+= "<p>$"+proj4_data[i][7]+"</p>";
        displayString+="<p>Quantity:&nbsp;<input type='number' min='1' size='5' value='1' name='"+proj4_data[i][0]+"' id='qty'/></p>";
        displayString+="<p id='"+proj4_data[i][0]+"'></p>";
        displayString+= "<p>"+addToCartButton+"<input type='button' class='show_cart' value='Show Details' data-toggle='modal' data-target='#myModal' id='"+proj4_data[i][0]+"' name='show'></p></div></div></div>";
        //displayString+= "<input type=hidden id=sku"+proj4_data[i][6]+" value="+proj4_data[i][6]+" /> <input type=hidden id=onh"+proj4_data[i][6]+" value="+proj4_data[i][5]+"></div></div></div>";
        document.getElementById("content").innerHTML = displayString;
    $("#cart").html("");
      } } }); // end of if, for, on click

$('#instock').on('click', function() {
		displayString = "";
		for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][8] > 0) {	
                if (proj4_data[i][8] > 0) {
               statusDisplay = "In Stock";
               addToCartButton="<input id = 'addButton' class='add_cart' name='" + proj4_data[i][0]+','+proj4_data[i][7]+','+proj4_data[i][8]+"' type='button' value= 'Add to Cart'>";
            }// end of if
            else{
            statusDisplay = "Coming Soon";
            addToCartButton="<button disabled> Add to cart</button>";
            }// end of else
        displayString+= "<div class='boxes'>";
        displayString+= "<div class='display_img productImg' id="+proj4_data[i][0]+"><img class='productImg' src=/~jadrn030/abccba/"+proj4_data[i][9]+" width=200px height=150></div>";
        displayString+= "<div class='caption'>";
        displayString+= "<p class='title'>"+proj4_data[i][0]+"</p>";
        displayString+= "<p><b>Manufacturer's ID:&nbsp;</b>"+proj4_data[i][3]+"</p>";
        //displayString+= "<p>"+proj4_data[i][1]+"</p>";
        displayString+= "<p class='green'><b>"+statusDisplay+"</b></p>";
        //displayString+= "<p><b>"+proj4_data[i][8]+" left</b></p>";
        displayString+= "<p>$"+proj4_data[i][7]+"</p>";
        displayString+="<p>Quantity:&nbsp;<input type='number' min='1' size='5' value='1' name='"+proj4_data[i][0]+"' id='qty'/></p>";
        displayString+="<p id='"+proj4_data[i][0]+"'></p>";
        displayString+= "<p>"+addToCartButton+"<input type='button' class='show_cart' value='Show Details' data-toggle='modal' data-target='#myModal' id='"+proj4_data[i][0]+"' name='show'></p></div></div></div>";
        //displayString+= "<input type=hidden id=sku"+proj4_data[i][6]+" value="+proj4_data[i][6]+" /> <input type=hidden id=onh"+proj4_data[i][6]+" value="+proj4_data[i][5]+"></div></div></div>";
        document.getElementById("content").innerHTML = displayString;
    $("#cart").html("");
      } } }); // end of if, for, on click

$('#outstock').on('click', function() {
		displayString = "";
		for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][8] == 0) {	
                if (proj4_data[i][8] > 0) {
               statusDisplay = "In Stock";
               addToCartButton="<input id = 'addButton' class='add_cart' name='" + proj4_data[i][0]+','+proj4_data[i][7]+','+proj4_data[i][8]+"' type='button' value= 'Add to Cart'>";
            }// end of if
            else{
            statusDisplay = "Coming Soon";
            addToCartButton="<button disabled> Add to cart</button>";
            }// end of else
        displayString+= "<div class='boxes'>";
        displayString+= "<div class='display_img productImg' id="+proj4_data[i][0]+"><img class='productImg' src=/~jadrn030/abccba/"+proj4_data[i][9]+" width=200px height=150></div>";
        displayString+= "<div class='caption'>";
        displayString+= "<p class='title'>"+proj4_data[i][0]+"</p>";
        displayString+= "<p><b>Manufacturer's ID:&nbsp;</b>"+proj4_data[i][3]+"</p>";
        //displayString+= "<p>"+proj4_data[i][1]+"</p>";
        displayString+= "<p class='green'><b>"+statusDisplay+"</b></p>";
        //displayString+= "<p><b>"+proj4_data[i][8]+" left</b></p>";
        displayString+= "<p>$"+proj4_data[i][7]+"</p>";
        displayString+="<p>Quantity:&nbsp;<input type='number' min='1' size='5' value='1' name='"+proj4_data[i][0]+"' id='qty'/></p>";
        displayString+="<p id='"+proj4_data[i][0]+"'></p>";
        displayString+= "<p>"+addToCartButton+"<input type='button' class='show_cart' value='Show Details' data-toggle='modal' data-target='#myModal' id='"+proj4_data[i][0]+"' name='show'></p></div></div></div>";
        //displayString+= "<input type=hidden id=sku"+proj4_data[i][6]+" value="+proj4_data[i][6]+" /> <input type=hidden id=onh"+proj4_data[i][6]+" value="+proj4_data[i][5]+"></div></div></div>";
        document.getElementById("content").innerHTML = displayString;
    $("#cart").html("");
      } } }); // end of if, for, on click

   }); //document ready function

function isEmpty(fieldValue) {
    return $.trim(fieldValue).length == 0;    
    } 

   function storeData(response) {
    var records = new Array();    
    records = response.split('||');
    for(i=0; i < records.length-1; i++) {
        var fields = new Array();
        fields = records[i].split('|');
        proj4_data[i] = fields;
        //alert(proj4_data[i][0]);
        //handle_string_data();
    }	// end of for
}// end of function


function handle_string_data(){
   	//alert(response);
	
	    for(i=0; i < proj4_data.length; i++) {
         var statusDisplay;
         var addToCartButton;
        //alert(proj4_data[i][8]);
        if (proj4_data[i][8] > 0) {
            statusDisplay = "In Stock";
            
            addToCartButton="<input id = 'addButton' class='add_cart' name='" + proj4_data[i][0]+','+proj4_data[i][7]+','+proj4_data[i][8]+"' type='button' value= 'Add to Cart'>";
        }// end of if
         else{
            statusDisplay = "Coming Soon";
            
            addToCartButton="<button disabled> Add to cart</button>";
        }// end of else
        
        displayString+= "<div class='boxes'>";
        displayString+= "<div class='display_img productImg' id="+proj4_data[i][0]+"><img class='productImg' src=/~jadrn030/abccba/"+proj4_data[i][9]+" width=200px height=150></div>";
        displayString+= "<div class='caption'>";
        displayString+= "<p class='title'>"+proj4_data[i][0]+"</p>";
        displayString+= "<p><b>Manufacturer's ID:&nbsp;</b>"+proj4_data[i][3]+"</p>";
        //displayString+= "<p>"+proj4_data[i][1]+"</p>";
        displayString+= "<p class='green'><b>"+statusDisplay+"</b></p>";
        //displayString+= "<p><b>"+proj4_data[i][8]+" left</b></p>";
        displayString+= "<p>$"+proj4_data[i][7]+"</p>";
        displayString+="<p>Quantity:&nbsp;<input type='number' min='1' size='5' value='1' name='"+proj4_data[i][0]+"' id='qty'/></p>";
        displayString+="<p id='"+proj4_data[i][0]+"'></p>";
        displayString+= "<p>"+addToCartButton+"<input type='button' class='show_cart' value='Show Details' data-toggle='modal' data-target='#myModal' id='"+proj4_data[i][0]+"' name='show'></p></div></div></div>";
        //displayString+= "<input type=hidden id=sku"+proj4_data[i][6]+" value="+proj4_data[i][6]+" /> <input type=hidden id=onh"+proj4_data[i][6]+" value="+proj4_data[i][5]+"></div></div></div>";
        document.getElementById("content").innerHTML = displayString;
    
    $("#cart").html("");
    
    }// end of for loop

} // end of handle_string_data function

function showDetails(sku){
    displayString = "";
 	//alert("inside for loop");
	//alert(sku);
	for(var i=0; i < proj4_data.length; i++) {
		//alert(sku);
		if(proj4_data[i][0] == sku){
		var statusDisplay;
         var addToCartButton;
         var quantityButton;
        //alert(proj4_data[i][8]);
        if (proj4_data[i][8] > 0) {
            statusDisplay = "In Stock";
            addToCartButton="<input id = 'addButton' class='add_cart' name='" + proj4_data[i][0]+','+proj4_data[i][7]+"' type='button' value= 'Add to Cart'>";
            quantityButton = "<input type='text'size='5' name='"+proj4_data[i][0]+"' id='qty'/>";
        }// end of if
         else {
            statusDisplay = "Coming Soon";
            addToCartButton="<button disabled> Add to cart</button>";
            quantityButton = "<input type='number'size='5' name='"+proj4_data[i][0]+"' id='qty' disabled/>";
        }// end of else

        displayString+= "<div class='show_box'>";
        displayString+= "<div class='product_img' id="+proj4_data[i][0]+"><img src=/~jadrn030/abccba/"+proj4_data[i][9]+" width=400px height=auto></div>";
        displayString+= "<div class='caption'><br><br>";
        displayString+= "<p><b>"+proj4_data[i][5]+"</b></p>";
        displayString+= "<p class='title'><b>SKU:</b> "+proj4_data[i][0]+"</p>";
        displayString+="<p> <b>Manufacturer's ID:&nbsp;</b>"+proj4_data[i][3]+"</p>";
        displayString+= "<p>"+proj4_data[i][1]+"</p>";
        displayString+= "<p class='green'>"+statusDisplay+"</p>";
        displayString+= "<p><b> Description: </b>"+proj4_data[i][4]+"</p>";
        //displayString+= "<p><b> Features: </b>"+proj4_data[i][5]+"</p>";
        displayString+= "<p><b> Price: </b>$"+proj4_data[i][7]+"</p>";
        displayString+= "<p>"+addToCartButton+"</p></div></div></div>";
        //displayString+= "<input type=hidden id=sku"+proj4_data[i][6]+" value="+proj4_data[i][6]+" /> <input type=hidden id=onh"+proj4_data[i][6]+" value="+proj4_data[i][5]+"></div></div></div>";
     }// end of if
 } // end of for loop


     document.getElementById('modal-body').innerHTML  = displayString;
    
    $("#cart").html("");
 
 }// end of function 


    //********************************************  CART PAGE  *********************************************//


$("#cart").html("");
var product = new Array();

$(document).ready( function() {
    var cart = new shopping_cart("jadrn030");
    var cartArray = cart.getCartArray();
    updateDisplay();

    $(document).on('click', "#deleteButton", function(e) { 
        var dProduct = $(e.target).attr("class");
        var skuu = dProduct.substr(0);
        // alert (skuu);
        cart.delete(skuu);
        updateDisplay();
        }); // end of on click

 function updateDisplay() {
        fields = new Array();
        var cartArray = cart.getCartArray();
        var shipping = 5;
        var itemQty = 0;
        var productPr = 0;
        var total = 0;
        var tax = 0.0775;
        
        // var ProductPrice = 0;
        if(cart.size()==0){
            var toWrite = "<div class='container jumbotron'>";
            toWrite += "<hr/>";
            toWrite += "<div><p id='no_items'> There are no items in your cart. Shop Now!</p></div><br>";
            //toWrite += "<input type='button' class='buttonshop' id='buttonShop' value='Shop Now!'>";
            toWrite += "<a href='http://jadran.sdsu.edu/jadrn030/list.html'><button class='button' type='button'>Shop Now!</button></a><br><br><br><br>";
            toWrite += "</div>";
            
            $('#cart').html(toWrite); 
            $('#count').text(cart.size());  
        } // end of if

        else {
        var toWrite = "<div class='container'>";
        toWrite += "<table class='table'>";
        toWrite += "<thead><tr><th>Product</th><th>SKU</th><th>Quantity</th><th>Total Cost</tr></thead>";
        var cartArray = cart.getCartArray();
        for(var i=0; i < cartArray.length; i++) {
          	var sku = cartArray[i][0];
        	itemQty += parseInt(cartArray[i][2]);
        	var costPrice;
            smallSKU = cartArray[i][0];
            toLowerCase = smallSKU.toLowerCase();
            proj4_data[i] = fields;
            //alert(cartArray[i][1]);

           // for(var j=0; j < proj4_data.length; j++) {
            //alert("inside")
            //if(proj4_data[j][0] == cartArray[i][0] ) {
                    costPrice=parseFloat(cartArray[i][1]/itemQty);
                    var costProduct = cartArray[i][2] * costPrice;
                    total += costProduct;
                  
            
            toWrite += "<tbody>";
            toWrite += "<tr>";
            toWrite += "<td><img src=/~jadrn030/abccba/"+toLowerCase+" width=120px height=auto></td>";
            toWrite += "<td>"+cartArray[i][0]+"</td>&nbsp;";
            //toWrite += "<td>"+costPrice+"</td>";
            toWrite += "<td>"+cartArray[i][2]+"</td>";
            toWrite += "<td>"+costProduct.toFixed(2)+"</td>";
            toWrite += "<td><input type='button' id='deleteButton' class='"+cartArray[i][0]+"' value='Remove'/></td>";
            //var total = cartArray[i][1];


        }   // end of for
                       
            var totalTax = total * tax;
            var finalPrice = total + shipping + totalTax;
            //total = parseFloat(qtyXRetail)+  parseFloat(tax) + parseFloat(shipping);
            //total = Math.round(total * 100)/100;
            toWrite += "</tr><br>";
            toWrite += "<td><span><b> Total: $"+total.toFixed(2)+"</b></span></td></tr>";
            toWrite += "<tr><td><span><b>Shipping Charges: $5.00</b></span></td>";
            toWrite += "<td><span><b> Tax (7.75%): $"+totalTax.toFixed(2)+"</b></span></td>";
            toWrite += "<td><span><b> Order Total(including shipping Charge and tax): $"+finalPrice.toFixed(2)+"</b></span></td></tr>";
            toWrite += "<tr><td><a href='http://jadran.sdsu.edu/jadrn030/list.html'><button type='button' class='button'>Add more items</button></a>&nbsp;&nbsp;&nbsp;&nbsp;<button type='button' class='button' id='check_out'>Proceed to Checkout</button></td></tr>";
            toWrite += "<tbody>";
            toWrite += "</table>"; 
            toWrite += "</div><br><br>";

            $('#cart').html(toWrite); 
            $('#count').text(cart.size()); 

            //alert(finalPrice.toFixed(2));
            localStorage.setItem('imageSKU', toLowerCase);
            localStorage.setItem('sku', smallSKU);
            localStorage.setItem('total', total.toFixed(2));
            localStorage.setItem('shippingcost', shipping);
            localStorage.setItem('tax', totalTax.toFixed(2));
            localStorage.setItem('finalTotal', finalPrice.toFixed(2));

            $( "#check_out").click(function() {
          window.location.href ="http://jadran.sdsu.edu/jadrn030/checkoutpage.html";
        });  // end of click 

        } // end of else

         } // end of updateDisplay function

    }); // end of document ready function




