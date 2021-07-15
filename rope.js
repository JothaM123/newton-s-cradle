class Rope{
	constructor( body1, pointA, body2, pointB,)
	{

	this.pointA = pointA;
	this.pointB = pointB;

	var options= {
		bodyA:body1,
		bodyB:body2,
		pointB:{x:this.pointB.position.x, y:this.pointB.position.y},
		pointA:{x:this.pointA.position.x, y:this.pointA.position.y}
	}

	var con = Matter.Constraint.create({
		pointA:{x:0,y:0},
		pointB:{x:0,y:250},
		bodyA:body1,
		bodyB:body2,
		length:100,
		stiffness:0.1
	})

	World.add(world, con);

	}

	

	display(){
		var pointA = this.pointA.position;
		var pointB = this.pointB.position;

		push();
		strokeWeight(2);
		fill(255);
		line(pointA.x, pointA.y, pointB.x, pointB.y);
		pop();
	}
    //create display() here 

}
