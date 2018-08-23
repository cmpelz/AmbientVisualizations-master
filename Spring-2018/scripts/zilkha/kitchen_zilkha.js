function print( text, ID ) {
    document.getElementById( ID ).innerHTML = text;
}

function KitchenZilk() {
    //source of indexes for changePic calls
    this.sim_appliances = [new ZilkhaAppliance("microwave"), new ZilkhaAppliance("fridge"), new ZilkhaAppliance("oven"), new ZilkhaAppliance("rangehood"), new ZilkhaAppliance("stove")],
    this.get_appliances = function() { return this.sim_appliances; },
    this.switchState = function(appliance) {
	       this.sim_appliances[this.sim_appliances.indexOf(appliance)].switchState();
    }
}

kitchen = new KitchenZilk();
sim_appliances = kitchen.get_appliances();

function insertImg( imgSrc, width, height, id ){
   var img = document.createElement("img");
   img.src = imgSrc;
   img.width = width;
   img.height = height;
   img.id = id;

   //inserts kitchen image
   document.write('<img id = "id" src = "' + imgSrc + '" style = "margin:0px auto;display:block" width = "' + width + '" height = "' + height + '" />');
}

//checks if any of the appliances have changed state
//calls changePic passing the index of the changed appliance
function checkChange(name) {
  for(i = 0; i < this.sim_appliances.length; i++) {
    if(this.sim_appliances[i].name == name) {
      changePic(i);
    }
  }
}


//changes the kitchen image to reflect running appliances
function changePic(num){
  var filePath1 = KITCHEN_VIS_IMAGES_PATH; //in scripts/all/paths.js
  var srcImg = document.getElementById( "id" ).src;
  var filePath2 = KITCHEN_VIS_IMAGES_PATH;


  // toaster lights up
  if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_toaster_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_all_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_oven_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_toaster_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_all_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_toaster_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_oven_toaster_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_oven_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_toaster_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_hood_toaster_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_toaster_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_hood_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_stove_hood_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_toaster_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_stove_hood_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_oven_toaster_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_stove_hood_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_oven_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_stove_hood_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_stove_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_toaster_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_stove_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_oven_toaster_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_stove_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_oven_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_stove_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_oven_toaster_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_oven_on.png";
      sim_appliances[0].change = false;
  } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_all_off.jpg";
      sim_appliances[0].change = false;


  // fridge lights up
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_all_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_oven_toaster_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_hood_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_toaster_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_hood_toaster_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_oven_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_toaster_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_oven_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_oven_toaster_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_toaster_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_all_off.jpg";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_oven_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_oven_toaster_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_toaster_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_hood_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_stove_hood_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_stove_hood_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_oven_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_stove_hood_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_all_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_stove_hood_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_toaster_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_stove_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_stove_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_oven_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_stove_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_oven_toaster_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_stove_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_toaster_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.png";
      sim_appliances[1].change = false;
  } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_toaster_on.png";
      sim_appliances[1].change = false;


  // oven lights up
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_oven_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_all_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_toaster_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_oven_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_all_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_oven_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_toaster_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_oven_toaster_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_toaster_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_hood_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_hood_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_hood_toaster_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_toaster_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_stove_hood_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_oven_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_stove_hood_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_stove_hood_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_toaster_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_stove_hood_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_oven_toaster_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_stove_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_oven_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_stove_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_stove_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_toaster_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_stove_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_oven_toaster_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_all_off.jpg";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_toaster_on.png";
      sim_appliances[2].change = false;
  } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_oven_toaster_on.png";
      sim_appliances[2].change = false;


  // rangehood lights up
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_hood_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_all_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_oven_toaster_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_toaster_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_oven_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_toaster_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_oven_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_all_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_toaster_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_hood_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_all_off.jpg";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_oven_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_oven_toaster_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_toaster_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_stove_hood_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_stove_hood_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_oven_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_stove_hood_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_oven_toaster_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_stove_hood_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_toaster_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_stove_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_stove_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_oven_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_stove_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_oven_toaster_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_stove_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_toaster_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_toaster_on.png";
      sim_appliances[3].change = false;
  } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_hood_toaster_on.png";
      sim_appliances[3].change = false;


  // stove lights up
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_all_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_oven_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_all_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_toaster_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_toaster_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_oven_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_oven_toaster_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_toaster_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_hood_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_oven_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_oven_toaster_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_toaster_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_stove_hood_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_hood_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_stove_hood_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_stove_hood_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_toaster_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_stove_hood_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_hood_toaster_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_stove_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_all_off.jpg";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_stove_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_oven_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_stove_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_oven_toaster_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_stove_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_toaster_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_oven_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_oven_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_oven_toaster_on.png";
      sim_appliances[4].change = false;
  } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_toaster_on.png" ) ) {
      document.getElementById("id").src = filePath2 + "kitchen_2_stove_toaster_on.png";
      sim_appliances[4].change = false;
  } else {
      console.log( "Error  " + filePath1);
  }
}
