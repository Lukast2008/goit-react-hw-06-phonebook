import HomeView from 'pages/HomeView/HomeView';
import AddContact from 'pages/AddUserView/AddUserView';
import Filter from 'pages/Filter/Filter';

export const App = () => {
  return (
    <>
      <AddContact />
      <Filter />
      <HomeView />
    </>
  );
};
