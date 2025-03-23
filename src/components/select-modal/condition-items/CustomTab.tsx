import { useState, useRef, useEffect } from "react";
import { staticWords } from "../../../scripts/custom-tab/queryFilters";

export default function CustomTab({
    customTabValue,
    containerRef,
    conditionId
}: {
    customTabValue: (text: string) => void,
    containerRef: React.RefObject<HTMLDivElement>,
    conditionId: number
}) {
    const [cursorPos, setCursorPos] = useState({ top: 0, left: 0 });
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const shadowRef = useRef<HTMLDivElement | null>(null);
    const cursorRef = useRef<HTMLSpanElement | null>(null);
    const [keywords, setKeywords] = useState<string[]>(staticWords);
    const [activeKeywords, setActiveKeywords] = useState<string[]>([]);
    const [activeHintIndex, setActiveHintIndex] = useState<number>(-1);
    const [textAreaValue, setTextAreaValue] = useState<string>("");

    useEffect(() => {
        console.log('text area', textAreaValue);
        customTabValue(textAreaValue);
    }, [textAreaValue]);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.addEventListener("scroll", updateCursorPosition);
            return () => textareaRef.current?.removeEventListener("scroll", updateCursorPosition);
        }
    }, [textareaRef.current]);

    const updateCursorPosition = () => {
        const textarea = textareaRef.current;
        const shadow = shadowRef.current;

        if (!textarea || !shadow) return;

        const style = window.getComputedStyle(textarea);
        shadow.style.font = style.font;
        shadow.style.letterSpacing = style.letterSpacing;
        shadow.style.padding = style.padding;
        shadow.style.border = style.border;
        shadow.style.whiteSpace = "pre-wrap";
        shadow.style.wordBreak = "break-word";
        shadow.style.width = `${textarea.clientWidth}px`;
        shadow.style.position = "absolute";
        shadow.style.visibility = "hidden";

        const cursorIndex = textarea.selectionStart;

        const textBeforeCursor = textarea.value.substring(0, cursorIndex);
        const textAfterCursor = textarea.value.substring(cursorIndex) || " ";

        shadow.innerHTML = textBeforeCursor.replace(/\n/g, "<br>") + `<span class="cursor-span">|</span>` + textAfterCursor;
        const cursorSpans = document.getElementsByClassName("cursor-span");
        const cursorSpan = cursorSpans[cursorSpans.length - 1]; // todo getting current custom tab id

        if (!cursorSpan) return;

        const rect = cursorSpan.getBoundingClientRect();
        const containerRect = containerRef?.current?.getBoundingClientRect();

        setCursorPos({
            top: rect.top - (containerRect?.top || 0) - textarea.scrollTop,
            left: rect.left - (containerRect?.left || 0) - textarea.scrollLeft,
        });
    };

    const getKeywords = (searchWord: string): string[] => {
        return (Array.isArray(keywords) ? keywords : []).filter(word => word.toLowerCase().includes(searchWord.toLowerCase()));
    };

    const fillHintSection = (searchWord: string) => {
        setActiveKeywords(getKeywords(searchWord));
    }

    const getCurrentWord = (text: string, cursorPos: number): string => {
        const words = text.split(/\s+/);

        let wordStart = 0;
        for (const word of words) {
            const wordEnd = wordStart + word.length;
            if (cursorPos >= wordStart && cursorPos <= wordEnd) {
                return word;
            }
            wordStart = wordEnd + 1;
        }
        return '';
    };

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;

        const cursorIndex = e.target.selectionStart;
        const text = e.target.value;
        setTextAreaValue(text);

        const currentWord = getCurrentWord(text, cursorIndex);

        if (currentWord) {
            fillHintSection(currentWord);
        } else {
            setActiveKeywords([]);
        }

        updateCursorPosition();
    };


    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (activeKeywords.length === 0) {
            return;
        }

        switch (e.key) {
            case 'ArrowUp':
                setActiveHintIndex((prevIndex) => Math.max(prevIndex - 1, 0));
                e.preventDefault();
                break;

            case 'ArrowDown':
                setActiveHintIndex((prevIndex) => Math.min(prevIndex + 1, activeKeywords.length - 1));
                e.preventDefault();
                break;

            case 'Enter':
            case 'Tab':
                if (activeKeywords[activeHintIndex] !== undefined) {
                    const textarea = textareaRef.current;
                    if (textarea) {
                        const cursorIndex = textarea.selectionStart;
                        const text = textarea.value;
                        const currentWord = getCurrentWord(text, cursorIndex);

                        const updatedText = text.slice(0, text.lastIndexOf(currentWord)) + activeKeywords[activeHintIndex] + text.slice(cursorIndex);

                        textarea.value = updatedText;

                        textarea.selectionStart = textarea.selectionEnd = cursorIndex + activeKeywords[activeHintIndex].length;

                        textarea.style.height = "auto";
                        textarea.style.height = `${textarea.scrollHeight}px`;

                        setActiveKeywords([]);
                    }
                }
                e.preventDefault();
                break;
        }
    };


    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.addEventListener("scroll", updateCursorPosition);
            return () => textarea.removeEventListener("scroll", updateCursorPosition);
        }
    }, []);

    return (
        <div ref={containerRef} className="textarea-container" style={{ position: "relative" }}>
            <div ref={shadowRef} style={{ position: "absolute", whiteSpace: "pre-wrap", visibility: "hidden" }}></div>

            <textarea
                ref={textareaRef}
                className="custom-textarea-item template-text-input"
                onInput={handleInput}
                onScroll={updateCursorPosition}
                onKeyDown={handleKeyDown}
            />

            <div
                className="word-hint"
                style={{
                    bottom: `${containerRef.current?.clientHeight! - cursorPos.top + 5}px`,
                    left: `${cursorPos.left - 10}px`,
                    position: "absolute",
                }}
            >
                <div className="word-hint--container">
                    {activeKeywords.map((item, index) => (
                        <div key={index} className={`hint-item ${activeHintIndex === index ? "selected" : ""}`}>{item}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}
