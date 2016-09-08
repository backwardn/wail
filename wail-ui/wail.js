import 'babel-polyfill'
import React from 'react'
import {Router, hashHistory} from 'react-router'
import {render} from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import fs from 'fs-extra'
import Promise from 'bluebird'
import {ipcRenderer, remote} from 'electron'
import Routes from './routes'
import {writeWaybackConf} from './actions/wayback-actions'
import RequestStore from './stores/requestStore'
import ColStore from './stores/collectionStore'
require('./css/wail.css')
// require('pretty-error').start()

ipcRenderer.on('rewrite-wayback-config', (event, payload) => {
  console.log('wail got rewrite-wayback-config')
  writeWaybackConf()
})

Promise.promisifyAll(fs)


//  ensure out RequestStore is alive and kicking
window.React = React
window.colStore = ColStore
window.ReqStore = RequestStore

injectTapEventPlugin()

// ipcRenderer.send('start-index-indexing')
// ipcRenderer.send('start-crawljob-monitoring')
// ipcRenderer.send('start-service-monitoring')

const wail = document.getElementById('wail')

render(
  <Router
    history={hashHistory}
    routes={Routes}
  />,
  wail)

