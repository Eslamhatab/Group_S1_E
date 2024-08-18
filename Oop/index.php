    <?php 


    /*** Oop => Object Oriented Programming 
     *  Easy Maintainance 
     * 
     * 4-Pillars 
     *  1-Encapsulation  //Hide  Data  
     *  2-Abdtraction    //What Object Dose  = Hide Unneccrssary Details 
     *  3-Inheritance    // More Reusable 
     *  4-polymorphism   =  filexibilty => 
     * 1-over load prameter   2- OverRide  Implementaion 
     */

    /**
     * login  / logout /register / token / forget pass / 


    */
            //Inheritance
            class Student {
                //Attribiuts , data members , fields => Variables 
                //Access Var Ever Where 
                public int $stdId;
                public string $stdName;
                public float $stdGrade;

            }
                    //Take A New Object  
            $std = new Student();
            $std->stdId = 1; 
            $std->stdName = "S1_E";
            $std->stdGrade = 90.0;
            var_dump($std);
                
            echo "<br>";
            //Encapsulation
                class employee{
                    private int $empId; 
                    private string $empName;
                    private float $empSalary;
                        //Step (2) Initialization 
                        // Magic Method  __constract
                            //parameter 
                            
                            public function __construct(int $id , string $name , float $salary)
                            {
                                $this->empId = $id;
                                $this->empName = $name;
                                $this->empSalary = $salary;
                            }
                                //Setter  
                                    public function setName($name) :void{
                                        $this->empName = $name;
                                    }
                                // getter 
                                public function getName() :string{
                                    return $this->empName;
                                }
                                    public function showEmployee(){
                                        echo "Employee Id= " . $this->empId . "<br>" . "Employee Name" . $this->empName . "<br>" ."employee Salary = " . $this->empSalary;  
                                    }
                }
                $emp = new employee(3 , "Sl_E", 120000);
                $emp->setName('Hatab');
                echo $emp->getName();
                echo "<br>";     
                $emp->showEmployee(); 
                var_dump($emp);            
                // print_r($emp);
                echo "<br>";  
                /**
                 * Class Rectangle 
                 * step (2) Var => lenght , width = float datatype 
                 *  
                 * 
                 * 
                 * 
                 * 
                 * 
                 * 
                 */

                class Rectangle {
                    private float $lenght;
                    private float $width; 
                        //Create Parameter Lenth and Width In Constractor Function 
                    public function __construct(float $lenght ,float $width)
                    {
                        // Make Initalizition  Lentgh & Width 
                            $this->lenght = $lenght; 
                            $this->width  = $width;
                    }
                    //Hint This fatel Error In PHP
                    // public function __construct()
                    // {
                        
                    // }
                        //Return Function  
                            //Function Get Lenght
                            public function getLength():float {
                                return $this->lenght;
                            }
                
                            //function Set  Lenght  Update 
                            public function setLenght (float $lenght) {
                                $this->lenght = $lenght;
                            }   
                
                            public function getWidth():float {
                                return $this->width;
                            }
                
                            //function Set  Width   Update 
                            public function setWidth (float $width) {
                                $this->$width = $width;
                            }
                                //Function Get Area 
                            public function getArea():float{
                                return $this->lenght * $this->width;
                            }
                
                            //function GetPerimeter 
                            public function getPerimeter():float {
                                return ($this->lenght + $this->width) * 2;
                            }
                                //Function Display 
                                public function display():void {
                                    echo "Rectangle Area = " .$this->getArea() . "<br>" . "rectangle perimeter" . $this->getPerimeter();
                                }
                
                }
                //call The Class And Take An new Object
                //   parameter $lenght , $width  
                $rect = new Rectangle(10 , 20);
                $rect->setLenght(40);
                $rect->display();