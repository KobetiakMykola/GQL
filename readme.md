#### After clone repo
    npm i
    
#### start sever
     node app.js
     
     http://localhost:3000/graphql
     
#### test Graphql
    
##### get all books
       {
           getBooks{
               title
               id
           }
       }
##### get book by id
       {
           getBooks(id: "1"){
               title
               id
           }
       }
##### create book
       mutation{ addBook (title: "TITLE"){
                          id
                          title 
      	        }
              }
##### update book
        mutation{ updateBook (id: "bookId" title: "TITLE"){
                          id
                          title 
      	        }
              }
##### delete book
    mutation{ deleteBook (id: "bookId"){
                          id
                          title 
      	        }
              }
       
