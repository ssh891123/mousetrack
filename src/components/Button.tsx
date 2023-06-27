interface ButtonProps {
    selected?: boolean;
    name: string;
    onClick: () => void;
}

function Button({ selected = false, name, onClick}: ButtonProps) {
    return (
        <div 
            style = {{
                // cursor: "pointer",
                boxSizing:"border-box",
                width:"100px",
                height:"100px",
                padding: "16px",
                // border:`solid ${selected ? "6" : "1"}px black`,
                boxShadow: `0 0 0 ${selected ? "6" : "1"}px black inset`,
            }}
            onClick={onClick}
        >
            <img src={`/images/${name}.png`} width="100%" height="100%"/>
        </div>
    )
}

export default Button;