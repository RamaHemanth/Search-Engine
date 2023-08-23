#dsasearchengine
Search Engine needs a database and there is no readily available database for the same, we need to build it on our own. So we can scrape the questions from the internet. I scrapped questions from codechef. One of the naming conventions which I have followed is:

problem_urls.txt problem_titles.txt problems problem_text_1.txt problem_text_2.txt problem_text_3.txt problem_text_4.txt ….. And so on

code to scrap web that i used is present in this link "https://github.com/RamaHemanth/Webscrapping-code-for-dsa-search-engine". problem_urls.txt ->Text file containing the URLs of all the scraped problems separated by ‘\n’ problem_titles.txt -> Text file containing the Titles of all the scraped problems separated by ‘\n’ keywords.txt -> Contains all the unique keywords (across all the documents) in a sorted way. IDF.txt -> Contains the IDF value of each keyword (in the same order as in keywords.txt) TFIDF.txt-> Contains the TFIDF matrix values. Now since each document will have a vector size in 10s of thousand (As total number of distinct keywords can be quite high), so instead of storing all the TFIDF values we just store the non zero ones with their i and j value (so that when we read this file we can place the value of this TFIDF on the respective i and j) Magnitude.txt -> Contains the magnitude of TDIDF vector of each document. Since while calculating similarity we will need to divide by the magnitude of each vector hence we can precompute it and store it:[Each line represents the value of magnitude of ith document] You need to create a express server with a get route to “/”. Now on this route you need to create a form in which user can enter the query and once user hits submit your website should fire a request to “/search” with the query string attached as a query parameter. So the actual request will be:

GET /search?query=get the sum of all the elements of an array[Just an example]

Now your express app should handle this route and return the top 5 similar documents to the frontend as response to display.

Then i deployed my app using Heroku And link to deployed app is https://dsa-searchengine.herokuapp.com/
