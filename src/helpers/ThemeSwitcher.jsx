import React,{useState,useEffect} from 'react'
import lightLogo from "../images/light.svg";
import darkLogo from "../images/dark.svg";

function ThemeSwitcher() {
    const [currentTheme,setCurrentTheme] = useState('Light')
    const toggleTheme = () =>{
        let theme = (currentTheme == 'Light') ? 'Dark' : "Light"
        if(theme == 'Dark'){
            document.body.classList.add('dark-content');
        }
        else    
            document.body.classList.remove('dark-content');
        setCurrentTheme(theme)
        localStorage.setItem('theme', theme);
    }
    // to check theme at page load time only first time passed 2nd argument as empty array
    useEffect(() => {
        console.log("Theme is",localStorage.getItem('theme'));
        if (localStorage.getItem('theme') === 'Dark'){
            document.body.classList.add('dark-content');
            setCurrentTheme('Dark')
        }
        else 
            setCurrentTheme('Light')
    },[])

  return (
        <img className="toggleTheme" onClick={toggleTheme} 
            src={currentTheme == 'Light' ? lightLogo : darkLogo} 
            alt="Theme logo" 
        />
  )
}

export default ThemeSwitcher