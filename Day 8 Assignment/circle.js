class Circle {
    
    constructor(radius,color){
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
        return "Area of circle = " + (3.14*this.radius*this.radius);
    }
    getCircumference(){
        return "Circumference of circle = " + (3.14*2*this.radius);
    }
}

var circle1 = new Circle(4,"Green");

console.log(circle1.getArea());
console.log(circle1.getColor());