import './Command.css'
import arrow from '../../Assets/Images/arrow.svg';
import {useEffect, useRef, useState} from "react";

function Command({info}) {
    const [expanded ,setExpanded] = useState(false);
    const [displayMode,setDisplayMode] = useState("none");
    const descriptionRef = useRef(null);
    const [parentHeight, setParentHeight] = useState(null);
    async function handleClick() {
        if (expanded===false) {
            await setDisplayMode("flex")
        } else {
            await setExpanded(false)
        }
    }
    useEffect(() => {
        setTimeout(() => setDisplayMode(() => expanded ? "flex" : "none"), 600)
    }, [expanded]);
    useEffect(() => {
        setExpanded(() => displayMode === "flex")
    }, [displayMode]);


    useEffect(() => {
        const calculateTotalHeight = () => {
            if (!descriptionRef.current) return;
            const headerHeight = descriptionRef.current.previousSibling.offsetHeight;
            const descriptionHeight = expanded ? descriptionRef.current.offsetHeight : 0;
            return headerHeight + descriptionHeight;
        };
        if (!parentHeight) { // Set parent height only on initial render
            const totalHeight = calculateTotalHeight();
            setParentHeight(totalHeight);
        } else if (!expanded || expanded) { // Update parent height only on collapse
            const newHeight = calculateTotalHeight();
            descriptionRef.current.parentElement.style.height = `${newHeight}px`;
        }
    }, [expanded]); // Run effect only when isExpanded or parentHeight changes
    useEffect(() => {
        function handleResize() {
            const calculateTotalHeight = () => {
                if (!descriptionRef.current) return;
                const headerHeight = descriptionRef.current.previousSibling.offsetHeight;
                const descriptionHeight = expanded ? descriptionRef.current.offsetHeight : 0;
                return headerHeight + descriptionHeight;
            };
            const newHeight = calculateTotalHeight();
            descriptionRef.current.parentElement.style.height = `${newHeight}px`;
            setExpanded(false)
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="command" style={{ height: parentHeight, transitionDuration: expanded ? "0.4s" : "0.8s" }}>
            <div className="command-header">
                <div className="command-expander noselect" onClick={handleClick}>
                    <img src={arrow} alt="expand arrow" style={{transform: expanded ? 'rotate(90deg)' : ''}}/>
                </div>
                <div className="command-content">
                    <p className="command-full">{"/" + info.title}&nbsp;&nbsp;&nbsp;{info.options ? info.options.map((option, index) => (
                        <span className="command-full-option" key={index}>{option.name}</span>)) : ""}</p>
                    <p className="command-description">{info.description}</p>
                </div>

            </div>
            <div className={`command-details ${expanded ? 'command-expanded' : ''}`} style={{display: displayMode}}
                 ref={descriptionRef}>
                <h3>Options</h3>
                <div className="options-list">
                    {info.options ? info.options.map((option, index) => (
                        <div className="option-info" key={index}>
                            <p className="option-name" key={index}>{option.name}</p>
                            <p className="option-desc"> {option.description}{option.required ? " This option is required." : ""}</p>
                        </div>
                    )) : <p>No options available.</p>}
                </div>
                <h3 style={{marginTop: "10px"}}>Permissions required</h3>
                <div className="permissions-list">
                    {info.permissions ? info.permissions.map((permission, index) => (<p key={index} className="permission-nm">{permission}</p>)) : <p>No extra permissions needed.</p>}
                </div>
            </div>
        </div>
    )
}

export default Command