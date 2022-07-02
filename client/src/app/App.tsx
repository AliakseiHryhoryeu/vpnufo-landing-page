import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { UserActions } from 'app/actions'
import { Landing, Login, Page404, SignUp, PasswordReset } from 'app/pages'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		UserActions.auth()
	}, [])

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/auth' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/password-reset' element={<PasswordReset />} />
				<Route path='*' element={<Page404 />} />
			</Routes>
		</div>
	)
}

export default App

// <Route path="/auth" element={<SignIn />} />
// <Route path="/registration" element={<Registration />} />
// <Route path="/restorepass" element={<RestorePassword />} />

// <Route path="/main" element={<Main />} /
