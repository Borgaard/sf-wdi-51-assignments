class Member: 
  # fill in info here full_name
  # self only exist inside of class!!
  def __init__(self, full_name=''):
    self.full_name = full_name
  
  # method that introduce themselves
  def introduce(self):
    print(f'Hi, my name is {self.full_name}!')

# instantiate class heggy using Member class
# heggy = Member('heggy')
# call method introduce()
# heggy.introduce() # => Hi, my name is heggy!

