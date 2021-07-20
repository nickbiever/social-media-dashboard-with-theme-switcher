const toggleSwitch = document.querySelector('.toggle input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
    
      if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
      }
    }

    function switchTheme(e) {
      var toggleSlider = document.getElementById('color');

      if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleSlider.classList.toggle("dark-toggle");
      } else {        
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleSlider.classList.toggle("dark-toggle");
      }    
    }

    toggleSwitch.addEventListener('change', switchTheme, false);