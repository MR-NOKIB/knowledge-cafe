import Container from "./Components/Container/Container"
import Header from "./Components/Header/Header"
import { Qna } from "./Components/QnaAcordion/Qna"


function App() {

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-4">
      <Header></Header>
      <Container></Container>
      <Qna></Qna>
    </div>
  )
}

export default App
