# RUBY 
                      
print "What's your first name?"
first_name = gets.chomp
first_name.capitalize!

print "What's your last name?"
last_name = gets.chomp
last_name.capitalize!

print "What's your city?"
city = gets.chomp
city.capitalize!

print "What's your state?"
state = gets.chomp
state.upcase!

profile = "My name is #{first_name} #{last_name}, and my home is at #{city}, #{state}."
                      
# RUBY 2
print "Where is the best sub shop around here?"
user_input = gets.chomp
user_input.downcase!

if user_input.include? "s"
  user_input.gsub!(/s/, "th")
else
  print "There be no s"
end

puts "The best sub shop around here is #{user_input}"

# RUBY 3
i = 20
loop do
  i -= 1
  print "#{i}"
  break if i <= 0
end

# RUBY 4 
odds = [1,3,5,7,9]

odds.each { |num| 
  print num * 2
}

# RUBY 5
i = 1
while i <= 50 do
  print i
  i += 1
end

j = 1
until j == 51 do
  print j
  j += 1
end

for j in 1..50
  print j
end

r = "Ruby!"
m = 0

loop do
  m += 1
  print r
  break if m >= 30
end
  
30.times { print "Ruby!" }

# RUBY CONTROLFLOW

puts "Enter some text: "
text = gets.chomp

puts "Enter words to redact: "
redact = gets.chomp

words = text.split(" ")
words.each { |word| 
  if word == redact
    print "REDACTED "
  else
 		print word + " "
  end }

# JQUERY

<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
    $("button").removeClass("btn-default");
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true); //disables button
    $("#target4").html("<em>#target4</em>"); //swap text with same but emphasised.
    $("#target4").remove();
    $("#target2").appendTo("#right-well"); // to move element to another element by using ID tags.
    $("#target5").clone().appendTo("#left-well"); // clone then move.
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
    $(".target:nth-child(2)").addClass("animated bounce");
    $(".target:even").addClass("animated shake");
    $("body").addClass("animated hinge");
    
  });
</script>

