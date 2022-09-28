import "../Header/style.css";

const Header = ({openModal}) => {
    return (
        <header>
            <h1><span>Nu</span> Kenzie</h1>
            <button onClick={openModal}>Inicio</button>
        </header>
    )
}

export default Header;