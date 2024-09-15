import BgIcon from './../assets/icons/vscode_icon.svg'

import { Link } from 'react-router-dom'

export default function Home(){
    return (
        <div className="page_content flex-grow">
            <div className="flex flex-row justify-around items-center pt-20">
                <div className="flex flex-col justify-start items-start">
                    {/* <p className="text-7xl mb-6">Dyon Enedi</p> */}
                    <h1 className="text-7xl mb-6">Dyon Enedi</h1>
                    <h3 className="text-2xl mb-6 bio">Senior Software Engineer</h3>
                    <div className="flex flex-row gap-6">
                        <Link to="/project" className="btn">VER TRABALHOS</Link>
                        <Link to="/contact" className="btn">CONTATE-ME</Link>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src={BgIcon} className="w-full"/>
                </div>
            </div>
        </div>
    )
}