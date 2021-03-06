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

# RUBY ITERATING OVER ARRAYS

s = [["ham", "swiss"], ["turkey", "cheddar"], ["roast beef", "gruyere"]]

s.each { |sub_array| sub_array.each { |element| puts element }}


lunch_order = {
  "Ryan" => "wonton soup",
  "Eric" => "hamburger",
  "Jimmy" => "sandwich",
  "Sasha" => "salad",
  "Cole" => "taco"
}

lunch_order.each { |ord, fd| 
  puts "#{fd}"
  }

# CREATE WORD HISTOGRAM

puts "Enter input"
text = gets.chomp

words = text.split

frequencies = Hash.new(0)

words.each { |word| frequencies["#{word}"] += 1 }

frequencies = frequencies.sort_by do | word, count | 
  count
end
frequencies.reverse!

frequencies.each { |freq, count| 
  puts freq + " " + count.to_s
  }

# MORE STUFF

books = ["Charlie and the Chocolate Factory", "War and Peace", "Utopia", "A Brief History of Time", "A Wrinkle in Time"]

# To sort our books in ascending order, in-place
books.sort! { |firstBook, secondBook| firstBook <=> secondBook }

# Sort your books in descending order, in-place below

print books.sort! { |firstBook, secondBook| secondBook <=> firstBook }

# SORT ARRAY ASCENDING / DESCENDING

def alphabetize(arr, rev = false)
  arr.sort!
  if rev == true
    arr.reverse!
  else
  	arr
  end
end

numbers = [3, 5, 1, 6]

puts alphabetize(numbers)

# ITERATING TO GET KEYS FROM Object

matz = { "First name" => "Yukihiro",
  "Last name" => "Matsumoto",
  "Age" => 47,
  "Nationality" => "Japanese",
  "Nickname" => "Matz"
}

matz.each do |key, value| 
  puts matz[key]
end

# convert strings to symbols

strings = ["HTML", "CSS", "JavaScript", "Python", "Ruby"]
symbols = []

strings.each do |s| 
 symbols.push(s.intern)
end 
print symbols

#filtering

grades = { alice: 100,
  bob: 92,
  chris: 95,
  dave: 97
}

grades.select { |name, grade| grade <  97 }
# ==> { :bob => 92, :chris => 95 }

grades.select { |k, v| k == :alice }
# ==> { :alice => 100 }

movie_ratings = {
  memento: 3,
  primer: 3.5,
  the_matrix: 3,
  truman_show: 4,
  red_dawn: 1.5,
  skyfall: 4,
  alex_cross: 2,
  uhf: 1,
  lion_king: 3.5
}
# Add your code below!

movie_ratings.each_key { |title| puts title }

# MOVIE CRUD EXAMPLE

movies = {
  StarWars: 4.8, 
  Divergent: 4.7
  }

puts "What would you like to do? "

choice = gets.chomp

case choice
when "add"
  puts "What movie would you like to add? "
  title = gets.chomp
  if movies[title.to_sym].nil? 
    puts "What rating does the movie have? "
    rating = gets.chomp
    movies[title.to_sym] = rating.to_i
  else
    puts "That movie already exists! Its rating is #{movies[title.to_sym]}."
  end
when "update"
  puts "What movie would you like to update? "
  title = gets.chomp
  if movies[title.to_sym].nil? 
    puts "That movie does not exist."
  else
    puts "What is the new rating? "
    rating = gets.chomp
    movies[title.to_sym] = rating.to_i
  end
when "display"
  movies.each do |title, rating| 
  puts "#{title}: #{rating}"
  end
when "delete"
   puts "What movie would you like to delete? "
   title = gets.chomp
   if movies[title.to_sym].nil?
     puts "movie not found"
   else
     movies.delete(title)
     puts "movie deleted!"
     
   end
else
  puts "Error!"
end

# One line case statements

puts "Hello there!"
greeting = gets.chomp

# Add your case statement below!

case greeting
  when "English" then puts "Hello!"
  when "French" then puts "Bonjour!"
  when "German" then puts "Guten Tag!"
  when "Finnish" then puts "Haloo!"
  else puts "I don't know that language!"
end
