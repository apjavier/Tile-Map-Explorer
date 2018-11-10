//uses sprites by Antifarea, downloaded from OpenGameArt.org

/** @module Player
  * A class representing the player.
  */
export default class Player {
  /** @constructor
    * Constructs a new player instance
    * @param {float} x - the player's x position
    * @param {float} y - the player's y position
    */
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.moving = false;
    this.direction = 'south';
    this.img = new Image();
    this.img.src = 'ranger_f.png';
    this.sprite = //south sprite
    {
      url: this.img.src, //url
      pos: [1 * 32,2 * 36],           //pos
      size: [32,36],                  //size
      speed: 0,                       //speed
      frames: [0,2,0,2],              //frames
      _index: 0,
      dir: 'horizontal',              //dir
      once: false                     //once
    };
  }

  /** @method update
    * Updates the player
    * @param {double} deltaT - the elapsed time
    * @param {Input} input - the input object
    */
  update(deltaT, input) {
    if(input.keyPressed("ArrowLeft")) {
      this.x-= .1 * deltaT;
      this.direction = 'west';
      this.moving = true;
      this.sprite.speed = 3;
      this.sprite._index += .1;
    }
    else if(input.keyPressed("ArrowRight")) {
      this.x+= .1 * deltaT;
      this.direction = 'east';
      this.moving = true;
      this.sprite.speed = 3;
      this.sprite._index += .1;
    }
    else if(input.keyPressed("ArrowUp")) {
      this.y-= .1 * deltaT;
      this.direction = 'north';
      this.moving = true;
      this.sprite.speed = 3;
      this.sprite._index += .1;
    }
    else if(input.keyPressed("ArrowDown")) {
      this.y+= .1 * deltaT;
      this.direction = 'south';
      this.moving = true;
      this.sprite.speed = 3;
      this.sprite._index += .1;
    }
    else{
      this.moving = false;
      this.sprite.speed = 0;
      this.sprite._index = 0;
    }

  }

  /** @method render
    * Renders the player
    * @param {double} deltaT - elapsed time
    * @param {Context2D} context - the rendering context
    */
  render(deltaT, context) {
    context.fillStyle = "red";
    context.fillRect(this.x, this.y, 64, 72);

    if(this.direction == 'north'){
      //north sprite
      this.sprite.pos = [1 * 32,0];
    }
    else if(this.direction == 'east'){
      //east sprite
      this.sprite.pos = [1 * 32,1 * 36];
    }
    else if(this.direction == 'south'){
      //south sprite
      this.sprite.pos = [1 * 32,2 * 36];
    }
    else if(this.direction == 'west'){
      //west sprite
      this.sprite.pos = [1 * 32,3 * 36];
    }

    var frame;
    if(this.moving) {
        this.sprite._index += .1;
        console.log(this.sprite._index);
        var max = this.sprite.frames.length;
        var idx = Math.floor(this.sprite._index);
        frame = this.sprite.frames[idx % max];

        if(idx >= max) {
            this.sprite._index = 0;
        }
    }
    else {
        frame = 1;
    }

    var x = 0;
    var y = this.sprite.pos[1];

    if(this.sprite.dir == 'vertical') {
        y = frame * this.sprite.size[1];
    }
    else {
        x = frame * 32;
    }

    context.drawImage(this.img,
                  x, y,
                  this.sprite.size[0], this.sprite.size[1],
                  this.x, this.y,
                  64, 72);
  }
}
