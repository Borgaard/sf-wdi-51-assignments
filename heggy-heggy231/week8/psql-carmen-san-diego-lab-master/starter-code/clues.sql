-- Seeding my postgres: 
-- 1) > cd GA/wdi/sf-wdi-51-assignments/heggy-heggy231/week8/psql-carmen-san-diego-lab-master
-- 2) create new database using postgres app I d/l today
-- 3) click on postgres database icon
-- 4) in sided of terminal
--   > psql postgres // inside of psql shell
--   > \l // see all db 
--   > ctrl + d // exit out psql postgres instance

-- 5) Create db:
--   > CREATE DATABASE world;
--   > psql postgres // inside of terminal
--   > \l // list all db 
--   > ctrl + D // to get out of psql postgres instance.
--   // => You are now connected to database "world" as user "Heggy".
--   // cd into my project root dir
--   > psql -U Heggy -d world -a -f ./starter-code/world.sql
-- 6) **** connect to your db ******
--   back inside of Postgres terminal
--   > \c world // connect to db called world

-- ****************************

-- Clue #1: We recently got word that someone fitting Carmen Sandiego's description has been
-- traveling through Southern Europe. She's most likely traveling someplace where she won't be noticed,
-- so find the least populated country in Southern Europe, and we'll start looking for her there.
-- **** go to country table since we are looking rfor, region: Southern Europe

-- SELECT name, population
-- FROM country;

-- https://www.w3schools.com/sql/sql_where.asp
-- SELECT column1, column2, ...
-- FROM table_name
-- WHERE condition;
-- https://www.w3resource.com/sql/aggregate-functions/min-with-group-by.php
-- SELECT country.name, MIN(population)
-- FROM country
-- WHERE region = 'Southern Europe'

-- SELECT gets the column

-- SELECT name, code, population
-- FROM country
-- WHERE region = 'Southern Europe'
-- ORDER BY population
-- LIMIT 1;

-- This throws an error b/c aggregation functin Min which only returns one result when cuntry.name is query together which only one result is allowed, since we may get same population 3000 3000 france italy which one to pick?  ambigous.. this doesn't work so we try the sub-querry: popuation = ();
-- SELECT country.name, MIN(population)
-- FROM country
-- WHERE region = 'Southern Europe';


SELECT country.name
FROM country
WHERE population = (SELECT MIN(population)
                    FROM country
                    WHERE region = 'Southern Europe');

-- => name of country: Holy See (Vatican City State)	code: VAT	 population:1000


-- Clue #2: Now that we're here, we have insight that Carmen was seen attending language classes in
-- this country's officially recognized language. Check our databases and find out what language is
-- spoken in this country, so we can call in a translator to work with you.

SELECT language
FROM countrylanguage
WHERE countrycode = 'VAT';

-- => Italian
-- country code: VAT	Italian	isOfficial TRUE	0



-- Clue #3: We have new news on the classes Carmen attended – our gumshoes tell us she's moved on
-- to a different country, a country where people speak only the language she was learning. (italian) Find out which
--  nearby country speaks nothing but that language (italian).
-- note: countrylanguage has percentage column if value == 100 
-- step 1) get only the nearby country get only the region: southern Europe ***** answer: SMR ******

-- SELECT name, code
-- FROM country
-- WHERE region = 'Southern Europe';








-- how to select language Albania speak??
-- code: ALB 
-- SELECT language
-- FROM countrylanguage
-- WHERE countrycode = 'ALB';

-- Albaniana
-- Greek
-- Macedonian

-- count of country that show up:
-- SELECT COUNT(language)
-- FROM countrylanguage
-- WHERE countrycode = 'ALB';

-- => 3!!!


-- 2) get all nearby country that speak only 1 language
-- SELECT name, code
-- FROM country
-- WHERE region = 'Southern Europe'
-- AND 1 = (SELECT COUNT(language)
--          FROM countrylanguage
--          WHERE countrycode = code);

-- RESULT ===>>>
-- Bosnia and Herzegovina	BIH
-- Portugal	PRT
-- San Marino	SMR
-- Holy See (Vatican City State)	VAT


-- 3) from the result I only want country that speaks Italian
-- SELECT name, code
-- FROM country
-- WHERE region = 'Southern Europe'
-- AND 1 = (SELECT COUNT(language)
--          FROM countrylanguage
--          WHERE countrycode = code)
  -- here we want to use in since it's not aggregate funtion.  So `in`
    -- allows you to give more than one result (as long as italian is one of the result it will be true)
