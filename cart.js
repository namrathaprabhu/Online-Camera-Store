
var displayString = "";
$("#cart").html("");
var cart = new shopping_cart("jadrn030");
var fields;

$(document).ready(function()
{
    fields = new Array();
   // init();  // function to load products from the database
    // function to update display in the cart and order page
    $.ajax({

		url:"http://jadran.sdsu.edu/jadrn030/servlets/AjaxGetProducts1", 
		success: function(response){
			//alert("success");
			storeData(response);
			handle_string_data();
		},
		error: function(response) {
            alert(response+"Some problem occurred to get data from Database.<br>Refresh page.");
        }
	});

   // Shopping cart count display
   $('#count').text(cart.size());
   $('#content').on('click',$('input[type="button"]'), function(e) {
		if($(e.target).val() != 'Add to Cart') return;
		var product = $(e.target).attr("name");
		var prodDetails = product.split(",");
		//alert("SKU: "+prodDetails[0]);
		var qty = $("[name="+prodDetails[0]+"]").val(); 
        $('#count').text(cart.size());
            cart.add(prodDetails[0],prodDetails[1],qty);
        $('#count').text(cart.size());
    }); // on click function



   $('#content').on('click',$('input[type="button"]'), function(e) {
   var id =	(e.target.id);
    if($(e.target).val() != 'Show Details') return;
    alert("value");
        displayProductsOnPopup(id);
   //     window.location.href ="http://jadran.sdsu.edu/jadrn030/productinfo.html";
   //     //alert("hi");
   //     var product_info = "";
   //     product_info += "<div class='display_img'><p>hiiiiiii</p></div>";
   //     $("#productinfo").html(product_info);
     });
         

   // });
  //  var productImg;
  //  $(document).on('click', ".productImg", function(e) {
		// 	var selectedProductId = $(this).attr("id");
		// 	sessionStorage.setItem('selectedProductId', selectedProductId);
		// 	window.location.href = "http://jadran.sdsu.edu/jadrn030/productinfo.html";
		// });  

	// $('#content').on('click',$('input[type="button"]'), function(e) {
	// 	if($(e.target).val() != 'Show Details') return;
	// 	//alert("h1");
	// 	var skuimg = $(e.target).attr("id");
	// 	//alert(skuimg);
	// 	productInfo(skuimg);
	// 	modal.style.display = "block";
	// }); // end 
	

 }); //document ready function      


 function displayProductsOnPopup(sku){

 	alert("inside for loop");
	itemString = "";
	alert(skuu);
				
    	for(var i=0; i < fields.length-1; i++) {

    	
    	// 	    if(fields[0] == sku){
					
					// if(!initialClick){
			  //   		if(productQuantity[fields[0]] == 0){
				 //    		in_stock = "Coming Soon";
				 //    		isAddButtonVisible = false;
				 //    	}else if(productQuantity[fields[0]] > 0){
				 //    		in_stock = "In Stock";
				 //    		isAddButtonVisible = true;
				 //    	}else if(productQuantity[fields[0]] < 0){
				 //    		in_stock = "Out Of Stock";
				 //    		isAddButtonVisible = false;
				 //    	}
			  //   	}
			  //   	else{
			  //   		productQuantity[fields[0]] = fields[4];
			  //   		if(fields[4] == 0){
				 //    		in_stock = "Coming Soon";
				 //    		isAddButtonVisible = false;
				 //    	}else if(fields[4] > 0){
				 //    		in_stock = "In Stock";
				 //    		isAddButtonVisible = true;
				 //    	}else if(fields[4] < 0){
				 //    		in_stock = "Out Of Stock";
				 //    		isAddButtonVisible = false;
				 //    	}	
			  //   	}

	   //   			itemString += "<table>";   //class='col-sm-8 col-md-2'
	   //   			itemString += "<tr><td>";
				// 	itemString += "<table style='width:100%'>";
				// 	itemString += "<tr><td><img class='dialogImage'src=/~jadrn030/abccba/"+fields[9]+" width=200px height=150";
    // 				itemString += "class='btn btn-info btn-lg' data-toggle='modal' data-target='#myModal'></td></tr> ";
				// 	itemString += "</table></td>";
					
				// 	itemString += "<td>";
				// 	itemString += "<table style='width:100%'>";
				// 	itemString += "<tr><td colspan ='2' class='productTitle'>"+fields[2]+ "-" + fields[3]+"</td></tr> ";      
				// 	itemString += "<tr><td class='dialogLeft'>Description :</td><td>"+fields[7]+"</td></tr> ";
				// 	itemString += "<tr><td class='dialogLeft'>Features :</td><td>"+fields[8]+"</td></tr>";                                           
				// 	itemString += "<tr><td class='dialogLeft'>Price :</td><td>"+"$"+fields[5]+"</td></tr>  ";
				// 	//itemString += "<tr><td class='dialogLeft'>Quantity In Stock : </td><td>"+ productQuantity[fields[0]]  +"</td></tr>";  
				// 	if(isAddButtonVisible){
				// 		itemString += "<tr><td colspan ='2'><input type='button'  value='Add to Cart' name="+fields[0]+" class='productButton'/></td></tr>"; 
				// 	}
				// 	else
				// 	{
				// 		itemString += "<tr><td colspan ='2'><div class='OutOfStock'>"+in_stock+"</div></td></tr>";
				// 	}
				// 	itemString += "<span  class='addedToCart'>Added to Cart Successfully</span>";     
			 //        itemString += "</table></td></tr></table>";
					
				// }	                                    
    	}    
   
     	//document.getElementById('modal-body').innerHTML  = itemString;      
}   

