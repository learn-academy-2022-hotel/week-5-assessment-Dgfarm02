# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def letter_finder(arr, str)
    arr.select{|word| word.include?(str)}
end
p letter_finder(beverages_array, letter_o)
# output: ['coffee', 'soda water']
p letter_finder(beverages_array, letter_t)
# output: ['tea', 'water', 'soda water']

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

def combine_array (hash)
    hash.values.flatten.sort

end

p combine_array us_states
# output: ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Rhode Island", "Washington"]

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

class Bike
    def initialize (model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def bike_info
        "The #{@model} has #{@wheels} wheels and is going #{@current_speed} mph."
    end
    def pedal_faster(value)
        @current_speed = @current_speed + value
    end
    def brake(value)
        if(@current_speed - value).negative?
            @current_speed = 0
        else
            @current_speed = @current_speed - value
        end
    end
end

my_bike = Bike.new('Trek')
p my_bike.bike_info
# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
# output: "The Rebel has 2 wheels and is going 0 mph."

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

p my_bike.pedal_faster(10)
# Expected output example: my_bike.pedal_faster(10) => 10
# output: 10
p my_bike.pedal_faster(18)
# Expected output example: my_bike.pedal_faster(18) => 28
# output: 28
p my_bike.brake(5)
# Expected output example: my_bike.brake(5) => 23
# output: 23
p my_bike.brake(25)
# Expected output example: my_bike.brake(25) => 0
# output: 0