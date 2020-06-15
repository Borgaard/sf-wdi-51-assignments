select c.code, c.name, c.region
from countrylanguage cl, country c
where language = 'Italian'
and c.code = cl.countrycode
and c.region = 'Southern Europe'
AND 1 = (SELECT COUNT(language)
         FROM countrylanguage
         WHERE countrycode = c.code);