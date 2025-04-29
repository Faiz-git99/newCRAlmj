import { useState } from 'react'

function QuestionForm() {

    const [inputValue, setInputValue] = useState('Posez votre question ici')
   
    function checkValue(value) {
        if (!value.includes('f')) {
            setInputValue(value)
        }
    }
   console.log(inputValue)

   // je passe une fonction en callback à  onChange   
   // pour qu'elle sauvegarde dans mon state local la valeur de mon input. 
   // J'accède à la valeur tapée dans l'input avec  e.target.value.

    return (
        <div>
             
            <textarea
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}
            />
             <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
            

        </div>
    )
}



export default QuestionForm;