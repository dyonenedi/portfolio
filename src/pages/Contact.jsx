import ContactImg from './../assets/contact.png'

export default function Contact(){
    return (
        <div className="page_content flex-grow">
            <div className="flex justify-start">
                <div className="m-10">
                    <p className="text-xl">
                        <span className="text-xl text-slate-400 pl-3">Mande-me um E-mail: 
                        </span> dyonenedi@gmail.com
                    </p>

                    <img src={ContactImg} className="w-2/5 pt-10 bluer" />
                </div>
            </div>
        </div>
    )
}