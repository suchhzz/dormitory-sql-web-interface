import { useState } from "react"

export default function ConditionRelative() {

    const [isANDRelativeSelected, setIsANDRelativeSelected] = useState<boolean>(true);

    const toggleRelative = () => {
        setIsANDRelativeSelected(!isANDRelativeSelected);
    }

    return (
        <>
            <div className="relative" onClick={toggleRelative}>
                <div className="relative--container">
                    <p className="text">
                        {isANDRelativeSelected ? "AND" : "OR"}
                    </p>
                </div>
            </div>
        </>
    )

}