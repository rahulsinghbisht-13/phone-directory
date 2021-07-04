import React from 'react';

// importing Header.css into Header.js(external styling)
import './Header.css';

// Functional component
const Header = function() {
    return (
        <div className="header">
            Phone-Directory
        </div>
    )
}

// Class Component

// class Header extends Component {
//     render() {
//         return (
//             <div className="header">
//                 Phone-Directory
//             </div>
//         )
//     }
// }

export default Header;