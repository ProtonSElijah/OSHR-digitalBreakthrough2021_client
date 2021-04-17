import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import { AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import store from './redux/store/store'

import RolesSelect from './panels/RolesSelect'

//Учитель
import TeacherProfile from './panels/teacher/Profile'
//Формы
import AddClub from './panels/teacher/forms/AddClub'
import AddStudyGroup from './panels/teacher/forms/AddStudyGroup'
import AddStudent from './panels/teacher/forms/AddStudent'
//Экраны
import Club from './panels/teacher/screens/Club'


const App = () => {
	const [activePanel, setActivePanel] = useState('role');
	const [fetchedUser, setUser] = useState(null)
	const [clubId, setClubId] = useState('')
	const [groupId, setGroupId] = useState('')

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
		}
		fetchData();
	}, []);

	const go = e => {
		if (e.currentTarget.dataset.clubid) {
			setClubId(e.currentTarget.dataset.clubid)
		}
		if (e.currentTarget.dataset.groupId) {
			setClubId(e.currentTarget.dataset.groupid)
		}
		setActivePanel(e.currentTarget.dataset.to)
	};

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel}>
					<RolesSelect id='role' fetchedUser={fetchedUser} go={go} store={store}/>

					<TeacherProfile id="teacher_profile" fetchedUser={fetchedUser} go={go} store={store}/>
					<AddClub id="teacher_addClub" fetchedUser={fetchedUser} go={go} store={store}/>
					<AddStudyGroup id="teacher_addStudyGroup" fetchedUser={fetchedUser} go={go} store={store}/>
					<AddStudent id="teacher_addStudent" fetchedUser={fetchedUser} go={go} store={store}/>
					<Club id="club" fetchedUser={fetchedUser} go={go} store={store} club_name={clubId} />
					
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;

