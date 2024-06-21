import './HomeSongWeb.css'
import logomark from '../../../assets/img/logomark.png'
import accentureText from '../../../assets/img/accenture.png'
import accentureSong from '../../../assets/img/Acc_Song_SvcMrk_Black_Gradient_RGB 1.png'
import headerLogoDivider from '../../../assets/img/header-logodivider.png'
import flagColombia from '../../../assets/img/flag/flag-colombia.png'
import buildbanner from '../../../assets/img/buildbanner.png'

import iconChevronLefh from '../../../assets/icon/icon-chevron-left.png'
import iconChevronRight from '../../../assets/icon/icon-chevron-right.png'

import letThere from '../../../assets/img/Let-there-be-change.png';
import sliderFill from '../../../assets/img/sliders-circle.png';
import sliderVoid from '../../../assets/img/sliders-void.png';
import path8322 from '../../../assets/icon/Path-8322.svg'
import path1476 from '../../../assets/icon/Path1476.svg'
import path4857 from '../../../assets/icon/Path4857.svg'


export default function HomeSongWeb() {
    return (

        <div className="home-song-web-container-grip">
            <HeaderSong />
            <HeroSong />
            <OurMission />
            <Organized />
            <KnowMoreAboutUs />
        </div>
    );
}

function HeaderSong() {
    return (
        <div className='header-song'>
            <div className='header-logoarea'>
                <div className='acc-logo'>
                    <img src={logomark} alt="" />
                    <img src={accentureText} alt="" />
                </div>
                <div className='header-logodivider'>
                    <img src={headerLogoDivider} alt="" />
                </div>
                <div className='acc-song-logo'>
                    <img src={accentureSong} alt="" />
                </div>
            </div>

            <div className='header-right'>
                <div className='header-navlink-group'>
                    <nav>
                        <ul>
                            <li>Client</li>
                            <li>Capabilities</li>
                            <li>Functions</li>
                            <li>Corpore Suport</li>
                            <li>Culture SQUAD</li>
                        </ul>
                    </nav>
                </div>
                <div className='header-icon-areea'>
                    <div className='lenguaje'>
                        <div className='flags'>
                            <img src={flagColombia} alt="" />
                        </div>
                        <div className='flags-text'> ES
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

function HeroSong() {
    return (
        <div className='hero-song'>
            <img src={buildbanner} alt="" />
            <div className='overlay'></div>
            <div className='content'>
                <div className='hero-content'>
                    <div className='conteiner-icon'>
                        <div className='icon-chevron'>
                            <img src={iconChevronLefh} alt="" />
                        </div>
                    </div>

                    <div className='song'>
                        <div className='song-text'>
                            Song
                        </div>
                        <div className='song-text-strong'> Song</div>
                        <div className='song-text'> Song</div>
                    </div>
                    <div className='conteiner-icon'>
                        <div className='icon-chevron'>
                            <img src={iconChevronRight} alt="" />
                        </div>
                    </div>

                </div>
                <div className='causel-control'>
                    <div className='conteiner-init'>
                        <div className='container-slider'>
                            <div>
                                <img src={sliderFill} className='slider-fill' alt="" />
                            </div>
                            <div>
                                <img src={sliderVoid} className='slider-void' alt="" />
                            </div>
                            <div>
                                <img src={sliderVoid} className='slider-void' alt="" />
                            </div>
                            <div>
                                <img src={sliderVoid} className='slider-void' alt="" />
                            </div>
                        </div>


                    </div>
                    <div className='conteiner-centert'>
                        <img src={letThere} alt="" />
                    </div>
                    <div className='conteiner-end'>

                    </div>
                </div>
            </div>
        </div>
    )
}

function OurMission() {
    return (
        <div className='our-mission'>
            <div className='container-our-mission'>
                <div className='our-mission-text'>
                    <h2>
                        We drive growth for out clients bussiness by reimagining experiences to answer human needs with purpose.
                    </h2>
                </div>

                <div className='our-mission-on-content'>
                    <div className='our-mission-clients'> <p>Our mission is to help clients <strong>drive growht</strong> through greater customer <strong>relevance </strong>
                        and <strong>competitivenses</strong>, while positively impacting the planet, employes and society.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Organized() {
    return (
        <div className='organized'>
            <div className='hwo-bg'></div>
            <div className='container-organized-element-grid'>
                <div className='container-organized-element-text'>
                    <div className='organized-title'> <h3><strong>How </strong>we´re organized?</h3></div>
                    <div className='organized-text'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptas saepe accusantium possimus beatae corporis tenetur. Laudantium odit voluptatibus fugit similique, officiis facere assumenda rerum? Quidem autem nulla quos laudantium.

                        </p>
                    </div>
                </div>
                <div className='conteiner-organized-card'>
                    <div className='organized-card'>
                        <div className='card-content'>
                            <img src={path8322} alt="" />
                            <h4 className='acc-purple2'>Client</h4>
                            <p> Focuses on understanding client's needs adipisicing
                                building those relationship.
                            </p>
                        </div>
                        <div className='card-chips'>
                            <div><p className='acc-purple2'>Sales</p></div>
                            <div><p className='acc-purple2'>Solutioning</p></div>
                            <div><p className='acc-purple2'>Delivery</p></div>
                        </div>
                    </div>
                    <div className='organized-card'>
                        <div className='card-content'>
                            <img src={path1476} alt="" />
                            <h4 className='acc-purple1'>Capability</h4>
                            <p> Focuses on solving client needs challenges through
                                talent and tools, magnifying craft and innovation.
                            </p>
                        </div>
                        <div className='card-chips'>
                            <div><p className='acc-purple1'>Desing</p></div>
                            <div><p className='acc-purple1'>Build</p></div>
                            <div><p className='acc-purple1'>Communication</p></div>
                            <div><p className='acc-purple1'>Intelligence</p></div>
                            <div><p className='acc-purple1'>Run</p></div>
                        </div>
                    </div>
                    <div className='organized-card'>
                        <div className='card-content'>
                            <img src={path4857} alt="" />
                            <h4 className='acc-purple3'>Funtions</h4>
                            <p> Focus on driving relevance and differentiation across
                                OneAccenture funcional strategies.
                            </p>
                        </div>
                        <div className='card-chips'>
                            <div><p className='acc-purple3'>Growth & Product lnn</p></div>
                            <div><p className='acc-purple3'>Marketing</p></div>
                            <div><p className='acc-purple3'>Commerce</p></div>
                            <div><p className='acc-purple3'>Sales & Svc</p></div>
                            <div><p className='acc-purple3'>Industry</p></div>
                            <div><p className='acc-purple3'>Ecosystem</p></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

}

function KnowMoreAboutUs() {
    return (
        <div className='know-more-us'>
            <div className='text-know'> <h3>Know more about us</h3></div>
            
            <div className='carousel-content'>
                <div className='carousel-controls'>
                    <div className="icon"></div>
                    <div className="icon"></div>
                </div>
                <div className="gradiente"></div>
                <div className="corousel">
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </div>
            </div>
        </div>
    );
}