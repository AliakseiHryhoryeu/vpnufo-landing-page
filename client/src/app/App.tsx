import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { UserActions } from 'app/actions'
import { Landing, Page404 } from 'app/pages'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(UserActions.auth())
	}, [])

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Landing />} />
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
