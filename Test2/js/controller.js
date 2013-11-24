/* controller.js
    Controller for Shopping Cart page
*/

$(function(){


    //initialize cartModel and cartView
	var cartModel = createCartModel();
	var cartView = createCartView({
        model: cartModel,
        template: $('.cart-item-template'),
        container: $('.cart-items-container'),
        totalPrice: $('.total-price')
	});

    //OPTIONAL STEP: stores the cart in browser's localStorage.
    //When the user refreshes the page, 
    // his/her cart is reloaded on to the page
   /* var cartJSON = localStorage.getItem('cart');
    if (cartJSON && cartJSON.length > 0) {
        cartModel.setItems(JSON.parse(cartJSON));
    }
   */  



    //-----------------------PIZZA SECTION--------------------------------------------------

        var pizzaModel = createListModel();
        pizzaModel.setItems(com.dawgpizza.menu.pizzas);
        

        var pizzaView = createMenusView({
            model: pizzaModel,
            template: $('.menu-template'),
            container:$('.menus-container')
        });

        pizzaView.on('addToCart', function(data){
            var pizza = pizzaModel.getItem(data.name);
             if(!pizza)
                throw 'Invalid pizza name';
            cartModel.addItem({
                name:pizzaView.eventData.name,
                type: pizzaView.eventData.type,
                price:parseFloat(pizzaView.eventData.price),   
                size:pizzaView.eventData.size    
            });

        }); 

    


    /*we do not need to call pizzaModel.refresh() because the menu we are getting is not from the server
     but directly set through pizzaModel.setItems(com.daegPizza.menu.pizzas)
    */

    //---------------------------------------------------------------------------------------
   
    //saves the JSON representation of the cart items in
    //the localStorage
 /*   cartModel.on('change', function(){
        localStorage.setItem('cart', cartModel.toJSON());
    });
*/    
}); //doc ready()




