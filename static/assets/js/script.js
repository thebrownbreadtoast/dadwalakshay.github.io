function toggleMode(mode='') {
    currentMode = document.body.className

    footerElement = document.getElementsByClassName('footer-div')[0];

    if(currentMode == 'light-mode' || mode=='dark') {
        document.body.className = 'dark-mode';

        footerElement.style.backgroundColor = '#121212';

        // Change icons according to mode
        var toggleModeIcon = document.getElementsByClassName('mode-btn')[0];
        var linkedinIcon = document.getElementsByClassName('linkedin-icon')[0];
        var githubIcon = document.getElementsByClassName('github-icon')[0];
        var emailIcon = document.getElementsByClassName('email-icon')[0];
        var instagramIcon = document.getElementsByClassName('instagram-icon')[0];

        toggleModeIcon.classList.add('light-icon');
        toggleModeIcon.classList.remove('dark-icon');

        linkedinIcon.classList.add('light-icon');
        linkedinIcon.classList.remove('dark-icon');
        linkedinIcon.src = "static/assets/icons/linkedin-dark.svg";

        githubIcon.classList.add('light-icon');
        githubIcon.classList.remove('dark-icon');
        githubIcon.src = "static/assets/icons/github-dark.svg";

        emailIcon.classList.add('light-icon');
        emailIcon.classList.remove('dark-icon');
        emailIcon = "static/assets/icons/email-dark.svg";

        instagramIcon.classList.add('light-icon');
        instagramIcon.classList.remove('dark-icon');
        instagramIcon = "static/assets/icons/instagram-dark.svg";
    }
    else if(currentMode == 'dark-mode' || mode=='light') {
        document.body.className = 'light-mode';

        footerElement.style.backgroundColor = 'white';

        // Change icons according to mode
        var toggleModeIcon = document.getElementsByClassName('mode-btn')[0];
        var linkedinIcon = document.getElementsByClassName('linkedin-icon')[0];
        var githubIcon = document.getElementsByClassName('github-icon')[0];
        var emailIcon = document.getElementsByClassName('email-icon')[0];
        var instagramIcon = document.getElementsByClassName('instagram-icon')[0];

        toggleModeIcon.classList.add('dark-icon');
        toggleModeIcon.classList.remove('light-icon');

        linkedinIcon.classList.add('dark-icon');
        linkedinIcon.classList.remove('light-icon');
        linkedinIcon.src = "static/assets/icons/linkedin-light.svg";

        githubIcon.classList.add('dark-icon');
        githubIcon.classList.remove('light-icon');
        githubIcon.src = "static/assets/icons/github-light.svg";

        emailIcon.classList.add('dark-icon');
        emailIcon.classList.remove('light-icon');
        emailIcon = "static/assets/icons/email-light.svg";

        instagramIcon.classList.add('dark-icon');
        instagramIcon.classList.remove('light-icon');
        instagramIcon = "static/assets/icons/instagram-light.svg";
    }
}

function detectMode() {
    isDarkEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;

    var currentMode = document.body.className;

    var isDarkChosen;

    if(currentMode === 'dark-mode') {
        isDarkChosen = true;
    }
    else{
        isDarkChosen = false;
    }

    if(isDarkEnabled || isDarkChosen) {
        toggleMode('dark');
    }
    else {
        toggleMode('light');
    }
}