import refresh from '../assets/refresh.svg'

export const Hearder = ({user,bot,handleRefresh}) => {

    
  return (
    <header>
    <h3><span>You:</span> <b>{user.wins}</b></h3>
    <div className="refreshBox">
    <img onClick={handleRefresh} className="refresh" src={refresh} alt="Refresh"/>

    <h3>
     VS </h3>
    </div>
 
    <h3> Bot: <b>{bot.wins}</b></h3>
    </header>

  )
}

