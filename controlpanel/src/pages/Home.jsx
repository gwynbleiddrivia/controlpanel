import { useState } from 'react'

const Home = () => {
	const arr = ['50 prof email sent','finish control panel','finish that character arc']
	  const [buttonState, setButtonState] = useState('pr-6');
	  const [embtxtValState, setEmbtxtValState] = useState(arr[0]);
	  const [embtxtStyleState, setEmbtxtStyleState] = useState('effect-emboss');

	const handleDrag = () => {
	  if (buttonState === 'pr-6') {
	    setTimeout(() => {
	      setButtonState('pl-6');
	      setTimeout(() => {
		setButtonState('pr-6');
	      }, 200);
	    }, 200);
	  } else {
	    setTimeout(() => {
	      setButtonState('pr-6');
	      setTimeout(() => {
		setButtonState('pr-6');
	      }, 200);
	    }, 200);
	  }
	  if (embtxtStyleState === 'effect-emboss'){
		setTimeout(() => {
			setEmbtxtStyleState('')
			setTimeout(()=>{
				setEmbtxtStyleState('effect-emboss')
			}
			,300)
		}, 300)
	  }else{
		setTimeout(()=> {
			setEmbtxtStyleState('effect-emboss')
		},300)	
		}

	};


	const [isClicked, setIsClicked] = useState(false)
	const handleClick = () =>{
		setIsClicked(!isClicked)
		setTimeout(()=>{
			setIsClicked(isClicked)
		},90)
		console.log('clicked')
	}

	return (
		<div className="flex justify-around">
			{/*<button className="mx-auto py-3 text-xs px-1 my-10 effect-logo hover:effect-after rounded-full w-fit text-[#94b3a4]">press</button>*/}
			<button className={`rounded-full py-5 px-3 text-xs my-auto w-fit text-[#94b3a4] ${isClicked?'effect-after' : 'effect-logo'}`} onClick={handleClick}>press</button>
			<div className={`effect-emboss my-auto py-2 px-2 rounded-lg transition-all duration-200 ${buttonState} `} onClick={handleDrag}>
				<button className={`rounded-full py-1 px-1 text-xs my-auto w-fit text-[#94b3a4] effect-logo`} onClick={handleDrag}>pre</button>
			</div>
			<div className={`my-auto py-2 px-2 rounded-lg transition-all duration-200 ${embtxtStyleState}`}>
				<button className={`rounded-full py-1 px-1 text-xs my-auto w-fit text-[#94b3a4] effect-logo`}>pre</button>
			</div>



		</div>
	);
};

export default Home;
