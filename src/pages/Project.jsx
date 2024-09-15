import Choorn from './../assets/choorn.jpg'
import Lidiun from './../assets/lidiun.jpg'
import Wittle from './../assets/wittle.jpg'
import Poker from './../assets/legendofpoker.jpg'
import Kot from './../assets/kot.jpg'
import FishFast from './../assets/fishfast.jpg'

const projetos = [
    {
        name: "Choorn",
        img: Choorn,
        description: "Choorn foi o meu primeiro site, de vendas de produtos, feito em Macromedia Flash.",
    },
    {
        name: "Lidiun",
        img: Lidiun,
        description: "Lidiun é um framework feito em PHP para rodar grandes projetos como a rede social Wittle.",
    },
    {
        name: "Wittle",
        img: Wittle,
        description: "Wittle é uma rede social cristã completa com várias funcionalidades exclusivas.",
    },
    {
        name: "Legend of Poker",
        img: Poker,
        description: "Legend of Poker é site para montar mesas de Poker, sem dinheiro real, contra amigos ou boots.",
    },
    {
        name: "King of Thieves",
        img: Kot,
        description: "King of Thieves é um jogo originalmente de celular, que re-implementei em um solo mode.",
    },
    {
        name: "Fish Fast",
        img: FishFast,
        description: "Fish Fast é um jogo visiante de pesca e engeene building que tem elementos de RPG.",
    },
]

export default function About(){
    return (
        <div className="page_content flex-grow">
           <div className="flex justify-start">
                <div className="flex justify-around flex-wrap gap-10 mt-10">
                    {projetos.map((projeto)=>{
                        return <div key={projeto.name} className="project-item flex flex-col justify-center items-center relative w-3/12 border-gray-200 border-4 rounded-xl">
                                    <p className="project-description text-3xl color-white absolute left-auto top-2">{projeto.name}</p>
                                    <p className="project-description text-lg color-white absolute left-auto top-16 px-2 text-center">{projeto.description}</p>
                                    <img src={projeto.img} className='project-img'/>
                                </div>
                    })}
                </div>
           </div>
        </div>
    )
}