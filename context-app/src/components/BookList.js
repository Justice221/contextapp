import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

export class BookList extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark} = this.context;
        const  theme = isLightTheme ? light : dark;
        return (
            <div className="book-list" style={{ background : theme.syntax, color: theme.bg}}>
                <ul>
                    <li style={{ background : theme.ui}}>the way of kings</li>
                    <li style={{ background : theme.ui}}>the name of the wind</li>
                    <li style={{ background : theme.ui}}>the final empire</li>
                    
                </ul>
            </div>
        )
    }
}

export default BookList
