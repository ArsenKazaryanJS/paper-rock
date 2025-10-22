import { useState } from 'react'
import paper from '../assets/paper.svg'
import rock from '../assets/rock.svg'
import scissors from '../assets/scissors.svg'



const usePaperRock = () => {

 const variants = [  { name: 'paper', beat: 'rock' }, { name: 'rock', beat: 'scissors' },{ name: 'scissors', beat: 'paper' },];
 const [user, setUser] = useState({ selected: false, variant: 'paper', wins: 0 });
 const [bot, setBot] = useState({  waiting: true, variant: '', wins: 0 });

  const handleVariant = () => {//Toggle Եթե user-ը ընտրել է թուղթ, ապա կլինի քար, և այլն։
    setUser(prev => {
      const newVariant = prev.variant === 'paper' ? 'rock' : prev.variant === 'rock' ? 'scissors' : 'paper';
      return { ...prev, variant: newVariant };
    });
  };



const handleSelected = () => {//Այս ֆունկցիան հաստատում է user-ի ընտրությունը և random ընտրում է bot-ի variant-ը։
  setUser((prev)=> ({...prev,selected:true}))
  setBot((prev) => ({
    ...prev,
    waiting:false,
    selected: true,
    variant: variants[Math.floor(Math.random() * 3)].name,
  }));
}


const handleRefresh = () => {//Այս ֆունկցիան վերադարձնում է սկզբնական վիճակ, պահելով հաղթանակների քանակը։
  setUser((prev) => ({
    selected: false,
    variant: 'paper',
    wins: prev.wins,
  }));
  setBot((prev) => ({
    waiting: true,
    variant: '',
    wins: prev.wins,
  }));
};


return {variants,handleVariant,handleSelected,handleRefresh,bot, setBot,user,setUser}
}

export default usePaperRock
