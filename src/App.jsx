import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch } from 'wouter';
import HotelList from './components/HotelList';

const client = new QueryClient();

function App () {

  return (
    <>
      <QueryClientProvider client={ client }>
        <Switch>
          <Route path="/" component={ HotelList } />
        </Switch>
      </QueryClientProvider>
    </>
  );
}

export default App;
