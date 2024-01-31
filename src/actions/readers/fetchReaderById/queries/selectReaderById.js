const { submitQuery, camelKeys } = require("~root/lib/database");

const selectReaderById = ({ readerId }) => submitQuery`
    SELECT *
    FROM readers
    WHERE reader_id= ${readerId}
    `;

module.exports = camelKeys(selectReaderById);
