const myAge = new Date().getFullYear() - 1987
const myExp = new Date().getFullYear() - 2011

export default function About(){
    return (
        <div className="page_content flex-grow">
            <div className="flex justify-start">
            <pre className="p-10">
                <code>
{
`const Me = {
        Nome: "Dyon Enedi",
        Idade: ${myAge},
        Profissão: "Coordenador de times de Back e Front-end",
        Experiencia: "${myExp} Anos",
        Religião: "Cristão",
        Sexo: "Masculino",
        Estado: "Casado",
        Hobby: ["Board Game", "Guitarra", "Video Game", "Caminhada"],
        Frase: "Somos o que fazemos pra mudar o que fomos",
        Curiosidade: "Sou autor de um board game chamado Cães Pop"
}`
}
                </code>
            </pre>
         </div>
     </div>
    )
}