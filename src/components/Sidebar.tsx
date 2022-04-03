import PropTypes from "prop-types"
import React from "react"

import SidebarContent from "./SidebarContent"

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className="vertical-menu">
        <div className="h-100">
          <div className="user-wid text-center py-4">
            </div>
            <div data-simplebar className="h-100">
             <SidebarContent />
          </div>
          </div>
        </div>
    </React.Fragment>
  )
}

Sidebar.propTypes = {
        type: PropTypes.string,
}

export default Sidebar