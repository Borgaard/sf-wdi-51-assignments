-- Remember to get explanation on this
SELECT c.region, c.name, c.code
FROM countrylanguage cl, country c
WHERE language = 'Italian'
AND cl.countrycode = c.code
AND c.region = 'Southern Europe'
AND 1 = (SELECT COUNT(language)
         FROM countrylanguage
         WHERE countrycode = c.code);