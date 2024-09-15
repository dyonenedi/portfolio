import FileIcon from './icons/FilesIcon'
import GithubIcon from './icons/GithubIcon'
import CodeIcon from './icons/CodeIcon'
import MailIcon from './icons/MailIcon'
import AcountIcon from './icons/AccountIcon'
import CofigIcon from './icons/SettingsIcon'

export default function Aside(){
    return (
        <aside className="aside_menu flex justify-center">
            <div className="flex flex-col justify-between w-full">
                <div className="flex flex-col items-center gap-6">
                    <FileIcon fill="gray" className="aside_icon mt-5"/>
                    <CodeIcon fill="gray" className="aside_icon" />
                    <MailIcon fill="gray" className="aside_icon" />
                    <GithubIcon fill="gray" className="aside_icon" />
                </div>

                <div className="flex flex-col items-center gap-6">
                    <AcountIcon fill="gray" className="aside_icon"/>
                    <CofigIcon fill="gray" className="aside_icon mb-4" />
                </div>
            </div>
        </aside>
    )
}