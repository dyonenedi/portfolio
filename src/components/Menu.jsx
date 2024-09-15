import VscodeIcon from './../assets/icons/vscode_icon.svg';

function Menu(){
    return (
        <section className='menu border-light'>
            <div className="flex flex-row justify-between items-center h-full px-2 py-1">
                <img src={VscodeIcon} alt="Vscode Icon" className="w-5 ml-2"/>
                <h1 className=''>Dyon Enedi - Visual Studio Code</h1>
                <div className='flex'>
                    <span className='title_bar_1'></span>
                    <span className='title_bar_2'></span>
                    <span className='title_bar_3'></span>
                </div>
            </div>
        </section>
    )
}

export default Menu