-- AND 'Italian' in (SELECT language
--                 FROM countrylanguage
--                 WHERE countrycode = code);


SELECT name, code
FROM country
WHERE region = 'Southern Europe'
AND 1 = (SELECT COUNT(language)
         FROM countrylanguage
         WHERE countrycode = code)
AND 'Italian' in (SELECT language
                FROM countrylanguage
                WHERE countrycode = code);

-- howo do you select language that filtered country VAT speaks?
-- SELECT language
-- FROM countrylanguage
-- WHERE countrycode = 'VAT';

-- Italian

-- SELECT language
-- FROM countrylanguage
-- WHERE countrycode = 'BIH';
-- Serbo-Croatian <=== filter this guy out!!



-- WHERE countrycode = code); code is from the result of first query to only get the nearby country.  now we move to countrylanguage table.
-- I want you to get the code that I filtered just for Southern Europe and count how many language each of the filtered country speak.
-- but I want only 1 country language filtered country




-- SELECT countrycode
-- FROM countrylanguage
-- WHERE language = 'Italian' AND percentage = 100; 
-- -- => SMR

-- SELECT name
-- FROM country
-- WHERE code = 'SMR'; 

-- => San Marino

-- SELECT c.region, c.name, c.code
-- FROM countrylanguage cl, country c
-- WHERE language = 'Italian'
-- AND cl.countrycode = c.code
-- AND c.region = 'Southern Europe'
-- 1 = () <== this is subquery
-- AND 1 = (SELECT COUNT(language)
--          FROM countrylanguage
--          WHERE countrycode = c.code);

-- 
-- SELECT COUNT(language), countrycode, countrylanguage
--   FROM countrylanguage
--   GROUP BY countrycode
--   -- ORDER BY the first coulum of my result
--   ORDER BY 1; 

-- count how many records matched
-- SELECT COUNT(language), countrycode
-- FROM countrylanguage
-- GROUP BY countrycode
-- ORDER BY 1;


-- count how many records (rows)
-- SELECT COUNT(language)
-- FROM countrylanguage;

-- count how many unique lanugages now (GROUP BY filters) and which country show
-- SELECT COUNT(language), language
-- FROM countrylanguage
-- GROUP BY language


-- 1	[South]Mande
-- 1	Abhyasi
-- 1	Acholi
-- 1	Adja
-- 2	Afar
-- 2	Afrikaans
-- 3	Aimar�
-- 1	Ainu

-- when groupby something I need that something upthere
-- SELECT COUNT(language), countrycode
-- FROM countrylanguage
-- GROUP BY countrycode;


-- Southern Europe	San Marino	SMR
-- Southern Europe	Holy See (Vatican City State)	VAT



-- Clue #4: We're booking the first flight out – maybe we've actually got a chance to catch her this time.
 -- There are only two cities she could be flying to in the country. One is named the same as the country – that
 -- would be too obvious. We're following our gut on this one; find out what other city in that country she might
 --  be flying to. (earlier result I got outhern Europe	San Marino	SMR, what city that share SMR but different name than San Marino)

SELECT *
FROM city
WHERE countrycode = 'SMR'
AND name != 'San Marino';


-- Clue #5: Oh no, she pulled a switch – there are two cities with very similar names, but in totally different
-- parts of the globe! She's headed to South America as we speak; go find a city whose name is like the one we were
-- headed to, but doesn't end the same. Find out the city, and do another search for what country it's in. Hurry!



-- Clue #6: We're close! Our South American agent says she just got a taxi at the airport, and is headed towards
 -- the capital! Look up the country's capital, and get there pronto! Send us the name of where you're headed and we'll
 -- follow right behind you!



-- Clue #7: She knows we're on to her – her taxi dropped her off at the international airport, and she beat us to
 -- the boarding gates. We have one chance to catch her, we just have to know where she's heading and beat her to the
 -- landing dock.



-- Clue #8: Lucky for us, she's getting cocky. She left us a note, and I'm sure she thinks she's very clever, but
-- if we can crack it, we can finally put her where she belongs – behind bars.

-- Our play date of late has been unusually fun –
-- As an agent, I'll say, you've been a joy to outrun.
-- And while the food here is great, and the people – so nice!
-- I need a little more sunshine with my slice of life.
-- So I'm off to add one to the population I find
-- In a city of ninety-one thousand and now, eighty five.


-- We're counting on you, gumshoe. Find out where she's headed, send us the info, and we'll be sure to meet her at the gates with bells on.



-- She's in ______________________!
