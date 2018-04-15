#Multiple test case files

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
    
    
    i = 0
    
    while i < letters.length
      puts "here"
      
      if letters[i] == " "
        result.push(" ")
      else
        index = list.find_index(letters[i])
        
        shifted_position = (index + shift) % 26  
        
        result.push( list[shifted_position] )
      end
      i += 1
      #puts result
    end
    result.join
    
  end
  
  caesar_cipher("aaa", 11) #("lll")
  
  #caesar_cipher("zzz", 1) #("aaa")
  
  #caesar_cipher("catz hatz", 2) #("ecvb jcvb")


# Write a function that counts the number of primes provided number has.
# Ex: 5 -> 4 [1,2,3,5]

def isprime(number)
  
    idx = number - 1
    while idx > 1
      if number % idx == 0
        return false
      end
      
      idx = idx - 1
    end
    
    return true
  end
  
  def prime_count(number2)
    
    count = 0
    
    idx = number2
    
    while idx > 1
      if isprime(idx) == true
        count = count + 1
      end
      
      idx = idx - 1
    end
    
    return count
      
  end    
  
  puts(prime_count(9) == 4)
  puts(prime_count(1) == 0)
  puts(prime_count(20) == 8)


  #Given a string, check if it's symetric

# elle == true
# henry == false


def symmetrical(string)
  
    idx = 0
    while idx < string.length
      opp_idx = string.length - 1 - idx
      
      if string[idx] != string[opp_idx]
        return false
      end
      
      idx = idx + 1
    end
    
    return true
    
  end
  
  puts(symmetrical("elle") == true)
  
  puts(symmetrical("abcdedcba") == true)
  
  puts(symmetrical("henry") == false)

  #non technical questions