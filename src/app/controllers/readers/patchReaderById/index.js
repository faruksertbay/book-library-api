const handleAPIError = require("~root/utils/handleAPIError");
const modifyReaderById = require("~root/actions/readers/modifyReaderById");

const patchReaderById = async (req, res) => {
  const { readerId } = req.params;
  const { genre, name } = req.body;

  try {
    const { reader } = await modifyReaderById({
      readerId,
      genre,
      name
    });

    res.status(201).send({
      reader
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchReaderById;
