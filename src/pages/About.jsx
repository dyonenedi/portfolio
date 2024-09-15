const myAge = new Date().getFullYear() - 1987
const myExp = new Date().getFullYear() - 2011

export default function About(){
    return (
        <div className="page_content flex-grow">
            <div className="flex flex-col p-10">
                <div className='json'>
                    <span className="dec">const</span> <span className="obj-dec">Me</span> <span className="sign">=</span> <span className="obj">{`{`}</span>
                </div>
                <div className='json pl-10'>
                    Nome: <span className="str">"Dyon Enedi"</span><span className="sign">,</span><br/>
                    Idade: <span className="int">{myAge}</span><span className="sign">,</span><br/>
                    Profissão: <span className="str">"Coordenador de times de Back e Front-end"</span><span className="sign">,</span><br/>
                    Experiência: <span className="str">"{myExp} Anos"</span><span className="sign">,</span><br/>
                    Religião: <span className="str">"Cristão"</span><span className="sign">,</span><br/>
                    Sexo: <span className="str">"Masculino"</span><span className="sign">,</span><br/>
                    Estado: <span className="str">"Casado"</span><span className="sign">,</span><br/>
                    Hobby: <span className="array">[</span><span className="str">"Board Game", "Guitarra", "Video Game", "Caminhada"</span><span className="array">]</span><span className="sign">,</span><br/>
                    Frase: <span className="str">"Somos o que fazemos pra mudar o que fomos"</span><span className="sign">,</span><br/>
                    Curiosidade: <span className="str">"Sou autor de um board game chamado Cães Pop"</span><br/>

                </div>
                <div className='json'>
                    <span className="obj">{`}`}</span>
                </div>
            </div>
        </div>
    )
}