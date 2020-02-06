import React from 'react';
const Category =  (prop) => {
   
    return (
    
        <div>

            <div>
                <br></br>
                <h2>Kategoriler</h2>
                <br></br>
            <table className="table">
              
            <tbody>
            <tr>
                <th scope="row"></th>
                <td>Aperatifler</td>
                <td>Çocuklar için Yemekler</td>
                <td>Diyet Yemekleri</td>
                <td>Dolma-Sarma Tarifleri</td>
                <td>Et Yemekleri</td>
                <td>Bakliyat Yemekleri</td>
                <td>Makarna Tarifleri</td>
            </tr>
             <tr>
                <th scope="row"></th>
                <td>Kahvaltılık Tarifler</td>
                <td>Pilav Tarifleri</td>
                <td>Sebze Yemekleri</td>
                <td>Hamburger Tarifleri</td>
                <td>İçecek Tarifleri</td>
                <td>Salata Tarifleri</td>
                <td>Sandviç Tarifleri</td>
            </tr>
                <tr>
                <th scope="row"></th>
                <td>Bebekler için Yemekleri</td>
                <td>Çorba</td>
                <td>Sos Tarifleri</td>
                <td>Kurabiye Tarifleri</td>
                <td>Hamur İşi Tarifleri</td>
                <td>Tatlı Tarifleri</td>
                <td>Yumurta Yemekleri</td>
             </tr>
        </tbody>
         </table>
  
            </div>
  
    </div>);
};
export default Category;