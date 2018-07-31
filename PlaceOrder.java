import java.io.*;
import java.util.*;
import java.text.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;
import sdsu.*;

/**** Reference: www.coderanch.com ****/
/**** Reference: www.tutorialspoint.com ****/
/**** Reference: www.stackoverflow.com ****/
 
public class PlaceOrder extends HttpServlet{
   public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {

      PrintWriter out = response.getWriter(); 
      String CookieVal = request.getHeader("cookie");
      String name =  "|";
      String getString = "";
      String[] v = CookieVal.split(";");
      for (String s: v){
         String[] nameValue = s.split("=");
         if (nameValue == null || nameValue.length <= 0) {
            out.print("Error");
            return;
         }
         String Name = nameValue[0].trim();
         if(Name.equals(name)){
            getString = nameValue[1].trim();
            break;
         }
      }
    String[] fields = getString.split("\\|\\|\\|");
    for(int p=0; p<fields.length; p++) {
       if(fields[p] != "") {
         String[] pair = fields[p].split("\\|");
         String sku = pair[0];
         String qty = pair[2];
         String presentQty = "Select quantity from product" +
                  "WHERE sku="+ "'" + sku + "'" + ";";
         String answer = DBHelper.doQuantity(presentQty);
         qty = String.valueOf((Integer.parseInt(answer) - Integer.parseInt(qty)));
         String query = "UPDATE product " +
         "SET quantity=" + qty + 
         "WHERE sku=" + "'" + sku + "'" + ";" ;
         DBHelper.doUpdate(query);
       }
    }
    out.print("success");
   }
}
   
