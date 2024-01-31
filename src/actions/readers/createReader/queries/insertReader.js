const { submitQuery, getInsertId } = require("~root/lib/database");

const insertReader = ({ name, genre }) => submitQuery`
    INSERT INTO readers(name, genre)
    VALUE(${name}, ${genre});
`;

module.exports = getInsertId(insertReader);
