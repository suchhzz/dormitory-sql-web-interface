export const insertQuery = (req, res) => {
    try {
        res.send('insert');
        // todo
    } catch (e) {
        res.send(e);
    }
};

export const selectQuery = (req, res) => {
    try {
        res.send('select');
        // todo
    } catch (e) {
        res.send(e);
    }
}