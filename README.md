# ExamPrep-4_RestAjaxJs

###Q: Elaborate on how JSON or XML supports communication between subsystems, even when the subsystems are implemented on different platforms

A: JSON (JavaScript Object Notation) is a lightweight format that is used for data interchanging. It is based on a subset of JavaScript language. An example of where this is used is web services responses. In the 'old' days, web services used XML as their primary data format for transmitting back data, but since JSON appeared it has been the preferred format because it is much more lightweight. 

With the rise of AJAX-powered sites, it's becoming more and more important for sites to be able to load data quickly and asynchronously, or in the background without delaying page rendering. Switching up the contents of a certain element within our layouts without requiring a page refresh adds a "wow" factor to our applications, not to mention the added convenience for our users. Because of the popularity and ease of social media, many sites rely on the content provided by sites such as Twitter, Flickr, and others.

With JSON you are sure to get the same format even the subsystems are implemented on different platforms.  


###Q: Explain the topics: AJAX and Same Origin Policy, and different ways to work around it

A: AJAX stands for Asynchronous JavaScript and XML. AJAX is a new technique for creating better, faster, and more interactive web applications with the help of XML, HTML, CSS, and Java Script.


Conventional web applications transmit information to and from the server using synchronous requests. It means you fill out a form, hit submit, and get directed to a new page with new information from the server.
With AJAX, when you hit submit, JavaScript will make a request to the server, interpret the results, and update the current screen. In the purest sense, the user would never know that anything was even transmitted to the server.

With AJAX you can: 
•	Update a web page without reloading the page.
•	Request data from a server - after the page has loaded.
•	Receive data from a server - after the page has loaded.
•	Send data to a server - in the background.
