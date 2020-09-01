# Newtrition

Newtrition is single page application with a rails API backend and HTML/css/javascript frontend, and a PostGres database.
The purpose of this application is for users to be able to set their daily target carbohydrate, protein, and fat amounts (in grams) upon registration, and then log different foods consumed per day and see their nutrition totals update accordingly.

## Installation

This javascript frontend should be paired with its associated backend [js_nutrition_backend](https://github.com/beckyphan/js_nutrition_backend).
Clone both repositories on your local machine, ensuring they are in the same directory (not within one another).

```bash
git clone https://github.com/beckyphan/js_nutrition_backend.git
git clone https://github.com/beckyphan/js_nutrition_frontend.git
```

Ensure you are running PostGres and create the database, run migrations, and then run db:seed to utilize seed data for a Foods List (Note: there is currently no option to create a food through the application. If you wish to add foods, please update the seed data in js_nutrition_backend/db/seeds.rb)

Then run a rails server to allow cross-origin resource sharing via your localhost.

Open up the js_nutrition_frontend/index.html in a browser to begin using.

## Usage

Upon successful page load, a user will have the option to log in or register. If this is your first time accessing the application on your local machine, begin by registering as a new user. All fields are required, and your login information will be the email and password created upon registration. At this time, users are unable to change their target nutrition values, but suggested values are provided as placeholders.

Once logged in/registered, a user will select a date which will be the log associated with that date. The nutrition values for the day will be displayed, along with a table of foods available to add to your log. Adding foods to your log will update the nutrition values (percent daily consumption). You have the ability to delete log entries if added upon error, and re-add foods. You may also add the same foods again, assuming you have snacked or eaten more throughout the day. The log will keep track of each food you add, in the order of which you have added them.

To create or view another date, select another date. If you have not yet created a log for that day, you will have a fresh log to be able to complete. If you had created and added foods to a dated log prior, it will display the existing log.

Logging out will refresh the single page application, effectively clearing the data saved to the page (as opposed to the PostGres database). Logging in will allow you to access your data and logs saved.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Future features may include:
- Adding search bar to filter through Foods list
- Allow users to be able to update their nutrition targets (Need to determine how log data for existing logs change or update, or if they remain locked due to being created under the previous targets)
- Adding admin users to be able to create/add/update Foods list
- Updating design of nutrition sum bars to display as filled progress bars
- Allow user to choose the background image of their dashboard
- Consider use of [USDA.gov FoodData Central API](https://fdc.nal.usda.gov/api-guide.html)

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgments
This is a javascript portfolio project for the Flatiron School.
