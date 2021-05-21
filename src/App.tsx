import { VFC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { MainTask } from './components/MainTask'
import { MainTag } from './components/MainTag'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

const App: VFC = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <MainTask />
            </Route>
            <Route exact path="/tags">
              <MainTag />
            </Route>
          </Switch>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  )
}

export default App
