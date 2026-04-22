document.addEventListener("DOMContentLoaded", () => {

    // NAV TOP
    document.querySelectorAll('.head-nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const main_page = this.textContent.toLowerCase();
            const main_cap = main_page.charAt(0).toUpperCase() + main_page.slice(1);

            document.querySelector('.content-iframe').src =
                'pages/main/' + main_cap + '.html';
        });
    });

    // SIDEBAR
    document.querySelectorAll('.topics div').forEach(item => {
        item.addEventListener('click', function() {

            const topic_page = this.textContent.toLowerCase();
            const topic_cap = topic_page.charAt(0).toUpperCase() + topic_page.slice(1);

            document.querySelector('.content-iframe').src =
                'pages/topics/' + topic_cap + '/' + topic_cap + '.html';
        });
    });

    // OPEN MODALS
    document.querySelector('.sign-up').addEventListener('click', () => openModal('signupModal'));
    document.querySelector('.sign-in').addEventListener('click', () => openModal('signinModal'));

    // SIGN UP (SAVE TO BROWSER)
    document.getElementById('signupBtn').addEventListener('click', () => {
        const user = document.getElementById('su-username').value;
        const pass = document.getElementById('su-password').value;

        if (!user || !pass) {
            alert("Fill all fields!");
            return;
        }

        // store account in browser
        localStorage.setItem("user_" + user, pass);

        alert("Account created!");
        closeModal('signupModal');
    });

    // SIGN IN (CHECK BROWSER DATA)
    document.getElementById('signinBtn').addEventListener('click', () => {
        const user = document.getElementById('si-username').value;
        const pass = document.getElementById('si-password').value;

        const saved = localStorage.getItem("user_" + user);

        if (saved === pass) {
            alert("Login successful!");
            closeModal('signinModal');
        } else {
            alert("Wrong username or password!");
        }
    });

});

// MODAL HELPERS
function openModal(id) {
    document.getElementById(id).classList.remove("hidden");
}

function closeModal(id) {
    document.getElementById(id).classList.add("hidden");
}