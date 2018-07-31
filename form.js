
$( "#cardno" ).text(function(_,val) {
    return val.replace(/\d{12}(\d{4})/, "xxxx xxxx xxxx $1");
}); 


function isEmpty(fieldValue) {
    return $.trim(fieldValue).length == 0;    
    } 
// // copied from stackoverflow.com, not checked or validated for correctness.
function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
        }
    
function isValidState(state) {                                
    var stateList = new Array("AK","AL","AR","AZ","CA","CO","CT","DC",
    "DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA",
    "MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ",
    "NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX",
    "UT","VA","VT","WA","WI","WV","WY");
    for(var i=0; i < stateList.length; i++) 
        if(stateList[i] == $.trim(state))
            return true;
    return false;
} 

function placeOrder(response) {
    //alert(response);
    if(response == "success")
    {
        cart.deleteCookie();
        var cartSize = cart.size();
        $('#count').text(cartSize);
        window.location.href = "http://jadran.sdsu.edu/jadrn030/confirmation.html"; 
    }

    else
        {
            alert("error");
    } } 

$(document).ready( function() {
    $('#order').on('click', function() {    
      var url = "http://jadran.sdsu.edu/jadrn030/servlets/PlaceOrder";
      //alert("get");
      $.get(url, placeOrder);
});
     
     var shippingCharge = localStorage.getItem("shippingcost");
    //alert(shippingCharge);
    var errorStatusHandle = $('#error_message');
    var elementHandle = new Array(22);
    elementHandle[0] = $('[name="fname"]');
    elementHandle[1] = $('[name="lname"]');
    elementHandle[2] = $('[name="address1"]');
    elementHandle[3] = $('[name="address2"]');
    elementHandle[4] = $('[name="city"]');
    elementHandle[5] = $('[name="state"]');
    elementHandle[6] = $('[name="zip"]');
    elementHandle[7] = $('[name="phone"]');
    elementHandle[8] = $('[name="b-fname"]');
    elementHandle[9] = $('[name="b-lname"]');
    elementHandle[10] = $('[name="b-address1"]');
    elementHandle[11] = $('[name="b-address2"]');
    elementHandle[12] = $('[name="b-city"]');
    elementHandle[13] = $('[name="b-state"]');
    elementHandle[14] = $('[name="b-zip"]');
    elementHandle[15] = $('[name="b-phone"]');
    elementHandle[16] = $('[name="cardtype"]');
    elementHandle[17] = $('[name="cardname"]');
    elementHandle[18] = $('[name="cardno"]');
    elementHandle[19] = $('[name="expmonth"]');
    elementHandle[20] = $('[name="expyear"]');
    elementHandle[21] = $('[name="cvv"]');

 $("#sameaddress").on("change", function(){
    if (this.checked) {
      $("[name='b-fname']").val($("[name='fname']").val());
      $("[name='b-lname']").val($("[name='lname']").val());
      $("[name='b-address1']").val($("[name='address1']").val());
      $("[name='b-address2']").val($("[name='address2']").val());
      $("[name='b-city']").val($("[name='city']").val());
      $("[name='b-state']").val($("[name='state']").val());
      $("[name='b-zip']").val($("[name='zip']").val());
      $("[name='b-phone']").val($("[name='phone']").val());
    }
    else {

            $("[name='b-fname']").val("");
      $("[name='b-lname']").val("");
      $("[name='b-address1']").val("");
      $("[name='b-address2']").val("");
      $("[name='b-city']").val("");
      $("[name='b-state']").val("");
      $("[name='b-zip']").val("");
      $("[name='b-phone']").val("");
    
    }
  });
    function isValidData() {
        
        if(isEmpty(elementHandle[0].val())) {
            elementHandle[0].addClass("error");
            errorStatusHandle.text("Please enter your first name");
            elementHandle[0].focus();
            return false;
        }
        if(isEmpty(elementHandle[1].val())) {
            elementHandle[1].addClass("error");
            errorStatusHandle.text("Please enter your last name");
            elementHandle[1].focus();            
            return false;
        }
        if(isEmpty(elementHandle[2].val())) {
            elementHandle[2].addClass("error");
            errorStatusHandle.text("Please enter your address");
            elementHandle[2].focus();            
            return false;
        }
        if(isEmpty(elementHandle[4].val())) {
            elementHandle[4].addClass("error");
            errorStatusHandle.text("Please enter your city");
            elementHandle[4].focus();            
            return false;
        }
        if(isEmpty(elementHandle[5].val())) {
            elementHandle[5].addClass("error");
            errorStatusHandle.text("Please enter your state");
            elementHandle[5].focus();            
            return false;
        }
        if(!isValidState(elementHandle[5].val())) {
            elementHandle[5].addClass("error");
            errorStatusHandle.text("The state appears to be invalid, "+
            "Please enter valid state");
            elementHandle[5].focus();            
            return false;
        }
        if(isEmpty(elementHandle[6].val())) {
            elementHandle[6].addClass("error");
            errorStatusHandle.text("Please enter your zip code");
            elementHandle[6].focus();            
            return false;
        }
        if(!$.isNumeric(elementHandle[6].val())) {
            elementHandle[6].addClass("error");
            errorStatusHandle.text("The zip code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[6].focus();            
            return false;
        }
        if(elementHandle[6].val().length != 5) {
            elementHandle[6].addClass("error");
            errorStatusHandle.text("The zip code must have exactly five digits")
            elementHandle[6].focus();            
            return false;
        }
        if(isEmpty(elementHandle[7].val())) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("Please enter your phone number");
            elementHandle[7].focus();            
            return false;
        }            
        if(!$.isNumeric(elementHandle[7].val())) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("The phone number appears to be invalid, "+
            "numbers only please. ");
            elementHandle[7].focus();            
            return false;
        }
        if(elementHandle[7].val().length != 10) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("The phone number must have exactly ten digits")
            elementHandle[7].focus();            
            return false;
        }   
        if(isEmpty(elementHandle[8].val())) {
            elementHandle[8].addClass("error");
            errorStatusHandle.text("Please enter your first name");
            elementHandle[8].focus();
            return false;
            }
        if(isEmpty(elementHandle[9].val())) {
            elementHandle[9].addClass("error");
            errorStatusHandle.text("Please enter your last name");
            elementHandle[9].focus();            
            return false;
            }
        if(isEmpty(elementHandle[10].val())) {
            elementHandle[10].addClass("error");
            errorStatusHandle.text("Please enter your address");
            elementHandle[10].focus();            
            return false;
            }
        if(isEmpty(elementHandle[12].val())) {
            elementHandle[12].addClass("error");
            errorStatusHandle.text("Please enter your city");
            elementHandle[12].focus();            
            return false;
            }
        if(isEmpty(elementHandle[13].val())) {
            elementHandle[13].addClass("error");
            errorStatusHandle.text("Please enter your state");
            elementHandle[13].focus();            
            return false;
            }
        if(!isValidState(elementHandle[13].val())) {
            elementHandle[13].addClass("error");
            errorStatusHandle.text("The state appears to be invalid, "+
            "please enter valid state ");
            elementHandle[13].focus();            
            return false;
            }
        if(isEmpty(elementHandle[14].val())) {
            elementHandle[14].addClass("error");
            errorStatusHandle.text("Please enter your zip code");
            elementHandle[14].focus();            
            return false;
            }
        if(!$.isNumeric(elementHandle[14].val())) {
            elementHandle[14].addClass("error");
            errorStatusHandle.text("The zip code appears to be invalid, "+
            "numbers only please");
            elementHandle[14].focus();            
            return false;
            }
        if(elementHandle[14].val().length != 5) {
            elementHandle[14].addClass("error");
            errorStatusHandle.text("The zip code must have exactly five digits")
            elementHandle[14].focus();            
            return false;
            }
        if(isEmpty(elementHandle[15].val())) {
            elementHandle[15].addClass("error");
            errorStatusHandle.text("Please enter your phone number");
            elementHandle[15].focus();            
            return false;
            }            
        if(!$.isNumeric(elementHandle[15].val())) {
            elementHandle[15].addClass("error");
            errorStatusHandle.text("The phone number appears to be invalid, "+
            "numbers only please. ");
            elementHandle[15].focus();            
            return false;
        }
        if(elementHandle[15].val().length != 10) {
            elementHandle[15].addClass("error");
            errorStatusHandle.text("The phone number must have exactly ten digits")
            elementHandle[15].focus();            
            return false;
        }              
        if(isEmpty(elementHandle[16].val())) {
            elementHandle[16].addClass("error");
            errorStatusHandle.text("Please select the type of card");
            elementHandle[16].focus();            
            return false;
        }  
        if(isEmpty(elementHandle[17].val())) {
            elementHandle[17].addClass("error");
            errorStatusHandle.text("Please enter the name on card");
            elementHandle[17].focus();            
            return false;
        }
        
        if(isEmpty(elementHandle[18].val())) {
            elementHandle[18].addClass("error");
            errorStatusHandle.text("Please enter card number");
            elementHandle[18].focus();           
            return false;
        } 

        else if(!$.isNumeric($('[name="cardno"]').val())) {
            elementHandle[18].addClass("error");
            errorStatusHandle.text("your card number appears to be invalid. Numbers only please. ");
            elementHandle[18].focus();            
            return false;
        }            
       else if(elementHandle[18].val().length != 16) {
            elementHandle[18].addClass("error");
            errorStatusHandle.text("The card number must have exactly 16 digits");
            elementHandle[18].focus();            
            return false;
        }       
        if(isEmpty(elementHandle[19].val())) {
            elementHandle[19].addClass("error");
            errorStatusHandle.text("Please enter your card expiry month");
            elementHandle[19].focus();            
            return false;
        }     
        if(!$.isNumeric(elementHandle[19].val())) {
            elementHandle[19].addClass("error");
            errorStatusHandle.text("Your card expiry month appears to be invalid. Numbers only please");
            elementHandle[19].focus();            
            return false;
        }  
        if(elementHandle[19].val().length != 2) {
            elementHandle[19].addClass("error");
            errorStatusHandle.text("Please enter month in mm format");
            elementHandle[19].focus();            
            return false;
        }  
        if(elementHandle[19].val() > 12) {
            elementHandle[19].addClass("error");
            errorStatusHandle.text("Please enter a valid month");
            elementHandle[19].focus();            
            return false;
        }  
        if(elementHandle[19].val() == 0) {
            elementHandle[19].addClass("error");
            errorStatusHandle.text("Please enter a valid month");
            elementHandle[19].focus();            
            return false;
        }  

        if(isEmpty(elementHandle[20].val())) {
            elementHandle[20].addClass("error");
            errorStatusHandle.text("Please enter your card expiry year");
            elementHandle[20].focus();            
            return false;
        }    
        if(!$.isNumeric(elementHandle[20].val())) {
            elementHandle[20].addClass("error");
            errorStatusHandle.text("Your card expiry year appears to be invalid. Numbers only please");
            elementHandle[20].focus();            
            return false;
        } 
        if(elementHandle[20].val().length != 4) {
            elementHandle[20].addClass("error");
            errorStatusHandle.text("Please enter year in yyyy format");
            elementHandle[20].focus();            
            return false;
        }
        if(elementHandle[20].val() < 2017) {
            elementHandle[20].addClass("error");
            errorStatusHandle.text("Your card appears to be expired");
            elementHandle[20].focus();            
            return false;
        }
        for (var i=0;i<12;i++ ){
                if((elementHandle[19].val() == i) && elementHandle[20].val() <= 2017) {
            elementHandle[20].addClass("error");
            errorStatusHandle.text("Your card appears to be expired");
            elementHandle[19].focus();            
            return false;
        }}

        if(isEmpty(elementHandle[21].val())) {
            elementHandle[21].addClass("error");
            errorStatusHandle.text("Please enter your CVV");
            elementHandle[21].focus();            
            return false;
        }
        if(!$.isNumeric(elementHandle[21].val())) {
            elementHandle[21].addClass("error");
            errorStatusHandle.text("Your CVV appears to be invalid. Numbers only please");
            elementHandle[21].focus();            
            return false;
        }
        if(elementHandle[21].val().length != 3) {
            elementHandle[21].addClass("error");
            errorStatusHandle.text("CVV is a 3 digit number.");
            elementHandle[21].focus();            
            return false;
        }  
    return true;
    }       

   elementHandle[0].focus();

