Next steps:
# user is able to add food from template to their current log (log_food#create)
 - user clicking add, will show input box to type in quantity and button to confirm add to log
 - upon confirmed add, food table to return to before with single add button
 - use fetch to post new log_food instance (log_id, food_id, quantity)
 - refresh renderLoggedFoods() and updateNutritionSums() accordingly

# user will be able to delete a food from current log (log_food#destroy)
 - display a delete button next to LoggedFood item
 - when clicked, use fetch to post delete request to remove log item
 - refresh renderLoggedFoods() and updateNutritionSums() accordingly

# user should be able to create new or show new log by selecting another date
 - display New Log/Show Log Button beneath .column1
 - if clicked, replace .column1 innerHTML to show datepicker accordingly

stretch:
- if user has an existing log for currentDate, then display upon login
- user will be able to search through foods
- user will be able to scroll through foods when list gets long, fixed height in css
