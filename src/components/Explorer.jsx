import ReactIcon from './../assets/icons/react_icon.svg'
import HtmlIcon from './../assets/icons/html_icon.svg'
import JsIcon from './../assets/icons/js_icon.svg'
import CssIcon from './../assets/icons/css_icon.svg'
import GithubIcon from './icons/GithubIcon'
import ArrowDownIcon from './icons/ChevronRight'

import { Link, useLocation } from 'react-router-dom'

const Menu = [
    {name: 'Home.jsx', path: '/home', icon: ReactIcon},
    {name: 'About.json', path: '/about', icon: JsIcon},
    {name: 'Project.js', path: '/project', icon: CssIcon},
    {name: 'Contact.html', path: '/contact', icon: HtmlIcon},
    {name: 'GitHub.md', path: '/github', icon: GithubIcon}
]

export default function Explorer(){
    return (
        <menu className="explorer flex justify-center border-light-x">
            <div className="w-full p-4">
                <h2 className='mb-2'>EXPLORER</h2>

                <div className='flex flex-row items-center'>
                    <ArrowDownIcon className='rotate-90' /> <p>Portfolio</p>
                </div>
                <menu className='flex flex-col justify-center'>
                    {Menu.map((item)=>{
                        if(item.path == "/github"){
                            return <Link to={item.path} key={item.path} className={`flex items-center ml-4 cursor-pointer py-1 ${(item.path == useLocation().pathname) ? 'explorer_actived': ''}`}>
                                <item.icon className='w-4' /> 
                                <p className='ml-1'>{item.name}</p>
                            </Link>
                        } else {
                            return <Link to={item.path} key={item.path} className={`flex items-center ml-4 cursor-pointer py-1 ${(item.path == useLocation().pathname) ? 'explorer_actived': ''}`}>
                                <img src={item.icon} className="w-4"/> 
                                <p className='ml-1'>{item.name}</p>
                            </Link>
                        }
                    })}
                </menu>
            </div>
        </menu>
    )
}