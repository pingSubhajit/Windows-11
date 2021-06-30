import '/src/styles/utils/Calculator.scss'
import Draggable from "react-draggable"
import TitleBar from "./TitleBar"
import {useState} from "react"

const Calculator = ({flag, setFunction}) => {

    const [problem, setProblem] = useState('')
    const [result, setResult] = useState('')

    const handleChange = (value) => {
        setProblem(problem + value)
        setResult('')
    }

    const handleSubmit = () => {
        setResult(eval(problem).toFixed(2))
    }

    const handleClear = () => {
        setProblem('')
        setResult('')
    }

    const handleDelete = () => {
        setProblem(problem.slice(0, -1))
    }

    return (
        <Draggable>
            <main className="calculator">
                <TitleBar close={setFunction} name="Calculator"/>
                <section className="calculator_display_center">
                    <p className="calculator_problem">{result && problem}</p>
                    <p className="calculator_result">{result ? result : problem}</p>
                </section>
                <section className="calculator_control_center">
                    <button onClick={handleClear} className="calculator_button">C</button>
                    <button onClick={() => handleChange(`*${problem}`)} className="calculator_button">x²</button>
                    <button onClick={handleDelete} className="calculator_button">←</button>
                    <button onClick={() => handleChange('/')} className="calculator_button">/</button>
                    <button onClick={() => handleChange('7')} className="calculator_button">7</button>
                    <button onClick={() => handleChange('8')} className="calculator_button">8</button>
                    <button onClick={() => handleChange('9')} className="calculator_button">9</button>
                    <button onClick={() => handleChange('*')} className="calculator_button">*</button>
                    <button onClick={() => handleChange('4')} className="calculator_button">4</button>
                    <button onClick={() => handleChange('5')} className="calculator_button">5</button>
                    <button onClick={() => handleChange('6')} className="calculator_button">6</button>
                    <button onClick={() => handleChange('-')} className="calculator_button">—</button>
                    <button onClick={() => handleChange('1')} className="calculator_button">1</button>
                    <button onClick={() => handleChange('2')} className="calculator_button">2</button>
                    <button onClick={() => handleChange('3')} className="calculator_button">3</button>
                    <button onClick={() => handleChange('+')} className="calculator_button">+</button>
                    <button onClick={() => handleChange('%')} className="calculator_button">%</button>
                    <button onClick={() => handleChange('0')} className="calculator_button">0</button>
                    <button onClick={() => handleChange('.')} className="calculator_button">.</button>
                    <button onClick={handleSubmit} className="calculator_button">=</button>
                </section>
            </main>
        </Draggable>
    )
}

export default Calculator