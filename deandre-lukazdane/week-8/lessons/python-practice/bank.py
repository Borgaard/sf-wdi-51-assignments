
class bank_account():
    def __init__(self, account_type, balance = 0, overdraft_fees = 0 ):
        self.account_type = account_type
        self.balance = balance
        self.overdraft_fees = overdraft_fees

    def deposit(self):
        amount = float(input("Please enter deposit amount..."))
        if self.balance >= 0 and self.overdraft_fees <= 0:
            self.balance += amount
            print(f'${self.amount}  deposited into your account.')
        elif self.balance <= 0 and self.overdraft_fees == 0:
            self.balance -= (self.overdraft_fees - amount)
            print(f'${self.amount}  deposited into your account.')


    def withdraw(self):
                amount = float(input("Please enter withdrawl amount..."))
                if self.balance >= amount:
                    self.balance -= amount
                    print(f'${self.amount} withdrawn from your account!')
                elif self.balance <= amount:
                        self.balance -= amount
                        self.overdraft_fees += amount

    def current_Balence(self):
        if self.overdraft_fees == 0:
            print(f"Your current balance is:\n {self.account_type}: {self.balance}")
        elif self.overdraft_fees > 0:
            print(f'You currently owe {self.overdraft_fees}')

T_Sanders = bank_account("Checking", 500, 0)
T_Sanders.current_Balence()

J_Cozart = bank_account("Savings", 0, 36.50)
J_Cozart.current_Balence()

      #####################
     ######################
    #######################
   ########################
  #########################
 ##########################
###########################
##--Come Back to--########
##-this later too-#######
##-tired to find--######
##-out how to do--#####
##--the over_draft####
##---part, need---###
##-----SLEEP!-----##
###################