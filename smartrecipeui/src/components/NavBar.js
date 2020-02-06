import React from 'react'

const NavBar = (prop) => {
   
    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href='/'>Ana Sayfa</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='/category'>Kategoriler</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='/topFoods'>En Çok Beğenilenler</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='/recommend'>Önerilenler</a>
                </li>
               
            </ul>
        </div>
    )

}
export default NavBar;