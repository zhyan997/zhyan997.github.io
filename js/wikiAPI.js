function wikiAPI() {
    // Define variables
    var searchTerm = document.getElementById("searchTerm").value;
    var connect = new XMLHttpRequest();
    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + searchTerm;

    // Open API call
    connect.open('GET', url);

    // Define actions
    connect.onload = function (){
        var wikiObject = JSON.parse(this.response);
        // console.log(wikiObject);
        // console.log(wikiObject.query.pages);
        var pages = wikiObject.query.pages;
        for (var i in pages){
            var newDiv = document.createElement("div");
            var newAnchor = document.createElement("a");
            newDiv.setAttribute("class", "row h4");
            newDiv.setAttribute("id", "result-"+i)
            newAnchor.setAttribute("href", "https://en.wikipedia.org/?curid="+pages[i].pageid);
            document.getElementById("wiki").appendChild(newDiv);
            document.getElementById('result-'+i).appendChild(newAnchor)
            newAnchor.innerText = pages[i].title;
        }
    }

    // Send API
    connect.send();

}