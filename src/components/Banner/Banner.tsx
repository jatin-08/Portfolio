import { useTypewriter, Cursor } from 'react-simple-typewriter'
import video from '../../assets/Banner Video.mp4'
import profile from '../../assets/profileImage-removebg-preview.png'
import "./Banner.css"

const Banner = () => {

    const [text] = useTypewriter({
        words: ['FRONTEND', 'REACTJS', 'BACKEND', 'NODEJS'],
        loop: 0,
        typeSpeed: 150,
        deleteSpeed: 100
    })

    return (
        <>
            <section className='video-container relative'>
                <video className='responsive-video' autoPlay loop muted preload='auto'>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag
                </video>
                <div className="videoContent absolute text-white">
                    <div className="imageContent relative">
                        <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                                    <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
                                    <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
                                </linearGradient>
                            </defs>
                            <mask id='mask1' mask-type='alpha'>
                                <path fill="#ffb703" d="M19.8,-29.5C26,-26.8,31.6,-21.9,34.6,-15.7C37.7,-9.5,38.1,-2,36.2,4.6C34.3,11.1,30,16.7,25.3,21.6C20.5,26.4,15.4,30.6,9.1,33.5C2.9,36.5,-4.4,38.3,-10.8,36.6C-17.2,34.9,-22.7,29.6,-26.5,23.8C-30.3,17.9,-32.5,11.5,-33.1,5C-33.7,-1.5,-32.8,-8,-31,-15C-29.2,-22.1,-26.5,-29.6,-21.2,-32.7C-15.9,-35.9,-7.9,-34.8,-0.6,-33.9C6.8,-33,13.6,-32.3,19.8,-29.5Z"
                                    width="100%"
                                    height="100%"
                                    transform="translate(50 50)"
                                    stroke-width="0"
                                    style={{ transition: 'all 0.3s ease 0s' }}>

                                </path>
                            </mask>
                            <g mask='url(#mask1)' className='group'>
                            <path fill="#ffb703" d="M19.8,-29.5C26,-26.8,31.6,-21.9,34.6,-15.7C37.7,-9.5,38.1,-2,36.2,4.6C34.3,11.1,30,16.7,25.3,21.6C20.5,26.4,15.4,30.6,9.1,33.5C2.9,36.5,-4.4,38.3,-10.8,36.6C-17.2,34.9,-22.7,29.6,-26.5,23.8C-30.3,17.9,-32.5,11.5,-33.1,5C-33.7,-1.5,-32.8,-8,-31,-15C-29.2,-22.1,-26.5,-29.6,-21.2,-32.7C-15.9,-35.9,-7.9,-34.8,-0.6,-33.9C6.8,-33,13.6,-32.3,19.8,-29.5Z"
                                width="100%"
                                opacity="0.8"
                                height="100%"
                                transform="translate(50 50)"
                                stroke-width="0"
                                style={{ transition: 'all 0.3s ease 0s' }}>
                            </path>
                            <image href={profile} className='profile-image' />
                            </g>
                        </svg>
                    </div>
                    <div className="text-white typingText">
                        <h5 className='text-center text-sm'>I'm Jatin Yadav</h5>
                        <div className='text-content'>
                            <h1>I AM A&nbsp;
                                <span>{text}</span>
                                <Cursor cursorColor='|' />
                            </h1>
                            <h2>DEVELOPER</h2>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Banner