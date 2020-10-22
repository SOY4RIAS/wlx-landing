import React from 'react';

import { useTranslation } from 'react-i18next';

function App() {
	const { t } = useTranslation();

	return <p>{t('home')} </p>;
}

export default App;
