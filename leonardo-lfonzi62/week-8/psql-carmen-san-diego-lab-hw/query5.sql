SELECT * FROM city, country 
WHERE city.countrycode = country.code 
AND country.continent='South America'
AND city.name LIKE 'Serra%'


