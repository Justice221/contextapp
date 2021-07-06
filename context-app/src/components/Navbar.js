import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'


export class Navbar extends Component {
    
    render() {
        
        return (
            <ThemeContext.Consumer>{(context)=>{
                const { isLightTheme, light, dark} = context;
                const  theme = isLightTheme ? light : dark;
                return(
                            <nav style={{ background : theme.ui, color: theme.syntax}}>
                                <h1>Context app</h1>
                        <ul>
                            <li>HOME</li>
                            <li>ABOUT</li>
                            <li>CONTACT</li>

                        </ul>
                    </nav>
                )
            }}
            
            </ThemeContext.Consumer>
        );
    }
}

export default Navbar
