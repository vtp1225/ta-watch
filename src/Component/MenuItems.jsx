

export function MenuItems({ className, items }) {
    
    return (
        <div  className={`menu-items-container ${className}`}>
            <ul className="list-menu-items">
                {items.map((item, index) => (
                    <li key={index}>
                        <a href={item.link} onClick={item.onClick}>
                            <img src={item.image} alt={item.label} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}