
function addComment() {
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var commentText = document.getElementById("commentText").value;

        if (firstName && lastName && commentText) {
            var newComment = document.createElement("div");
            newComment.className = "comment";

            var h4 = document.createElement("h4");
            h4.innerText = firstName + " " + lastName;

            var p = document.createElement("p");
            p.innerText = commentText;

            newComment.appendChild(h4);
            newComment.appendChild(p) ;

            var comments = document.getElementsByClassName("comments")[0];
            comments.appendChild(newComment);

            document.getElementById("commentForm").reset();
        } else {
            document.getElementById("errorMessage").style.display = "block";
        } 
    
}