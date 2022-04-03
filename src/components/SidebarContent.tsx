import React, { useEffect, useRef , useCallback} from "react"

// //Import Scrollbar
// import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { data } from "./data";


const SidebarContent = () => {
  const activateParentDropdown = useCallback((item) => {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }
    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement
      if (parent2) {
        parent2.classList.add("mm-show") // ul tag
        const parent3 = parent2.parentElement // li tag
        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      return false
    }
    return false
  }, []);
  // // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = window.location.pathname
    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul:HTMLElement = document.getElementById("side-menu") as HTMLElement
      const items = ul.getElementsByTagName("a")
       for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [ activateParentDropdown])
  interface nodeObjectType {
    title:String
    nodes:Array<string|nodeObjectType>
  }
const Node = (obj:any)=> { 
  
  return obj?.nodes.map((data:nodeObjectType , key:number) => {
  if (typeof (data as nodeObjectType) == "object") {
    return  <li key={key}>
                  <a href="/#"  className="has-arrow">
                  {data.title}
                  </a>
                  <ul className="sub-menu">
                  {Node(data)}
                  </ul>
                </li>
  }

  else {
    return <li onClick={()=>{
      console.log(data)
    }} key={key}>
    <a href="/#"  className=" waves-effect">
    {data}
    </a>
  </li> 
  // <div className='bg'></div>
  }
})
}
  

  return (
    <React.Fragment>
      {/* <SimpleBar ref={ref} className="vertical-simplebar"> */}
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{("Menu")} </li>     
            
            {Node(data)}
           
            
          </ul>
     
   
        </div>
      {/* </SimpleBar> */}
    </React.Fragment>
  )
}


export default SidebarContent