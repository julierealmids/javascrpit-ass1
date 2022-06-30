import os


list_foods = []                    #Variable List of foods, names + prices.
list_drinks = []                   #Variable List of drinks, names + prices.
list_services = []                 #Variable List of other services, names + prices.
list_item_price = [0] * 100        #Variable List of item prices. Index: 0-39 for foods, index: 40-79 for drinks,
                                   #Index: 80-99 for other services.
var_discount_1 = 200                      #First discount starts.
var_discount_2 = 1000                     #Second discount starts.
var_discount_3 = 5000                     #Third discount starts.
var_discount_1_rate = 0.05                #First discount rate.
var_discount_2_rate = 0.10                #Second discount rate.
var_discount_3_rate = 0.15                #Third discount rate.<div class="open_grepper_editor" title="Edit & Save To Grepper"></div>

navigator_symbol = "/" # This will make the program runnable on any unix based enviroument because it has differnet file system
if os.name == "nt":
    navigator_symbol = "\\" # This will make the program runnable on Windows<div class="open_grepper_editor" title="Edit & Save To Grepper"></div>
    
def def_default():
        global list_drinks, list_foods, list_services, list_item_order, list_item_price     
        list_item_order = [0] * 100                    #Create a list, length 100. Max index number is 99.
def_default()                                      #Index: 0-39 for foods, index: 40-79 for drinks,
                                                   #Index: 80-99 for other services. Global variables.<div class="open_grepper_editor" title="Edit & Save To Grepper"></div>

