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
export default function HomeSongWeb() {
    return (

        <div className="home-song-web-container-grip">
            <HeaderSong/>
            <HeroSong/>
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
                    <img src ={headerLogoDivider} alt="" />
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

function HeroSong(){
    return(
        <div className='hero-song'>
            <img src= {buildbanner} alt="" />
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
                        <div className='circle-1 pading-button'>0</div>
                        <div className='pading-button'>o</div>
                        <div className='pading-button'>0</div>
                        <div className='pading-button'>o</div>
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