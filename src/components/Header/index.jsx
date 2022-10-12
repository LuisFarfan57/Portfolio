import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LanguageContext } from '../../content/context/LanguageContext'
import homeContent, { menuIds } from '../../content/home'
import Button from '../Button'
import LanguageSelector from '../LanguageSelector'
import StrokeText from '../StrokeText'
import './Header.scss'

const Header = ({ activeSection, handleSectionChange }) => {
  const { lang } = useContext(LanguageContext)
  const { menu, cv } = homeContent[lang]

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className='header'>
      <div className='lg:text-4xl md:text-3xl text-2xl'>
        <span>Luis</span><StrokeText color={'white'}>Farfán</StrokeText>
      </div>
      <div className='header-menu'>
        <ul>
          <li onClick={() => handleSectionChange(menuIds.home)} className={activeSection === menuIds.home && 'active'}>{menu.home}</li>
          <li onClick={() => handleSectionChange(menuIds.option1)} className={activeSection === menuIds.option1 && 'active'}>{menu.option1}</li>
          <li onClick={() => handleSectionChange(menuIds.option2)} className={activeSection === menuIds.option2 && 'active'}>{menu.option2}</li>
          <li onClick={() => handleSectionChange(menuIds.option3)} className={activeSection === menuIds.option3 && 'active'}>{menu.option3}</li>
          <li onClick={() => handleSectionChange(menuIds.option4)} className={activeSection === menuIds.option4 && 'active'}>{menu.option4}</li>
        </ul>
      </div>
      <div className='lang-cv-container'>
        <Button href={`https://luis-farfan-cv.s3.amazonaws.com/cv-${lang}.pdf`} text={cv} color="blue" className='w-fit md:mr-5 mb-5 md:mb-0' />
        <LanguageSelector />
      </div>
      <div className={`sm-menu-button ${openMenu && 'open'}`} onClick={() => setOpenMenu(!openMenu)}>
        <div className='sm-menu-button-line'></div>
        <div className='sm-menu-button-line'></div>
        <div className='sm-menu-button-line'></div>
      </div>

      <div className={`sm-header-menu ${openMenu && 'open'}`}>
        <ul className='mb-16'>
          <li onClick={() => handleSectionChange(menuIds.home)} className={activeSection === menuIds.home && 'active'}>{menu.home}</li>
          <li onClick={() => handleSectionChange(menuIds.option1)} className={activeSection === menuIds.option1 && 'active'}>{menu.option1}</li>
          <li onClick={() => handleSectionChange(menuIds.option2)} className={activeSection === menuIds.option2 && 'active'}>{menu.option2}</li>
          <li onClick={() => handleSectionChange(menuIds.option3)} className={activeSection === menuIds.option3 && 'active'}>{menu.option3}</li>
          <li onClick={() => handleSectionChange(menuIds.option4)} className={activeSection === menuIds.option4 && 'active'}>{menu.option4}</li>
        </ul>
        <div className='flex justify-around'>
          <Button href={`https://luis-farfan-cv.s3.amazonaws.com/cv-${lang}.pdf`} text={cv} color="blue" />
          <LanguageSelector />
        </div>
      </div>
    </header>
  )
}

export default Header