
import { RecoilRoot, useRecoilValue } from 'recoil'
import './App.css'
import Profile from './profile'


function App() {
  
  return (
    <>
      <RecoilRoot>
        <Profile/>
      </RecoilRoot>
    </>
  )
}

export default App
