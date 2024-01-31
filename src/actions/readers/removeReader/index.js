const deleteReaderById = require("./queries/deleteReader");

const removeReader = async ({ readerId }) => {
  const deletedReader = await deleteReaderById({
    readerId
  });
  return { deletedReader };
};

module.exports = removeReader;
