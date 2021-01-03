select id,name,CountryCode,district,population from City
where population > 100000 AND CountryCode = "USA"
order by population desc 
a
