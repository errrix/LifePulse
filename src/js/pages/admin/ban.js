import React from "react";

import AdminMenu from '../../components/adminMenu'
import AdminHeader from '../../components/adminHeader'

class ban extends React.Component {

    render() {
        return (
            <div>
                <AdminHeader/>
                <main className="account-admin-block">
                    <div className="account-admin-block-wrapper">
                        <AdminMenu/>

                        <div className="account-admin-content-block account-admin-appeal">

                            <header>
                                <h1>
                                    БАНЫ
                                </h1>
                            </header>

                            <div className="account-admin-appeal-wrapper">
                                <table className="account-admin-table">
                                    <tr className="title">
                                        <th>№</th>
                                        <th>Пользователь</th>
                                        <th>Дата</th>
                                        <th>Причина</th>
                                        <th>Действия</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Камишанченко Оксана</td>
                                        <td>
                                            27.12.19
                                        </td>
                                        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam
                                            dolorum excepturi
                                            magni! Ab assumenda at autem, iure laudantium neque nesciunt nihil nisi
                                            placeat quas quasi
                                            qui sit temporibus velit.
                                        </td>
                                        <td className="button-block">
                                            <div className="popup m--admin-show-appeal hide-popup">
                                                <div className="popup-content-block">
                                                    <div className="popup-content-block-wrapper">
                                                        <div className="popup-step">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                A ad,
                                                                blanditiis deleniti doloremque, earum expedita in ipsum
                                                                laudantium nisi
                                                                obcaecati odio pariatur perspiciatis quasi rem tenetur
                                                                totam veritatis.
                                                                Amet atque consectetur dolorum error et eveniet expedita
                                                                explicabo
                                                                facilis fuga id impedit itaque labore laborum minima
                                                                nihil obcaecati
                                                                omnis, porro praesentium quae quasi quibusdam quis
                                                                similique soluta ut
                                                                veniam? Blanditiis earum eligendi esse eum, explicabo
                                                                inventore magni
                                                                ratione sit unde voluptatum. A accusantium aliquid
                                                                assumenda beatae
                                                                corporis delectus deserunt esse facilis inventore ipsum
                                                                iure laudantium
                                                                natus nulla, odio officia pariatur perferendis
                                                                provident, rem sit unde
                                                                vel veniam voluptatibus. Animi delectus dolor et,
                                                                expedita fugiat ipsam,
                                                                itaque laborum modi odio quaerat quam quisquam
                                                                repellendus saepe ullam
                                                                vel velit vero voluptatem. Ab accusantium adipisci atque
                                                                consectetur
                                                                deleniti ducimus, excepturi facere fuga incidunt ipsum
                                                                labore laudantium
                                                                non nulla obcaecati, odio odit perspiciatis quaerat quod
                                                                rerum
                                                                temporibus tenetur totam veniam! At consequatur
                                                                consequuntur cumque
                                                                delectus dicta dolorem eligendi est et inventore
                                                                molestias nam neque
                                                                obcaecati odio quisquam quos repellendus saepe similique
                                                                veniam, vero
                                                                voluptate. Cum debitis ducimus ex numquam porro possimus
                                                                praesentium
                                                                quidem repudiandae rerum voluptatibus? Accusamus aperiam
                                                                autem
                                                                blanditiis debitis, ducimus eius et illum ipsum maiores
                                                                molestias nihil,
                                                                nisi placeat porro possimus quas quis sapiente
                                                                temporibus ullam veniam
                                                                vero! Accusantium beatae consequatur distinctio eos est
                                                                explicabo itaque
                                                                libero molestias non, quam repudiandae, tempora tempore
                                                                temporibus?
                                                                Deserunt ducimus facere harum id quasi quod vel! Ad
                                                                adipisci alias
                                                                aliquam asperiores aspernatur cupiditate deleniti dicta
                                                                doloribus
                                                                ducimus eos error, eum exercitationem expedita fugit
                                                                illum ipsum magnam
                                                                molestias nemo, nesciunt nisi nulla numquam possimus
                                                                quae quia quisquam
                                                                quod repellendus reprehenderit sed sit sunt tempora
                                                                ullam vitae
                                                                voluptate? A beatae corporis dolore eaque earum eius
                                                                eveniet iure labore
                                                                laborum non, praesentium quibusdam quis sapiente totam
                                                                voluptates.
                                                                Consequuntur dolorem eum, eveniet ex in quod saepe sint.
                                                                At id maxime
                                                                nam!</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                            <button className="admin-open-appeal">
                                                <svg aria-hidden="true" data-prefix="fas" data-icon="pen-square"
                                                     className="svg-inline--fa fa-pen-square fa-w-14"
                                                     xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 448 512">
                                                    <path
                                                        d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1zM345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9z"/>
                                                </svg>
                                            </button>
                                            <a href="/">
                                                <svg aria-hidden="true" data-prefix="fas" data-icon="ban"
                                                     className="svg-inline--fa fa-ban fa-w-16"
                                                     xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 512 512">
                                                    <path
                                                        d="M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z"/>
                                                </svg>
                                            </a>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>1</td>
                                        <td>Камишанченко Оксана</td>
                                        <td>
                                            27.12.19
                                        </td>
                                        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam
                                            dolorum excepturi
                                            magni! Ab assumenda at autem, iure laudantium neque nesciunt nihil nisi
                                            placeat quas quasi
                                            qui sit temporibus velit.
                                        </td>
                                        <td className="button-block">
                                            <div className="popup m--admin-show-appeal hide-popup">
                                                <div className="popup-content-block">
                                                    <div className="popup-content-block-wrapper">
                                                        <div className="popup-step">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                A ad,
                                                                blanditiis deleniti doloremque, earum expedita in ipsum
                                                                laudantium nisi
                                                                obcaecati odio pariatur perspiciatis quasi rem tenetur
                                                                totam veritatis.
                                                                Amet atque consectetur dolorum error et eveniet expedita
                                                                explicabo
                                                                facilis fuga id impedit itaque labore laborum minima
                                                                nihil obcaecati
                                                                omnis, porro praesentium quae quasi quibusdam quis
                                                                similique soluta ut
                                                                veniam? Blanditiis earum eligendi esse eum, explicabo
                                                                inventore magni
                                                                ratione sit unde voluptatum. A accusantium aliquid
                                                                assumenda beatae
                                                                corporis delectus deserunt esse facilis inventore ipsum
                                                                iure laudantium
                                                                natus nulla, odio officia pariatur perferendis
                                                                provident, rem sit unde
                                                                vel veniam voluptatibus. Animi delectus dolor et,
                                                                expedita fugiat ipsam,
                                                                itaque laborum modi odio quaerat quam quisquam
                                                                repellendus saepe ullam
                                                                vel velit vero voluptatem. Ab accusantium adipisci atque
                                                                consectetur
                                                                deleniti ducimus, excepturi facere fuga incidunt ipsum
                                                                labore laudantium
                                                                non nulla obcaecati, odio odit perspiciatis quaerat quod
                                                                rerum
                                                                temporibus tenetur totam veniam! At consequatur
                                                                consequuntur cumque
                                                                delectus dicta dolorem eligendi est et inventore
                                                                molestias nam neque
                                                                obcaecati odio quisquam quos repellendus saepe similique
                                                                veniam, vero
                                                                voluptate. Cum debitis ducimus ex numquam porro possimus
                                                                praesentium
                                                                quidem repudiandae rerum voluptatibus? Accusamus aperiam
                                                                autem
                                                                blanditiis debitis, ducimus eius et illum ipsum maiores
                                                                molestias nihil,
                                                                nisi placeat porro possimus quas quis sapiente
                                                                temporibus ullam veniam
                                                                vero! Accusantium beatae consequatur distinctio eos est
                                                                explicabo itaque
                                                                libero molestias non, quam repudiandae, tempora tempore
                                                                temporibus?
                                                                Deserunt ducimus facere harum id quasi quod vel! Ad
                                                                adipisci alias
                                                                aliquam asperiores aspernatur cupiditate deleniti dicta
                                                                doloribus
                                                                ducimus eos error, eum exercitationem expedita fugit
                                                                illum ipsum magnam
                                                                molestias nemo, nesciunt nisi nulla numquam possimus
                                                                quae quia quisquam
                                                                quod repellendus reprehenderit sed sit sunt tempora
                                                                ullam vitae
                                                                voluptate? A beatae corporis dolore eaque earum eius
                                                                eveniet iure labore
                                                                laborum non, praesentium quibusdam quis sapiente totam
                                                                voluptates.
                                                                Consequuntur dolorem eum, eveniet ex in quod saepe sint.
                                                                At id maxime
                                                                nam!</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                            <button className="admin-open-appeal">
                                                <svg aria-hidden="true" data-prefix="fas" data-icon="pen-square"
                                                     className="svg-inline--fa fa-pen-square fa-w-14"
                                                     xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 448 512">
                                                    <path
                                                        d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1zM345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9z"/>
                                                </svg>
                                            </button>
                                            <a href="/">
                                                <svg aria-hidden="true" data-prefix="fas" data-icon="ban"
                                                     className="svg-inline--fa fa-ban fa-w-16"
                                                     xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 512 512">
                                                    <path
                                                        d="M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z"/>
                                                </svg>
                                            </a>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>1</td>
                                        <td>Камишанченко Оксана</td>
                                        <td>
                                            27.12.19
                                        </td>
                                        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam
                                            dolorum excepturi
                                            magni! Ab assumenda at autem, iure laudantium neque nesciunt nihil nisi
                                            placeat quas quasi
                                            qui sit temporibus velit.
                                        </td>
                                        <td className="button-block">
                                            <div className="popup m--admin-show-appeal hide-popup">
                                                <div className="popup-content-block">
                                                    <div className="popup-content-block-wrapper">
                                                        <div className="popup-step">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                A ad,
                                                                blanditiis deleniti doloremque, earum expedita in ipsum
                                                                laudantium nisi
                                                                obcaecati odio pariatur perspiciatis quasi rem tenetur
                                                                totam veritatis.
                                                                Amet atque consectetur dolorum error et eveniet expedita
                                                                explicabo
                                                                facilis fuga id impedit itaque labore laborum minima
                                                                nihil obcaecati
                                                                omnis, porro praesentium quae quasi quibusdam quis
                                                                similique soluta ut
                                                                veniam? Blanditiis earum eligendi esse eum, explicabo
                                                                inventore magni
                                                                ratione sit unde voluptatum. A accusantium aliquid
                                                                assumenda beatae
                                                                corporis delectus deserunt esse facilis inventore ipsum
                                                                iure laudantium
                                                                natus nulla, odio officia pariatur perferendis
                                                                provident, rem sit unde
                                                                vel veniam voluptatibus. Animi delectus dolor et,
                                                                expedita fugiat ipsam,
                                                                itaque laborum modi odio quaerat quam quisquam
                                                                repellendus saepe ullam
                                                                vel velit vero voluptatem. Ab accusantium adipisci atque
                                                                consectetur
                                                                deleniti ducimus, excepturi facere fuga incidunt ipsum
                                                                labore laudantium
                                                                non nulla obcaecati, odio odit perspiciatis quaerat quod
                                                                rerum
                                                                temporibus tenetur totam veniam! At consequatur
                                                                consequuntur cumque
                                                                delectus dicta dolorem eligendi est et inventore
                                                                molestias nam neque
                                                                obcaecati odio quisquam quos repellendus saepe similique
                                                                veniam, vero
                                                                voluptate. Cum debitis ducimus ex numquam porro possimus
                                                                praesentium
                                                                quidem repudiandae rerum voluptatibus? Accusamus aperiam
                                                                autem
                                                                blanditiis debitis, ducimus eius et illum ipsum maiores
                                                                molestias nihil,
                                                                nisi placeat porro possimus quas quis sapiente
                                                                temporibus ullam veniam
                                                                vero! Accusantium beatae consequatur distinctio eos est
                                                                explicabo itaque
                                                                libero molestias non, quam repudiandae, tempora tempore
                                                                temporibus?
                                                                Deserunt ducimus facere harum id quasi quod vel! Ad
                                                                adipisci alias
                                                                aliquam asperiores aspernatur cupiditate deleniti dicta
                                                                doloribus
                                                                ducimus eos error, eum exercitationem expedita fugit
                                                                illum ipsum magnam
                                                                molestias nemo, nesciunt nisi nulla numquam possimus
                                                                quae quia quisquam
                                                                quod repellendus reprehenderit sed sit sunt tempora
                                                                ullam vitae
                                                                voluptate? A beatae corporis dolore eaque earum eius
                                                                eveniet iure labore
                                                                laborum non, praesentium quibusdam quis sapiente totam
                                                                voluptates.
                                                                Consequuntur dolorem eum, eveniet ex in quod saepe sint.
                                                                At id maxime
                                                                nam!</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                            <button className="admin-open-appeal">
                                                <svg aria-hidden="true" data-prefix="fas" data-icon="pen-square"
                                                     className="svg-inline--fa fa-pen-square fa-w-14"
                                                     xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 448 512">
                                                    <path
                                                        d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1zM345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9z"/>
                                                </svg>
                                            </button>
                                            <a href="/">
                                                <svg aria-hidden="true" data-prefix="fas" data-icon="ban"
                                                     className="svg-inline--fa fa-ban fa-w-16"
                                                     xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 512 512">
                                                    <path
                                                        d="M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z"/>
                                                </svg>
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>

            </div>

        )
    }
};


export default ban;