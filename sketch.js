const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
var box_options = {
    restitution: 1.2
}
var box2_options = {
    restitution: 1.2
}
var box3_options = {
    restitutions: 1.2
}
var ball_options = {
    restitutions: 0.3
}
var ball2_options = {
    restitutions: 0.3
}
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
box = Bodies.rectangle(200,200,20,20,box_options);  
box2 = Bodies.rectangle(150,150,20,20,box2_options);
box3 = Bodies.rectangle(100,150,20,20,box3_options);
ball = Bodies.circle(75,200,20,ball_options);
ball2 = Bodies.circle(150,10,20,ball2_options);
 World.add(world,box,);
 World.add(world,box2);
 World.add(world,box3);
 World.add(world,ball);
 World.add(world,ball2);

console.log
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
rect(box.position.x,box.position.y,20,20);
rect(box2.position.x,box2.position.y,20,20);
rect(box3.position.x,box3.position.y,20,20);
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20);
ellipse(ball2.position.x,ball.position.y,20,20);
}