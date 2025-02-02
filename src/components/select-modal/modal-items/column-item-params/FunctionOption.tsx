export default function FunctionOption() {
    return (
        <>
            <div className="option option--function">
                <div className="option-menu d-flex">
                    <p data-columnOptionFunction='count' className="option-menu--item-function">COUNT()</p>
                    <p data-columnOptionFunction='sum' className="option-menu--item-function">SUM()</p>
                    <p data-columnOptionFunction='avg' className="option-menu--item-function">AVG()</p>
                    <p data-columnOptionFunction='max' className="option-menu--item-function">MAX()</p>
                    <p data-columnOptionFunction='min' className="option-menu--item-function">MIN()</p>
                </div>
            </div>
        </>
    )
}