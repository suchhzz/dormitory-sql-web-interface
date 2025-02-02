export default function AliasOption() {
    return (
        <>
            <div className="option option--alias">
                <div className="option-menu">
                    <label className="label-form d-flex">
                        Alias
                        <div className="input-container d-flex">
                            <input className="form-item-input option-menu--item-alias" type='text'></input>
                            <button className="option-alias-change-btn">X</button>
                        </div>

                    </label>
                </div>
            </div>
        </>
    )
}