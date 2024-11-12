function makeRecipe() {
    var recipe = {
     title: "sugar cookie",
     servings: "4",
     ingredients: ["sugar", "flour", "eggs", "milk"]
     }
     document.write("name " + recipe.title);
     document.write("<br>");
     document.write("serves: " + recipe.servings);
     document.write("<br>");
     document.write("ingredients: " + recipe.ingredients);
     document.write("<br>");
    }

    makeRecipe();
    document.write("<hr>")

    var books = [{title: "The devotion of Suspect X", author: "Keigo Higashino", alreadyRead: true}, 
        {title: "The Vegeterian", author: "Han Kang", alreadyRead: false}, 
        {title: "Cosmos", author: "Karl Seigan", alreadyRead: true},
        {title: "Harry Potter", author: "J.K Rolling", alreadyRead: false}]

    for(var j = 0; j < books.length; j++){
        document.write(books[j].title + " by " + books[j].author);
        document.write("<br>");
    }
    
    document.write("<hr>")

    var done = 0;
    for(var i = 0; i < books.length; i++){
        if(books[i].alreadyRead == true){
            document.write("You have read " + books[i].title + " by " + books[i].author);
            document.write("<br>");
            done ++;
        }
        else{
            document.write("You have not read " + books[i].title + " by " + books[i].author);
            document.write("<br>");
        }
    }

    document.write("<h3> You have read "+ 100*done/books.length +"% of the books in the list <\h3>");