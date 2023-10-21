import './Preview.css';

export default function Preview({ previewData, previewClickHandler }) {
    return (
        <div className="preview-container" >
            {previewData.map((prevItem) => (
                <div className="preview" key={prevItem.id} onClick={() => previewClickHandler(prevItem)}>
                    <img className="preview-image" src={prevItem.image} alt={`Hotel ${prevItem.id}`}/>
                    <div className="itemname prevdetails">{prevItem.name}</div>
                    <div className="itemcost prevdetails">Rs. {prevItem.price}</div>
                    {prevItem.freeBreakfast && (<div className='breakfast'>Free breakfast</div>)}
                </div>
            ))}
        </div>
    );
}
