import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from  './Header'
import Footer from './Footer'
import React, { Component } from 'react'

export default class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <div className={styles['layout']}>
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
}