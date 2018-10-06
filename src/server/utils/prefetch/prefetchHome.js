import getTranslations from '../../getTranslations';
import handleRender from '../render/home/handleRender';

const prefetchHome = async (req, res, next) => {
  try {
    const messages = getTranslations(req.params.lang);
    const initialState = {
      appName: 'Galileo',
      messages,
    };
    handleRender(req, res, initialState, messages);
  } catch (err) {
    next(err);
  }
}

export default prefetchHome;
