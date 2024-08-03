<?php 
echo "<h1>Sl_E</h1>";
//Varaibles 

    $user    =  "Sdeek";   //String 
    $age     =    25;      //int
    $address =   "Cairo";  
    
    // echo $user;

    //Concatenation 
    echo "Hello" .$user . "<br>" . "age -" .$age ."<br>" ."address- " . $address ."<br>";

    //constant 
    define('taxRatio' , 1.4);
    echo taxRatio;
    echo "<br>";

    /**
     *  Data Types 
     *  string 
     *  bool  (true , false) 
     *  number (integer) (Float)
     *  arrays 
     *  object 
     *  Null
     */

        $x   = "S1_E"; //String
        var_dump($x);
        echo "<br>";
        $y = true; //bool
        var_dump($y);
        echo "<br>";
        $z = 20;   //Int
        var_dump($z);
        echo "<br>";
        $a = 20.5; //Float
        var_dump($a);
        echo "<br>";
        echo $a;
        $number = array(1 , 2 , 3);
        var_dump($number);
        echo "<br>";  
        $obj = new stdClass();
        $obj->name = "Sdeek";
        $obj-> age = 25;
        var_dump($obj);

        /**
         * Oprators 
         * Arthemitic Oprators ( + , - , / , * , %)
         * Assingnent Oprators (= , += , -= , *= , /=)
         * locgical Oprators   (and  , or , not )
         * comparison          (< , > , <= , >= , == , === , != , !==)
         *  ++ increment                            -- Decrement
         */
        echo"<br>";
        $y = 1; 
        echo $y++;
        echo $y;
        echo"<br>";
        echo ++$y;
        echo $y;
        echo"<br>";
        $z = 50; 
        echo $z--;
        echo"<br>";
        echo $z;
        echo"<br>";
        echo --$z;
        /***
         * Condition 
         * if ..... else
         *  switch .... case 
         *  ternary Operator
         */

            echo"<br>";
            $age = 19;
            if($age >= 20){
                echo "Lest Singup And Have Fun";
            }else{
                echo "sorry you Are Underage";
            }
            echo "<br>===================<br>";
            /** num1 = 40 
             *  num2 = 60
             */

                $num1 = 21;
                $num2 = 20;
                if($num1 > $num2){
                    echo "num1 is greater Than Num 2";
                }elseif($num1 < $num2){
                    echo "num1 is less Than Num 2";
                }else{
                    echo "num1 = num 2";
                }

                // Ternary Oprator 
                $canSingupMessage = 
                $age >= 18 ? "Lest Singup And Have Fun" : "Sorry You Are  underage"; 
                echo $canSingupMessage;


                echo "<br>===========Switch ..... case ========<br>";

                $num3 = 200; 
                $num4 = 400; 
                $op   = '*';

                switch($op){
                    case '+' : {
                        $result = $num3 + $num4 ; 
                        echo "The Result Of The Sum  Is  $num3 + $num4 = $result <br>";
                        break;
                    }
                    case '-' : {
                        $result = $num3 - $num4 ;
                        echo "The Result Of The Sub  Is  $num3 - $num4 = $result <br>";
                        break;
                    }
                    case '*' :{
                        $result = $num3 * $num4 ;
                        echo "The Result Of The mul  Is  $num3 * $num4 = $result <br>";
                        break;
                    }
                    case '/' :{
                        $result = $num3 / $num4 ;
                        echo "The Result Of The div  Is  $num3 / $num4 = $result <br>";
                        break;
                    }
                    default :echo "Invalid  Oprator";
                }
                /***
                 * for loop  
                 * while  
                 * do.... while 
                 * for of  
                 * for  in  
                 * for each
                 */
                echo "<br>===========For loop ========<br>";

                for($i = 0; $i <=10; $i++){
                    echo "The Number Is $i <br>";
                }
                echo "The End Result = $i";
                /***
                 *  i = 0  i= 1
                 *  i=1   i=2
                 *  i=2  i=3 
                 * i=3   i=4
                 * i=4  i=5 
                 * i=5  i=6 
                 * i=6  i=7 
                 * i=7  i=8
                 * i=8  i=9
                 * i=9  i=10
                 * i=10  i=11
                 * i=11
                 */
                echo "<br>===========While  Loop   ========<br>";
                    $x = 1; 
                    while($x <= 10){
                        echo "The Number Is $x <br>";
                        $x++;
                    }
                    echo $x;

                    echo "<br>===========Do.... While  Loop   ========<br>";
                    $y = 1;
                    do{
                        echo "The Result Do While Lopp = $y <br>";
                        $y++;
                    }while($y <= 5);
                    echo $y;

                    echo "<br>=========== Array  ========<br>";
                    //Indexed Array 
                        $employee = array("Waad" ,"Sdeek" , "Awad");
                        echo count($employee);
                        echo "<br>";
                        var_dump($employee);

                        echo "<br>";
                        echo $employee[0];
                        echo "<br>";

                        for($i = 0; $i < count($employee); $i++){
                            echo $employee[$i] . "<br>";
                        }
                    
                        //For Each 
                        foreach($employee as $emp){
                            echo $emp . "<br>";
                        }
                        /***
                     * 
                     * 
                     * 
                     * 
                     */