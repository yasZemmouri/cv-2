const Header = ({fName, lName, title}) => {
    return (
        <header className="container">
            <div className="name">
                <h1>{fName} {lName} <span>{title}</span></h1>
                
            </div>
        </header>
    
    );
}

export default Header;