class Circle {
    
    constructor(radius,color){                //initialise circle radius an color values
        this.radius = radius;
        this.color = color;
    }
    getRadius(){                           
        return this.radius;
    }
    setRadius(rad){
        this.radius = rad;
    }
    getColor(){
        return this.color;
    }
    setColor(col){
        this.color = col;
    }
    toString(){                                     
        this.radius = String(this.radius);
        this.color = String(this.color);
    }
    getArea(){
        return "Area of circle = " + (3.14*this.radius*this.radius);       //get the area of circle
    }
    getCircumference(){
        return "Circumference of circle = " + (3.14*2*this.radius);        //get circumference of circle
    }
}

var circle1 = new Circle(4,"Green");                                        //pasing values for the circle

console.log(circle1.getArea());                                             //get the area for the circle
console.log(circle1.getColor());                                            //get color of the circle
