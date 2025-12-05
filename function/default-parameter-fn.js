// Default parameter function example
function showData(userId="guest", isAdmin=false) {
    console.log(`User ID: ${userId}, Admin: ${isAdmin}`);
}

showData(); // User ID: guest, Admin: false

showData("john_doe"); // User ID: john_doe, Admin: false

showData("admin_user", true); // User ID: admin_user, Admin: true