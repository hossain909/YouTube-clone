import React from 'react'
import './SidebarRow.css'

function SidebarRow({selected,Icons,title}) {
    return (
        <div className={`sidebar-Row ${selected && 'selected'}`}>
            <Icons className="sidebarRow-icon"/>
            <h5 className="sidebarRow-title">{title}</h5>
        </div>
    )
}

export default SidebarRow;
