import constants from '../../constants';

const { message } = constants;

const getRoot = (req, res) => {
  res.status(200).send(message);
};

export default { getRoot };
