/* eslint-disable react-hooks/exhaustive-deps */
import cx from 'classnames'
import { bool, node, number, oneOf, string } from 'prop-types'
import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'

// context
const AccordionContext = createContext(null)
const AccordionItemContext = createContext(null)

const useAccordion = () => {
  return useContext(AccordionContext)
}

const useAccordionItem = () => {
  return useContext(AccordionItemContext)
}

// <Accordion>
export const Accordion = ({
  children,
  className,
  allowMultiple = false,
  defaultIndex,
  transitionDuration = 300,
}) => {
  const accordionRef = useRef(null)

  const config = {
    allowMultiple,
    defaultIndex,
    transitionDuration,
  }

  return (
    <AccordionContext.Provider value={{ accordionRef, ...config }}>
      <div className={cx(styles.accordion, className)} ref={accordionRef}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

// <AccordionItem>
export const AccordionItem = ({ children, className }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { accordionRef, allowMultiple, defaultIndex } = useAccordion()
  const accordionItemRef = useRef(null)

  useEffect(() => {
    const accordion = accordionRef.current
    const accordionItem = accordionItemRef.current
    const currentIndex = Array.from(accordion?.children)?.indexOf(accordionItem)

    if (defaultIndex !== undefined && currentIndex === defaultIndex) {
      setIsExpanded(true)
    }

    const handleClickOutside = e => {
      if (!accordionItem.contains(e.target)) {
        setIsExpanded(false)
      }
    }

    if (!allowMultiple) {
      accordion.addEventListener('click', handleClickOutside)
    } else {
      accordion.removeEventListener('click', handleClickOutside)
    }

    return () => {
      accordion.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <AccordionItemContext.Provider value={{ isExpanded, setIsExpanded }}>
      <div className={cx(styles.item, className)} ref={accordionItemRef}>
        {typeof children === 'function' ? (
          <AccordionItemContext.Consumer>{children}</AccordionItemContext.Consumer>
        ) : (
          children
        )}
      </div>
    </AccordionItemContext.Provider>
  )
}

// <AccordionIcon>
export const AccordionIcon = ({ className, variant = 'arrow-default' }) => {
  const { isExpanded } = useAccordionItem()

  return (
    <div
      className={cx(styles.icon, styles[variant], { [styles.isExpanded]: isExpanded }, className)}/>
  )
}

// <AccordionButton>
export const AccordionButton = ({ children, className }) => {
  const { isExpanded, setIsExpanded } = useAccordionItem()

  return (
    <button className={cx(styles.button, className)} onClick={() => setIsExpanded(!isExpanded)}>
      {children}
    </button>
  )
}

// <AccordionPanel>
export const AccordionPanel = ({ children, className }) => {
  const panelRef = useRef(null)
  const { transitionDuration } = useAccordion()
  const { isExpanded } = useAccordionItem()

  useEffect(() => {
    const panel = panelRef.current

    if (isExpanded) {
      panel.style.maxheight = `${panel.scrollHeight}px`
      setTimeout(() => {
        panel.style.height = `auto`
      }, transitionDuration - 100)
    } else {
      panel.style.maxheight = 0
    }
  }, [isExpanded])

  return (
    <div
      className={styles.panel}
      style={{ transition: `all ${transitionDuration}ms ease-out` }}
      ref={panelRef}
    >
      <div className={className}>{children}</div>
    </div>
  )
}

// prop-types
Accordion.propTypes = {
  children: node,
  className: string,
  allowMultiple: bool,
  defaultIndex: number,
  transitionDuration: number,
}

AccordionItem.propTypes = {
  children: node,
  className: string,
}

AccordionIcon.propTypes = {
  className: string,
  variant: oneOf(['arrow-default', 'plus-minus', 'arrow-minus']),
}

AccordionButton.propTypes = {
  children: node,
  className: string,
}

AccordionPanel.propTypes = {
  children: node,
  className: string,
}
