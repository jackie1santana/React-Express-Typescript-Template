import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import './Covid.scss'

export default function Covid() {
    const [confirmedCase, setConfirmedCase] = useState([])
    const [recoveredCase, setRecoveredCase] = useState([])
    const [criticalCase, setCriticalCase] = useState([])
    const [deathCase, setDeathCase] = useState([])
  useEffect(() => {
    axios.get('http://localhost:2300/globalcases')
.then(response => {
  
    const confirmed = response.data[0].confirmed
    const recovered= response.data[0].recovered
    const critical = response.data[0].critical
    const deaths = response.data[0].deaths
    const allCases =  response.data
  
    setConfirmedCase(confirmed)
    setRecoveredCase(recovered)
    setCriticalCase(critical)
    setDeathCase(deaths)
  console.log(allCases)
})
  })
    return (
        <div>
        <ul><li>Global Confirmed Cases: {[confirmedCase]}</li>
        <li>Global Recovered Cases: {[recoveredCase]}</li>
        <li>Global Critical Cases: {[criticalCase]}</li>
        <li>Global Death Cases: {[deathCase]}</li>
        </ul>
            
        </div>
    )
}
