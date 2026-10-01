// Define the structure of an API response
interface ApiResponse {
    success: boolean;
    data: string;
}

// Create an object of type ApiResponse
const user: ApiResponse = {
    // Inside an object, properties are separated with commas (,)
    success: true,

    // This is another property, so it is also followed by a comma
    data: "Abhishek"
};

// Semicolons (;) are used to end statements
console.log(user);

//op is { success: true, data: 'Abhishek' }

/*

NOTE :

ApiResponse → a type/interface that defines structure
success → tells if API worked or not
data → actual result from API
console.log → shows output in console

*/