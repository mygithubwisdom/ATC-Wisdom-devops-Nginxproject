document.addEventListener('DOMContentLoaded', function() {
    const learnMoreButton = document.getElementById('learn-more');
    const container = document.querySelector('.container');
    
    learnMoreButton.addEventListener('click', function() {
        alert('Welcome to ATC-Wisdom-devops-Nginxproject! This platform helps you manage Nginx configurations and deployments.');
        container.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    });
    
    // Display current date in console
    console.log('Access date: ' + new Date().toLocaleDateString());
    
    // Simple animation effect
    setTimeout(() => { container.style.opacity = '1'; }, 300);
});
