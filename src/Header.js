import React from 'react';

// Functional component
const Header = function() {
    // Inline style
    const headerStyle = {textAlign: 'center', padding: 20, background: '#000', color: 'white', textTransform: 'uppercase'};
    return (
        <div style={headerStyle}>
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