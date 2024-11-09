

// Helper function to create a delay
function delay(ms) {
    return new Promise((resolve, reject) => {
        
        var myTest = 1;
        let success = (myTest > 0);
        if (success) {

            
            setTimeout(resolve, ms);
            console.log("Successfully fetching data");
        } else {
            reject("Data fetching failed.");
        }
        
    }
    )
}


// Function to fetch user profiles
function fetchUserProfiles() {

    return delay(1000).then(() => [
        { id: 1, name: "Alice", account: "alc27" },
        { id: 2, name: "Bob", account: "luckydog" },
        { id: 3, name: "Charlie", account: "good@@" }
    ]);
}

// Function to fetch posts
function fetchPosts() {
    
    return delay(1000).then(() => [
        { id: 1, title: "Weather", content: "Weather is good!" },
        { id: 2, title: "Friend", content: "I make a new friend!" }
    ]);
}

// Function to fetch comments
function fetchComments() {
    
    return delay(1000).then(() => [
        { id: 1, comment: "Great post!" },
        { id: 2, comment: "Thanks for sharing." },
        { id: 3, comment: "Interesting read!" }
    ]);
}



function fetchData() {
    console.log("Fetching data...");

    fetchUserProfiles()
        .then(profiles => {
            console.log("User Profiles:", profiles);
            return fetchPosts();
        })
        .then(posts => {
            console.log("Posts:", posts);
            return fetchComments();
        })
        .then(comments => {
            console.log("Comments:", comments);
            console.log("Data fetching complete.");
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

fetchData();



