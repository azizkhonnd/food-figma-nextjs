import './Sidebar.css'
import Image from 'next/image'
import fireImg from './img/fire-svg.svg'
import homeImg from './img/home-img.svg'
import notify from './img/Notification.svg'
import heart from './img/Heart.svg'
import shopBag from './img/Bag.svg'
import ticket from './img/TicketSale.svg'
import settingsImg from './img/Settings.svg'




const Sidebar = () => {
    return (
        <div className='sidebar__component'>
            <div className='sidebar'>
                <div className='sidebar__logo'>
                    <Image src={fireImg} alt='img' width={41} height={40} />
                </div>
                <div className='sidebarContainer'>
                    <div className='homeImg'>
                        <a href='/'>
                            <Image src={homeImg} alt='img' width={29} height={27} />
                        </a>
                    </div>
                    <div>
                        <a href='/'>
                            <Image src={notify} alt='img' width={30} height={30} />
                        </a>
                    </div>
                    <div>
                        <a href='/'>
                            <Image src={heart} alt='img' width={30} height={30} />
                        </a>
                    </div>
                    <div>
                        <a href='/'>
                            <Image src={shopBag} alt='img' width={30} height={30} />
                        </a>
                    </div>
                    <div>
                        <a href='/'>
                            <Image src={ticket} alt='img' width={30} height={30} />
                        </a>
                    </div>
                    <div>
                        <a href='/'>
                            <Image src={settingsImg} alt='img' width={30} height={30} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
