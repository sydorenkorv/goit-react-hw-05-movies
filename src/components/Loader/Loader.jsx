import { FidgetSpinner } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.overlay}>
      <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
        ballColors={['white', 'white', 'white']}
        backgroundColor="#f26739"
      />
    </div>
  );
};
