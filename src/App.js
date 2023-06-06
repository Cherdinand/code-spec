import logo from './logo.svg';
import './App.css';

function App() {
	const a = () => {
		console.log('111:', 111);
	};

	const xinxin = {
		age: 11,
	};

	const b = new Proxy(xinxin, {
		get: (target) => {
			return target;
		},
		set: function (target, propKey, receiver) {
			target[propKey] = receiver;
			return target;
		},
	});

	const c = new Set([1, 2, 3]);

	console.log('b:', b, c);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p onClick={a}>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
