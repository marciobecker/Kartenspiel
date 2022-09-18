import React, {createContext, useState} from "react";

export const PointsContext = createContext({})

function PointsProvider({children}) {

  const [duplas, setDuplas] = useState([]);
  const [modalInicio, setModalInicio] = useState(true);

  const [partida, setPartida] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [vencedor, setVencedor] = useState('');
  const [empate, setEmpate] = useState(0)

  const [somaPontosD1, setSomaPontosD1] = useState([0]);
  const [somaPontosD2, setSomaPontosD2] = useState([0]);

  const [pontosD1, setPontosD1] = useState(0) 
  const [pontosD2, setPontosD2] = useState(0) 
  
  const [contagemD1, setContagemD1] = useState('0') 
  const [contagemD2, setContagemD2] = useState('0') 

  const [partidasD1, setPartidasD1] = useState(0) 
  const [partidasD2, setPartidasD2] = useState(0) 

  const [num, setNum] = useState(0) 


  function incluiNomes (n1d1, n2d1, n1d2, n2d2) {
    duplas.push(n1d1, n1d2, n2d1, n2d2)
    setModalInicio(false)
  }

  function proximo() {
    if (num === 3) setNum(0)
    else setNum(num + 1) 
  }

  function anterior() {
    if (num === 0) setNum(3)
    else setNum(num - 1)  
  }

  function soma(n, d) {
    let num = 0
    if (d === 'd1') {
      num = somaPontosD1[somaPontosD1.length - 1] + n + empate
      somaPontosD1.push(num)
      setPontosD1(num)
      setContagemD1(somaPontosD1.join(' - '))
    }
    if (d === 'd2') {
      num = somaPontosD2[somaPontosD2.length - 1] + n + empate
      somaPontosD2.push(num)
      setPontosD2(num)
      setContagemD2(somaPontosD2.join(' - '))
    }
    if (num >= 12) {
      setModalVisible(true)
      setVencedor(d)
    }
    if(empate !== 0) {setEmpate(0)}
    proximo()
  }

  function salvaPartida(d) {
    partida.push({
      id: Math.random(),
      dupla1: duplas[0] + ' / ' + duplas[2],
      pontosD1: contagemD1,
      dupla2: duplas[1] + ' / '+ duplas[3],
      pontosD2: contagemD2
    })
    if (d === 'd1') {setPartidasD1(partidasD1 + 1)}
    if (d === 'd2') {setPartidasD2(partidasD2 + 1)}
    setContagemD1('0')
    setContagemD2('0')
    setPontosD1(0)
    setPontosD2(0)
    setSomaPontosD1([0])
    setSomaPontosD2([0])

    setModalVisible(false)
  }

  function reverte(d) {
    if (d === 'd1') {
      somaPontosD1.pop()
      setSomaPontosD1(somaPontosD1)
      setPontosD1(somaPontosD1[somaPontosD1.length - 1])
      setContagemD1(somaPontosD1.join(' - '))
    }
    if (d === 'd2') {
      somaPontosD2.pop()
      setSomaPontosD2(somaPontosD2)
      setPontosD2(somaPontosD2[somaPontosD2.length - 1])
      setContagemD2(somaPontosD2.join(' - '))
    }
    if (modalVisible === true) {setModalVisible(false)}
    anterior()
  }

  function empatou() {
    setEmpate(empate + 1)
    proximo()
  }

  return(
    <PointsContext.Provider value={{ 
        partida,
        modalVisible,
        vencedor,
        empate,
        somaPontosD1,
        somaPontosD2,
        pontosD1,
        pontosD2,
        contagemD1,
        contagemD2,
        partidasD1,
        partidasD2,
        duplas, 
        modalInicio,
        num,
        incluiNomes,
        soma,
        salvaPartida,
        reverte,
        empatou
      }}>
      {children}
    </PointsContext.Provider>
  )
}

export default PointsProvider;