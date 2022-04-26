import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

export const HeroScreen = () => {
  const navigate = useNavigate()

  const { heroId } = useParams()

  const hero = getHeroById(heroId)
  const {
    superhero,
    id,
    alter_ego,
    publisher,
    first_appearance,
    characters
  } = hero

  if (!hero) {
    return <Navigate to='/' />
  }

  const handleReturn = () => {
    navigate(-1)
  }

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          src={`/src/img/${id}.jpg`}
          alt={superhero}
          className='img-thumbnail'
        />
      </div>

      <div className='col-8'>
        <h3>{superhero}</h3>

        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego: </b>{alter_ego}</li>
          <li className='list-group-item'><b>Publisher: </b>{publisher}</li>
          <li className='list-group-item'><b>First Appearance: </b>{first_appearance}</li>
        </ul>

        <h5 className='mt-3'>Characters</h5>
        <p>{characters}</p>

        <button
          className='btn btn-outline-info'
          onClick={handleReturn}
        >
          Return
        </button>
      </div>
    </div>
  )
}
