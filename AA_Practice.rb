## AA Practice PDF: https://www.appacademy.io/assets/App_Academy_Prepwork_Studyguide.pdf

# Caesar Cipher
# Ping Pong 
# Given an array, print out the 1st-3rd-5th... elements
# Extract / pop out the element, until the array is empty

# Back in the good old days, you used to be able to write a darn near
# uncrackable code by simply taking each letter of a message and incrementing it
# by a fixed number, so "abc" by 2 would look like "cde", wrapping around back
# to "a" when you pass "z".  Write a function, `caesar_cipher(str, shift)` which
# will take a message and an increment amount and outputs the encoded message.
# Assume lowercase and no punctuation. Preserve spaces.
#
# To get an array of letters "a" to "z", you may use `("a".."z").to_a`. To find
# the position of a letter in the array, you may use `Array#find_index`.

def caesar_cipher(str, shift)
  list = ("a".."z").to_a
  letters = str.split("")
  result = []

  letters.each do |x|
    if x == " "
      result << " "
    else
      result << list[ (list.find_index(x) + shift) % 26]
    end
  end

  result.join

end

class Array
  # Write a method, `Array#two_sum`, that finds all pairs of positions where the
  # elements at those positions sum to zero.

  # NB: ordering matters. I want each of the pairs to be sorted smaller index
  # before bigger index. I want the array of pairs to be sorted
  # "dictionary-wise":
  #   [0, 2] before [1, 2] (smaller first elements come first)
  #   [0, 1] before [0, 2] (then smaller second elements come first)

  def two_sum
    temp = []

    i = 0
    while i < self.length
      j = i + 1
      while j < self.length
        temp << [i,j] if self[i] + self[j] == 0
        j += 1
      end
      i += 1
    end
    temp
  end
end

# Write a function, `no_repeats(year_start, year_end)`, which takes a
# range of years and outputs those years which do not have any
# repeated digits.
#
# You should probably write a helper function, `no_repeat?(year)` which
# returns true/false if a single year doesn't have a repeat.
#
# Difficulty: 1/5

def no_repeats(year_start, year_end)
  no_repeats = []
  (year_start..year_end).each do |yr|
    no_repeats << yr if no_repeat?(yr)
  end

  no_repeats
end

def no_repeat?(year)
  chars_seen = []
  year.to_s.each_char do |char|
    return false if chars_seen.include?(char)
    chars_seen << char
  end

  return true
end

puts("\nTests for #no_repeats")
puts("===============================================")
    puts "no_repeats(1234, 1234) == [1234]: "  + (no_repeats(1234, 1234) == [1234]).to_s
    puts "no_repeats(1123, 1123) == []: "  + (no_repeats(1123, 1123) == []).to_s
    puts "no_repeats(1980, 1987) == [1980,1982,1983,1984,1985,1986,1987]: " + (no_repeats(1980, 1987) == [1980,1982,1983,1984,1985,1986,1987]).to_s
puts("===============================================")