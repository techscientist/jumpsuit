import {
  Route,
  IndexRoute,
  Redirect,
  IndexRedirect,
  Link,
  IndexLink,
} from 'react-router'

import Component from './component'
import Render, { Router } from './render'
import State from './state'
import Goto from './routing'
import { Middleware } from './reducer'

module.exports = {
  /* Core */
  Component,
  Router,
  Render,
  State,
  Goto,

  /* React Router */
  Route,
  IndexRoute,
  Redirect,
  IndexRedirect,
  Link,
  IndexLink,

  /* Redux */
  Middleware,
}
