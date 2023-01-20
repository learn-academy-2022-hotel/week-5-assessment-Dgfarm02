# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class? 

Your answer: calling the super is when you pull properties down from the super class into the subclasses. we did this with the Animal Kingdom challenge. We had a superclass Animal then a subclass of Fish, and we pulled the age and if the animal was alive or not down from the Animal class so it would show with the rest of our fish info.

Researched answer: In a class, calling the super function allows you to call a method from the parent class. This can be useful when you want to extend the functionality of a method defined in the parent class, but still maintain access to the original version of the method.

2. What is a gem? 

Your answer: a prepackaged set of code or libraries or tools that you can download and use when you're coding to help make your life easier

Researched answer: a gem is a package of code that can be easily installed and used in a Ruby application. Gems typically contain one or more Ruby files that provide additional functionality, such as libraries, frameworks, or tools. 

3. What is a relational database? Are there other kinds of databases? 

Your answer: a relational database is one that is linked to other databases. we did this today with the credit card info. we had one database for owners and another for credit cards. There are other kinds but I don't know what they are

Researched answer: A relational database is a type of database that organizes data into tables with rows and columns, and uses a system of relations to link the data in these tables to each other. Other types of databases include NoSQL databases, document databases, graph databases, time-series databases, and in-memory databases.

4. What are primary keys? Why are they important?

Your answer:I know the primary key is the key for the main database, you link other databases to the main database via this key. 

Researched answer: Primary keys are used to uniquely identify a record in a database table. The primary key is a field (or a set of fields) that is used to uniquely identify each row in the table. The most common type of primary key is a single field that contains a unique value for each row, such as an ID number. Primary keys are important because they ensure that there are no duplicate rows in the table and that every row can be easily identified and retrieved. Primary keys also play a crucial role in maintaining the relationships between tables in a relational database.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: oof I can't remember these. I know the CRUD actions are Create, Read, Update, and Delete but I can't remember what they are for HTTP.

Researched answer: HTTP verbs, also known as HTTP methods, are the actions that a client can make on a server's resources. The most common HTTP verbs are:

GET: Retrieves a resource or a list of resources. Corresponding CRUD action is READ.
POST: Creates a new resource. Corresponding CRUD action is CREATE.
PUT: Updates an existing resource. Corresponding CRUD action is UPDATE.
PATCH: Updates a part of an existing resource. Corresponding CRUD action is UPDATE.
DELETE: Deletes a resource. Corresponding CRUD action is DELETE.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: Rails RESTful routes are a set of pre-defined routes in the Ruby on Rails framework that conform to the principles of Representational State Transfer (REST). REST is an architectural style for building web services that emphasizes the use of standard HTTP methods (GET, POST, PUT, DELETE, etc.) to interact with resources, and the use of URIs to identify those resources.

2. Model validations: Model Validations are used to ensure that only clean and valid data gets saved into the database. Rails will run all model validations before content is added to the database. If these validations produce any errors the content will not be saved.

3. Params: params is a method that returns an ActionController::Parameters object.

4. ERB: ERB (Embedded Ruby) is a template engine for the Ruby programming language that is often used in the Rails web framework. It allows you to embed Ruby code within an HTML file, which is then evaluated and executed when the file is rendered by the server. 

5. API: An API (Application Programming Interface) is a set of protocols, routines, and tools for building software and applications. It specifies how software components should interact and APIs allow for communication between different systems.
