import './index.css'

const TabItem = props => {
  const {tabs, activeTab, changeTab} = props
  const {tabId, displayText} = tabs
  const toChangeTab = () => {
    changeTab(tabId)
  }
  const classes = activeTab === tabId ? 'button active-tab' : 'button'

  return (
    <li className="tab">
      <button className={classes} type="button" onClick={toChangeTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
