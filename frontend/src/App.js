// import logo from './logo.svg';
// import './App.css';

import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import { AccountList, AccountCreate, AccountEdit } from './pages/AccountCrud'
import { BalanceList, BalanceCreate, BalanceEdit } from './pages/BalanceCrud'
import { CategoryList, CategoryCreate, CategoryEdit } from './pages/CategoryCrud'
import { InflowList, InflowCreate, InflowEdit } from './pages/InflowCrud'
import { OutflowList, OutflowCreate, OutflowEdit } from './pages/OutflowCrud'
import { SplitList, SplitCreate, SplitEdit } from './pages/SplitCrud'
import { TransactionList, TransactionCreate, TransactionEdit } from './pages/TransactionCrud'

import Dashboard from './pages/Dashboard';
import authProvider from './utils/authProvider';

import AccountIcon from '@material-ui/icons/Book';
import BalanceIcon from '@material-ui/icons/Group';

const Ready = () => (
  <div>
      <h1>Admin ready</h1>
      <p>You can now add resources</p>
  </div>
)

function App() {
  return (
    <div className="App">

      <Admin title="Cash Manager" ready={Ready} dashboard={Dashboard} authProvider={authProvider} dataProvider={restProvider('http://localhost:3000')}>
        <Resource name='accounts' list={AccountList} create={AccountCreate} edit={AccountEdit} icon={AccountIcon} />
        <Resource name='balances' list={BalanceList} create={BalanceCreate} edit={BalanceEdit} icon={BalanceIcon} />
        <Resource name='categories' list={CategoryList} create={CategoryCreate} edit={CategoryEdit} icon={AccountIcon} />
        <Resource name='inflows' list={InflowList} create={InflowCreate} edit={InflowEdit} icon={AccountIcon} />
        <Resource name='outflows' list={OutflowList} create={OutflowCreate} edit={OutflowEdit} icon={AccountIcon} />
        <Resource name='splits' list={SplitList} create={SplitCreate} edit={SplitEdit} icon={AccountIcon} />
        <Resource name='transactions' list={TransactionList} create={TransactionCreate} edit={TransactionEdit} icon={AccountIcon} />

      </Admin>
    </div>
  );
}

export default App;
