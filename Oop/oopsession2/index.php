<?php 


/**
 * Polymorphism 
 * 1-Over Ride 
 * 2-Over Load
 *      == parameter  (signatuer) = > Over Ride  == static Poltmorphism [compile Time Ploymorphism] , Early - Binding 
        *ex  1- int mul (int x , int y);
        *2- int mul (int x , int y , int z);

        *== implemention => Over Load == Dynamic Ploymorphism , late - binding [run time polymorphism]
        *ex 1- function display () {echo "S1_E"}
        *ex 2- function display () {echo "M11_D"}
 */

/**
 * Inhertancs 
 * 
 * 
 * 
 */

    abstract class Shape {
        protected string $color;

        //constractor 
        public function __construct(string $color){
            $this->color = $color;
        }
        //  Function Getter 
        public function getColor(): string{
            return $this->color;
        }

        // Setter Function  

        public function setColor(string $color): void{
            $this->color = $color;
        }  

        // Get Area 
            public abstract function getArea(): float ;

        // Get Perimeter 
            public abstract function getPerimeter(): float ;
            // Function Display 
            public abstract function display(): void ; 
    }
    
    class Rectangle extends Shape {
        private float $length; 
        private float $width; 

        public function __construct(string $color , float $length , float $width)
        {
            parent::__construct($color);
                $this->length = $length;
                $this->width = $width;
        }
            public function setLength(float $length):void {
                $this->length = $length;
            }
            public function setWidth(float $width):void {
                $this->width = $width;
            }

            public function getLength():float {
                return $this->length;
            }
            public function getWidth():float {
                return $this->width ;
            }

            public function getArea():float{
                return $this->length * $this->width ;
            }

            public function getPerimeter(): float
            {
                return ($this->length + $this->width) * 2;
            }

            public function display(): void
            {
                echo "Rect Color Is : " . $this->getColor() . "<br>" . "Rect Area" . $this->getArea() . "<br>" . "Rect Perimeter" . $this->getPerimeter(); 
            }
    }

    $rect = new Rectangle("Red" , 10.25 , 15.50);
    $rect->display();
    // $rect->setColor("Green");


    interface Crud {
        public function create();
        public function getAll();
        public function getOne(int $id);
        public function update(int $id);
        public function delete(int $id);
        public function edit(int $id);
    }
        interface x {}
    class post implements Crud , x {
        public function create(){}
        public function getAll(){}
        public function getOne(int $id){}
        public function update(int $id){}
        public function delete(int $id){}
        public function edit(int $id) {}
    }

    class user implements Crud{
        public function create(){}
        public function getAll(){}
        public function getOne(int $id){}
        public function update(int $id){}
        public function delete(int $id){}
        public function edit(int $id) {}
    }
echo "<br>"; 
// Over Load 
    class Animal {
        protected string $name ; 

        public function __construct(string $name)
        {
            $this->name  =$name; 
        }

        // Greets
        public function greets():void {}
    }
        // Cat 
        class Cat extends Animal {
            public function __construct(string $name)
            {
                parent::__construct($name);
            }
            public function greets():void{
                echo "Mewo";
            }
        }
        $cat = new  Cat('Tom');
        $cat->greets();




        //Dog 
        class Dog extends Animal {
            public function __construct(string $name)
            {
                parent::__construct($name);
            }
            public function greets():void{
                echo "Howwwww";
            }
        }
        $dog = new  Dog('Jack');
        $dog->greets();
