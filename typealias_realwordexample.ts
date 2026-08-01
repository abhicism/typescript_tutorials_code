// Define a type for a successful API response
type Success = {
    success: true; // Literal type 'true' acts as the discriminant property
    data: string;
};

// Define a type for a failed API response
type Failure = {
    success: false; // Literal type 'false' acts as the discriminant property
    error: string;
};

// Union type representing all possible API response shapes (Discriminated Union)
type ApiResponse = Success | Failure;

// Function to process the API response safely using control flow analysis
function handleResponse(response: ApiResponse) {
    // TypeScript inspects 'response.success' to narrow the type down
    if (response.success) {
        // Inside this branch, TS automatically narrows 'response' to 'Success'
        // 'response.data' is safe to access; 'response.error' would throw a compile error
        console.log(response.data);
    } else {
        // Inside this branch, TS automatically narrows 'response' to 'Failure'
        // 'response.error' is safe to access; 'response.data' would throw a compile error
        console.error(response.error);
    }
}

// Valid call: Matches the 'Success' type shape
handleResponse({ success: true, data: "Success" });

// Valid call: Matches the 'Failure' type shape
handleResponse({ success: false, error: "Error" });