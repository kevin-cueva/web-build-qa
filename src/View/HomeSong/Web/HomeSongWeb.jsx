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

export default function HomeSongWeb() {
    return (

        <div className="home-song-web-container-grip">
            <HeaderSong />
            <HeroSong />
            <OurMission/>
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

function OurMission(){
    return(
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