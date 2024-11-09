



// Function to fetch user profiles
function fetchUserProfiles() {

    return new Promise(resolve => setTimeout(() => {
        console.log("Fetching user profiles...");
        resolve({ id: 1, name: "Alice", account: "alc27" });
    }, 1000));

}

// Function to fetch posts
function fetchPosts() {

    return new Promise(resolve => setTimeout(() => {
        console.log("Fetching Posts...");
        resolve({ id: 1, title: "Weather", content: "Weather is good!" });
    }, 1000));

}

// Function to fetch comments
function fetchComments() {

    return new Promise(resolve => setTimeout(() => {
        console.log("Fetching Comments...");
        resolve({ id: 1, comment: "Great post!" });
    }, 1000));

}



// Fuction to fetch data sequentially
function fetchSequential() {
    console.log("Fetching data sequentially...");

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
            console.log("Sequantial Data fetching complete.");
        })
        .catch(error => {
            console.error("Error in sequantial fetching data:", error);
        });
}



// Fuction to fetch data parallelly
function fetchParallel() {
    console.log("Fetching data parallelly...");

    Promise.all([fetchUserProfiles(), fetchPosts(), fetchComments()])
        .then(([userProfile, posts, comments]) => {
            console.log("User Profile:", userProfile);
            console.log("Posts:", posts);
            console.log("Comments:", comments);
            console.log("Parallel data fetching complete.");
        })
        .catch(error => {
            console.error("Error in parallel data fetching:", error);
        });
}



fetchSequential();

fetchParallel();


