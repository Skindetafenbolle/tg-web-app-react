import {wavesexchange} from "ccxt";

const tg = window.Telegram.WebApp;

export function useTelegram(){
    const onClose = () =>{
        tg.close()
    }

    const wave = new wavesexchange()
    const onToggleButton = () =>{
        if(tg.MainButton.isVisible){
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }

    // const CurrentCourse = () =>{
    //     wave.
    // }

    return{
        onClose,
        onToggleButton,
        tg,
        user:tg.initDataUnsafe?.user,
    }
}