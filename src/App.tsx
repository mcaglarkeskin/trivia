import React from 'react';
import RootNavigator from './shared/routers/rootNavigator';

import 'react-native-gesture-handler';

const App = (): JSX.Element => {
	return (
		<>
			<RootNavigator />
		</>
	);
};

export default App;
