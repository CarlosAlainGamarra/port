import { useNavigate } from "react-router-dom"
import './Wellcome.css'


export const Wellcome = () => {
  //hooks
  const navigate = useNavigate()


  //Redireccionamiento
 setTimeout(() => {
    navigate('/main', { replace: true, })
  }, 3000)


  
  const CircleAnimation = () => {
    return (
      <div className="loader-container">
          <div className="logo">
            <p>G</p>
          </div>
        <div className="loader" />
      </div> 
    )
  };
  

  return (
    <div>
      <CircleAnimation />
    </div>
  )
}

export default Wellcome