//uppercase the state
   elementHandle[5].on('keyup', function() {
        elementHandle[5].val(elementHandle[5].val().toUpperCase());
    });
        
    elementHandle[13].on('keyup', function() {
        elementHandle[13].val(elementHandle[13].val().toUpperCase());
    });           

//to remove error message 

    elementHandle[0].on('blur', function() {
        if(isEmpty(elementHandle[0].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
    });

    elementHandle[1].on('blur', function() {
        if(isEmpty(elementHandle[1].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
    });
        
    elementHandle[2].on('blur', function() {
        if(isEmpty(elementHandle[2].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
    });

    elementHandle[3].on('blur', function() {
        if(isEmpty(elementHandle[3].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
    });

    elementHandle[4].on('blur', function() {
        if(isEmpty(elementHandle[4].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
    });

    elementHandle[5].on('blur', function() {
        if(isEmpty(elementHandle[5].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
    });

    elementHandle[6].on('blur', function() {
        if(isEmpty(elementHandle[6].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
    });

    elementHandle[7].on('blur', function() {
        if(isEmpty(elementHandle[7].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
    });

    elementHandle[8].on('blur', function() {
        if(isEmpty(elementHandle[8].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
    });

    elementHandle[9].on('blur', function() {
        if(isEmpty(elementHandle[9].val()))
            return;
        if(isValidEmail(elementHandle[9].val())) {
            $(this).removeClass("error");
            errorStatusHandle.text("");
        }
    });   

    elementHandle[12].on('blur', function() {
        if(isEmpty(elementHandle[12].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
    });

    elementHandle[13].on('blur', function() {
        if(isEmpty(elementHandle[13].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
    });

    elementHandle[14].on('blur', function() {
        if(isEmpty(elementHandle[14].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
    });

    elementHandle[15].on('blur', function() {
        if(isEmpty(elementHandle[15].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
    });

    elementHandle[16].on('blur', function() {
        if(isEmpty(elementHandle[16].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
    });

    elementHandle[17].on('blur', function() {
        if(isEmpty(elementHandle[17].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
    });

    elementHandle[18].on('blur', function() {
        if(isEmpty(elementHandle[18].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
    });

    elementHandle[19].on('blur', function() {
        if(isEmpty(elementHandle[19].val()))
            return;
        $(this).removeClass("error");
        errorStatusHandle.text("");
    });

    $(document).ready(function() {
    
       $('input[name="fname"]').focus();
    
        $('#continue').on('click', function(e) {
            e.preventDefault();
            if(!isValidData()) {
                e.preventDefault();
                return;
            }
            else {
                var address = $('#address1').val();
                var address1 = $('#address2').val();
                var city = $('#city').val();
                var state = $('#state').val();
                var zip = $('#zip').val();
                var add = address +" "+ address1+" "+city+" "+state+" "+zip;

                var bAddress = $('#b-address1').val();
                var bAddress1 = $('#b-address2').val();
                var bcity = $('#b-city').val();
                var bstate = $('#b-state').val();
                var bzip = $('#b-zip').val();
                var bAdd = bAddress +" "+ bAddress1+" "+bcity+" "+bstate+" "+bzip;

                var firstName = $('#fname').val();
                var lastName = $('#lname').val();
                var name = firstName +" " + lastName;

                var bFirstName = $('#b-fname').val();
                var bLastName = $('#b-lname').val();
                var bName = bFirstName +" " + bLastName;
            
                localStorage.setItem('shippingaddress', add);
                localStorage.setItem('shippingname', name); 
                localStorage.setItem('billingaddress', bAdd);
                localStorage.setItem('billingname', bName);
                localStorage.setItem('billingname', bName);  

          window.location.href ="http://jadran.sdsu.edu/jadrn030/summary.html";
          // orderSummary();
          // alert("hi");
            }
         });

        // function orderSummary() {
        //     var fname = $("#fname").val();
        //     alert(fname);
        //     var writeSummary;
        //     writeSummary += "<table class='table'>";
        //     writeSummary += "<thead><tr><th>Shipping Address</th><th>SKU</th><th>Quantity</th><th>Price</th></tr></thead>";
        //     writeSummary += "<tbody>";
        //     writeSummary += "<tr>";
        //     var fname = $("#fname").val();
        //     writeSummary += "<td>"+fname+"</td>&nbsp;";
        //     writeSummary += "<td>"+fname+"</td>";
        //     writeSummary += "<td>"+fname+"</td>"; 
        //     writeSummary+= "<div class='sum'>"+fname+"</div>";
        //     $("#summary").html(writeSummary);
        // }
    
    });
       $('#resetB').on('click', function() {
        document.getElementById("form").reset();
        // for(var i=0; i < 21 ; i++)
        //     elementHandle[i].removeClass("error");
        //     errorStatusHandle.text("");
         
    // $('#reset').on('click', function() {
    //        errorStatusHandle("",false);
    //        // elementHandle[i].removeClass("error");
    //        $('*').removeClass("error");
        
    });  



    }); 
