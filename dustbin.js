class Dustbin {
    constructor (x,y,w,h){
      var stop={
        isStatic:true
      }
      
        this.body=Bodies.rectangle(x,y,w,h,stop)
        this.width=w;
        this.height=h;
        World.add(world,this.body) 
    }
   display(){
       rectMode(CENTER)
       rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }


}
