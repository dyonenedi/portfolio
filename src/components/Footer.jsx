import VscodeIcon from './../assets/icons/vscode_icon.svg';
import BranchIcon from './icons/SourceControlIcon.jsx'
import ErrorIcon from './icons/ErrorIcon.jsx'
import WarningIcon from './icons/WarningIcon.jsx'
import ReactIcon from './../assets/icons/react_icon.svg'
import PrettierIcon from './icons/CheckIcon.jsx'
import BellIcon from './icons/BellIcon.jsx'

export default function Footer(){
    return(
        <section className='footer border-light'>
            <div className="flex flex-row justify-between items-center px-2 py-1 text-white bg-zinc-800">
            <div className="flex flex-row gap-1 items-center">
                    <BranchIcon />
                    <p>main</p>
                    <ErrorIcon className='ml-2' />
                    <p>0</p>
                    <WarningIcon className='ml-2' />
                    <p>0</p>
                </div>

                <div className="flex flex-row gap-1 items-center">
                    <img src={ReactIcon} className="w-4 grayscale"/>
                    <p>Powered by React.js</p>
                    <PrettierIcon className='ml-2' />
                    <p>Prettier</p>
                    <BellIcon className='ml-2' />
                </div>
            </div>
        </section>
    )
}