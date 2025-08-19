import { useState } from 'react'

function App() {
  const [nestedObjected, setNestedObject] = useState({
    taxi: 'Ücret karşılığında yolcu taşımak için lisanslı bir araç',
    food: {
      sushi:
        'Deniz ürünleri ve sebzelerle birlikte sunulan geleneksel bir Japon yemeği',
      apple: {
        Honeycrisp:
          "MAES Bahçe Araştırma Merkezi'nde geliştirilen bir elma çeşidi",
        Fuji: "Tohoku Araştırma İstasyonu'nda yetiştiriciler tarafından geliştirilen bir elma çeşidi",
      },
    },
  })

  return (
    <div style={{ margin: 'auto', width: '70%', paddingTop: 40 }}>
      <DisplayNested nestedObjected={nestedObjected} />
    </div>
  )
}

const DisplayNested = ({ nestedObjected }) => {
  const {taxi,food} = nestedObjected;
  const {sushi,apple} = food;
  const {Honeycrisp,Fuji} = apple;
  return(
  <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
    <p>taxi: {taxi}</p>
    <p>food:</p>
    <p style={{marginLeft:"60px"}}>sushi : {sushi}</p>
    <p style={{marginLeft:"60px"}}>apple :</p>
    <p style={{marginLeft:"120px"}}>Honeycrisp : {Honeycrisp}</p>
    <p style={{marginLeft:"120px"}}>Fuji : {Fuji}</p>

  </div>
  )
 
}

export default App
