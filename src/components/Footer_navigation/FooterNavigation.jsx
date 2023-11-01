import { NavLink } from "react-router-dom";
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUtensils, faShip, faTv, faSuitcaseMedical } from "@fortawesome/free-solid-svg-icons";

export function FooterNavigation() {
    const activeLink = 'link-nav-footer link-nav-footer--active';
    const normalLink = 'link-nav-footer';
        return(
        <nav className="navbar fixed-bottom" style={{height: '3.5rem', zIndex: 1050 }}>
                  <NavLink to='/restaurant' className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                        <div className={'navigation-item'}>
                              <p className={"nav-link-name"}>
                              <FontAwesomeIcon style={{color:'white'}} icon={faUtensils} />
                              </p>
                              <p className="footer-title">Ресторан</p>
                        </div>
                  </NavLink>
                  <NavLink to='/excursions' className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                        <div className={'navigation-item'}>
                              <p className={"nav-link-name"}>
                              <FontAwesomeIcon style={{color:'white'}} icon={faShip} />
                              </p>
                              <p className="footer-title">Экскурсии</p>
                        </div>
                  </NavLink>
                  <NavLink to='/tv' className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                        <div className={'navigation-item'}>
                              <p className={"nav-link-name"}>
                                    <FontAwesomeIcon style={{color:'white'}} icon={faTv} />
                              </p>
                              <p className="footer-title">Телевидение</p>
                        </div>
                  </NavLink>
                  <NavLink to='/service' className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                        <div className={'navigation-item'}>
                              <p className={"nav-link-name"}>
                                    <FontAwesomeIcon style={{color:'white'}} icon={faSuitcaseMedical} />
                              </p>
                              <p className="footer-title">Сервисы</p>
                        </div>                 
                  </NavLink>
                  <NavLink to='/main' className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                              <div className={'navigation-item'}>
                                    <p className={"nav-link-name"}>
                                          <FontAwesomeIcon  style={{color:'white'}} icon={faHouse} />
                                    </p>
                                    <p className="footer-title">Профиль</p>
                              </div>
                        </NavLink>
                  {/* </div> */}
                  {/* <NavLink to='/' className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                        <div className={'navigation-item'}>
                        <p className={"nav-link-name"}>
                        <FontAwesomeIcon style={{color:'white'}} icon={faDoorOpen} />
                        </p>
                        <p className="footer-title">Выход</p>
                        </div>                 
                  </NavLink> */}
            </nav>
      )
}