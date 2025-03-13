import { useState, useRef } from "react";

export default function CustomTab() {
    const [cursorPos, setCursorPos] = useState({ top: 0, left: 0 });
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const getCursorPosition = (textarea: HTMLTextAreaElement) => {
        const cursorIndex = textarea.selectionStart;
        const textBeforeCursor = textarea.value.substring(0, cursorIndex);

        const lines = textBeforeCursor.split("\n");
        const lineNumber = lines.length - 1;
        const charIndex = lines[lineNumber].length;

        const textRect = textarea.getBoundingClientRect();
        const containerRect = containerRef.current?.getBoundingClientRect();

        const style = window.getComputedStyle(textarea);
        const lineHeight = 26;
        const charWidth = 9;

        return {
            top: (textRect.top - (containerRect?.top || 0)) + lineNumber * lineHeight ,
            left: (textRect.left - (containerRect?.left || 0)) + charIndex * charWidth + 10,
        };
    };

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;

        const pos = getCursorPosition(e.target);
        setCursorPos(pos);
    };

    return (
        <div ref={containerRef} className="textarea-container" style={{ position: "relative" }}>
            <textarea
                ref={textareaRef}
                className="custom-textarea-item template-text-input"
                onInput={handleInput}
            />

            <div
                className="word-hint"
                style={{
                    top: `${cursorPos.top - 40}px`,
                    left: `${cursorPos.left - 30}px`,
                }}
            >
                <div className="word-hint--container">
                    Подсказка
                </div>
            </div>
        </div>
    );
}
