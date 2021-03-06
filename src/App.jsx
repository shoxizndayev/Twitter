import React from 'react';
import './App.scss';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticadApp from './UnauthenticatedApp';
import useToken from './Hooks/useToken';

function App() {

	const [lang, setLang] = React.useState(JSON.parse(window.localStorage.getItem('lang')) || 'en');
	const [Theme , setTheme] = React.useState(JSON.parse(window.localStorage.getItem('theme')) || false)

	const [token] = useToken();


	if(token	){
		return <AuthenticatedApp lang={lang} setLang={setLang} Theme={Theme} setTheme={setTheme} />

	}else{
		return <UnauthenticadApp/>
	}

}

export default App;