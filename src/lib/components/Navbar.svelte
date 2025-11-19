<script>

</script>

<style>
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: space-between; //seperate login
        padding: 15px 20px;
        border-top: 6px solid #3BB3FF;
        border-right: 6px solid #3BB3FF;
        background-color: white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.5);
        z-index: 1000;
    }

    .nav-section {
        display: flex;
        align-items: center;
        gap: 30px;
    }

    .logo {
        margin-right: 40px;
    }

    .logo img {
        max-width: 120px;
        height: auto;
    }

    .nav-links {
        display: flex;
        gap: 30px;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .nav-links a {
        color: #333;
        font-weight: 500;
    }

    .nav-links a:hover {
        color: #3BB3FF;
    }

    .login-button {
        color: #333;
        font-weight: 500;
    }

    .login-button:hover {
        color: #3BB3FF;
    }
</style>

<div class="navbar">
    <div class="nav-section">
        <div class="logo">
            <img src="EDUVoice-removebg-preview.png" alt="EDUVoice Logo" />
        </div>
        <nav>
            <ul class="nav-links">
                <li><a href="/Home">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Contact">Contact</a></li>
            </ul>
        </nav>
    </div>
    <div class="nav-section">
        <a href="#" class="login-button">Login</a>
    </div>
</div>