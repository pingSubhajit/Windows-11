import Head from "./Head"
import '../../styles/BASE/Base.scss'
import Taskbar from "../utils/Taskbar";

const Base = ({children}) => (
    <div className="base_container">
        <Head title="Windows 11" />

        { children }

        <Taskbar />
    </div>
)

export default Base