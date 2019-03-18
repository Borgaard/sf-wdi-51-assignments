SELECT * FROM countrylanguage 
WHERE language='Italian' 
AND isofficial='t' 
AND countrycode IN ('ITA', 'SMR', 'VAT', 'CHE');