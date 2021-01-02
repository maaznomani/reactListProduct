import { React, useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'
import NavigationMenu from "./NavigationMenu";

function Navigation(){
    const [toggle, setToggle] = useState(false)
    let menu
    let menuMask
    const maskTransitions = useTransition(toggle, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    const menuTransitions = useTransition(toggle, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1 , transform: 'translateX(0%)'},
        leave: { opacity: 0 , transform: 'translateX(-100%)'},
    })
    if(toggle){
        // menu = <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow">Toggler is on</div>
        // menuMask = <div className= "bg-black-t-50 fixed top-0 left-0 w-full h-full z-50" 
        // onClick={()=> setToggle(false)}
        // ></div>
        
    }
    
    return(
        <nav>
            <span className="text-xl cursor-pointer">
                <FontAwesomeIcon icon={faBars}
                onClick={()=> setToggle(!toggle)}/>
            </span>
            {/* {menuMask}
            {menu} */}
            {maskTransitions.map(({ item, key, props }) =>
                item && <animated.div key={key} style={props}
                className= "bg-black-t-50 fixed top-0 right-0 w-full h-full z-50" 
                onClick={()=>setToggle(false)}
                >
                    
                </animated.div>
            )}

            {menuTransitions.map(({ item, key, props }) =>
                item && <animated.div key={key} style={props}
                className="fixed bg-white top-0 left-0 w-1/5 h-full z-50 shadow p-3">
                    <NavigationMenu
                    closeMenu={()=>setToggle(false)}
                    />
                </animated.div>
            )}
        </nav>
        
    )
}
export default Navigation