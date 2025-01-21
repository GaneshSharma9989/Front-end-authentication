
document.addEventListener("DOMContentLoaded", () => {
    const signInForm = document.querySelector("#signin form");
    const signUpForm = document.querySelector("#signup form");

    if (signInForm) { // Check if the form exists
        signInForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.querySelector("#signinEmail").value.trim();
            const password = document.querySelector("#signinPassword").value.trim();

            if (!email || !password) {
                alert("Please fill in both fields!");
                return;
            }

            console.log("Sign In Data:", { email, password });
            alert("Sign In successful!");
            signInForm.reset();//clear the form after submit
        });
    } else {
        console.error("Sign-in form not found!");
    }

    if (signUpForm) { // Check if the form exists
        signUpForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.querySelector("#signupName").value.trim();
            const email = document.querySelector("#signupEmail").value.trim();
            const password = document.querySelector("#signupPassword").value.trim();

            if (!name || !email || !password) {
                alert("Please fill in all fields!");
                return;
            }

            console.log("Sign Up Data:", { name, email, password });
            alert("Sign Up successful!");
            signUpForm.reset();//clear the form after submit
        });
    } else {
        console.error("Sign-up form not found!");
    }
});
