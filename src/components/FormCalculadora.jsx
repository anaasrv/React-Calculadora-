import { useState } from "react"
import styles from './FormCalculadora.module.css'

function FormCalculadora() {
    // Variáveis
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [operacao, setOperacao] = useState('+')
    const [msg, setMsg] = useState(null)

    function limpar() {
        setNum1('')
        setNum2('')
        setOperacao('+')
        setMsg(null)
    }

    // Função Calcular
    function calcular(e) {
        // Evitar recarregar a página
        e.preventDefault()

        // Verificar se os dados foram preenchidos
        if (!num1 || !num2) {
            alert("Atenção! Todos os campos são obrigatórios.")
            return
        }

        // Tratar variáveis (casas decimais)
        const n1 = parseFloat(num1)
        const n2 = parseFloat(num2)

        let resultado

        // Verificar a operação escolhida
        if (operacao === '+') {
            resultado = n1 + n2
        } else if (operacao === '-') {
            resultado = n1 - n2
        } else if (operacao === '*') {
            resultado = n1 * n2
        } else if (operacao === '/') {
            if (n2 === 0) {
                alert("Atenção! Não é possível dividir por zero.")
                return
            }
            resultado = n1 / n2
        }

        // Considerar 2 casas decimais
        setMsg(`Resultado: ${resultado.toFixed(2)}`)
    }

    return (
        <div>
            <form onSubmit={calcular} className={styles.formContainer}>
                <h2>Calculadora</h2>

                <div className={styles.campo}>
                    <input
                        type="number"
                        name="num1"
                        id="num1"
                        placeholder="Primeiro número..."
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                    />
                </div>

                <div className={styles.campo}>
                    <select
                        name="operacao"
                        id="operacao"
                        value={operacao}
                        onChange={(e) => setOperacao(e.target.value)}
                    >
                        <option value="+">+ (Somar)</option>
                        <option value="-">- (Subtrair)</option>
                        <option value="*">* (Multiplicar)</option>
                        <option value="/">/ (Dividir)</option>
                    </select>
                </div>

                <div className={styles.campo}>
                    <input
                        type="number"
                        name="num2"
                        id="num2"
                        placeholder="Segundo número..."
                        value={num2}
                        onChange={(e) => setNum2(e.target.value)}
                    />
                </div>

                <div className={styles.btn}>
                    <input type="submit" value="Calcular" />
                    <input type="button" value="Limpar" onClick={limpar} />
                </div>

                <div className={styles.resultado}>
                    <p>{msg}</p>
                </div>
            </form>
        </div>
    )
}

export default FormCalculadora
