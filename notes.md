Next steps:
# user will be able to delete a food from current log (log_food#destroy)
 - display a delete button next to LoggedFood item
 - when clicked, use fetch to post delete request to remove log item
 - refresh renderLoggedFoods() and updateNutritionSums() accordingly

# user can add a unique food and its nutrition facts to Foods table
 - foods#create

# user should be able to create new or show new log by selecting another date
 - display New Log/Show Log Button beneath .column1
 - if clicked, replace .column1 innerHTML to show datepicker accordingly

other & stretch:
- if user wants to update quantity of foods consumed in their current food log, they can edit quantity (food_log#update)
- if user has an existing log for currentDate, then display upon login
- user will be able to search through foods
- parse date to display in user-friendly format
- display nutritionSums percentage bars as progress bars
- allow user to customize views: background image
- users with new attribute admin will have update/destroy capabilities to edit foods in foods table (food#update, food#destroy)
