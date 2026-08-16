/* =====================================================
   AUDITASSURE LOGIN JS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const roles =
        document.querySelectorAll(".role");

    const selectedRole =
        document.getElementById("selectedRole");

    const loginForm =
        document.getElementById("loginForm");

    const password =
        document.getElementById("password");

    const passwordToggle =
        document.getElementById("passwordToggle");


    /* =================================================
       ROLE SELECTION
    ================================================= */

    roles.forEach(role => {

        role.addEventListener("click", () => {

            roles.forEach(item => {

                item.classList.remove("active");

            });

            role.classList.add("active");

            const roleName =
                role.dataset.role;

            selectedRole.value =
                roleName;

        });

    });


    /* =================================================
       PASSWORD SHOW / HIDE
    ================================================= */

    passwordToggle.addEventListener(
        "click",
        () => {

            if (password.type === "password") {

                password.type = "text";

                passwordToggle.innerHTML =
                    '<i class="fa-solid fa-eye-slash"></i>';

            } else {

                password.type = "password";

                passwordToggle.innerHTML =
                    '<i class="fa-solid fa-eye"></i>';

            }

        }
    );


    /* =================================================
       LOGIN
    ================================================= */

    loginForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const email =
                document.getElementById("email").value.trim();

            const pass =
                password.value.trim();

            const role =
                selectedRole.value;


            if (!email || !pass) {

                alert(
                    "Please enter email and password."
                );

                return;

            }


            /* SAVE LOGIN */

            localStorage.setItem(
                "auditUserEmail",
                email
            );

            localStorage.setItem(
                "auditUserRole",
                role
            );


            /* =================================================
               DIRECT DASHBOARD OPEN
            ================================================= */

            if (role === "admin") {

                window.location.href =
                    "admin.html";

            } else {

                window.location.href =
                    "user.html";

            }

        }
    );


    /* =================================================
       GOOGLE STYLE BUTTON
    ================================================= */

    const googleBtn =
        document.querySelector(".google-btn");

    googleBtn.addEventListener("click", () => {

        alert(
            "Google authentication can be connected here."
        );

    });

});