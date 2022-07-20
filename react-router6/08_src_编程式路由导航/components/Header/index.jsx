import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
	const navigete = useNavigate()

	function back() {
		navigete(-1)
	}
	function forward() {
		navigete(1)
	}

	return (
		// console.log('Header组件收到的props是',this.props);
		<div className="page-header">
			<h2>React Router Demo</h2>
			<button onClick={back}>←后退</button>
			<button onClick={forward}>前进→</button>
		</div>
	)
}
