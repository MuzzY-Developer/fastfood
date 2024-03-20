import React, {Component} from 'react';
import Propsitem from "./Propsitem";

class Main extends Component {
      constructor(props) {
          super(props);
      }
     



    render() {
        return (
            <>
             <main>
                 <img className="suzmaIMG"   src="/images/SUZMAFF.png" alt=""/>
                 <img className="shorvaIMG"   src="/images/SHORFAFF.png" alt=""/>
                 <img className="assortiIMG"   src="/images/ASSORTISALATFF.png" alt=""/>
                 <button className="menu">Меню</button>
                 <button className="btzavtrak"><p>Завтраки</p></button>
                 <div className="m1">
                 <div className="card">
                     <Propsitem
                         title="Холодец из говядины"
                         rasm="images/F1.svg"
                         vazn="130/30г"
                         narx="800₽"
                     />
                 </div>
                 <div className="card">
                     <Propsitem
                         title="Севиче из тунца"
                         rasm="images/F2.svg"
                         vazn="110г"
                         narx="750₽"
                     />
                 </div>
                 <div className="card">
                         <Propsitem
                             title="Сельдь с картофелем"
                             rasm="images/F3.svg"
                             vazn="100/50г"
                             narx="400₽"
                         />
                     </div>
                 <div className="card">
                         <Propsitem
                             title="Грузди соленые"
                             rasm="images/F4.svg"
                             vazn="100/50г"
                             narx="575₽"
                         />
                     </div>
                 </div>
                 <div className="m2">
                     <div className="card">
                         <Propsitem
                             title="Холодец из говядины"
                             rasm="images/F5.svg"
                             vazn="130/30г"
                             narx="1100₽"
                         />
                     </div>
                     <div className="card">
                         <Propsitem
                             title="Холодец из говядины"
                             rasm="images/F6.svg"
                             vazn="110г"
                             narx="500₽"
                         />
                     </div>
                     <div className="card">
                         <Propsitem
                             title="Холодец из говядины"
                             rasm="images/F7.svg"
                             vazn="100/50г"
                             narx="800₽"
                         />
                     </div>
                     <div className="card">
                         <Propsitem
                             title="Холодец из говядины"
                             rasm="images/F8.svg"
                             vazn="100/50г"
                             narx="800₽"
                         />
                     </div>
                 </div>
                 <div className="m2">
                     <div className="card">
                         <Propsitem
                             title="Холодец из говядины"
                             rasm="images/F9.svg"
                             vazn="130/30г"
                             narx="800₽"
                         />
                     </div>
                     <div className="card">
                         <Propsitem
                             title="Холодец из говядины"
                             rasm="images/F10.svg"
                             vazn="110г"
                             narx="800₽"
                         />
                     </div>
                     <div className="card">
                         <Propsitem
                             title="Холодец из говядины"
                             rasm="images/F11.svg"
                             vazn="100/50г"
                             narx="800₽"
                         />
                     </div>
                     <div className="card">
                         <Propsitem
                             title="Холодец из говядины"
                             rasm="images/F12.svg"
                             vazn="100/50г"
                             narx="800₽"
                         />
                     </div>
                 </div>
                 <div className="m2">
                     <div className="card">
                         <Propsitem
                             title="Холодец из говядины"
                             rasm="images/F13.svg"
                             vazn="130/30г"
                             narx="800₽"
                         />
                     </div>
                     <div className="card">
                         <Propsitem
                             title="Холодец из говядины"
                             rasm="images/F14.svg"
                             vazn="110г"
                             narx="800₽"
                         />
                     </div>
                     <div className="card">
                         <Propsitem
                             title="Холодец из говядины"
                             rasm="images/F15.svg"
                             vazn="100/50г"
                             narx="800₽"
                         />
                     </div>
                     <div className="card">
                         <Propsitem
                             title="Холодец из говядины"
                             rasm="images/F16.svg"
                             vazn="100/50г"
                             narx="800₽"
                         />
                     </div>
                 </div>
                 <button className="btsalat"><p>Салаты</p></button>
                 <div className="m1">
                     <div className="card">
                         <Propsitem
                             title="Холодец из говядины"
                             rasm="images/F1.svg"
                             vazn="130/30г"
                             narx="800₽"
                         />
                     </div>
                     <div className="card">
                         <Propsitem
                             title="Севиче из тунца"
                             rasm="images/F2.svg"
                             vazn="110г"
                             narx="800₽"
                         />
                     </div>
                     <div className="card">
                         <Propsitem
                             title="Сельдь с картофелем"
                             rasm="images/F3.svg"
                             vazn="100/50г"
                             narx="800₽"
                         />
                     </div>
                     <div className="card">
                         <Propsitem
                             title="Грузди соленые"
                             rasm="images/F4.svg"
                             vazn="100/50г"
                             narx="800₽"
                         />
                     </div>
                 </div>
                 <div className="m2">
                     <div className="card">
                         <Propsitem
                             title="Холодец из говядины"
                             rasm="images/F5.svg"
                             vazn="130/30г"
                             narx="800₽"
                         />
                     </div>
                     <div className="card">
                         <Propsitem
                             title="Холодец из говядины"
                             rasm="images/F6.svg"
                             vazn="110г"
                             narx="800₽"
                         />
                     </div>
                     <div className="card">
                         <Propsitem
                             title="Холодец из говядины"
                             rasm="images/F7.svg"
                             vazn="100/50г"
                             narx="800₽"
                         />
                     </div>
                     <div className="card">
                         <Propsitem
                             title="Холодец из говядины"
                             rasm="images/F8.svg"
                             vazn="100/50г"
                             narx="800₽"
                         />
                     </div>
                 </div>
                 <div className="m2">
                     <div className="card">
                         <Propsitem
                             title="Холодец из говядины"
                             rasm="images/F9.svg"
                             vazn="130/30г"
                             narx="800₽"
                         />
                     </div>
                     <div className="card">
                         <Propsitem
                             title="Холодец из говядины"
                             rasm="images/F10.svg"
                             vazn="110г"
                             narx="800₽"
                         />
                     </div>
                     <div className="card">
                         <Propsitem
                             title="Холодец из говядины"
                             rasm="images/F11.svg"
                             vazn="100/50г"
                             narx="800₽"
                         />
                     </div>
                     <div className="card">
                         <Propsitem
                             title="Холодец из говядины"
                             rasm="images/F12.svg"
                             vazn="100/50г"
                             narx="800₽"
                         />
                     </div>
                 </div>
                 <div className="m2">
                     <div className="card">
                         <Propsitem
                             title="Холодец из говядины"
                             rasm="images/F13.svg"
                             vazn="130/30г"
                             narx="800₽"
                         />
                     </div>
                     <div className="card">
                         <Propsitem
                             title="Холодец из говядины"
                             rasm="images/F14.svg"
                             vazn="110г"
                             narx="800₽"
                         />
                     </div>
                     <div className="card">
                         <Propsitem
                             title="Холодец из говядины"
                             rasm="images/F15.svg"
                             vazn="100/50г"
                             narx="800₽"
                         />
                     </div>
                     <div className="card">
                         <Propsitem
                             title="Холодец из говядины"
                             rasm="images/F16.svg"
                             vazn="100/50г"
                             narx="800₽"
                         />
                     </div>
                 </div>
                 <button className="prosmotr">Посмотреть еще</button>
             </main>
            </>
        );

    }
}

export default Main;
