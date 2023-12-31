import { createBrowserHistory } from 'history'
import { FC, useState, useLayoutEffect, createElement } from 'react'
import { Router } from 'react-router-dom'

export const history = createBrowserHistory()

interface HistoryRouterProps {
  history: typeof history
  children: React.ReactNode
}

export const HistoryRouter: FC<HistoryRouterProps> = ({ history, children }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  })

  useLayoutEffect(() => {
    history.listen(setState)
  }, [history])

  return createElement(Router, Object.assign({ children, navigator: history }, state))
}
