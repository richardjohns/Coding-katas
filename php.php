// PHP code

// generates coin flips until 3 heads are reached

<!DOCTYPE html>
<html>
    <head>
		<title>A loop of your own</title>
        <link type='text/css' rel='stylesheet' href='style.css'/>
	</head>
	<body>
    <?php
	//Add while loop below
	$flipCount = 0;
	$headCount = 0;
	while($headCount < 3) {
	    $headCount = $headCount + rand(0,1);
	    $flipCount ++;
	    echo "This is flipCount: " . $flipCount;
	    echo "This is headCount: " . $headCount;

	}
    
    ?>
    </body>
</html>


<html>
    <p>
    <?php
    // Use rand() to print a random number to the screen
    print rand();

    ?>
    </p>
    <p>
    <?php
    // Use your knowledge of strlen(), substr(), and rand() to
    // print a random character from your name to the screen.
    $name = "Richard";
    $nameLen = strlen($name);
    $nameRandPos = rand(0, $nameLen);
    echo "This is $nameRandPos";
    $randLetter = substr($name, $nameRandPos, 1);
    echo "This is matching letter: " . $randLetter;
    
    ?>
    </p>
</html>

<html>
    <p>
	<?php
	// Create an array and push on the names
    // of your closest family and friends
    $fambam = array();
    array_push($fambam, "Jae", "Kelly", "Mum", "Greg", "David");
    
	// Sort the list
	sort($fambam);
	print_r ($fambam);
	$arrLen = count($fambam);

	// Randomly select a winner!
	$randWinner = rand(0, $arrLen);
	$winner = $fambam[$randWinner];

	// Print the winner's name in ALL CAPS
	echo strtoupper($winner) . " IS A WINNER!";

	?>
	</p>
</html>


<!DOCTYPE html>
<html>
	<head>
	  <title>Reconstructing the Person Class</title>
      <link type='text/css' rel='stylesheet' href='style.css'/>
	</head>
	<body>
      <p>
        <!-- Your code here -->
        <?php 
        
        class Person {
            public $isAlive = true;
            public $firstname;
            public $lastname;
            public $age;
        
            public function __construct($firstname, $lastname, $age) {
                $this->firstname = $firstname;
                $this->lastname = $lastname;
                $this->age = $age;
            }
            
            public function greet() {
            return "Hello, my name is " . $this->firstname . " " . $this->lastname . ". Nice to meet you! :-)";
            }
        }
        
        $teacher = new Person("boring", "12345", 12345);
        $student = new Person("notboring", "54321", 54321);
        
        echo $teacher->greet();
        echo $student->greet();
        
        ?>
      </p>
    </body>
</html>


<html>
  <head>
    <title>The Shape of Things to Come</title>
  </head>
  <body>
    <p>
      <?php
        class Shape {
          public $hasSides = true;
        }
        
        class Square extends Shape {
        
        }
        
        $square = new Square();
        // Add your code below!
        if (property_exists($square, "hasSides")) {
          echo "I have sides!";
        }
      ?>
    </p>
  </body>
</html>

<html>
  <head>
    <title>Override!</title>
  </head>
  <body>
    <p>
      <?php
        class Vehicle {
          public function honk() {
            return "HONK HONK!";
          }
        }
        // Add your code below!
        class Bicycle extends Vehicle {
            public function honk() {
                return "Beep beep!";
            }
        }
        
        $bicycle = new Bicycle();
        echo $bicycle->honk();
        
      ?>
    </p>
  </body>
</html>

<html>
  <head>
    <title>Scope it Out!</title>
  </head>
  <body>
    <p>
      <?php
      class Person {
          
      }
      class Ninja extends Person {
        // Add your code here...
        const alive = true;
        const stealth = "MAXIMUM";
      }
      // ...and here!
      if(Ninja::alive) {
        echo "Not dead yet";   
      }
      
      echo Ninja::stealth
      
      ?>
    </p>
  </body>
</html>

<html>
  <head>
    <title></title>
  </head>
  <body>
    <p>
      <?php
        class King {
          // Modify the code on line 10...
          public static function proclaim() {
            echo "A kingly proclamation!";
          }
        }
        // ...and call the method below!
        
        King::proclaim();
      ?>
    </p>
  </body>
</html>

<html>
  <head>
    <title></title>
  </head>
  <body>
    <p>
      <?php
      class Person {
          public static function say() {
              echo "Here are my thoughts!";
          }
      }
      
      class Blogger extends Person {
          const cats = 50;
          
      }
      
      Blogger::say();
      echo Blogger::cats;
      
      ?>
    </p>
  </body>
</html>

<html>
  <head>
    <title>Associate Arrays</title>
  </head>
  <body>
    <p>
      <?php
        // This is an array using integers as the indices...
        $myArray = array(2012, 'blue', 5);

        // ...and this is an associative array:
        $myAssocArray = array('year' => 2012,
                        'colour' => 'blue',
                        'doors' => 5);
            
        // This code will output "blue"...
        echo $myArray[1];
        echo '<br />';
            
        // ... and this will also output "blue"!
        echo $myAssocArray['colour'];
      ?>
    </p>
  </body>
</html>

<html>
  <head>
    <title>Iteration Nation</title>
  </head>
  <body>
    <p>
      <?php    
        $food = array('pizza', 'salad', 'burger');
        $salad = array('lettuce' => 'with',
                   'tomato' => 'without',
                   'onions' => 'with');
    
      // Looping through an array using "for".
      // First, let's get the length of the array!
      $length = count($food);
    
      // Remember, arrays in PHP are zero-based:
      for ($i = 0; $i < $length; $i++) {
        echo $food[$i] . '<br />';
      }
    
      echo '<br /><br />I want my salad:<br />';
    
      // Loop through an associative array using "foreach":
      foreach ($salad as $ingredient=>$include) {
        echo $include . ' ' . $ingredient . '<br />';
      }
    
      echo '<br /><br />';
    
      // Create your own array here and loop
      // through it using foreach!
      $dogs = array('Bob' => 'Schnauser',
                'Ed' => 'Rottie',
                'Jo' => 'Lab');
                
      foreach ($dogs as $name=>$breed) {
          echo 'Yo! Ma name is ' . $name . ' and I\'m a ' . $breed . '<br />';
      }
      
         
      ?>
    </p>
  </body>
</html>

<html>
  <head>
    <title>Blackjack!</title>
  </head>
  <body>
    <p>
      <?php
        $deck = array(array('2 of Diamonds', 2),
                      array('5 of Diamonds', 5),
                      array('7 of Diamonds', 7),
                      array('8 of Diamonds', 8);
        
      // Imagine the first chosen card was the 7 of Diamonds.
      // This is how we would show the user what they have:
      echo 'You have the ' . $deck[2][0] . '!';
      ?>
    </p>
  </body>
</html>