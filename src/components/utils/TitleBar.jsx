import '/src/styles/utils/TitleBar.scss'
import minimize from '/src/media/minimize.svg'
import maximize from '/src/media/maximize.svg'
import calculator from '/src/media/app-icons/calculator.svg'

const TitleBar = ({close, name}) => {
    return (
        <div className="title_bar">
            <div className="title_bar_info_block">
                <img src={calculator} className="title_bar_app_icon" alt=""/>
                <p className="title_bar_app_name">{name}</p>
            </div>
            <div className="title_bar_control_icons">
                {/* Minimize */}
                <div className="control_icon_block">
                    <img src={minimize} className="control_icon" alt=""/>
                </div>

                {/* Maximize */}
                <div className="control_icon_block">
                    <img src={maximize} className="control_icon" alt=""/>
                </div>

                {/* Close */}
                <div className="control_icon_block close_icon_block" onClick={() => close(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11.047" height="11.047" viewBox="0 0 11.047 11.047">
                        <path id="Icon_ionic-md-close" data-name="Icon ionic-md-close" d="M18.57,8.628l-1.1-1.1-4.419,4.419L8.628,7.523l-1.1,1.1,4.419,4.419L7.523,17.466l1.1,1.1,4.419-4.419,4.419,4.419,1.1-1.1-4.419-4.419Z" transform="translate(-7.523 -7.523)" fill="#000"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default TitleBar