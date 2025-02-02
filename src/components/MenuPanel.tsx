export default function MenuPanel() {
    return (
        <>
            <button id='showLeftMenuPanelBtn' className="show-menu-panel-button">Menu</button>
            <div id='leftMenuPanel' className="menu-panel-container">
                <div className="panel-wrapper d-grid">
                <button id='closeLeftMenuPanelBtn' className="close-button">X</button>
                    <div className="panel-header d-flex">
                        <p className="panel-title">Menu panel</p>
                    </div>
                    <div className="panel-body">

                    </div>
                </div>
            </div>
        </>
    )
}