import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <>
           <div className="container">
               <img  className="sariqIMG"   src="/images/sariqfon.svg" alt=""/>
               <img  className="ovqatIMG"  src="/images/footerovqat.svg" alt=""/>
              <div className="footer">
                  <a className="FOOT1IMG"     href=""><img src="/images/1Ficon1.svg" alt=""/></a>
                  <a  className="FooterTX1" href="#">ООО «Гостион» +7 (953) 601-96-14</a>
                  <a  className="FooterTX2" href="#">Способы оплаты:</a>
                  <a  className="FOOT2IMG"   href=""><img src="/images/2Ficon.svg" alt=""/></a>
                  <a  className="FooterTX3" href="#">Картой или наличными</a>
                  <a  className="FOOT3IMG" href=""> <img src="/images/3Ficon.svg" alt=""/></a>
                  <a  className="FOOT4IMG" href=""> <img src="/images/4FiconVK.svg" alt=""/></a>
                  <a  className="FOOT5IMG" href=""> <img src="/images/5FiconINSTA.svg" alt=""/></a>
              </div>

               
            </div>
            </>
        );
    }
}

export default Footer;