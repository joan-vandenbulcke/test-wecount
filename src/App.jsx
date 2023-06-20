import './App.scss';
import { BsCheckCircle } from 'react-icons/bs';
import { ImLink } from 'react-icons/im';
import { FaCommentDots } from 'react-icons/fa';

function App() {

  return (
    <>
      <div className='titre'>Test intégration WeCount - Joan Vandenbulcke</div>
      <div className='date'>20/06/2023</div>
      <div className='container'>
        <div className='tag'>User Interface</div>
        <h1 className='main__title'>Service Page Website</h1>
        <p className='main__description'>Make a page display about service for websites company with blue and red colors</p>
        <div className='details'>
          <div className='details__achievement'>
            <BsCheckCircle className='details__achievement--icon' />
            <div className='details__achievement--mark'>0/20</div>
          </div>
          <div className='details__user'>
            <div className='details__user--images'>
              <div className='details__user--image-container first__user'>
                <img src="/avatar1.svg" alt="" />
              </div>
              <div className='details__user--image-container second__user'>
                <img src="/avatar2.svg" alt="" />
              </div>
              <div className='details__user--image-container third__user'>
                <img src="/avatar3.svg" alt="" />
              </div>
            </div>
            <button className='details__user--button'>Invite</button>
          </div>
        </div>
        <div className='links'>
          <div className='attachment'>
            <div className='attachment__icon--background'>
              <ImLink className='attachment__icon' />
            </div>
            <img src="" alt="" />
            <div className='attachment__text'>4 Attachment</div>
          </div>
          <div className='separation'></div>
          <div className='comment'>
            <FaCommentDots />
            <div className='comment__text'>10 Comment</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
