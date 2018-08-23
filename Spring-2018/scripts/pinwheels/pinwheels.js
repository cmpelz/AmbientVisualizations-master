function energy_to_size(energy, min_size) {
    return min_size + energy/5;
 }
function power_to_speed(appliance) { return appliance.get_power()/appliance.get_max_power()*5; }


function GrowingPinwheel(path,x,y,size,page_height,page_width){
    this.page_height = page_height,
    this.page_width = page_width,
    this.img = new Image(), /* setup the image to draw */
    this.img.src = path,
    this.x = x, /* assign the x coordinate */
    this.y = y, /* assign the y coordinate */
    this.min_size = 20;
    this.size = size;
    this.appliance = null,
    this.power = 0,
    this.energy = 0,
    this.last_size = 0,

    this.addAppliance = function(appliance){
        this.appliance = appliance;
    },

    this.draw = function() {
        ctx.save(); //saves canvas
        //not sure why this is necessary, but without it the following calls transform the frame (not pinwheel)

        ctx.translate(this.x+this.size/2, this.y+this.size/2); //positions pinwheel
        ctx.rotate(Math.PI*REFRESH_RATE/300*this.power); //rotates pinwheel

      	if (this.appliance.running) {
          ctx.globalAlpha = 0.65; //sets transparency to visible level
        }
      	else {
          ctx.globalAlpha = 0; //sets transparency to invisible
        }

        ctx.drawImage(this.img, -this.size/2, -this.size/2, this.size, this.size); //draws pinwheel

        ctx.restore(); //restores canvas
    },

    this.update = function() {
      //Not an ideal solution, but calling update() a bunch eliminates the delay on displaying the pinwheels
      //Would be great if it was in some sort of loop, but they always end up infinite
      this.appliance.update(); //calls update function from zilkha.js or simulation.js (depending on what's running)
      this.appliance.update();
      this.appliance.update();
      this.appliance.update();
      this.appliance.update();
      this.appliance.update();
      this.appliance.update();
      this.appliance.update();
      this.appliance.update();
      this.appliance.update();
      this.appliance.update();
      this.appliance.update();
      this.appliance.update();
      this.appliance.update();
      this.appliance.update();
      this.appliance.update();

    	if (this.appliance.running){
        this.power += power_to_speed(this.appliance);
    	}

      var current_energy = this.appliance.get_energy();
      this.size = Math.min(energy_to_size(current_energy, this.min_size),MAX_SIZE);
      /* keep the pinwheel in the same position the entire time */
      var center_change = (this.size - this.last_size)/2;
      this.x -= center_change;
      this.y -= center_change;
      /* store the previous state */
      this.last_size = this.size;
      this.last_energy = current_energy;
    }
}
