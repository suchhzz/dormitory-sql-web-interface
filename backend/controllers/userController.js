export default createUser = (req, res, next) => {
    try {
        const { name, password } = req.body;

        if (!name || !password) {
            throw new Error('invalid values');
        }

        res.json({ message: 'user created',
                    data: { name, password }
         });
    }
    catch (e) {
        next(error);
    }
};