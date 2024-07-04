import './HomeSongWeb.css'
import { useRef } from 'react';
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
import iconLeftKnow from '../../../assets/icon/icon-left-know.png';
import iconRightKnow from '../../../assets/icon/icon-right-know.png';

//Card
import cardKnow1 from '../../../assets/img/GettyImages-1.png';
import cardKnow2 from '../../../assets/img/GettyImages-2.png';
import cardKnow3 from '../../../assets/img/GettyImages-3.png';
import cardKnow4 from '../../../assets/img/GettyImages-4.png';
import cardKnow5 from '../../../assets/img/GettyImages-5.png';
/***Life Center***/
import lifeCenter from '../../../assets/img/lifeCenter.png';

import icArrowForward from '../../../assets/icon/ic_arrow_forward_24px.png';
export default function HomeSongWeb() {
    return (

        <div className="home-song-web-container-grip">
            <HeaderSong />
            <HeroSong />
            <OurMission />
            <Organized />
            <KnowMoreAboutUs />
            <LifeCentricBussiness />
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
                            <span translate="no">Song</span>
                        </div>
                        <div className='song-text-strong'> 
                            <span translate="no">Song</span>
                        </div>
                        <div className='song-text'>
                            <span translate="no">Song</span>
                        </div>
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
                            <p> Focuses on understanding clients needs adipisicing
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
    let botonTouch = useRef(0);
    const slyder = (boton) => {
        if (boton == "Izquierda" && botonTouch.current < 5 - 3) {
            botonTouch.current += 1;
            const moveAmount = botonTouch.current * 25;
            const cardElements = document.querySelectorAll('.card');
            cardElements.forEach(cardElement => {
                cardElement.style.transition = 'transform 0.7s ease';
                cardElement.style.transform = `translateX(-${moveAmount}vw)`;
            });
        }
        else if (boton == "Derecha" && botonTouch.current >= 1) {
            botonTouch.current -= 1;
            const moveAmount = botonTouch.current * 25;
            const cardElements = document.querySelectorAll('.card');
            cardElements.forEach(cardElement => {
                cardElement.style.transition = 'transform 0.7s ease';
                cardElement.style.transform = `translateX(-${moveAmount}vw)`;
            });
        }


    };

    //Card Data
    const cardData = [
        {
            id: 1,
            imgName: cardKnow1,
            client: 'Client',
            buttonText: 'See More',
            link: ""
        },
        {
            id: 2,
            imgName: cardKnow2,
            client: 'Capabilities',
            buttonText: 'See More',
            link: ""
        },
        {
            id: 3,
            imgName: cardKnow3,
            client: 'Functions',
            buttonText: 'See More',
            link: ""
        },
        {
            id: 4,
            imgName: cardKnow4,
            client: 'CORP Support',
            buttonText: 'See More',
            link: ""
        },
        {
            id: 5,
            imgName: cardKnow5,
            client: 'Culture SQUAD',
            buttonText: 'See More',
            link: ""
        },

    ];

    return (
        <div className='know-more-us'>
            <div className='text-know'> <h3>Know more <strong>about us</strong></h3></div>

            <div className='carousel-content'>
                <div className='carousel-controls'>
                    <div className="icon" onClick={() => slyder("Derecha")} >
                        <img src={iconLeftKnow} alt="" />
                    </div>
                    <div className="icon" onClick={() => slyder("Izquierda")}>
                        <img src={iconRightKnow} alt="" />
                    </div>
                </div>
                <div className="gradiente">

                </div>
                <div className="corousel">
                    {cardData.map((card, index) => (
                        <div className="card" id="card" key={index}>
                            <div className='img-fondo'>
                                <img src={card.imgName} alt="" />
                            </div>
                            <div className='card-content'>
                                <div className='text'><h5>{card.client}</h5></div>
                                <div className='button-outline'>
                                    <div className='text'><h5>See More</h5></div>
                                    <div className='icon'> <img src={icArrowForward} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function LifeCentricBussiness() {
    return (
        <div className='life-centric-business'>
            <div className='lcb-content'>
                <div className='the-new-formula'>
                    <div className='tnf-content'>
                        <h2>The new formula for <br /> Growth through <br /> Relevance: <br /> <strong>Life-centric Business</strong></h2>
                        <p>Life is moving faster than ever before, our research is showing that the majority of customers have fundamentally changed their values and life’s purpose in the last year. ​ This change is creating a powerful tension between businesses and their customers: businesses are struggling to keep up with the accelerating pace of change, and customers are left feeling underserved. We call this gulf the crisis of relevance, and many clients feel ill-equipped to tackle it. <br /><br />
                            we believe the solution lies in bold new creative solutions, delivered at a faster pace than ever before. <strong>
                            These solutions will be the next great frontier for business growth, and they require a brand-new approach. One that widens a business’s aperture, and utilizes the full power of creativity, intelligence, technology, operations, industry, and ecosystem knowledge.
                                </strong> </p>
                    </div>
                    <div className='tnf-img'>
                        <div>
                            <img src={lifeCenter} alt="" />
                        </div>
                        <div>
                            <p>We call this approach life centricity</p>
                        </div>
                    </div>
                </div>
                <div className='key-ways-life-centricity'>
                    <div className='key-ways-title'>
                        <h3>Key ways from customer <br /> centricity to <strong>life centricity</strong></h3>
                    </div>
                    <div className='key-ways-card'></div>
                </div>
            </div>

        </div>
    );
}