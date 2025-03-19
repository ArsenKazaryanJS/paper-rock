import React from 'react'

export const Hearder = ({user,bot,handleRefresh}) => {
    
  return (
    <header>
    <h3><span>You:</span> <b>{user.wins}</b></h3>
    <div className="refreshBox">
    <img onClick={handleRefresh} className="refresh" src="/assets/refresh.svg" alt="Refresh"/>

    <h3>
     VS </h3>
    </div>
 
    <h3> Bot: <b>{bot.wins}</b></h3>
    </header>

  )
}

