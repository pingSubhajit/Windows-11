import '../../styles/utils/Taskbar.scss'
import start_icon from '../../media/start-icon.svg'
import search from '../../media/search.svg'
import multi_desktop from '../../media/multi-desktop.svg'
import chrome from '../../media/app-icons/chrome.svg'
import microsoft_edge from '../../media/app-icons/microsoft-edge-1.svg'
import vscode from '../../media/app-icons/visual-studio-code-1.svg'
import explorer from '../../media/app-icons/explorer.svg'
import store from '../../media/app-icons/store.svg'
import actionLeft from '../../media/action-left.svg'
import actionRight from '../../media/action-right.svg'
import StartMenu from "./StartMenu";
import {useEffect, useRef, useState} from "react"
import Calculator from "./Calculator"
import {AnimatePresence} from "framer-motion"

const Taskbar = () => {

    const [startMenuFlag, setStartMenuFlag] = useState(false)
    const [calculatorFlag, setCalculatorFlag] = useState(false)
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    const icon = useRef()

    const startTime = () => {
        const today = new Date()
        setDate(`${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`)
        setTime(formatAMPM(today))
        setTimeout(startTime, 1000)
    }

    const formatAMPM = (date) => {
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let ampm = hours >= 12 ? 'PM' : 'AM'
        hours = hours % 12
        hours = hours ? hours : 12
        minutes = minutes < 10 ? '0'+minutes : minutes
        return hours + ':' + minutes + ' ' + ampm
    }

    useEffect(() => {
        startTime()
    }, [])

    return (
        <div className="taskbar">
            <section w/>

            <section className="taskbar_middle_section">
                <img src={start_icon} className="taskbar_app_icon" ref={icon} onClick={() => setStartMenuFlag(!startMenuFlag)} alt=""/>
                <img src={search} className="taskbar_app_icon" alt=""/>
                <img src={multi_desktop} className="taskbar_app_icon" alt=""/>
                <img src={chrome} className="taskbar_app_icon" alt=""/>
                <img src={microsoft_edge} className="taskbar_app_icon" alt=""/>
                <img src={vscode} className="taskbar_app_icon" alt=""/>
                <img src={explorer} className="taskbar_app_icon" alt=""/>
                <img src={store} className="taskbar_app_icon" alt=""/>
            </section>

            <section className="taskbar_action_center">
                <img src={actionLeft} alt="" className="taskbar_action_left"/>

                <div className="date_time_block">
                    <span className="date_time time">{time}</span>
                    <span className="date_time date">{date}</span>
                </div>

                <img src={actionRight} alt="" className="taskbar_action_right"/>
            </section>

            <AnimatePresence>
                {startMenuFlag && <StartMenu flag={startMenuFlag} setFunction={setStartMenuFlag} icon={icon} setCalculator={setCalculatorFlag} calculatorFlag={calculatorFlag} />}
            </AnimatePresence>

            <AnimatePresence>
                {calculatorFlag && <Calculator flag={calculatorFlag} setFunction={setCalculatorFlag}/>}
            </AnimatePresence>
        </div>
    )
}

export default Taskbar