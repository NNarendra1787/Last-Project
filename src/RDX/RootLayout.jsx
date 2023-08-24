import React from 'react'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import RStore from './RStore'

function RootLayout() {
  return (
    <div>
        <Provider store={RStore}>
            <main>
                <Outlet />
            </main>
        </Provider>
        
    </div>
  )
}

export default RootLayout