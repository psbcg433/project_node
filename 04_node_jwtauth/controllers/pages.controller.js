export const dashboardPage = (req, res) => {
    try {
        console.log(req.user)
        res.status(200).render('dashboard');
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};


export const displayLoginPage = (req,res) =>
{
    try {
        res.status(200).render('login');
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

export const displayRegisterPage = (req,res) =>
    {
        try {
            res.status(200).render('register');
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
    }