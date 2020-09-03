import React, { useContext, memo } from 'react';

import Button from '../Button';

import { AuthContext } from '../../context/AuthContext';
import { signOut } from '../../services/firebase';
import './styles.scss';

// --------------------------------------------------------------------------------------------------------------------

const Header = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <p>Welcome</p>

          <nav className="header__nav">
            <ul className="header__list">
              <Button
                type="button"
                variant="secondary"
                text="Sign Out"
                disabled={!currentUser}
                onClick={signOut}
              />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
