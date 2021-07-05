import React from 'react';

// importing Header.css into Header.js(external styling)
import './Header.css';

// Functional component
const Header = function(props) {
    return (
        <div className="header">
            {props.heading}
        </div>
    )
}

// Class Component

// class Header extends Component {
//     render() {
//         return (
//             <div className="header">
//                 {this.props.heading}
//             </div>
//         )
//     }
// }

export default Header;