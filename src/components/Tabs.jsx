import ReactIcon from './../assets/icons/react_icon.svg'
import HtmlIcon from './../assets/icons/html_icon.svg'
import JsIcon from './../assets/icons/js_icon.svg'
import CssIcon from './../assets/icons/css_icon.svg'
import GithubIcon from './icons/GithubIcon'
import { Link, useLocation } from 'react-router-dom'

const Menu = [
    {name: 'Home.jsx', path: '/home', icon: ReactIcon},
    {name: 'About.js', path: '/about', icon: JsIcon},
    {name: 'Project.css', path: '/project', icon: CssIcon},
    {name: 'Contact.html', path: '/contact', icon: HtmlIcon},
    {name: 'GitHub.md', path: '/github', icon: GithubIcon}
]

export default function Tabs(){
    return (
        <div className="tabs">
            <div className="flex flex-row">
                {Menu.map((item)=>{
                    if(item.path == "/github"){
                        return <Link to={item.path} key={item.path} className={`tab_link px-4 py-2 flex items-center gap-1 ${(item.path == useLocation().pathname) ? "tab_content_actived": "tab_content"}`}>
                            <item.icon className="w-4"/> 
                            {item.name}
                        </Link>
                    } else {
                        return <Link to={item.path} key={item.path} className={`tab_link px-4 py-2 flex items-center gap-1 ${(item.path == useLocation().pathname) ? "tab_content_actived": "tab_content"}`}>
                            <img src={item.icon} className="w-4"/> 
                            {item.name}
                        </Link>
                    }
                })}
            </div>
        </div>
    )
}