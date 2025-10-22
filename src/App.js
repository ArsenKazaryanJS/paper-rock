import { useEffect} from 'react';
import {Variant} from './components/Variant';
import './index.css';
import { Hearder } from './components/Header';
import usePaperRock from './hooks/usePaperRock';
import arrow_right from './assets/arrow-right.svg'

function App() {
   // usePaperRock հուկը վերադարձնում է տարբերակները, ֆունկցիաները և խաղացողների վիճակը
  const {variants,handleVariant,handleSelected,handleRefresh,bot,setBot,user,setUser} = usePaperRock()

 // useEffect հուկը, հետևում է bot-ի և user-ի ընտրություններին
useEffect(() => {
  
  if (bot.selected && user.selected) { // Եթե երկու խաղացողներն էլ ընտրել են
    const userVariantBeat = variants.find((obj) => obj.name === user.variant);

    if (user.variant === bot.variant) return; // Եթե երկու տարբերակները հավասար են, ոչինչ չի կատարվում

    if (userVariantBeat.beat === bot.variant) { //Եթե user-ի ընտրությունը հաղթում , ապա user-ի wins-ը ավելանում են մեկով, հակառակ դեպքում՝ bot-ի:
      setUser((prev) => ({ ...prev, wins: prev.wins + 1 }));
    } else {
      setBot((prev) => ({ ...prev, wins: prev.wins + 1 }));
    }
  }
}, [bot.variant, user.variant]);



  return (
    <div className="App">
   <Hearder user={user} bot={bot} handleRefresh={handleRefresh}/>
      <div className="game">
        <div className="game__user">
          <div className={`user ${user.selected ? 'userSelect' : ''}`} onClick={handleVariant}>
            <Variant value={user.variant} />
          </div>
          <img className="game__arrow"style={{ display: user.selected ? 'none' : 'block' }}  src={arrow_right}onClick={handleSelected} />
        </div>
        <div className={`${bot.selected ? 'botSelect' : ''}`}>
          <Variant waiting={bot.waiting} value={bot.variant} />
        </div>
      </div>
    </div>
  );
}

export default App;