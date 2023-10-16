import './Header.css';

export default function Header({ content }) {
    return(
        <header className='header-container'>
            <div className='content'>
                { content }
            </div>
        </header>
    )
}