// function init() {
//     fetch_string_data();   
// }

//function to make AJAX call to the servlet
// function fetch_string_data() {
//     var request = new HttpRequest(
//         "/jadrn030/servlets/AjaxGetProducts1", handle_string_data);   
//     request.send();
//  } 

function storeData(response) {
	alert("storedata");
    var records = new Array();    
    records = response.split('||');
    for(i=0; i < records.length; i++) {
        var fields = new Array();
        fields = records[i].split('|');
        //alert(fields[0]);
        //handle_string_data();

    }	
}


    
function handle_string_data(){
	alert("handle");
	alert(fields[0]);
	// sessionStorage.setItem('records', response);
	// var records = new Array();    
 //    records = response.split('||');
    for(i=0; i < fields.length; i++) {
 //        var fields = new Array();
 //        fields = records[i].split('|');

        var statusDisplay;
        //var statusClass;
        var addToCartButton;
        //alert(fields[8]);
        if (fields[8] > 0) {
            statusDisplay = "In Stock";
            
            addToCartButton="<input id = 'addButton' class='add_cart' name='" + fields[0]+','+fields[7]+"' type='button' value= 'Add to Cart'>";
        } else {
            statusDisplay = "Coming Soon";
            
            addToCartButton="<button disabled> Add to cart</button>";
        }
        
        
        displayString+= "<div class='boxes'>";
        displayString+= "<div class='display_img productImg' id="+fields[0]+"><img class='productImg' src=/~jadrn030/abccba/"+fields[9]+" width=200px height=150></div>";
        displayString+= "<div class='caption'>";
        displayString+= "<p class='title'>"+fields[0]+"-"+fields[2]+"</p>";
        displayString+= "<p>"+fields[1]+"</p>";
        displayString+= "<p class='green'>"+statusDisplay+"</p>";
        displayString+= "<p>$"+fields[7]+"</p>";
        displayString+="<p>Quantity:&nbsp;<input type='number' min='1' size='5' value='1' name='"+fields[0]+"' id='qty'/></p>";
        displayString+= "<p>"+addToCartButton+"<input type='button' class='add_cart' value='Show Details'  id='"+fields[0]+"'></p></div></div></div>";
        //displayString+= "<input type=hidden id=sku"+fields[6]+" value="+fields[6]+" /> <input type=hidden id=onh"+fields[6]+" value="+fields[5]+"></div></div></div>";
    

    // document.getElementById("content").innerHTML = displayString;
    if(document.getElementById('content') != null) 
    {   
    	document.getElementById('content').innerHTML = itemString;
	}
    $("#cart").html("");

    }}

//     function productInfo(sku){
//     	displayString = "";
//     	for(var i=0; i < proj4_data.length-1; i++) {
//     		if(proj4_data[i][0] == sku){
//          displayString+= "<div class='display_img'><img src=/~jadrn030/abccba/"+fields[9]+" width=200px height=150 id="+fields[0]+"></div>";
//            }//end of if
//     }

//     document.getElementById('modal-body').innerHTML  = displayString;
// }


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
        });

    $(document).on('click',$('input[type="button"]'), function(e) {
       // var sku = this.id;
       if($(e.target).val() != 'Change Quantity') return;
        var qtyDetails = $(e.target).attr("name");
        var detailsSplit = qtyDetails.split(",");
        var sku = detailsSplit[0];
        var retail = detailsSplit[1];
        alert(sku);
        alert(retail);
        var cartArray = cart.getCartArray();
        cart.setQuantity(sku,retail, $('#qty').val());
        updateDisplay();
        });

