import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/ui/Navbar'
import { DcScreen } from '../components/dc/DcScreen'
import { MarverScreen } from '../components/marvel/MarverScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { HeroScreen } from '../components/hero/HeroScreen'

export const DashboarRoutes = () => {
  return (
    <>
      <Navbar />

      <div className='container'>

        <Routes>
          <Route path='marvel' element={<MarverScreen />} />
          <Route path='dc' element={<DcScreen />} />

          <Route path='search' element={<SearchScreen />} />
          <Route path='hero/:heroId' element={<HeroScreen />} />

          <Route path='/' element={<MarverScreen />} />
        </Routes>

      </div>
    </>
  )
}
