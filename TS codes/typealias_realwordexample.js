"use strict";
function handleResponse(response) {
    if (response.success) {
        console.log(response.data);
    }
    else {
        console.error(response.error);
    }
}
handleResponse({ success: true, data: "Success" });
handleResponse({ success: false, error: "Error" });
