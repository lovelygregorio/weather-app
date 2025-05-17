----------------------------------
ReadMe

SETU Web Develoment 1 Assignment 2

Author : LovelyGregorio
Student: W20114829
Github: https://github.com/lovelygregorio/weather-app.git
___________________________________


🌦️ Whether Weather - a city-based weather forecast web app built using HTML, CSS (Bulma), avaScript, and Eleventy (11ty). 
Created by Lovely Gregorio for Web Development Assignment 2, it showcases real-time-looking weather info using structured mock data, dynamic routing, and user-friendly interactivity.


Live Preview:

	•	Deployed locally using Eleventy static site generator. 
	•	Access with: `http://localhost:8080` after running the dev server.
	•	Online Deployment: Now live on Netlify https://lovelygwebapp.netlify.app/ 

Features

	•	Multi-city forecast Amsterdam, Berlin, Paris, Cork, Copenhagen, New York, San Francisco, Waterford, Tromso
	•	Hourly & Daily Forecasts
	•	Responsive Bulma layout with background images and frosted-glass weather cards
	•	User preferences saved using `localStorage`
	•	Dynamic URL routing based on city name
	•	Emoji icons for intuitive weather display
	•	Match weather codes to appropriate background images


Page Overview

1. index.html - Home Page
	
The landing page where users start by choosing a city

	•	Navbar with links to all pages - page directed to a static(routing) page 
	•	Hero section with logo and project tagline
	•	Dropdown selector to choose a city
	•	Form redirects to a static city file

2. dashboard.html - Weather Dashboard
	
Show weather summaries for all supported cities using responsive-styled cards.

	•	Each card shows the temperature, wind, and weather icon
	•	Uses data sourced from `weather_data.js`
	•	Responsive layout with hover effects
	•	Weather icons are linked to 'city.html'loaded using URL query parameters



3. settings.html - Preferences/ Favourites Page
	
Allow users to customise which weather info to display 

	•	Choose preference in this page highlights their favourites in to the Dashboard
	•	Checkboxes to toggle sunrise, sunset, and wind speed
	•	Preferences are stored in 'localStorage' for a persistent experience
	•	A reset button is available to clear all saved preferences
	•	Selected preferences are reflected on the Dashboard via visual highlights

4. city.html - City Forecast Focus

Display a detailed forecast for one selected city

	•	Loaded using URL query string (eg. 'city.html?city=paris')
	•	Hourly forecast in a table format and a 7-day forecast
	•	Daily overview with sunrise/sunset and max/min temps
	•	Weather condition codes are mapped to emojis for a user-friendly experience
	• 	Match weather codes to appropriate background images


Technology Used:

	•	HTML
	•	CSS (with Bulma framework)
	•	JavaScript
	•	Nunjucks templating
	•	Eleventy static site generator
	•	Netlify (for deployment)


Notes:

	•	This Project uses mock JSON-style data in 'weather_data.js'
	•	Not connected to any external weather API
	•	Designed for assignment demonstration purposes

MAY2025

_____________________________________________________________























