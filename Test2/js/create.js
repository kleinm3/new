//declare new arrays
$(function(){
	drinks = com.dawgpizza.menu.drinks;
	desserts = com.dawgpizza.menu.desserts;
	meatPies= new Array();
	veggiePies= new Array();
	
	//loop inside the arrays and find our whether or not vegetarian
	//is true. 
	for(var i=0;i<com.dawgpizza.menu.pizzas.length;i++){
		if(com.dawgpizza.menu.pizzas[i].hasOwnProperty("vegetarian")){
			veggiePies.push(com.dawgpizza.menu.pizzas[i]);
		}else {
			meatPies.push(com.dawgpizza.menu.pizzas[i]);
		}

	}

	createPies(meatPies, "#meatPieSection");
	createPies(veggiePies, "#veggiePieSection");

	drinksDesserts("#drinkSection", com.dawgpizza.menu.drinks);
	drinksDesserts("#dessertSection", com.dawgpizza.menu.desserts);

}); 

//Make the price appear and append the list
function drinksDesserts(id, list){
	for(var i=0;i<list.length;i++){
		var p=$('<p>').text(list[i].name).appendTo(id);
		var span = $('<span>').addClass("price").text("$"+list[i].price)
						.appendTo(p);
	}
}

function createPies(listOfPies, pieId){
	var section ="";
	if(pieId === "#meatPieSection"){	
		section = "Meat Pies";	
	} else {
		section = "Vegeterian Pies";
	}


	var h1=$('<h1 class="item">').text(section).appendTo(pieId);
	for(var i=0;i<listOfPies.length;i++){
		var h2 = $('<h2 class = "meat">')
		.text(listOfPies[i].name).appendTo(pieId);
		var p = $('<p class = "ing">')
		.text(listOfPies[i].description+" $"+listOfPies[i].prices
		.join(" $")).appendTo(pieId);
	
	}

}