import './Input.css';

export default function Input({ placeHolder }) {
    return(
        <div className="input-container">
            <input className="input-section" type="text" placeholder={placeHolder}/>
        </div>
    )
}