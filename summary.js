$(document).ready(function(){

	orderSummary();

	$("#cancel").click(function(){
            	window.location.href ="http://jadran.sdsu.edu/jadrn030/list.html";
            });

  $('#count').text(cart.size());

  $('#order').on('click', function() {    
      var url = "http://jadran.sdsu.edu/jadrn030/servlets/PlaceOrder";
      //alert("get");
      $.get(url, placeOrder);
});
    
    $("#shop").click(function() {
      window.location.href = "http://jadran.sdsu.edu/jadrn030/list.html"; 
    });
});

function placeOrder(response) {
    //alert(response);
    if(response == "success")
    {
        cart.deleteCookie();
        $("#summary").html("");
        var cartSize = cart.size();
        $('#count').text(cartSize);
        window.location.href = "http://jadran.sdsu.edu/jadrn030/confirmation.html"; 
    }

    else
        {
            alert("error");
    } }

function orderSummary() {
      var writeSummary = "";
	        var shippingAddress = localStorage.getItem("shippingaddress");
	        var shippingName = localStorage.getItem("shippingname");
	        var BillingAddress = localStorage.getItem("billingaddress");
	        var BillingName = localStorage.getItem("billingname");
	        var shippingCharge = localStorage.getItem("shippingcost");
	        var SKU = localStorage.getItem("sku");
	        var tax = localStorage.getItem("tax");
	        var total = localStorage.getItem("total");
          var finalTotal = localStorage.getItem("finalTotal");
	        var image = localStorage.getItem("imageSKU");
	        
            writeSummary += "<div class='container'><div class='jumbotron'>";
            writeSummary += "<table class='table'><col width=80px><col width=10px>";
            writeSummary += "<tr><td><h4><b>Shipping Details</b></h4>";
            writeSummary += "<p><b>Name :</b>"+shippingName+"</p>";
            writeSummary += "<p><b>Shipping Address :</b>"+shippingAddress+"</p></td>";
             writeSummary += "<td><h4><b>Billing Details</b></h4>";
            writeSummary += "<p><b>Name :</b>"+BillingName+"</p>";
            writeSummary += "<p><b>Billing Address :</b>"+BillingAddress+"</p></td>";
            writeSummary += "<td><b>Total:&nbsp;</b>"+total+"</br><b>Tax:&nbsp; </b>$"+tax+"<br><b>Shipping Cost:&nbsp;</b>$"+shippingCharge+"<br><b>Order Total:&nbsp;</b>$"+finalTotal+"<br><br>";
            writeSummary += "<input class='button' name='order' id='order' value='Place Order'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>";
            writeSummary += "<input type='button' class='button' id='cancel' value='cancel'></td></tr>"; 
            
            $("#summary").html(writeSummary);
        }

/**************************** CART ***************************************/

$("#cartsummary").html("");
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
            
            $('#cartsummary').html(toWrite); 
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
            proj4_data[i] =
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
           
        }   // end of for
                       
            var totalTax = total * tax;
            var finalPrice = total + shipping + totalTax;
            
            toWrite += "</tr><br>";
            toWrite += "<td><span><b> Total: $"+total.toFixed(2)+"</b></span></td></tr>";
            toWrite += "<tr><td><span><b>Shipping Charges: $5.00</b></span></td>";
            toWrite += "<td><span><b> Tax (7.75%): $"+totalTax.toFixed(2)+"</b></span></td>";
            toWrite += "<td><span><b> Order Total(including shipping Charge and tax): $"+finalPrice.toFixed(2)+"</b></span></td></tr>";
            //toWrite += "<tr><td><a href='http://jadran.sdsu.edu/jadrn030/list.html'><button type='button' class='button'>Add more items</button></a>&nbsp;&nbsp;&nbsp;&nbsp;<button type='button' class='button' id='check_out'>Proceed to Checkout</button></td></tr>";
            toWrite += "<tbody>";
            toWrite += "</table>"; 
            toWrite += "</div><br><br>";

            $('#cartsummary').html(toWrite); 
            $('#count').text(cart.size()); 

            localStorage.setItem('imageSKU', toLowerCase);
            localStorage.setItem('sku', smallSKU);
            localStorage.setItem('total', total);
            localStorage.setItem('shippingcost', shipping);
            localStorage.setItem('tax', tax);
            localStorage.setItem('total', total);

            $( "#check_out").click(function() {
          window.location.href ="http://jadran.sdsu.edu/jadrn030/checkoutpage.html";
        });  // end of click 

        } // end of else

         } // end of updateDisplay function

    }); // end of document ready function