function updateDisplay() {
        fields = new Array();
        var cartArray = cart.getCartArray();
        var total = 0;
        var tax = 0;
        var shipping = 0;
        var itemQty = 0;
        var productPr = 0;
        var qtyXRetail = 0;
        // var ProductPrice = 0;
        if(cart.size()==0){
            var toWrite = "<div class='container jumbotron'>";
            toWrite += "<hr/>";
            toWrite += "<div> There are no items in your cart. Shop Now!</div><br>";
            //toWrite += "<input type='button' class='buttonshop' id='buttonShop' value='Shop Now!'>";
            toWrite += "<a href='http://jadran.sdsu.edu/jadrn030/list.html'><button class='buttonshop' type='button'>Shop Now!</button></a><br><br><br><br>";
            toWrite += "</div>";
            
            $('#cart').html(toWrite); 
            $('#count').text(cart.size());  
        }

        else {
        var toWrite = "<div class='container'>";
        toWrite += "<table class='table'>";
        toWrite += "<thead><tr><th>Product</th><th>SKU</th><th>Quantity</th><th>Total</th></tr></thead>";
        var cartArray = cart.getCartArray();
        //alert(product[0]);

        for(i=0; i < cartArray.length; i++) {
            //for(j=0; j<product.length;i++) {
            
        	fields = new Array();
        	itemQty += parseInt(cartArray[i][2]);
            itemPrice = parseFloat(cartArray[i][1]);
            itemPrice = Math.round(itemPrice * 100)/100; 
            //alert(itemPrice);
            productPr += parseFloat(cartArray[i][1]);
            //alert(productPr);
            productPr = Math.round(productPr * 100)/100;
            qtyXRetail += parseFloat(cartArray[i][1] * cartArray[i][2]);
            qtyXRetail = Math.round(qtyXRetail * 100)/100;
            

            //alert(qtyXRetail);

            productTitle= $.trim(cartArray[i][3]);
            smallSKU = cartArray[i][0];
            toLowerCase = smallSKU.toLowerCase();
            //qtyPrice = (itemQty * productPrice);
            //alert("qty:" + itemQty);
            //alert(itemPrice);
            //alert(productPrice);
            toWrite += "<tbody>";
            toWrite += "<tr>";
            toWrite += "<td><img src=/~jadrn030/abccba/"+toLowerCase+" width=120px height=auto></td>";
            toWrite += "<td>"+cartArray[i][0]+"</td>&nbsp;";
                        // toWrite += "<td>"+ productTitle +"</td>";
            toWrite += "<td>"+cartArray[i][2]+"</td>";
            toWrite += "<td>"+(cartArray[i][1]*cartArray[i][2])+"</td>"; 
            //toWrite += "<td>Quantity: <input type='text' id='qty' /></td>"; 
            //toWrite += "<td><input type='button' value='Change Quantity' id='"+cartArray[i][0]+"' name='" + cartArray[i][0]+','+cartArray[i][1]+"' class='quantityButton' /></td>";
            //alert();
            toWrite += "<td><input type='button' id='deleteButton' class='"+cartArray[i][0]+"' value='Remove'/></td>";

          //}  
 }   
            //alert(qtyXRetail);
            //alert(productPr);
            shipping = 5;
            tax = parseFloat((qtyXRetail + shipping) * 0.075);
            tax = Math.round(tax * 100)/100;
            total = parseFloat(qtyXRetail)+  parseFloat(tax) + parseFloat(shipping);
            total = Math.round(total * 100)/100;
            // alert(total);
            toWrite += "</tr><br>";

            toWrite += "<tr><td><span><b>Shipping Charges: $" + shipping +"</b></span></td>";
            toWrite += "<td><span><b> Tax (7.75%): $"+tax+"</b></span></td>";
            toWrite += "<td><span><b> Total: $"+total+"</b></span></td></tr>";
            toWrite += "<tr><td><a href='http://jadran.sdsu.edu/jadrn030/list.html'><button type='button' class='button'>Add more items</button></a>&nbsp;&nbsp;&nbsp;&nbsp;<button type='button' class='button' id='check_out'>Proceed to Checkout</button></td></tr>";
            toWrite += "<tbody>";
            toWrite += "</table>"; 
            // toWrite += "<a href='http://jadran.sdsu.edu/~jadrn047/proj4/products.html'><button class='buttonshop' type='button'>Continue Shopping</button></a>";
            // toWrite += "<th><button type='button' class='button1' data-toggle='modal' data-target='#myModal'>Proceed to Checkout</button></th></div>";
            toWrite += "</div><br><br>";

            $('#cart').html(toWrite); 
            $('#count').text(cart.size()); 

            
            // var address1 = $('#address2').val();
            // var add = address +" "+ address1;
            
            //localStorage.setItem('total', total);
            //localStorage.setItem('total', total);
            localStorage.setItem('imageSKU', toLowerCase);
            localStorage.setItem('sku', smallSKU);
            localStorage.setItem('total', total);
            localStorage.setItem('shippingcost', shipping);
            localStorage.setItem('tax', tax);
            localStorage.setItem('total', total);


  

            $( "#check_out").click(function() {
          window.location.href ="http://jadran.sdsu.edu/jadrn030/checkoutpage.html";
        });   
        } }



    });