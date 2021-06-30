import '/src/styles/utils/StartMenu.scss'
import arrow from '/src/media/arrow.svg'
import edge from '/src/media/app-icons/microsoft-edge-1.svg'
import mail from '/src/media/app-icons/email.svg'
import calendar from '/src/media/app-icons/calendar.svg'
import store from '/src/media/app-icons/store.svg'
import photos from '/src/media/app-icons/gallery.svg'
import weather from '/src/media/app-icons/weather.svg'
import calculator from '/src/media/app-icons/calculator.svg'
import clock from '/src/media/app-icons/clock.svg'
import camera from '/src/media/app-icons/camera.svg'
import music from '/src/media/app-icons/music.svg'
import explorer from '/src/media/app-icons/explorer.svg'
import whiteboard from '/src/media/app-icons/whiteboard.svg'
import snipping_tool from '/src/media/app-icons/snip.svg'
import vscode from '/src/media/app-icons/visual-studio-code-1.svg'
import chrome from '/src/media/app-icons/chrome.svg'
import node from '/src/media/app-icons/node.svg'
import user from '/src/media/user.svg'
import power from '/src/media/shut-down.svg'
import {useEffect, useRef} from "react"
import {motion} from "framer-motion"

const StartMenu = ({flag, setFunction, icon, setCalculator, calculatorFlag}) => {

    const start = useRef()

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);
        // return function to be called when unmounted
        return () => {
            document.removeEventListener("mousedown", handleClick);
        }
    }, [])

    const handleClick = e => {
        if (start.current.contains(e.target) || icon.current.contains(e.target)) {
            return null
        }
        setFunction(false)
    }

    return (
        <motion.div key={start} ref={start} className="start_menu" transition={{ type: "tween" }} initial={{ y: '50%', x: "-50%", opacity: 0 }} animate={{ y: "0", x: "-50%", opacity: 1 }} exit={{ y: '50%', x: "-50%", opacity: 0 }}>
            <section className="start_menu_section start_menu_pinned_section">
                <div className="start_menu_section_header">
                    <h3 className="start_menu_section_header_title">Pinned</h3>
                    <button className="start_menu_section_header_button">
                        All apps
                        <img src={arrow} className="start_menu_section_header_button_arrow" alt=""/>
                    </button>
                </div>
                <div className="start_menu_pinned_app_section">
                    {/* Microsoft Edge */}
                    <div className="start_menu_single_pinned_app_block">
                        <img src={edge} alt="" className="start_menu_single_app_icon"/>
                        <p className="start_menu_single_app_name">Microsoft Edge</p>
                    </div>

                    {/* Mail */}
                    <div className="start_menu_single_pinned_app_block">
                        <img src={mail} alt="" className="start_menu_single_app_icon"/>
                        <p className="start_menu_single_app_name">Mail</p>
                    </div>

                    {/* Calendar */}
                    <div className="start_menu_single_pinned_app_block">
                        <img src={calendar} alt="" className="start_menu_single_app_icon"/>
                        <p className="start_menu_single_app_name">Calendar</p>
                    </div>

                    {/* Store */}
                    <div className="start_menu_single_pinned_app_block">
                        <img src={store} alt="" className="start_menu_single_app_icon"/>
                        <p className="start_menu_single_app_name">Microsoft Store</p>
                    </div>

                    {/* Photos */}
                    <div className="start_menu_single_pinned_app_block">
                        <img src={photos} alt="" className="start_menu_single_app_icon"/>
                        <p className="start_menu_single_app_name">Photos</p>
                    </div>

                    {/* Weather */}
                    <div className="start_menu_single_pinned_app_block">
                        <img src={weather} alt="" className="start_menu_single_app_icon"/>
                        <p className="start_menu_single_app_name">Weather</p>
                    </div>

                    {/* Calculator.jsx */}
                    <div onClick={() => {
                        setCalculator(!calculatorFlag)
                        setFunction(!flag)
                    }} className="start_menu_single_pinned_app_block" >
                        <img src={calculator} alt="" className="start_menu_single_app_icon"/>
                        <p className="start_menu_single_app_name">Calculator</p>
                    </div>

                    {/* Clock */}
                    <div className="start_menu_single_pinned_app_block">
                        <img src={clock} alt="" className="start_menu_single_app_icon"/>
                        <p className="start_menu_single_app_name">Alarms & Clock</p>
                    </div>

                    {/* Camera */}
                    <div className="start_menu_single_pinned_app_block">
                        <img src={camera} alt="" className="start_menu_single_app_icon"/>
                        <p className="start_menu_single_app_name">Camera</p>
                    </div>

                    {/* Music */}
                    <div className="start_menu_single_pinned_app_block">
                        <img src={music} alt="" className="start_menu_single_app_icon"/>
                        <p className="start_menu_single_app_name">Music</p>
                    </div>

                    {/* Explorer */}
                    <div className="start_menu_single_pinned_app_block">
                        <img src={explorer} alt="" className="start_menu_single_app_icon"/>
                        <p className="start_menu_single_app_name">File Explorer</p>
                    </div>

                    {/* Whiteboard */}
                    <div className="start_menu_single_pinned_app_block">
                        <img src={whiteboard} alt="" className="start_menu_single_app_icon"/>
                        <p className="start_menu_single_app_name">Whiteboard</p>
                    </div>

                    {/* Snipping Tool */}
                    <div className="start_menu_single_pinned_app_block">
                        <img src={snipping_tool} alt="" className="start_menu_single_app_icon"/>
                        <p className="start_menu_single_app_name">Snipping Tool</p>
                    </div>
                </div>
            </section>

            <section className="start_menu_section start_menu_recommended_section">
                <div className="start_menu_section_header">
                    <h3 className="start_menu_section_header_title">Recommended</h3>
                    <button className="start_menu_section_header_button">
                        More
                        <img src={arrow} className="start_menu_section_header_button_arrow" alt=""/>
                    </button>
                </div>
                <div className="start_menu_recommended_apps_section">
                    <div className="start_menu_recommended_left_side">
                        {/* VS Code */}
                        <div className="start_menu_recommended_single_app_block">
                            <img src={vscode} className="start_menu_recommended_single_app_icon" alt=""/>
                            <div className="start_menu_recommended_single_app_content">
                                <h3 className="start_menu_recommended_single_app_title">Visual Studio Code</h3>
                                <p className="start_menu_recommended_single_app_subtitle">Recently added</p>
                            </div>
                        </div>

                        {/* Chrome */}
                        <div className="start_menu_recommended_single_app_block">
                            <img src={chrome} className="start_menu_recommended_single_app_icon" alt=""/>
                            <div className="start_menu_recommended_single_app_content">
                                <h3 className="start_menu_recommended_single_app_title">Google Chrome</h3>
                                <p className="start_menu_recommended_single_app_subtitle">Recently added</p>
                            </div>
                        </div>

                        {/* Store */}
                        <div className="start_menu_recommended_single_app_block">
                            <img src={store} className="start_menu_recommended_single_app_icon" alt=""/>
                            <div className="start_menu_recommended_single_app_content">
                                <h3 className="start_menu_recommended_single_app_title">Microsoft Store</h3>
                                <p className="start_menu_recommended_single_app_subtitle">5h ago</p>
                            </div>
                        </div>
                    </div>

                    <div className="start_menu_recommended_right_side">
                        {/* Whiteboard */}
                        <div className="start_menu_recommended_single_app_block">
                            <img src={whiteboard} className="start_menu_recommended_single_app_icon" alt=""/>
                            <div className="start_menu_recommended_single_app_content">
                                <h3 className="start_menu_recommended_single_app_title">Whiteboard</h3>
                                <p className="start_menu_recommended_single_app_subtitle">Recently added</p>
                            </div>
                        </div>

                        {/* Node */}
                        <div className="start_menu_recommended_single_app_block">
                            <img src={node} className="start_menu_recommended_single_app_icon" alt=""/>
                            <div className="start_menu_recommended_single_app_content">
                                <h3 className="start_menu_recommended_single_app_title">Node.js</h3>
                                <p className="start_menu_recommended_single_app_subtitle">Recently added</p>
                            </div>
                        </div>

                        {/* Camera */}
                        <div className="start_menu_recommended_single_app_block">
                            <img src={camera} className="start_menu_recommended_single_app_icon" alt=""/>
                            <div className="start_menu_recommended_single_app_content">
                                <h3 className="start_menu_recommended_single_app_title">Camera</h3>
                                <p className="start_menu_recommended_single_app_subtitle">5h ago</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="start_menu_section start_menu_bottom_section">
                <div className="start_menu_user_block">
                    <img src={user} alt="" className="start_menu_user_icon"/>
                    <p className="start_menu_user_name">Subhajit</p>
                </div>
                <img style={{cursor: "pointer"}} src={power} onClick={() => close()} alt=""/>
            </section>
        </motion.div>
    )
}

export default StartMenu