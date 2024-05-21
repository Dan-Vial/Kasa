import './ContentApropos.sass'
import TitleBg from '../titleBg/TitleBg.jsx'
import Collapse from '../collapse/Collapse.jsx'

function ContentApropos({ pageApropos }) {
  const { titlebg, collapses } = pageApropos
  return (
    <div className='content-apropos'>
      <TitleBg titlebg={titlebg} />
      <div className='content-apropos-list'>
        {collapses.map(({ name, text }, index) =>
          <Collapse key={index} name={name} text={text} />
        )}
      </div>
    </div>
  )
}

export default ContentApropos
