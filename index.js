class Automobile {
  constructor(name, model, color,type) {
    this.name = name;
    this.model=model;
    this.color=color;
    this.type=type;
    this.start();
  }
  start(){
    console.log(`The ${this.name} is ready to drive`)
  }
  openDoor(){
    console.log(`Door is open`)
  }
  horn(){
    console.log(`The ${this.name} is horning`);
  }
  headLights(){
    console.log('Lights are on');
  }
  break(){
    console.log('break is working');
  }
  acceleration(){
    console.log('accelerator is working');
  }
  calutch(){
    console.log('working well');
  }
  gair(){
    console.log('works best');
  }
}

class Car extends Automobile{
    super(name, model, color,type)
    constructor(maxSpeed,fuleAverage,price,door,){
      this.maxSpeed=maxSpeed;
      this.fuleAverage=fuleAverage;
      this.price=price;
      this.door=door;
      this.acceleration();
      this.break();
      this.calutch();
      this.gair();
      this.headLights();
      this.horn();
    }
}
class Bus extends Automobile{
    super(name, model, color,type)
    constructor(maxSpeed,fuleAverage,price,door,){
      this.maxSpeed=maxSpeed;
      this.fuleAverage=fuleAverage;
      this.price=price;
      this.door=door;
      this.acceleration();
      this.break();
      this.calutch();
      this.gair();
      this.headLights();
      this.horn();
    }
}
class Truck extends Automobile{
    super(name, model, color,type)
    constructor(maxSpeed,fuleAverage,price,door,wheel){
      this.maxSpeed=maxSpeed;
      this.fuleAverage=fuleAverage;
      this.price=price;
      this.door=door;
      this.wheel=wheel;
      this.acceleration();
      this.break();
      this.calutch();
      this.gair();
      this.headLights();
      this.horn();
    }
}

const vihecal = new Automobile('Toyota','2018','Silver','Auto')
const Car1 = new Car('250km/hr','8km/lit',560000,'Two Auto')
const Bus1 = new Bus('300km/hr','7km/lit','400000','All Auto')
const Truck1 = new Truck('450km/hr','5km/lit','750000','Auto','12')

console.log(Car1)
console.log(Bus1)
console.log(Truck1)