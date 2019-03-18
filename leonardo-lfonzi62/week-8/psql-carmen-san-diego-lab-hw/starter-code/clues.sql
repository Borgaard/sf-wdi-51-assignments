-- Clue #1: We recently got word that someone fitting Carmen Sandiego's description has been
-- traveling through Southern Europe. She's most likely traveling someplace where she won't be noticed,
-- so find the least populated country in Southern Europe, and we'll start looking for her there.
SELECT population, name  -- selecting the population and name columns inside of the country table where the region = Southern E.
FROM country              -- ORDER by ASC and limiting the results to 1
WHERE region='Southern Europe' 
ORDER BY population ASC limit 1;


-- Clue #2: Now that we're here, we have insight that Carmen was seen attending language classes in
-- this country's officially recognized language. Check our databases and find out what language is
-- spoken in this country, so we can call in a translator to work with you.

SELECT language  -- Selecting the lang column in the countrylanguage table where countrycode = VAT
FROM countrylanguage    -- and isofficial equals t
WHERE countrycode= 'VAT' AND isofficial='t';


-- Clue #3: We have new news on the classes Carmen attended – our gumshoes tell us she's moved on
-- to a different country, a country where people speak only the language she was learning. Find out which
--  nearby country speaks nothing but that language.

SELECT *    -- Selecting all colums in the countrylanguage where lang = Italian
FROM countrylanguage -- isofficial equals t and countrycode equals the 4 in the parma
WHERE language='Italian' 
AND isofficial='t' 
AND countrycode IN ('ITA', 'SMR', 'VAT', 'CHE');


-- Clue #4: We're booking the first flight out – maybe we've actually got a chance to catch her this time.
 -- There are only two cities she could be flying to in the country. One is named the same as the country – that
 -- would be too obvious. We're following our gut on this one; find out what other city in that country she might
 --  be flying to.

 SELECT *   -- selecting all columns in the city table where countrycode equals SMR
 FROM city 
 WHERE countrycode = 'SMR';



-- Clue #5: Oh no, she pulled a switch – there are two cities with very similar names, but in totally different
-- parts of the globe! She's headed to South America as we speak; go find a city whose name is like the one we were
-- headed to, but doesn't end the same. Find out the city, and do another search for what country it's in. Hurry!

SELECT * FROM city, country  -- selecting all columns from the CITY and COUNTRY tables 
WHERE city.countrycode = country.code -- where the country code column in the city table equals the code in the country code 
AND country.continent='South America' -- AND the continent column in the country table equals SA
AND city.name LIKE 'Serra%'     -- AND the name column in the CITY table is similar to 'Serra'


-- Clue #6: We're close! Our South American agent says she just got a taxi at the airport, and is headed towards
 -- the capital! Look up the country's capital, and get there pronto! Send us the name of where you're headed and we'll
 -- follow right behind you!
    SELECT capital  --selecting the capital column from the country table where the code column in the country table equals BRA
    FROM country
    WHERE code='BRA'


-- Clue #7: She knows we're on to her – her taxi dropped her off at the international airport, and she beat us to
 -- the boarding gates. We have one chance to catch her, we just have to know where she's heading and beat her to the
 -- landing dock.
    SELECT *        -- Selecting all columns in the CITY table where the id column equals 211
    FROM city
    WHERE id = 211; 


-- Clue #8: Lucky for us, she's getting cocky. She left us a note, and I'm sure she thinks she's very clever, but
-- if we can crack it, we can finally put her where she belongs – behind bars.

-- Our play date of late has been unusually fun –
-- As an agent, I'll say, you've been a joy to outrun.
-- And while the food here is great, and the people – so nice!
-- I need a little more sunshine with my slice of life.
-- So I'm off to add one to the population I find
-- In a city of ninety-one thousand and now, eighty five.


-- We're counting on you, gumshoe. Find out where she's headed, send us the info, and we'll be sure to meet her at the gates with bells on.
    SELECT *           -- selecting all columns in the CITY table where the population column equals 91084
    FROM city 
    WHERE population =91084


-- She's in ____Santa Monica California__________________!
