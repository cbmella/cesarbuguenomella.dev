import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const classes = {
    skillItem: "mb-4",
    skillTitle: "font-bold text-lg flex items-center mb-2 border-b-2 border-royal-blue",
    skillIcon: "mr-2 text-royal-blue",
    skillCategory: "ml-2 text-black",
    listItem: "transition-all duration-500 ease-in-out transform hover:scale-105 flex items-center", // Aplicamos hover:scale-105 aquí
    listIcon: "mr-2 text-yellow-500",
};

const SkillItem = ({ skill }) => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const sortedItems = [...skill.items].sort((a, b) => b.name.length - a.name.length);

    return (
        <div className={classes.skillItem}>
            <h3 className={classes.skillTitle}>
                <span className={classes.skillIcon}>{skill.icon}</span>
                <span className={classes.skillCategory}>{skill.category}</span>
            </h3>
            <ul>
                {sortedItems.map((item, itemIndex) => (
                    <li
                        key={itemIndex}
                        className={classes.listItem}
                        onMouseEnter={() => setHoveredItem(itemIndex)}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <FaStar className={`${classes.listIcon} ${hoveredItem === itemIndex ? 'animate-spin' : ''}`} />
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillItem;
