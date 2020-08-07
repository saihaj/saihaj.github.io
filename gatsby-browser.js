import React from 'react'
import jss from 'jss'
import preset from 'jss-preset-default'
import { SheetsRegistry, JssProvider } from 'react-jss'
import 'normalize.css'

const setupJss = () => {
  jss.setup( preset() )
  const sheetsRegistry = new SheetsRegistry()

  const globalStyleSheet = jss.createStyleSheet( {
    '@global': {
      body: {
        backgroundColor: '#03045e',
        fontFamily: 'Fira Sans',
        color: 'white',
      },
    },
  } ).attach()

  sheetsRegistry.add( globalStyleSheet )

  return sheetsRegistry
}

const sheets = setupJss()

export const wrapRootElement = ( { element } ) => (
  <JssProvider registry={sheets}>
    {element}
  </JssProvider>
)
