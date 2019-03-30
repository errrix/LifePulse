import React from "react";

class BlogHomepage extends React.Component {

    render() {
        return (
           <div>
               <div className="homepage-blog-section">
                   <div className="container">
                       <h2 className="h2Underline">
                           ИНТЕРЕСНОЕ В БЛОГЕ
                       </h2>

                       <div className="main-article-wrapper">
                           <div className="main-article">
                               <img src="../../../dist/img/header-baner2.jpg" alt=""/>
                               <div className="text-block">
                                   <div>
                                       <h4>
                                           НЕСКОЛЬКО ДНЕЙ НАЗАД БЛАГОДАРЯ LIFESPULSE ПРООПЕРИРОВАЛИ ГАРШИНА
                                           ВЯЧЕСЛАВА
                                       </h4>
                                       <h6>
                                           Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis
                                           dis parturient montes,
                                           nascetur
                                           ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis
                                           tellus mollis orci, sed
                                           rhoncus
                                           sapien nunc eget. Proin sodales pulvinar tempor.
                                       </h6>

                                       <a href="/"> Читать дальше</a>
                                   </div>
                                   <div className="date">
                                       12.08.2018
                                   </div>
                               </div>
                           </div>
                       </div>


                       <ul className="blog-article-list">
                           <li className="blog-card">
                               <img src="../../../dist/img/card1.jpg" alt=""/>

                               <div className="text-block">
                                   <div>
                                       <div className="date">
                                           12.08.2018
                                       </div>
                                       <h4>
                                           НЕСКОЛЬКО ДНЕЙ НАЗАД БЛАГОДАРЯ LIFESPULSE ПРООПЕРИРОВАЛИ ГАРШИНА
                                           ВЯЧЕСЛАВА
                                       </h4>

                                       <h6>
                                           Острое нарушение мозгового кровообращения по ишемическому типу в басейне
                                           левой внутренней
                                           сонной
                                           артерии. Острое нарушение мозгового кровообращения по ишемическому типу
                                           в басейне левой
                                           внутренней
                                           сонной артерии
                                       </h6>
                                   </div>


                                   <a href="/"> Читать дальше</a>
                               </div>
                           </li>
                           <li className="blog-card">
                               <img src="../../../dist/img/card2.jpg" alt=""/>

                               <div className="text-block">
                                   <div>
                                       <div className="date">
                                           12.08.2018
                                       </div>
                                       <h4>
                                           НЕСКОЛЬКО ДНЕЙ НАЗАД БЛАГОДАРЯ LIFESPULSE ПРООПЕРИРОВАЛИ ГАРШИНА
                                           ВЯЧЕСЛАВА
                                       </h4>

                                       <h6>
                                           Острое нарушение мозгового кровообращения по ишемическому типу в басейне
                                           левой внутренней
                                           сонной
                                           артерии. Острое нарушение мозгового кровообращения по ишемическому типу
                                           в басейне левой
                                           внутренней
                                           сонной артерии
                                       </h6>
                                   </div>


                                   <a href="/"> Читать дальше</a>
                               </div>
                           </li>
                           <li className="blog-card">
                               <img src="../../../dist/img/card3.jpg" alt=""/>

                               <div className="text-block">
                                   <div>
                                       <div className="date">
                                           12.08.2018
                                       </div>
                                       <h4>
                                           НЕСКОЛЬКО ДНЕЙ НАЗАД БЛАГОДАРЯ LIFESPULSE ПРООПЕРИРОВАЛИ ГАРШИНА
                                           ВЯЧЕСЛАВА
                                       </h4>

                                       <h6>
                                           Острое нарушение мозгового кровообращения по ишемическому типу в басейне
                                           левой внутренней
                                           сонной
                                           артерии. Острое нарушение мозгового кровообращения по ишемическому типу
                                           в басейне левой
                                           внутренней
                                           сонной артерии
                                       </h6>
                                   </div>


                                   <a href="/"> Читать дальше</a>
                               </div>
                           </li>
                       </ul>

                       <div className="link-wrapper">
                           <a href="/">Смотреть больше публикаций</a>
                       </div>
                   </div>
               </div>
               <div className="subscribe-block">
                   <div className="container">
                       <img src="../../../dist/img/subscrible-img.jpg" alt=""/>
                       <div className="subscribe-block-wrapper">
                           <h2>
                               Следите за новостями LIFES<span>PULSE</span>
                           </h2>
                           <form action="">
                               <label>
                                   <input type="email" required placeholder="Введите Ваш e-mail"/>
                               </label>
                               <button type="submit" className="btn">
                                   Подписаться
                               </button>
                           </form>
                       </div>
                   </div>
               </div>

           </div>
        )
    }
};

export default BlogHomepage;